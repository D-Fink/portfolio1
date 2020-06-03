import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import Resume from './components/Resume';
import Artifacts from './components/Artifacts';
import Nav from './components/Nav';

const App = () => {
  return(
    <div>
      <Nav />
      <Route exact path='/' component={Main} />
      <Route path='/about' component={Resume} />
      <Route path='/portfolio' component={Artifacts} />
    </div>
  )
}

export default App;
