import '../App.css';
import React, {Component} from 'react';
import CreateUser from '../components/CreateUser';
import {Link} from 'react-router-dom';

class SignUp extends Component{
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
    if(this.state.input["email"] == undefined || !this.state.input["email"].includes('@'))
    {
        alert("You email is invalid, please reenter your email");
    }
    else if(this.state.input["company"] == undefined)
    {
      alert("Your company cannot be empty")
    }
    else if(this.state.input["password"] == undefined)
    {
        alert("Your password is empty");
    }
    else{
        CreateUser(this.state.input)
          .then(response => {
            console.log(response);
        });
        localStorage.setItem("email", this.state.input["email"]);
        localStorage.setItem("company", this.state.input["company"]);
        alert("submitting");      
        this.props.history.push("./profilepage");  
	  }
  }

  handleChange(event){
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    console.log(event.target.name);
    this.setState({
      input : input
    });
  }

  close = () => {
      this.props.history.push("./main");
  }
  
  render(){
  return (
    <div className="App">
        <div class="SignUp-Form">  
        <button type="button" className="close" aria-label="Close" onClick={this.close}>
            <span>×</span>
        </button>
          <p>Email:  
              <input class="input" type="email" name="email" value={this.state.input.username} onChange={this.handleChange}/>  
          </p>  
          <p>Company: 
              <input class="input" type="text" name="company" value={this.state.input.company} onChange={this.handleChange}/>  
          </p>  
          <p>  
              Password:  
              <input class="input" type="password" name="password" value={this.state.input.password} onChange={this.handleChange} />  
          </p>  
          <Link to="./">Already have an account? </Link>
          <br/>
          <input type="submit" value="Sign Up" className="submitB" onClick={this.handleSubmit}/>  
        </div>  
    </div>
  );
  }
}

export default SignUp;