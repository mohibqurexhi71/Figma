import React, { useState } from 'react'
import Profile from './Profile'
import { requestFormReset } from 'react-dom';
import '../App.css';
function Register() {

    const [formData , setFormData] = useState({
       firstName: "",
       lastName: "",
       email: "",
      password: "",
      repeatPassword: "",
      profilePicture: null       
    });

    // Handle text input
    const handleChange = (e)=>{
      const {name , value , files} = e.target;


      if(name === "profilePicture"){
        setFormData((prev)=>({
          ...prev,
          profilePicture:files[0]
        }));
      }else{
        setFormData((prev)=>({
          ...prev,
          [name]: value,
        }));
      }
    };

    const handleSubmit = () =>{
      if(formData.password !== formData.repeatPassword){
        console.log("Password Do no match ");
        return
      }
      console.log("First Name" , formData.firstName);
      console.log("Last Name" , formData.lastName);
      console.log("Email " , formData.email);
      console.log("Password" , formData.password);
      console.log("Repeat Password" , formData.repeatPassword);
      console.log("Profile Picture" , formData.profilePicture);      
    }

  return (
    <div className="container">
  <div className="card">
    <h2>Register</h2>

    <div className="input-group">
      <input name="firstName" placeholder="First Name" onChange={handleChange}/>
    </div>

    <div className="input-group">
      <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
    </div>

    <div className="input-group">
      <input name="email" placeholder="Email" onChange={handleChange}/>
    </div>

    <div className="input-group">
      <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
    </div>

    <div className="input-group">
      <input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange}/>
    </div>

    <div className="input-group">
      <input type="file" name="profilePicture" onChange={handleChange}/>
    </div>

    <button className="btn" onClick={handleSubmit}>Sign Up</button>
  </div>
</div>
  )
}
export default Register
