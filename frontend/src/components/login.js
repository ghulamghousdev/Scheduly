import React from 'react';
import axios from 'axios';
import '../styles/form.scss';


class Login extends React.Component {
    constructor(){
        super();
    }
    handleFormSubmit = async e =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const credentials = {
            email,
            password
        }

        try{
            const config = {
                headers: {
                    'Content-Type': 'Application/json'
                }
            }
            const body = JSON.stringify(credentials);
            const res = await axios.post('/api/user/login', body, config)
            console.log(res.data);
        } catch(e){
            console.log(e);
        }
        
    }

    render(){
        return (
            <form className="form" onSubmit={this.handleFormSubmit}>
            <h3 className="form__heading">Login</h3>
            <input 
              className="form__input" 
              placeholder="Email Address" 
              type="email" 
              name="email"
            />
            <input 
              className="form__input" 
              placeholder="Password" 
              type="password" 
              name="password"
            />
            <input
              className="form__btn"
              type="submit"
              name="submit"
              value="Login"
            />
          </form>
        )
    }
}

export default Login;