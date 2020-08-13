import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import {
  ConnectIntroduction,
  ConnectChoiceType,
  ConnectInfo,
  MainContainer,
  JoinContainer,
  HeaderContainer,
  ConnectGrade,
  PreviewContainer,
} from './container';
import { Footer, ApplyStatus, Mypage, Document, Error } from './components';
import './';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/applystatus' component={ApplyStatus} />
        <Route path='/join' component={JoinContainer} />
        <Route path='/grade' component={ConnectGrade} />
        <Route exact path='/mypage' component={Mypage} />
        <Route path='/mypage/document' component={Document} />
        <Route path='/preview' component={PreviewContainer} />
        <Route path='/Introduction' render={() => <ConnectIntroduction />} />
        <Route path='/Type' render={() => <ConnectChoiceType />} />
        <Route path='/Info' render={() => <ConnectInfo />} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
