import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  HeaderContainer,
  JoinContainer
} from './container';
import { Global } from './styles/common'

function App() {
  return (
    <BrowserRouter>
      <Global/>
      <Switch>
        {/* <Route path="/" component={HeaderContainer} /> */}
        <Route path="/join" component={JoinContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
 