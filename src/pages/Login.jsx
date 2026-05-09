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
    <div className="flex justify-center items-center bg-gray-200 h-screen">
  <div className="bg-white p-8 rounded-xl shadow-md w-[300px] h-60"  >
    <h2 className='text-center text-2xl font-bold mb-7'>Login</h2>

    <div className="flex flex-col mb-4">
      <label className='mb-7 text-sm '>Email</label>
      <input className='border p-2 rounded-md' name="email" value={formData.email} onChange={handleChange} />
    </div>

    <div className="flex flex-col mb-4">
      <label className='text-sm mb-2'>Password</label>
      < input className='border p-5 m-5 rounded-md' type="password" name="password" value={formData.password} onChange={handleChange}/>
    </div>

    <button className="w-20 bg-purple-600 text-white rounded-md hover:bg-purple-800 m-5 p-5" onClick={handleSubmit}>Login</button>
  </div>
</div>
  )
}

export default Login
