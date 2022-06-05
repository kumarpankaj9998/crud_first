import React ,{useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [roll,setRoll]=useState(0);
   
  const addtoBack=()=>{
   
   Axios.post("http://localhost:3001/insert",{studentName:name,studentRoll:roll}); 
  console.log("done");
  };
   
  return (
    <div className="App">
      <h1>FIRST TIME PLAYING WITH THIS MODAL</h1>
       <label>Name of the student</label> 
       <input type="text" className="sizer" onClick={(event)=>{setName(event.target.value)}}/>
       <label>Roll no:</label>
       <input type="number" className="sizer" onClick={(event)=>{setName(event.target.value)}}/>
       <button type="submit"  className="sizer" onClick={addtoBack}>SUBMIT </button>
    </div>
    

  );
}

export default App;
