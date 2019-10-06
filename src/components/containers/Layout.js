import React, {Component} from 'react'
import logo from "../images/HUB.png";
import '../css/Layout.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

class Layout extends Component {
    render(){
        return(
<nav className="navbar navbar-expand-sm fixed-top navbar-light">
    <div className="container">
        <a className="navbar-brand" href="/"><img src={logo} style={{marginLeft:"50px", width:"10%", height:"10%"}} alt="logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav ml-auto" style ={{float: 'right',color:'white'}}>
                { 
                  this.props.isAuthenticated ?
                <li key="1" onClick={this.props.logout}>
                  <a style={{color: "white",fontFamily: 'EB Garamond, serif' }}
                    class="nav-link" href="/login"><strong>Logout</strong></a>
                </li>
                :
                <li  key="1">
                    <a style={{color: "white",fontFamily: 'EB Garamond, serif' }}
                    class="nav-link" href="/login"><strong>LOGIN</strong></a>
                </li>
                
                }
                 <li>
                    <a style={{color: "white",fontFamily: 'EB Garamond, serif' }}
                    class="nav-link" href="/login"><strong>ABOUT US</strong></a>
                </li>
                <a class="btn btn-primary btn-bg" href="/login" role="button"
                 style={{color: "white",fontFamily: 'EB Garamond, serif' }}>Post a Job</a>
                
            </ul>
        </div>
    </div>
</nav>
        )
    }
}  


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
      }
  }

export default withRouter(connect(null, mapDispatchToProps)(Layout));
 