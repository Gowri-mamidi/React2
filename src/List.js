import React, { useState } from 'react'
import './List.css'

export default function List() {
  const [employees, setEmployees] = useState([
    {
      name: "Gowri",
      age: 20,
      id: 19737,
      Gender: "Female"
    },
    {
      name: "Chandu",
      age: 25,
      id: 64289,
      Gender: "Male"
    },
    {
      name: "Gowri",
      age: 20,
      id: 1737,
      Gender: "Female"
    },
    {
      name: "Chandu",
      age: 25,
      id: 6489,
      Gender: "Male"
    }
  ])
  return (
    <div className='employee-container'>
      {
        employees.map((emp) => (
          <div className='employee' key={emp.id}>
            <p>Name:{emp.name}</p>
            <p>Age:{emp.age}</p>
            <p>Gender:{emp.gender}</p>
            <p>ID:{emp.id}</p>
          </div>
        ))
      }

    </div>
  )
}
