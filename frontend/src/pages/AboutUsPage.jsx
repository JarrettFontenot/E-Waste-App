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
        <p>E-waste, or electronic waste, encompasses a broad spectrum of discarded electronic devices and equipment, ranging from smartphones to household appliances. 
        In our era of rapid technological advancement, the lifespan of electronic gadgets continues to shorten, contributing to the exponential growth of this waste stream. 
        This surge in e-waste poses significant environmental and health challenges, as discarded electronics often contain hazardous materials such as lead, mercury, and cadmium. 
        Addressing the complexities of e-waste requires a comprehensive approach that reevaluates our consumption patterns and promotes sustainable solutions for electronic disposal and recycling.</p>
      </div>
      <div className='First-Image'></div>
    </div>
    <div class="thin-white-line"></div>
    <div className='About-Second'>
      <div className='Second-Image'></div>
      <div className='Second-Text'>
        <h1>What is the problem?</h1>
        <p>E-waste presents numerous environmental and health challenges. 
        Electronic devices contain toxic components such as lead, mercury, cadmium, and brominated flame retardants. 
        When improperly handled or disposed of, these materials can contaminate soil, air, and water, posing risks to ecosystems and human health. 
        Moreover, the sheer volume of e-waste generated worldwide strains waste management systems and contributes to pollution. 
        Additionally, the disposal of electronics without proper recycling leads to the depletion of valuable resources and exposes workers to health hazards during informal recycling processes.</p>
      </div>
    </div>
    <div class="thin-white-line"></div>
    <div className='About-Third'>
      <div className='Third-Text'>
        <h1>How to help!</h1>
        <p>Mitigating the e-waste problem requires collective action. 
        Individuals and organizations can contribute by reducing, reusing, and recycling electronic devices. 
        Conscious consumption choices, such as opting for durable and repairable electronics, can help reduce e-waste. 
        Extending the lifespan of devices through donation, resale, or refurbishment promotes reuse. 
        Proper recycling of e-waste through certified facilities ensures that valuable materials are recovered while minimizing environmental and health risks. 
        Advocating for better e-waste management policies and educating communities about the impacts of e-waste are also essential steps towards a more sustainable approach to electronic consumption and disposal.</p>
      </div>
      <div className='Third-Image'></div>
    </div>
    </div>
  );
}

export default AboutUs;
