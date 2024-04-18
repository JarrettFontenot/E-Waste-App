// Routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home';
import App from './App';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/app" component={App} />
      {/* Add other routes here */}
    </>
  );
};

export default Routes;
