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
import {
  getIsFinish,
  useAuth,
  useReGenerateTokenAndDoCallback,
} from './lib/utils/function';
import { AppWrapper } from './style';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { isLogin, accessToken } = useAuth();
  const isFinish = getIsFinish();
  const reGenerateToken = useReGenerateTokenAndDoCallback(() => {});

  const chattingError = (err: number) => {
    if (err === 401) {
      reGenerateToken();
    } else {
      alert(`Error code:${err} 채팅에 문제가 있습니다.`);
    }
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      {isFinish ? (
        <AllFinish />
      ) : (
      <BrowserRouter>
        <ScrollToTop>
          <>
            <HeaderContainer />
            <Maltese
              isLogin={isLogin}
              token={accessToken !== null ? accessToken : ''}
              errorHandler={chattingError}
            />
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
            <Footer />
          </>
        </ScrollToTop>
      </BrowserRouter>
    )}
    </AppWrapper>
  );
}
export default App;
