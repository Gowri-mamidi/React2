import React,{useState} from 'react'
import DisplayCar from './DisplayCar'
export default function Car() {
    const[car,setcar]=useState([
        {
            name:"Maruti",
            price:50000000,
            description:"Maruti Suzuki India Limited is the Indian subsidiary of Japanese automaker Suzuki Motor Corporation. As of September 2022, the company had a leading market share of 42 percent in the Indian passenger car market",
            picture:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg"
        },
        {
            name:"Toyota",
            price:12000000,
            description:"Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year",
            picture:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg"
            
        },
        {
            name:"Rolls royce",
            price:200000000,
            description:"Rolls-Royce Motor Cars Limited is a British luxury automobile maker that has operated as a wholly owned subsidiary of BMW AG since 2003 – as the exclusive manufacturer of Rolls-Royce-branded motor cars.",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu4JDtMoTEqRd09ak0Ke8wCQhzNX7gfB6Hg&s"

        }
    ])
  return (
    <div>
       <DisplayCar carDetails={car}/>
       
    </div>
  )
}
