import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';
  import GlobalStyle from './styles/globalStyle';
  import { Footer } from './components/default/Footer';
  import { 
    ConnectIntroduction, 
    ConnectChoiceType,
    ConnectInfo, 
    MainContainer,
    JoinContainer,
    HeaderContainer,
  } from './container';
import { 
  Footer,
  ApplyStatus,
  Error
} from './components';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Switch>
          <Route path="/Introduction" render={() => <ConnectIntroduction/>}/>
          <Route path="/Type" render={() => <ConnectChoiceType/>}/>
          <Route path="/Info" render={() => <ConnectInfo/>}/>
          <Route exact path="/" component={MainContainer} />
          <Route path="/applystatus" component={ApplyStatus} />
          <Route path="/join" component={JoinContainer} />
          <Route component={Error} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
 