import React from 'react';

const Project = ({ screenshot, title, githubLink }) => {
  return (
    <>
      <a href={githubLink} target='_blank' rel='noopener noreferrer'>
        <img src={screenshot} alt={title} style={{ cursor: 'pointer', borderRadius: '20px' }} />
      </a>
      <h3>{title}</h3>
    </>
  );
};

export default Project;
