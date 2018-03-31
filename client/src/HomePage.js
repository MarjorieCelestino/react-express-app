import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
  render() {
    return (
    <div className="HomePage">
      <head>
      	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
		<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      </head>
      	<nav class="navbar navbar-default navbar-fixed-top blank-space">
      		<ul class="nav navbar-nav navbar-left">
      			<li class="welcome-user"><a>Hello user</a></li>
    		</ul>
    		<ul class="nav navbar-nav navbar-right">
      			<li class="btn-log active"><a href="#contact">Sign out</a></li>
    		</ul>
		</nav>
	    <div class="container">
        	<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="panel panel-login">
						<div class="panel-heading">
							<a class="active">Registered Users</a>
						<hr/>
						</div>
							<table class="table table-bordered table-hover text-center">
  								<thead>
    								<tr>
								      <th class="text-center" scope="col">Name</th>
								      <th class="text-center" scope="col">E-mail</th>
								      <th class="text-center" scope="col">Date Added</th>
    								</tr>
  								</thead>
  								<tbody>
								    <tr>
								      <td>Mark</td>
								      <td>mark@gmail.com</td>
								      <td>14/10/18</td>
								    </tr>
								    <tr>
								      <td>Jacob</td>
								      <td>Thornton@gmail.com</td>
								      <td>14/10/18</td>
								    </tr>
    							</tbody>
    						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default HomePage;