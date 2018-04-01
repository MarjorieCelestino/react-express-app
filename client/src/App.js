import React, { Component } from 'react';
import './App.css';
import {Router, Route, Link, RouteHandler} from 'react-router-dom';



class App extends Component {

	constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            error: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        var data = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(data)
        fetch("https://userrecord.azurewebsites.net/App", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Error");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.refs.msg.show('Some text or component', {
                  time: 2000,
                  type: 'success',
                })
            }
        }).catch(function(err) {
            console.log(err)
        });

        this.setState({ fireRedirect: true })
    }

  render() {
    return (
    <div className="Login">
      <head>
      	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
      </head>
      	<nav class="navbar navbar-default navbar-fixed-top blank-space">
		</nav>
	    <div class="container">
        	<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="panel panel-login">
						<div class="panel-heading">
						 	<a class="active">Welcome</a>
						<hr/>
						</div>
						<div class="panel-body">
							<div class="row">
								<div class="col-lg-12">
									<form id="login-form" method="post" role="form">
										<div class="form-group">
											<input type="email" required name="email" id="email" tabindex="1" class="form-control" placeholder="E-mail"/>
										</div>
										<div class="form-group">
											<input type="password" required name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
										</div>
										<div class="form-group">
											<div class="row">
												<div class="col-lg-12">
													<div class="text-center">
														<a class="btn" href="#" tabindex="5" class="forgot-password">Forgot Password?</a>
													</div>
												</div>
											</div>
										</div>
										<div class="form-group">
											<div class="row">
												<div class="col-sm-6 col-sm-offset-3">
													<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Sign in"/>
												</div>
											</div>
										</div>
										<div class="form-group">
											<div class="row">
												<div class="col-sm-6 col-sm-offset-3">
													<a href="/Register" class="btn form-control btn-register">Create Account</a>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default App;
