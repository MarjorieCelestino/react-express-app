import React, { Component } from 'react';
import './App.css';
import {Router, Route, Link, RouteHandler} from 'react-router-dom';
import Validation from 'react-validation';
import IntlTelInput from 'react-intl-tel-input';
import Select from 'react-select';
import Autocomplete from 'react-google-autocomplete';
import moment from 'moment';
import AlertContainer from 'react-alert'


class Register extends Component {

	constructor(props) {
        super(props)
        this.state = {
        	value: '',
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            date: '',
            loading: false,
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.currentDate = this.currentDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.currentDate();
    }

    currentDate(){
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.setState({value: date});
    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            date: this.state.dateAdded
        }
        console.log(data)
        fetch("https://userrecord.azurewebsites.net/HomePage", {
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
    <div className="Register">
      <head>
      	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
		<script>
			function 
			}
		</script>
      </head>
      	<nav class="navbar navbar-default navbar-fixed-top blank-space">
    		<ul class="nav navbar-nav navbar-right">
      		<li class="btn-log active"><a href="/HomePage">Sign in</a></li>
    		</ul>
		</nav>
	    <div class="container">
        	<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="panel panel-login">
						<div class="panel-heading">
							<a class="active">Create Account</a>
						<hr/>
						</div>
						<div class="panel-body">
							<div class="row">
								<div class="col-lg-12">
									<form id="register-form" onChange={this.handleChange}>
										<div class="form-group">
											<input type="text" required name="name" id="name" tabindex="1" class="form-control" placeholder="Name"/>
										</div>
										<div class="form-group">
											<input type="email" required name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address"/>
										</div>
										<div class="form-group">
											<input type="password"required name="password" id="password" tabindex="2" class="form-control" placeholder="Password" pattern=".{6,0}"/>
										</div>
										<div class="form-group">
											<input type="password" required name="passwordConfirm" id="passwordConfirm" tabindex="2" class="form-control" placeholder="Confirm Password" pattern=".{6,}"/>
										</div>
										<div class="form-group">
											<input type="text" value={this.state.value}  name="dateAdded" id="dateAdded" class="form-control" style={{display: 'none'}}/>
										</div>
										<div class="form-group">
											<div class="row">
												<div class="col-sm-6 col-sm-offset-3">
													<input  type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register now"/>
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

export default Register;