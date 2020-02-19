import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer.js';
import List from '../List/ListContainer';
import Info from '../Info/Info.js';
import Faq from '../Faq/Faq.js';
import MainLayout from '../MainLayout/MainLayout.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/Faq" component={Faq} />
        <Route exact path="/search/..." component={Faq} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>);

export default App;