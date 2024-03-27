import React from 'react';

function About() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        maxWidth: '700px',
        margin: '40px auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ fontSize: '32px', color: '#343a40' }}>About Me</h1>
      <p
        style={{
          fontSize: '18px',
          color: '#495057',
          lineHeight: '1.6',
        }}
      >
        I attended a coding bootcamp to sharpen my skills as a software developer and learn best practices for new technologies. I got into
        software development because you constantly learn new concepts and new technologies, and the problem-solving aspect of software
        development really intrigues me.
      </p>
    </div>
  );
}

export default About;
