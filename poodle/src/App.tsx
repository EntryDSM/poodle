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
import { Footer, ApplyStatus, Error } from './components';
import './';
import Maltese from 'entry-maltese';

function App() {
  const token = localStorage.getItem('accessToken');
  const isLogin = token !== null ? true : false;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeaderContainer />
      <Maltese isLogin={isLogin} token={token !== null ? token : ''} />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/applystatus' component={ApplyStatus} />
        <Route path='/join' component={JoinContainer} />
        <Route path='/grade' component={ConnectGrade} />
        <Route exact path='/mypage' component={MypageContainer} />
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
