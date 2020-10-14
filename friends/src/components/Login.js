import React, { useState }from "react";
import axios from "axios";

let initialState = {
        username:"",
        password:"",
};

const Login = (props) => {
    const [credentials, setCredentials] = useState(initialState)
    
const handleChange = (e)=>
{
    setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
    });
}

const login =(e) => {
    e.preventDefault();
    axios
    .post(`http://localhost:5000/api/login`, credentials)
    .then((res) => {
        window.localStorage.setItem("token", res.data.payload)
        props.history.push("/protected");
    })
    .catch ((err) =>{
        console.log(err)
    })

};

    return (
        <div>
            <form onSubmit={login}>
                <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"

                />
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="password"

                />
                <button>Log In</button>
            </form>
        </div>
    );
};
export default Login;