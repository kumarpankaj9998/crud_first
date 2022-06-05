import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [roll,setRoll]=useState(0);
  useEffect(()=>{ 
    Axios.get("http://localhost:3001/read").then((response)=>{console.log(response);})
  },[])
  const addtoBack=()=>{
    console.log(name);
   Axios.post("http://localhost:3001/insert",{name:name,roll:roll}); 
  
  };
   
  return (
    <div className="App">
      <h1>FIRST TIME PLAYING WITH THIS MODAL</h1>
       <label>Name of the student</label> 
       <input type="text" className="sizer" onChange={(event)=>{setName(event.target.value)}}/>
       <label>Roll no:</label>
       <input type="number" className="sizer" onChange={(event)=>{setRoll(event.target.value)}}/>
       <button type="submit"  className="sizer" onClick={addtoBack}>SUBMIT </button>
    </div>
    

  );
}

export default App;
