function Student(props){
    console.log(props)
    return(
        <div>
            <h1>Student Details</h1>
            <p>Name is:{props.name}</p>
            <p>RollNo is:{props.rollno}</p> 
        </div>
    )
}
export default Student