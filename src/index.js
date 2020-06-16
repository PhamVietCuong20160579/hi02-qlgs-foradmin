import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from "./containers/Dashboard";
import Inspection from "./containers/Inspection";
import CreateWarning from "./containers/Warning";
import WarningGrid from "./containers/WarningGrid";
import RedAlert from './containers/RedAlert';
import YellowAlert from './containers/YellowAlert';
import GreenAlert from './containers/GreenAlert';
import WarningDetail from './containers/WarningDetail';
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import HomeA from "./containers/Home";

const NotFound = () => <div>Not found</div>

class App1 extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={HomeA} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/alert" component={WarningGrid} />
              <Route path="/redalert" component={RedAlert} />
              <Route path="/yellowalert" component={YellowAlert} />
              <Route path="/alertdetail" component={WarningDetail} />
              <Route path="/greenalert" component={GreenAlert} />
              <Route path="/addcheck" component={CreateWarning} />   
              <Route path="/checklist" component={Inspection} />         
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/home" component={HomeA} />              
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById("root"));

serviceWorker.register();