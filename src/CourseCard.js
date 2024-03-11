import React, { useState } from 'react'
import './App.css';
const CourseCard = ({name ,hour}) => {

    const[hourvalue, setUpdatedhour] = useState(hour)
  return (
   
  <div style={{ alignItems:"center",display:'flex',flexDirection:'column'}} >
     <div style={{ margin:'10px',padding:'10px', color:'black',backgroundColor:"whitesmoke"}}>
    
    <p style={{ backgroundColor:"white"}}  > {name} :- {hourvalue} hours</p>
   
    <div>
        <button onClick={()=>{setUpdatedhour(hourvalue+1)}}   style={{margin:'10px',backgroundColor:"green"}}>+</button>
        <button onClick={()=>{setUpdatedhour(hourvalue-1)}}   style={{margin:'10px',backgroundColor:"red"}}>-</button>
    </div>
</div>
  </div>
  )
}

export default CourseCard
