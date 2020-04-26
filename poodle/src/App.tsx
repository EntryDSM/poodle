import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  MainContainer,
  JoinContainer,
  HeaderContainer,
} from './container';
import { Global } from './styles/common'
import { 
  Footer,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Global/>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/join" component={JoinContainer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
 