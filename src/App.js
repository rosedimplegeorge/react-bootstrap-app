import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { noMatch } from './noMatch';
import { Layout } from './components/layout'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path = "/" component= {Home} />
              <Route path = "/about" component= {About} />
              <Route path = "/contact" component={Contact} />
              <Route component = {noMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
