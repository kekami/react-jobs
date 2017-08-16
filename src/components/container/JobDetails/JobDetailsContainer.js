import React from 'react';
import JobHeader from '../../presentational/JobHeader/JobHeader';
import JobDetails from '../../presentational/JobDetails/JobDetails';
import JobNav from '../../presentational/JobNav/JobNav';
import { RoleSummaryFooter } from '../../presentational/RoleSummary/RoleSummary';
import { Wrapper, Details } from './styles.js';
import data from '../../../data.json';

// animate appearance of Role Summary Footer

function debounce(func) {
  let timeout
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), 10)
  }
}


export function getData(requiredId) {
  return new Promise ((resolve, reject) => {
    const jobs = data.jobs;
    const jobData = jobs.filter((job) => job.id === requiredId);
    resolve (jobData[0])
  })
}

export function validNavItemList(job) {
  let navItems = ["responsibilities", "requirements", "compensation", "jobDescription"];
 
  if (!job) { return navItems }
  for (let i = 0; i < navItems.length; i++) {
    if (!job.hasOwnProperty(navItems[i])) { 
      navItems.splice(i, 1);
      i--;
    }
  }
  
  navItems.unshift("role summary");
  navItems.push(`about`);
  return navItems
}

class JobDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.componentRefs = [];

    this.state = {
      jobData: null,
      navItems: [],
      currentItem: "requirements",
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
    this.updateRefState = this.updateRefState.bind(this)
    this.updateRefStateDebounced = debounce(this.updateRefState)
  }

  componentWillMount() {
    let id = this.props.hash;
    if (id !== undefined) { 
      if (id[0] === '#') { id = id.slice(1, id.length); }; 
      
      getData(id).then((jobData) => {
        this.setState({
         jobData: jobData,
         newData: true,
         navItems: validNavItemList(jobData),             
        })
      })
    }; 
    
    window.addEventListener('scroll', this.handleScroll.bind(this))
  };
  
  componentDidUpdate() {
    if (this.state.newData) {
      
      const boundingRectJobNav = this.jobNavRef.getBoundingClientRect();
      const boundingRectRoleSummaryFooter = this.roleSummaryFooterRef.getBoundingClientRect();

      const scroll = window.scrollY;

      this.setState({
        roleSummaryFooterTop: boundingRectRoleSummaryFooter.top + scroll,
        roleSummaryFooterHeight: boundingRectRoleSummaryFooter.height,
        jobNavHeight: boundingRectJobNav.height,
        jobNavTop: boundingRectJobNav.top + scroll,
        jobNavLeft: boundingRectJobNav.left,
        newData: false
      })
    }   
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    const scrollHeight = e.target.scrollingElement.scrollTop;    
    const minFooterFixedHeight = this.state.windowHeight;
    const maxFooterFixedHeight = this.state.roleSummaryFooterTop + this.state.roleSummaryFooterHeight - this.state.windowHeight;
    const jobNavFixedHeightOffsetTop = (this.state.windowHeight - this.state.jobNavHeight) / 2;
    const minJobNavFixedHeight = this.state.jobNavTop - jobNavFixedHeightOffsetTop;
    const maxJobNavFixedHeight = this.state.roleSummaryFooterTop - this.state.jobNavHeight - jobNavFixedHeightOffsetTop;

    if (scrollHeight > minFooterFixedHeight && scrollHeight < maxFooterFixedHeight) {
      if (this.state.fixedRoleSummary === false) {
        this.setState({
          fixedRoleSummary: true,
         })
      }
    } else {
      if (this.state.fixedRoleSummary === true) {
        this.setState({
         fixedRoleSummary: false
        })
      }
    }

    if (scrollHeight < minJobNavFixedHeight) {
      if (this.state.jobNavFixed === true) {
        this.setState({
          jobNavFixed: false,
          jobNavBottom: false,
        })
      }
      return      
    }

    if (scrollHeight > minJobNavFixedHeight && scrollHeight < maxJobNavFixedHeight) {
      if (this.state.jobNavFixed === false) {
        this.setState({
          jobNavFixed: true,
          jobNavBottom: false,
        })
      }
    } else {
      if (this.state.jobNavFixed === true) {
        this.setState({
          jobNavFixed: false,
          jobNavBottom: true,
        })
      }
    }
  }

  jobNavSelect(e) {
    console.log(e.target.getAttribute('data-item'))
  }

  updateRefState() {
    this.setState({navItems: this.componentRefs})
  }

  storeRef(ref, component) {
    if(ref === null) { return }
    let updated = false;

    if(this.componentRefs.length == 0) { this.componentRefs = this.state.navItems }
    
    this.componentRefs = this.componentRefs.map( item => {
      if (typeof(item) === 'string' && item === component) {
        const scroll = window.scrollY;
        const top = ref.getBoundingClientRect().top + scroll;
        updated = true;
        return [item, top]
      }
      return item;
    })

    if (updated) {
      this.updateRefStateDebounced()
    }
 } 
  
  

  render() {    
    const imageUrl = this.state.jobData ? this.state.jobData.image : "";
    const job = this.state.jobData ? this.state.jobData : {};

    return (
      <Wrapper 
        ref={ el => this.pageRef = el}
        >   
        <JobHeader imageUrl={imageUrl}/>
        <Details>
          <JobDetails 
            job={job}  
            items={this.state.navItems} 
            currentItem={this.state.currentItem}
            storeRef={ this.storeRef.bind(this) }
          />
          <JobNav 
            items={this.state.navItems} 
            currentItem={this.state.currentItem}
            getRef={ el => this.jobNavRef = el } 

            fixed={ this.state.jobNavFixed }
            bottom={ this.state.jobNavBottom }
            top={ (this.state.windowHeight - this.state.jobNavHeight) / 2 }
            left= { this.state.jobNavLeft }

            handleClick={this.jobNavSelect.bind(this) }
          />
        </Details>
        <RoleSummaryFooter 
          getRef={ el => this.roleSummaryFooterRef = el }
          fixed={this.state.fixedRoleSummary}
          title={job.title}
          companyName={job.companyName}
          deadline={job.deadline} />
      </Wrapper>
    )
  }
}

export default JobDetailsContainer;
