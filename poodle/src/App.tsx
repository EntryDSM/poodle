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
import { Footer, Error } from './components';
import SchedulesContainer from './container/SchedulesContainer/SchedulesContainer';
import './';
import Maltese from 'entry-maltese';
import AllFinish from './components/Schedules/AllFinish';
import { getTime } from './lib/utils/function';

function App() {
  const token = localStorage.getItem('accessToken');
  const isLogin = token !== null ? true : false;
  const time = getTime();
  const finishTime = getTime('2020-11-20');
  const isFinish = finishTime <= time;
  return (
    <>
      <GlobalStyle />
      {isFinish ? (
        <AllFinish />
      ) : (
        <BrowserRouter>
          <HeaderContainer />
          <>
            <Maltese isLogin={isLogin} token={token !== null ? token : ''} />
            <Switch>
              <Route exact path='/' component={MainContainer} />
              <Route path='/schedules' component={SchedulesContainer} />
              <Route path='/join' component={JoinContainer} />
              <Route path='/grade' component={ConnectGrade} />
              <Route exact path='/mypage' component={MypageContainer} />
              <Route path='/preview' component={PreviewContainer} />
              <Route path='/Introduction' component={ConnectIntroduction} />
              <Route path='/Type' component={ConnectChoiceType} />
              <Route path='/Info' component={ConnectInfo} />
              <Route component={Error} />
            </Switch>
          </>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
