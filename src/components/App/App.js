import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import './Resets.css';
import styles from './App.css';

const App = () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <div className={styles.app}>
          <ScrollToTop />
          <Navbar />
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeave={false}
          >
            <Switch key={location.key} location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/experience" component={Experience} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransitionGroup>
          <Footer />
        </div>
      )}
    />
  </Router>
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

export default App;
