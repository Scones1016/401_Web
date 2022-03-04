import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/LogIn';
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import ProfilePage from "./pages/ProfilePage";
import Map from "./pages/Map";
import reportWebVitals from './reportWebVitals';
import { HashRouter as BrowserRouter,Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/profilepage" component={ProfilePage}/>
          <Route exact path="/Map" component={Map}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
