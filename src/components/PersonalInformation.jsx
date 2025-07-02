import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './PersonalInformation.css'
function PersonalInformation() {
return(
<div className="personal-information-wrapper">
  <div className="personal-information-content"> <div className="personal-information-header">
    <div className="title">
      <p>Personal Information</p>
        <p>2 of 3</p>
    </div>
        
        <div className="close-icon">
                       <i class="bi bi-x"></i>

                </div>

    </div>
    <Formik
    initialValues={{ fullname: '' }}
          //  validationSchema={SignUpSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
    >
      <Form>
        <div className="fullname">
           <Field placeholder="Full name" className="fullname-input"></Field>
        </div>
       <div className="gender">
        <label>Gender: </label> 
        <div className="male">
          <input type="radio" name="gender" value="male" className="radio"/> <label>Male</label> 
         </div>
         <div className="female">
           <input type="radio" name="gender" value="female" className="radio"/> <label>Female</label>
         </div>
        
       </div>
        
        <div className="info">
           <i className="bi bi-info-circle"></i>
           <p>The phone number and birthday are only visible to you</p>
        </div>
        <div className="phone">
          <div className="county-code">
            <div className="code">
              +598
            </div><i className=" bi bi-chevron-down"></i></div>
            <div className="phone-number">
              <Field placeholder="Phone number" className="phone-number-input"></Field>
            </div>
          
        </div>
        <div className="birthday">
          <Field placeholder="Birthday" className="birthday-input"/>
          <div className="birthday-icon">
            <p>Optional</p>
            <i className="bi bi-calendar4"></i>
          </div>
        </div>
        <p className="description">Let us know about your birthday so as not to miss a gift</p>
        

       
      </Form>

    </Formik><button className="save-information">Save Information</button></div>
   

</div>
)
}
export default PersonalInformation