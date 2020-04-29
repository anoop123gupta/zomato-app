import React from 'react';
import SearchComponent from './SearchComponent';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "email":"",
            "pass":"",
            "confpass":"",
            "user":{},
            "showNextPage": false
        }
    }

    handleInputs(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    validateInput(){
        const email = document.getElementById("email");
        const pass = document.getElementById("pass");
        const confpass = document.getElementById("confpass");
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email.value.match(mailformat)){
            email.focus()
            return false
        }
        if (pass.value  == ""){
            pass.focus()
            return false
        }
        if (confpass.value !== pass.value){
            confpass.focus()
            return false
        }
        return true;
    }

    async handleLogin(){
 
        const obj = {
            "email": this.state.email ,
            "pass": this.state.pass
        }
        if (this.validateInput() === true){

            const options = {
                "method": "POST",
                "body": JSON.stringify(obj),
                "headers":{
                 "Content-Type": "application/json"
                }
            }
            const url = "http://localhost:8001/check"
            await fetch(url, options)
            .then((res)=>{
                return res.text()
            })
            .then((data)=>{
                const parsedData = JSON.parse(data);
                if (parsedData.length > 0){
                    this.setState({"user": parsedData[0], "showNextPage": true})
                }else{
                    this.setState({"msg": "This user does not exists signup first !"})
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }


    render(){
        console.log("MSG ", this.state.msg);
        
        return (
            <div className="container">
                <div className="col-md-6">
                    <div class="myForm">
                        <label >Email </label>
                        <input type="email" name="email" id="email" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                        <label >Password</label>
                        <input type="password" name="pass" id="pass" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                        <label >Confirm Password </label>
                        <input type="password" name="confpass" id="confpass" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                        <button className="btn btn-block btn-sm btn-success" style={{"marginTop": "20px", "fontWeight": 'bold'}} onClick={()=> this.handleLogin()}>login</button>   
                    </div>
                    { <p className="text-danger text-center"> {this.state.msg} </p>}
                </div> 
                {/* {this.state.showNextPage === true && <SearchComponent user= {this.state.user} />} */}
                
            </div>
        )
    }
}