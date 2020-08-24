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
  MypageContainer,
} from './container';
import { Footer, ApplyStatus, Document, Error } from './components';
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
        <Route exact path='/mypage' component={MypageContainer} />
        <Route path='/mypage/document' component={Document} />
        <Route path='/preview' component={PreviewContainer} />
        <Route path='/Introduction' component={ConnectIntroduction} />
        <Route path='/Type' component={ConnectChoiceType} />
        <Route path='/Info' component={ConnectInfo} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
