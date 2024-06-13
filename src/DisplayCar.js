import React from 'react'

export default function DisplayCar(props) {
  return (
    <div>
       {
        props.carDetails.map((car)=>(
         <div>
            <p>Name:  {car.name}</p>
            <p>Price:  {car.price}</p>
            <p>Description:  {car.description}</p>
            <img src={car.picture} alt={car.name}/>
         </div>
        ))
       }
    </div>
  )
}
