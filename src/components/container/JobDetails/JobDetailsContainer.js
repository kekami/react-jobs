import React from 'react';
import PropTypes from 'prop-types';
import JobHeader from '../../presentational/JobHeader/JobHeader';
import JobDetails from '../../presentational/JobDetails/JobDetails';
import JobNav from '../../presentational/JobNav/JobNav';
import { RoleSummaryFooter } from '../../presentational/RoleSummary/RoleSummary';
import { Wrapper, Details } from './styles';
import data from '../../../data.json';

// animate appearance of Role Summary Footer
// 'about' to have name of company #
// adjust to original sizing
// adjust page on resize #
// connect to dynamic hash id in routing
// tests

function debounce(func) {
  let timeout;
  return function debouceInvoked(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), 10);
  };
}

export function getData(requiredId) {
  return new Promise((resolve) => {
    const jobs = data.jobs;
    const jobData = jobs.filter(job => job.id === requiredId);
    resolve(jobData[0]);
  });
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
      scrollHeight: 0,
      fixedRoleSummary: false,
      roleSummaryFooterOffsetTop: null,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      jobNavFixed: false,
      jobNavHeight: null,
      jobNavTop: null,
      jobNavLeft: null,
    };

    this.updateRefState = this.updateRefState.bind(this);
    this.updateRefStateDebounced = debounce(this.updateRefState);
    this.handleScroll = this.handleScroll.bind(this);
    this.storeRef = this.storeRef.bind(this);
    this.jobNavSelect = this.jobNavSelect.bind(this);
  }

  componentWillMount() {
    let id = this.props.hash;
    if (id !== undefined) {
      if (id[0] === '#') { id = id.slice(1, id.length); }
      getData(id).then((jobData) => {
        this.setState({
          jobData,
          newData: true,
          navItems: validNavItemList(jobData),
        }, this.setRefDataIntoState);
      });
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setRefDataIntoState() {
    const boundingRectJobNav = this.jobNavRef.getBoundingClientRect();
    const boundingRectRoleSummaryFooter = this.roleSummaryFooterRef.getBoundingClientRect();

    const scroll = window.scrollY;

    this.setState({
      roleSummaryFooterTop: boundingRectRoleSummaryFooter.top + scroll,
      roleSummaryFooterHeight: boundingRectRoleSummaryFooter.height,
      jobNavHeight: boundingRectJobNav.height,
      jobNavTop: boundingRectJobNav.top + scroll,
      jobNavLeft: boundingRectJobNav.left,
      newData: false,
    }, this.setScrollMeasurementsIntoState);
  }

  setScrollMeasurementsIntoState() {
    const jobNavFixedHeightOffsetTop = (this.state.windowHeight - this.state.jobNavHeight) / 2;

    this.setState({
      minFooterFixedHeight: this.state.windowHeight,
      maxFooterFixedHeight:
        (this.state.roleSummaryFooterTop + this.state.roleSummaryFooterHeight)
        - this.state.windowHeight,
      minJobNavFixedHeight: this.state.jobNavTop - jobNavFixedHeightOffsetTop,
      maxJobNavFixedHeight:
        this.state.roleSummaryFooterTop
        - this.state.jobNavHeight
        - jobNavFixedHeightOffsetTop,
    });
  }

  handleScroll(e) {
    const scrollHeight = e.target.scrollingElement.scrollTop;

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

  jobNavSelect(e) {
    const selected = e.target.getAttribute('data-item');

    if (selected === this.state.currentItem) { return; }
    this.setState({
      currentItem: selected,
    });
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
    const imageUrl = this.state.jobData ? this.state.jobData.image : '';
    const job = this.state.jobData ? this.state.jobData : {};
    const companyName = job ? job.companyName : '';

    return (
      <Wrapper
        ref={(el) => { this.pageRef = el; }}
      >
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
      </Wrapper>
    );
  }
}

JobDetailsContainer.propTypes = {
  hash: PropTypes.number.isRequired,
};

export default JobDetailsContainer;
