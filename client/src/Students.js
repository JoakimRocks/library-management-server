import React from "react";
import axios from "axios";
import StudentDetails from "./StudentDetails";

class Student extends React.Component {
    constructor (prop){
        super (prop);
        this.state= {
            studentDetails:[],
            loading: false,
            error:false,
            reg:"",
            phone:"",
            address:"",
            firstname:"",
            lastname:"",
            department:"",
            course:"",
            studentid:""
        }
    }
    postStudentDetails(){
        axios.post("/api/students")
        .then()
        .catch()
    }
    render(){
        const {studentDetails}=this.state;
        console.log(studentDetails);
        return(
        <div>
            <StudentDetails/>
        </div>)
    }
}
export default Student;