import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import JobHeader from '../../presentational/JobHeader/JobHeader';
import JobDetails from '../../presentational/JobDetails/JobDetails';
import JobNav from '../../presentational/JobNav/JobNav';
import { RoleSummaryFooter } from '../../presentational/RoleSummary/RoleSummary';
import { Wrapper, Details } from './styles';

export function debounce(func, wait) {
  let timeout;
  return function debouceInvoked(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export function getData(requiredId) {
  return new Promise ((resolve, reject) => {
    axios('/api/jobs')
      .then(response => response.data)
      .then((data) => {
        const jobs = data.jobs;
        const jobData = jobs.filter(job => job._id === requiredId);
        resolve(jobData[0]);
      });
  })
}

export function validNavItemList(job) {
  const navItems = [['responsibilities', 0], ['requirements', 0], ['compensation', 0], ['jobDescription', 0]];
  if (!job) { return navItems; }
  for (let i = 0; i < navItems.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(job, navItems[i][0])) {
      navItems.splice(i, 1);
      i -= 1;
    }
  }
  navItems.unshift(['role summary', 0]);
  navItems.push(['about', 0]);
  return navItems;
}

class JobDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.componentRefs = [];

    this.state = {
      jobData: null,
      navItems: [],
      currentItem: 'role summary',
      fixedRoleSummary: false,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      jobNavFixed: false,
      jobNavBottom: false,
      jobNavHeight: null,
      jobNavTop: null,
      jobNavLeft: null,
    };

    this.updateRefState = this.updateRefState.bind(this);
    this.updateRefStateDebounced = debounce(this.updateRefState, 10);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleResizeDebounced = debounce(this.handleResize, 10);
    this.setRefDataIntoState = this.setRefDataIntoState.bind(this);
    this.storeRef = this.storeRef.bind(this);
    this.jobNavSelect = this.jobNavSelect.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    let id = this.props.hash;
    if (id !== undefined) {
      if (id[0] === '#') { id = id.slice(1, id.length); }
      getData(id).then((jobData) => {
        this.setState({
          jobData,
          navItems: validNavItemList(jobData),
        }, this.setRefDataIntoState);
      });
    }
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResizeDebounced);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResizeDebounced);
  }


  setRefDataIntoState() {
    const boundingRectJobNav = this.jobNavRef.getBoundingClientRect();
    const boundingRectRoleSummaryFooter = this.roleSummaryFooterRef.getBoundingClientRect();

    const scroll = window.scrollY;

    this.setState({
      roleSummaryFooterBottom: boundingRectRoleSummaryFooter.bottom + scroll,
      roleSummaryFooterHeight: boundingRectRoleSummaryFooter.height,
      jobNavHeight: boundingRectJobNav.height,
      jobNavTop: boundingRectJobNav.top + scroll,
      jobNavLeft: boundingRectJobNav.left,
    }, this.setScrollMeasurementsIntoState);
  }

  setScrollMeasurementsIntoState() {
    const jobNavFixedHeightOffsetTop = (this.state.windowHeight - this.state.jobNavHeight) / 2;

    this.setState({
      minFooterFixedHeight: this.state.windowHeight,
      maxFooterFixedHeight:
        this.state.roleSummaryFooterBottom - this.state.windowHeight,
      minJobNavFixedHeight: this.state.jobNavTop - jobNavFixedHeightOffsetTop,
      maxJobNavFixedHeight:
        this.state.roleSummaryFooterBottom
        - this.state.roleSummaryFooterHeight
        - this.state.jobNavHeight
        - jobNavFixedHeightOffsetTop,
    }, this.handleScroll);
  }

  handleScroll() {
    const scrollHeight = window.scrollY;
    if (this.state.jobData === null) { return; }

    function updateRoleSummaryFooter() {
      if (scrollHeight > this.state.minFooterFixedHeight
        && scrollHeight < this.state.maxFooterFixedHeight) {
        if (this.state.fixedRoleSummary === false) {
          this.setState({
            fixedRoleSummary: true,
          });
        }
      } else if (this.state.fixedRoleSummary === true) {
        this.setState({
          fixedRoleSummary: false,
        });
      }
    }

    function updateJobNavPlacement() {
      if (scrollHeight < this.state.minJobNavFixedHeight) {
        if (this.state.jobNavFixed === true) {
          this.setState({
            jobNavFixed: false,
            jobNavBottom: false,
          });
        }
        return;
      }

      if (scrollHeight > this.state.minJobNavFixedHeight
        && scrollHeight < this.state.maxJobNavFixedHeight) {
        if (this.state.jobNavFixed === false) {
          this.setState({
            jobNavFixed: true,
            jobNavBottom: false,
          });
        }
      } else if (this.state.jobNavFixed === true) {
        this.setState({
          jobNavFixed: false,
          jobNavBottom: true,
        });
      }
    }

    const updateComponentInView = () => {
      let lessThan = null;
      const navItems = this.state.navItems;
      for (let i = 0; i < navItems.length; i += 1) {
        if (scrollHeight + 100 < navItems[i][1]) {
          lessThan = i;
          break;
        }
      }
      lessThan = lessThan || navItems.length;
      const inView = navItems[lessThan - 1][0];
      if (this.state.currentItem !== inView) {
        this.setState({ currentItem: inView });
      }
    };

    updateRoleSummaryFooter.call(this);
    updateJobNavPlacement.call(this);
    updateComponentInView();
  }

  handleResize() {
    if (this.state.jobData === null) { return; }

    this.setState({
      jobNavFixed: false,
      fixedRoleSummary: false,
    }, this.setRefDataIntoState);
  }

  jobNavSelect(e) {
    const selected = e.target.getAttribute('data-item');

    if (selected === this.state.currentItem) { return; }
    this.setState({
      currentItem: selected,
    }, this.updateScrollPosition);
  }

  updateScrollPosition() {
    const currentItemInView = this.state.navItems.filter(item =>
      item[0] === this.state.currentItem);
    const itemScrollPosition = currentItemInView[0][1] - 95;
    if (window.scrollY !== itemScrollPosition) {
      window.scrollTo(0, itemScrollPosition);
    }
  }

  updateRefState() {
    this.setState({ navItems: this.componentRefs });
  }

  storeRef(ref, component) {
    if (ref === null) { return; }
    let updated = false;

    if (this.componentRefs.length === 0) { this.componentRefs = this.state.navItems; }

    this.componentRefs = this.componentRefs.map((item) => {
      if (item[0] === component && item[1] === 0) {
        const scroll = window.scrollY;
        const top = ref.getBoundingClientRect().top + scroll;
        updated = true;
        return [item[0], top];
      }
      return item;
    });

    if (updated) {
      this.updateRefStateDebounced();
    }
  }

  render() {
    const imageUrl = this.state.jobData ? this.state.jobData.image : null;
    const job = this.state.jobData ? this.state.jobData : {};
    const companyName = job ? job.companyName : null;

    const LoadingPage = <div />;

    return (
      <Wrapper
        ref={(el) => { this.pageRef = el; }}
      >
        {!this.state.jobData ? LoadingPage : (
          <div>
            <JobHeader imageUrl={imageUrl} />
            <Details>
              <JobDetails
                job={job}
                items={this.state.navItems}
                currentItem={this.state.currentItem}
                storeRef={this.storeRef}
              />
              <JobNav
                items={this.state.navItems}
                currentItem={this.state.currentItem}
                companyName={companyName}
                getRef={(el) => { this.jobNavRef = el; }}

                fixed={this.state.jobNavFixed}
                bottom={this.state.jobNavBottom}
                top={(this.state.windowHeight - this.state.jobNavHeight) / 2}
                left={this.state.jobNavLeft}

                handleClick={this.jobNavSelect}
              />
            </Details>
            <RoleSummaryFooter
              getRef={(el) => { this.roleSummaryFooterRef = el; }}
              fixed={this.state.fixedRoleSummary}
              title={job.title}
              companyName={job.companyName}
              deadline={job.deadline}
            />
          </div>

        )}
      </Wrapper>
    );
  }
}

JobDetailsContainer.propTypes = {
  hash: PropTypes.string.isRequired,
};

export default JobDetailsContainer;
