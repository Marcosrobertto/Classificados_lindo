import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import App from './Pages/Home/App';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';

import reportWebVitals from './reportWebVitals';
import Anunciar from './Pages/Anunciar/Anunciar';
import Logout from './Pages/Logout/Logout';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} /> {/* Home*/}
        <Route path="/login" component={Login} /> {/* Login*/}
        <Route path="/Cadastro" component={Cadastro} /> {/* cadastro*/}
        <Route path="/Anunciar" component={Anunciar} /> {/* anuncio*/}
        <Route path="/Logout" component={Logout} /> {/* anuncio*/}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
