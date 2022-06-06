import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [roll,setRoll]=useState(0);
  const [newName,setNewName]=useState('');
  const [Stu,setStudent] = useState([]);

   
  
  useEffect(()=>{ 
  
    Axios.get("http://localhost:3001/read").then((response)=>{
      
      setStudent(response.data);

      
      });
  },[])
  const addtoBack=()=>{
    
   Axios.post("http://localhost:3001/insert",{name:name,roll:roll}); 
   console.log(name);
  };
  const updateName=(id)=>{console.log(newName); 
    Axios.put("http://localhost:3001/update",{id:id,newName:newName});
  }
  const deleteName=(id)=>{
    console.log(id);
    Axios.delete(`http://localhost:3001/delete/${id}`);
  }
   
  return (
    <div className="App">
      <h1>FIRST TIME PLAYING WITH THIS MODAL</h1>
       <label>Name of the student</label> 
       <input type="text" className="sizer" onChange={(event)=>{setName(event.target.value)}}/>
       <label>Roll no:</label>
       <input type="number" className="sizer" onChange={(event)=>{setRoll(event.target.value)}}/>
       <button type="submit"  className="sizer" onClick={addtoBack}>SUBMIT </button>
       
       <h1>student detail's</h1>
       { Stu.map((val,key) => {
      return <div className="stu"><h1 >{val.studentName}</h1> <h1 >{val.studentRoll}</h1>
         <input type="text" placeholder="new value" onChange={(event)=>setNewName(event.target.value)}/> <button onClick={()=>{updateName(val._id)}}>update</button><button onClick={()=>{deleteName(val._id)}} >delete</button></div>
         
      
    })}
   
    </div>
    // 
    

  );
}

export default App;
