import React from 'react';

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "fname":"",
            "lname":"",
            "email":"",
            "pass":"",
            "confpass":""
        }
    }

    handleInputs(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    validateInput(){
        const fname= document.getElementById("fname");
        const lname = document.getElementById("lname");
        const email = document.getElementById("email");
        const pass = document.getElementById("pass");
        const confpass = document.getElementById("confpass");

        if (fname.value  == ""){
            fname.focus()
            return false
        }
        if (lname.value  == ""){
            lname.focus()
            return false
        }
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

    handleSignup(){
    
        const formData = this.state
 
        const options = {
            "method": "POST",
            "body": JSON.stringify(formData),
            "headers":{
             "Content-Type": "application/json"
            }
        }
        console.log(options);
        
        const url = "http://localhost:8001/addUser"
        fetch(url, options, function(err,res){
             if(!err){
                 console.log("data inerted ");
             }
        })
     }

    // responseGoogle(res){
    //     const profileObj = res["profileObj"];
    //     const userProfile = {
    //         "name": profileObj["name"],
    //         "email": profileObj["email"],
    //         "img": profileObj["imageUrl"]
    //     }
    //     console.log("res ", userProfile );
    // }

    render(){
        return (
            <div className="container">
                <div className="col-md-6">
                        <div class="myForm">
                            <label >First Name </label>
                            <input type="text"  name="fname" id="fname" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                            <label >Last Name </label>
                            <input type="text" name="lname"  id="lname" className="form-control" onChange={(e)=> this.handleInputs(e)}/>
                            <label >Email </label>
                            <input type="email" name="email" id="email" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                            <label >Password</label>
                            <input type="password" name="pass" id="pass" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                            <label >Confirm Password </label>
                            <input type="password" name="confpass" id="confpass" className="form-control" onChange={(e)=> this.handleInputs(e)} />
                            <button className="btn btn-block btn-sm btn-success" style={{"marginTop": "20px", "fontWeight": 'bold'}} onClick={()=> this.handleSignup()}>Signup</button>   
                           {/* <GoogleLogin 
                                className="google"
                                clientId="182159543393-8ohdm319b0gep116me6efaf5p5p2l8am.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                buttonText="LOGIN WITH GOOGLE"
                                onSuccess={(res)=>this.responseGoogle(res)}
                                onFailure={(res)=>this.responseGoogle(res)}
                            /> */}
                        </div>
                </div>
            </div>
        )
    }
}