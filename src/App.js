 
import { useState } from 'react';
import './App.css';
import CourseCard from './CourseCard';

function App() {


 const[planData, setplanData] = useState([])

   const onClickHandler = (()=>{
    const sub_Name =  document.getElementById('subject').value
    const sub_Hour =  document.getElementById('hour').value

    const newPlanData = {
      
      name: sub_Name,
      hour: parseInt(sub_Hour)

  }
  setplanData([...planData, newPlanData])
   // console.log("hweqjfokeqiohfu")
  })
  return (

    <>
    <div className='App'>
        <h1>Geekster Educator Planner</h1>
       <input type="text" id="subject" placeholder='subject' style={{padding:'10px'}} />  
       <input type="Number" id="hour" placeholder='hour' style={{padding:'10px',width:'2.5rem',marginLeft:'1rem'}}/>
       <button onClick={onClickHandler} style={{padding:'10px',marginLeft:'1rem',backgroundColor:"blue",color:'white',width:'6rem',border:'1px solid black'}} >Add</button>
    </div>

    <div>
    {
      planData.map((course,index) => (

        <CourseCard   
          key ={index}
            name  = {course.name}
            hour  =  {course.hour}
            
        />

      ))
      
      }
    
    </div>

     
   </>
  );
}

export default App;
