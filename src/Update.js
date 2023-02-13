import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [fetchedData,setfetchedData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3030/users/"+id).then(res=>
           setfetchedData(res.data)).catch(err=>{
            console.log(err);
        })
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3030/users/"+id,fetchedData).then(res=>{
        alert("Data Updated Succesffuly");
        navigate('/');
       })
    }
  return (
    <div>
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>id:</label>
            <input type="text" name="name" 
            disabled
            value={fetchedData.id}>
            </input>         
        </div>
        <div>
            <label>Name:</label>
            <input type="text" name="name" 
            value={fetchedData.name}
            onChange={(e)=>setfetchedData({...fetchedData,name:e.target.value})}>
            </input>         
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" 
            value={fetchedData.email}
            onChange={(e)=>setfetchedData({...fetchedData,email:e.target.value})}>
            </input>            
        </div>
        <input type="submit" value="Update"></input>
        </form>
    </div>
  )
}

export default Update;