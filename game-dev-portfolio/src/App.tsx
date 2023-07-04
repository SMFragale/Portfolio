import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import Portfolio from './Portfolio';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Container>
        <header className="header">
          <h1>Sebastian Molano - Game Portfolio</h1>
          <div className="contact-info">
            <a href="mailto:sebastian@example.com" target='_blank'>
              <Icon name="mail" />
              smolanof@outlook.com
            </a>
            <a href="tel:+15617249143" target='_blank'>
              <Icon name="phone" />
              +1 (561)-724-9143
            </a>
            <a href="https://www.linkedin.com/in/sebastian-molano-7434b2205/" target='_blank'>
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>
        </header>
        <Portfolio />
      </Container>
    </div>
  );
};

export default App;
