import React from 'react';
import '../styles.css';
import Header from '../components/Header';

function AboutUs() {
  return (
    <div className='About-Page'>
    <Header />
    <div className='About-First'>
      <div className='First-Text'>
        <h1>What is e-waste?</h1>
        <p>Test</p>
      </div>
      <div className='First-Image'></div>
    </div>
    <div class="thin-white-line"></div>
    <div className='About-Second'>
      <div className='Second-Image'></div>
      <div className='Second-Text'>
        <h1>What is the problem?</h1>
        <p>Test</p>
      </div>
    </div>
    <div class="thin-white-line"></div>
    <div className='About-Third'>
      <div className='Third-Text'>
        <h1>How to help!</h1>
        <p>Test</p>
      </div>
      <div className='Third-Image'></div>
    </div>
    </div>
  );
}

export default AboutUs;
