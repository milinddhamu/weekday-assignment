import React from 'react'
import "./JobListings.css"
function JobListings() {
  return (
    <div className="job-listings-wrapper">
      <div className="job-listings-grid">
        {Array.from({length:12}).map((_,i)=>(
          <div key={i+"job-card"} className="job-card">
            Job
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListings