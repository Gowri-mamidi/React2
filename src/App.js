import{useState} from 'react' // importing useState hook from the react
// import Student from './Student' // importing Student component (./ is used bcoz it is created by the user) 
// import List from './List'
// import Input from './Input'
// import Car from './Car'
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
//import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App(){

  
  // const [studentName,setStudentName]=useState('Prabhas') // creating a variable studentName using const
  // const [studentAge,setStudentAge]=useState(23)
  return(
    <div>
       <BrowserRouter>
         <Navigation/>
         <Routes>
      
             {/* <Route path="/" element={<Home/>}/> */}
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/about" element={<About/>}/>
          
         </Routes>
       </BrowserRouter>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       {/*
      <Car/>
      
      <List/>
      <Input/>
      <Car/>
      <p>Hello all</p>
      
      <Student name="Gowri" rollno="123"/>
      <Student name="Raju" rollno="485" />
      <Student name="Ramu" rollno="837" /> */}
    </div>
  )
}
export default App