import React from 'react';
import Project from './Project';
import justAnotherTextEditorSS from '../assets/justAnotherTextEditorSS.png';
import socialNetworkApiSS from '../assets/socialNetworkApiSS.png';
import eCommerceApiSS from '../assets/eCommerceApiSS.png';
import employeeTrackerSS from '../assets/employeeTrackerSS.png';
import expressNoteTakerSS from '../assets/expressNoteTakerSS.png';
import weatherDashboardSS from '../assets/weatherDashboardSS.png';

const Portfolio = () => {
  return (
    <section id='portfolio' style={{ width: '100%', padding: '20px' }}>
      <div
        className='projects'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // Creates two columns
          gap: '20px', // Adjust gap between projects as needed
          maxWidth: '1200px', // Optional: limits the max width of the grid
          margin: '0 auto', // Centers the grid container if there's a max width
        }}
      >
        <Project
          screenshot={justAnotherTextEditorSS}
          title='Just Another Text Editor'
          githubLink='https://github.com/javierGuerraDevelop/just-another-text-editor'
        />
        <Project
          screenshot={socialNetworkApiSS}
          title='Social Network API'
          githubLink='https://github.com/javierGuerraDevelop/social-network-api'
        />
        <Project screenshot={eCommerceApiSS} title='Ecommerce API' githubLink='https://github.com/javierGuerraDevelop/ecommerceApi' />
        <Project
          screenshot={employeeTrackerSS}
          title='Employee Tracker'
          githubLink='https://github.com/javierGuerraDevelop/employeeTracker'
        />
        <Project
          screenshot={expressNoteTakerSS}
          title='Express Note Taker'
          githubLink='https://github.com/javierGuerraDevelop/expressNoteTaker'
        />
        <Project
          screenshot={weatherDashboardSS}
          title='Weather Dashboard'
          githubLink='https://github.com/javierGuerraDevelop/weatherDashboard'
        />
      </div>
    </section>
  );
};

export default Portfolio;
