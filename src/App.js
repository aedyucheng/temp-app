import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ToolBar from './components/Navigation/ToolBar/ToolBar';
import SideNav from './components/Navigation/SideNav/SideNav'
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Products from './containers/Products/Products';

import classes from './App.module.css';

class App extends Component {
  state = {
    showSideNav: false
  }

  toggleSideDrawer = () => {
    this.setState({ showSideNav: !this.state.showSideNav });
  }

  render() {
    return (
      <div className={classes.App}>
        <header>
          <ToolBar toggleSideNav={this.toggleSideDrawer}/>
          <SideNav show={this.state.showSideNav} toggleSideNav={this.toggleSideDrawer}/>
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
}

export default App;
