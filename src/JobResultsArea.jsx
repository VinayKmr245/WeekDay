import React from 'react';
import JobCard from "./JobCard";
import './JobResultsArea.css';

const JobResultsArea = ({jobList}) => {
    console.log(jobList, "jobList")
  return (
    <div className='job-results'>
      <JobCard data={jobList[0]}/>
    </div>
  )
}

export default JobResultsArea