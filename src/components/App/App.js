import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.css';

/**
 * App wrapper react component
 * @return {jsx}
 */
function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default App;
