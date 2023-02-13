import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [input,setInput]=useState([{name:'',email:''}]);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3030/users",input).then(res=>{
           alert("User Added Successfully");
           navigate("/");

        }).catch(err=>console.log(err));
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" 
            onChange={(e)=>setInput({...input,name:e.target.value})}>
            </input>         
        </div>
        <div>
            <label>Name:</label>
            <input type="email" name="email" 
            onChange={(e)=>setInput({...input,email:e.target.value})}>
            </input>            
        </div>
        <input type="submit" value="Submit"></input>
        </form>
    </div>
  )
}

export default Add