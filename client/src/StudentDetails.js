import React from "react";

function StudentDetails({students}){
    const {reg_no,phone_number,address,firstname,lastname,department,course,student_id}=students;
    return(
        <div>
            <form>
            <div class="row">
                <div class="col-25">
                    <label for="reg_no">{reg_no}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="reg_no" name="registration number" placeholder="Your registration number.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="phone">{phone_number}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="phone_no" name="phone_number" placeholder="Your phone number.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="address">{address}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="address" name="address" placeholder="Your address.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="fname">{firstname}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your firstname.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="lname">{lastname}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your lastname.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="department">{department}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="department" name="department" placeholder="Your department.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="course">{course}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="course" name="fcourse" placeholder="Your course.."/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="s_id">{student_id}</label>
                </div>
                <div class="col-75">
                    <input type="text" id="s_id" name="student_id" placeholder="Your id.."/>
                </div>
            </div>
            </form> 
        </div>
    );
}
export default StudentDetails;