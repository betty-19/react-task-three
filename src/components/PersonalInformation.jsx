import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function PersonalInformation() {
return(
<div className="personal-information-wrapper">
    <div className="personal-information-header">
        <p>Personal Information</p>
        <p>2 of 3</p>
        <div className="close-icon">
                       <i class="bi bi-x"></i>

                </div>

    </div>
    <Formik
    initialValues={{ email: '', password: '' }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
    >

    </Formik>

</div>
)
}
export default PersonalInformation