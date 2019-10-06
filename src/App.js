import React, { Component, Fragment }from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './components/store/actions/auth';

import Layout from './components/containers/Layout';
import Home from './components/containers/Home';
import DetailView from './components/containers/DetailView';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ListView from './components/containers/ListView';
import Search from './components/containers/Search';

class App extends Component {
  
  componentDidMount (){
    this.props.onTryAutoSignup();
  }

render(){
  return(
    <Router>
    <Fragment>
      <Layout {...this.props}>
      </Layout>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/api/:jobID" component={DetailView} />
        <Route exact path= '/jobs' component={ListView} />
        <Route exact path= '/login' component={Login} />
        <Route exact path= '/signup' component={Signup} />
        <Route exact path= '/search' component={Search} />
      </Switch>
    </Fragment>
  </Router>
  )};

}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
        }
    }
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
  