import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Lineup from './components/Lineup';
import Restauration from './components/Restauration';
import Hebergement from './components/Hebergement';
import Contact from './components/Contact';
import Information from './components/Information';
import Billets from './components/Billets';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/lineup" component={Lineup} />
      <Route exact path="/restauration" component={Restauration} />
      <Route exact path="/hebergement" component={Hebergement} />
      <Route exact path="/billeterie" component={Billets} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/info" component={Information} />
    </Router>
  );
}

export default App;
