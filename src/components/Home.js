import React,{useState} from 'react'


export default function Home() {
  const[userName,setuserName]=useState('')
  const[password,setpassword]=useState('')
  function move(){
    console.log(userName,password)
    setuserName('')
    setpassword('')
  }
  return (
    <div className='input-container'>
      <h1>This is Home Page</h1>
      <input value={userName} type="text" placeholder="Enter usename" onChange={(e)=>{setuserName(e.target.value)}}/>
      <input value={password} type="text" placeholder="Enter password" onChange={(e)=>{setpassword(e.target.value)}}/>
      <button onClick={move}>Submit</button>
    </div>
  )
}
