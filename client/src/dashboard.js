import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
	
	constructor(props) {
        super(props)
        this.state = {
            users: [],
            response: ''
        }
    }

  componentDidMount() {
        fetch('/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json();
        }).then(function(data) {
            console.log(data);
            this.setState({users: data});
        }).catch(err => {
        console.log('Error!',err);
        })
  }

  render() {
    return (
    <div className="Dashboard">
      <head>
      	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
		    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
      </head>
      <nav class="navbar navbar-default navbar-fixed-top blank-space">
      		<ul class="nav navbar-nav navbar-left">
      		  <li class="welcome-user"><a>Hello user</a></li>
    		  </ul>
    		  <ul class="nav navbar-nav navbar-right">
      			<li class="btn-log active"><a href="/">Sign out</a></li>
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
								    {this.state.users.map(user =>
				              <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.date_added}</td>
                      </tr>
				            )}
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

export default Dashboard;