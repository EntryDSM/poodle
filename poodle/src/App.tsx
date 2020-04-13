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
  } from './container';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Switch>
          <Route path="/Introduction" render={() => <ConnectIntroduction/>}/>
          <Route path="/Type" render={() => <ConnectChoiceType/>}/>
          <Route path="/Info" render={() => <ConnectInfo/>}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
