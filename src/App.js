import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [color, setColor] = useState("yellow"); 

  return (
    <>
    <div className="w-full h-screen duration-200" 
      style={{ backgroundColor: color }}   
    >
      <div
      className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2"
      style={{backgroundColor:"black"}}>
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl "
        style={{backgroundColor:"grey"}}> 
        <button 
        onClick={()=>{setColor("blue")}}
        className="outline-none px-4
        rounded-full shadow-black " 
        style={{backgroundColor: "blue"}}>blue</button>
                <button onClick={()=>{setColor("red")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "red"}}>Red</button> 
                <button onClick={()=>{setColor("olive")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "olive"}}>Olive</button> 
                <button onClick={()=>{setColor("pink")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "pink"}}>Pink</button> 
        <button onClick={()=>{setColor("yellow")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "yellow"}}>Yellow</button> 
                <button onClick={()=>{setColor("magenta")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "magenta"}}>Magenta</button>
        <button onClick={()=>{setColor("green")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "Green"}}>Green</button> 
                <button onClick={()=>{setColor("black")}} className="outline-none px-4
        rounded-2xl " 
        style={{backgroundColor: "azure"} }>Dark Mode</button>                   
        </div>
       </div>
     
    </div>
    </>
      
  );
}

export default App;  
