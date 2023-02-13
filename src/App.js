import { useState,useEffect } from 'react';
import './App.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [columns,setColumns]=useState([]);
  const [records,setRecords]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
     axios.get("http://localhost:3030/users").then(res=>{
       setColumns(Object.keys(res.data[0]));
       setRecords(res.data);
     })
  })
  
  return (
    <div className="container App">
      <div className=''><Link to="/create">Create Record</Link></div>
      <table className='table'>
      <thead>
       <tr>
        {columns.map((c,i)=>(
          <th key={i}>{c}</th>
        ))}
        <th>Action</th>
       </tr>
       </thead>
       <tbody>
        {records.map((record,i)=>(
          <tr key={i}>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td>
              <Link to={`/update/${record.id}`}>Update</Link>
              <button onClick={e=>handleDelete(record.id)}>Delete</button>
            </td>
          </tr>
        ))}
       </tbody>
      </table>
    </div>
  );
  function handleDelete(id){
       const conf=window.confirm("Do you want to delete ?");
       if(conf){
        axios.delete('http://localhost:3030/users/'+id).then(res=>{
          alert("Data Deleted Succesfully");
          navigate('/');
        }).catch(err=>console.log(err))
       }
  }
}

export default App;
