import React from 'react';
import JobHeader from '../../presentational/JobHeader/JobHeader';
import JobDetails from '../../presentational/JobDetails/JobDetails';
import JobNav from '../../presentational/JobNav/JobNav';
import ApplyNow from '../../presentational/ApplyNow/ApplyNow';
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
  let navItems = ["responsibilities", "requirements", "compensation", "job description"];

  if (job) {
    for (let i = 0; i < navItems.length; i++) {
      if (!job.hasOwnProperty(navItems[i])) { 
        navItems.splice(i, 1);
        i--;
      }
    }
  }
  navItems.unshift("role summary");
  navItems.push("local information");
  return navItems
}

class JobDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobData: null,
      currentItem: "description",
      applyNowOffsetTop: null
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
        applyNowOffsetTop: this.applyNowRef.offsetTop,
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
      <Wrapper>   
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
        <ApplyNow 
          getRef={ el => this.applyNowRef = el } />
      </Wrapper>
    )
  }
}

export default JobDetailsContainer;
