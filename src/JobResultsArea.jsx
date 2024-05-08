import React from 'react';
import JobCard from "./JobCard";
import './JobResultsArea.css';

const JobResultsArea = ({jobList}) => {
    console.log(jobList, "jobList")
  return (
    <div className='job-results'>
      {
        jobList?.map((job, index) => (
          <JobCard key={index} data={job} />
        ))
      }
    </div>
  )
}

export default JobResultsArea