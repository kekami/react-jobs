import React from 'react';
import JobHeader from '../../presentational/JobHeader/JobHeader';
import JobDetails from '../../presentational/JobDetails/JobDetails';
import JobNav from '../../presentational/JobNav/JobNav';
import { RoleSummaryFooter } from '../../presentational/RoleSummary/RoleSummary';
import { Wrapper, Details } from './styles.js';
import data from '../../../data.json';

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
  navItems.push(`About ${job.companyName}`);
  return navItems
}

class JobDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobData: null,
      currentItem: "description",
      roleSummaryFooterOffsetTop: null
    }
  }

  componentWillMount() {
    let id = this.props.hash;
    if (id !== undefined) { 
      if (id[0] === '#') { id = id.slice(1, id.length); }; 
      
      getData(id).then((jobData) => {
        this.setState({
         jobData: jobData,
         newData: true
        })
      })
    };   
  }
  
  componentDidUpdate() {
    if (this.state.newData) {
      this.setState({
        roleSummaryBottomOffsetTop: this.roleSummaryFooterRef.offsetTop,
        jobNavHeight: this.jobNavRef.clientHeight,
        newData: false
      })
    }   
  }

  render() {    
    const navItems = validNavItemList(this.state.jobData);
    const imageUrl = this.state.jobData ? this.state.jobData.image : "";
    const job = this.state.jobData ? this.state.jobData : {};

    return (
      <Wrapper ref={ el => this.pageRef = el} >   
        <JobHeader imageUrl={imageUrl}/>
        <Details>
          <JobDetails 
            job={job}  
            items={navItems} 
            currentItem={this.state.currentItem}
          />
          <JobNav 
            items={navItems} 
            currentItem={this.state.currentItem}
            getRef={ el => this.jobNavRef = el } 
          />
        </Details>
        <RoleSummaryFooter 
          ref={ el => this.roleSummaryFooterRef = el }
          title={job.title}
          companyName={job.companyName}
          deadline={job.deadline} />
      </Wrapper>
    )
  }
}

export default JobDetailsContainer;
