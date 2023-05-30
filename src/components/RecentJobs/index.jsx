import { useState } from 'react';
import { Link } from 'react-router-dom';

import JobElement from './JobElement';

function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          {loading ? <div className="col-md-12">Loading...</div> : null}
          {jobs.map((job) => (
            <JobElement key={job.id} job={job} />
          ))}
        </div>

        <br />

        <br />
        <p className="text-center">
          <Link className="btn btn-info" to="/jobs">
            Browse all jobs
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RecentJobs;
