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
  ApplyStatus,
  Error
} from './components';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Global/>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/applystatus" component={ApplyStatus} />
        <Route path="/join" component={JoinContainer} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
 