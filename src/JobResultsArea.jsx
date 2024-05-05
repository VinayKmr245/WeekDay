import React from 'react';
import './JobResultsArea.css';

const JobResultsArea = ({data}) => {
    console.log(data, "data")
  return (
    <div className='job-results'>
        {
            // && data.jdList.map((item, index) => {
              //  return <JobCard key={index} data={item} />
            //})
        }
    </div>
  )
}

export default JobResultsArea