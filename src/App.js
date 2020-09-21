import React, { useState } from 'react';
import './App.scss';
import "bulma"

function App() {

  const [ctaAnim, setCtaAnim] = useState('')


  return (
    <div className="App">
      <section className="section">
        <div className="container app-cont">
          <div className={`sign-up ${ctaAnim}`}>
            Sign Up
          </div>
          <div className='alrdy'>
            already have a username?
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
