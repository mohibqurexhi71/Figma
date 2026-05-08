import React, { useState } from 'react'
import '../App.css';
function Login() {

  const [formData , setFormData] = useState(
    {
      email: "",
      password: ""
    }
  );

//  Handle the input 
  const handleChange = (e)=>{
    const {name , value} = e.target;

    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  }
  // Handle Btn click

  const handleSubmit = ()=>{
    console.log("Email" , formData.email);
    console.log("Password" , formData.password);
  };


  return (
    <div className="container">
  <div className="card">
    <h2>Login</h2>

    <div className="input-group">
      <label>Email</label>
      <input name="email" value={formData.email} onChange={handleChange} />
    </div>

    <div className="input-group">
      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange}/>
    </div>

    <button className="btn" onClick={handleSubmit}>Login</button>
  </div>
</div>
  )
}

export default Login
