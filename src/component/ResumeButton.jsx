import React from 'react';

const ResumeButton = ({resumeReady=true}) => {
   if(!resumeReady) {
    return <button className="btn btn-disabled">Resume coming soon</button>
  }
  return <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
};

export default ResumeButton;