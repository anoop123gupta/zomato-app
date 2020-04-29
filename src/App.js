import React from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "login": true,
            "signup": false
        }
      }
    
      showSignup(){
          this.setState({"login": false, "signup": true})
      }
    
      showLogin(){
          this.setState({"login": true, "signup": false})
      }


    render(){
        return (
            <div>
                <div className="main">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="container">
                                    <ul className="nav nav-tabs col-md-6">
                                        <li><a href="#" data-toggle="tab" value="login" onClick={()=> this.showLogin()}>Login</a></li>
                                        <li><a href="#" data-toggle="tab" value="signup" onClick={()=> this.showSignup()}>Signup</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="panel-body">
                                { this.state.login == true && <LoginPage />}
                                { this.state.signup == true && <Signup />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
 
}
