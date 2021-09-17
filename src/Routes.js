import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Login from './containers/Auth/Views/login';
import Signup from './containers/Auth/Views/signup';
import Home from './containers/Home/Views';
import { checkAuthorized } from './utils';
// import UserDashboard from './containers/Dashboard/Views/userDashboard';
// import Campaign from './containers/Campaign/Views';
// import CampaignReport from './containers/Campaign/Views/report';

const UnProtectedRoute = async({ component: Component, ...rest }) => {
  let authenticated;
  return (
    <Route
      {...rest}
      render={props =>     
        
       !authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Router>
    <div>
     <Switch>
     <Route path='/' exact component={Login}/>
     <Route path='/login' component={Login}/>
     <Route path='/signup' component={Signup}/>
     <Route path='/home' component={Home}/>
     </Switch>
    </div>
    </Router>
  );
}

export default Routes;
