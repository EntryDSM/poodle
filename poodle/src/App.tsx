import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderContainer from './container/common/HeaderContainer/HeaderContainer';
import { Global } from './styles/common'

function App() {
  return (
    <BrowserRouter>
      <Global/>
      <Switch>
        <Route path="/" component={HeaderContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
