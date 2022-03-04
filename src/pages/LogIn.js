import '../App.css';
import React, {Component} from 'react';
import Form from 'react-bootstrap';
import getUser from '../components/getUser';
import {Link} from 'react-router-dom';

class App extends Component{
  componentDidMount(){
    document.title = 'Job Searching';
  }
  constructor(){
    super();
    this.state = {
      input : {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.close = this.close.bind(this);
  }

  handleSubmit = () => {
    console.log(this.state.input["password"]);
    if(!this.state.input["email"].includes('@'))
    {
      alert("You email is invalid, please re-enter your email");
    }
    else if(this.state.input["password"] == undefined)
    {
      alert("You password is empty");
    }
    else
    {
      getUser(this.state.input)
        .then(response => {
          console.log(response);
      });
      alert("submitting");
      this.props.history.push("./profilepage");
    }
  }

  handleChange(event){
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input : input
    });
  }

  close = () => {
    this.props.history.push("/main");
  }
  
  render(){
  return (
    <div className="App">
        <div class="Form">
        <button type="button" class="close" aria-label="Close" onClick={this.close}>
        <span>×</span>
        </button> 
          <p>Email:  
            <br/>
              <input class="input" type="email" name="email" value={this.state.input.username} onChange={this.handleChange}/>  
          </p>  
          <p>  
              Password:  
              <br/>
              <input class="input" type="password" name="password" value={this.state.input.password} onChange={this.handleChange} />  
          </p> 
          <Link to = "./signup"> Don't have an account? Sign Up </Link>
          <br/>
          <input className="submitB" type="submit" value="Log In" onClick={this.handleSubmit}/>  
        </div>  
    </div>
  );
  }
}

export default App;
