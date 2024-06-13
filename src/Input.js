import React,{useState} from 'react'

export default function Input() {
    const[userName,setuserName]=useState('')
    const[mobileNo,setmobileNo]=useState('')
    function handleUserName(e){
        setuserName(e.target.value)
    }
    function login(){
      console.log(userName,mobileNo)
      
    }
  return (
    <div>
      <p>
        <input placeholder="Enter Name" type="text" onChange={handleUserName}/>
        <input placeholder="Enter Mobile" type="number" onChange={(e)=>{setmobileNo(e.target.value)}}/>
        <button onClick={login}>Submit</button>
      </p>
    </div>
  )
}
