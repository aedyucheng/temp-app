import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SideNav from './components/Navigation/SideNav/SideNav'
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Products from './containers/Products/Products';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <header>
        <SideNav />
      </header>

      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
