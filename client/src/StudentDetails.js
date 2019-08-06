import React from "react";

function StudentDetails(){
    //const {Reg_No,Phone_Number,Address,Firstname,Lastname,Department,Course,Student_ID}=students;
    return(
        <div>
            <form>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25" >
                    <label for="reg_no" >Reg_No</label>
                </div>
                <div class="col-75">
                    <input type="text" id="reg_no" name="reg" placeholder="Your registration number.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="phone">Phone_Number</label>
                </div>
                <div class="col-75">
                    <input type="text" id="phone_no" name="phone" placeholder="Your phone number.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="address">Address</label>
                </div>
                <div class="col-75">
                    <input type="text" id="address" name="address" placeholder="Your address.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="fname">Firstname</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your firstname.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="lname">Lastname</label>
                </div>
                <div class="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your lastname.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="department">Department</label>
                </div>
                <div class="col-75">
                    <input type="text" id="department" name="department" placeholder="Your department.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="course">Course</label>
                </div>
                <div class="col-75">
                    <input type="text" id="course" name="course" placeholder="Your course.."/>
                </div>
            </div>
            <div class="row" style={{marginLeft:200}}>
                <div class="col-25">
                    <label for="s_id">Student_ID</label>
                </div>
                <div class="col-75">
                    <input type="text" id="s_id" name="studentid" placeholder="Your id.."/>
                </div>
            </div>
            </form> 
            <button className="lm-btn" style={{marginLeft:200, marginBottom:50}}>Save</button>
        </div>
    );
}
export default StudentDetails;