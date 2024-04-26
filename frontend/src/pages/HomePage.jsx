import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';


function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="backgroundImage"></div>
      <div className="secondPart">
        <div className="secondBox">
          <h1>How is e-waste a threat?</h1>
          <p>Electronic devices contain toxic materials such as lead, mercury, cadmium, and brominated flame retardants.
          When improperly disposed of, these substances can get into soil and water, which contaminates ecosystems and harming both human and animal health.</p>
          <p> E-waste is a global issue, with vast amounts generated worldwide and often shipped to developing countries with lax regulations for processing and disposal. 
          This can result in environmental and health burdens disproportionately affecting vulnerable communities in these regions.</p>
        </div>
        <div className="secondImage"></div>
      </div>
    </div>
  );
}

export default Home;