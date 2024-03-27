import React from 'react';

function Contact() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#f0f0f0',
        borderRadius: '15px',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
      <h1>Contact</h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
        Email Address:{' '}
        <a href='mailto:javierguerradevelop@gmail.com' style={{ textDecoration: 'none', color: '#007bff' }}>
          javierguerradevelop@gmail.com
        </a>
      </p>
      <p style={{ fontSize: '18px', color: '#333' }}>
        Github:{' '}
        <a
          href='https://github.com/javierGuerraDevelop'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: 'none', color: '#007bff' }}
        >
          javierGuerraDevelop
        </a>
      </p>
    </div>
  );
}

export default Contact;
