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
  Mypage,
  Document,
  Error
} from './components';
import './';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Global/>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/applystatus" component={ApplyStatus} />
        <Route path="/join" component={JoinContainer} />
        <Route exact path="/mypage" component={Mypage} />
        <Route path="/mypage/document" component={Document} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
 