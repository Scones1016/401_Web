import './App.css';
import React, {Component} from 'react';
import CreateUser from './components/CreateUser';

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
    if(!this.state.input["email"].includes('@'))
    {
        alert("You email is invalid, please reenter your email");
    }
    if(this.state.input["company"] == undefined)
    {
      alert("Your company cannot be empty")
    }
    if(this.state.input["password"] == undefined)
    {
        alert("Your password is empty");
    }
    else{
        CreateUser(this.state.input)
          .then(response => {
            console.log(response);
        });
        alert("submitting");        
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
        <h1>Sign Up</h1>
          <p>Email:  
            <br/>
              <input class="input" type="email" name="email" value={this.state.input.username} onChange={this.handleChange}/>  
          </p>  
          <p>Company:  
            <br/>
              <input class="input" type="text" name="company" value={this.state.input.company} onChange={this.handleChange}/>  
          </p>  
          <p>  
              Password:  
              <br/>
              <input class="input" type="password" name="password" value={this.state.input.password} onChange={this.handleChange} />  
          </p>  
          <input type="submit" value="Sign Up" className="submitB" onClick={this.handleSubmit}/>  
        </div>  
    </div>
  );
  }
}

export default SignUp;