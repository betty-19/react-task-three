import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./PersonalInformation.css";
import { useNavigate } from "react-router-dom";
import { PersonalInfoSchema  } from "../../utils/validations.js"; // use this if you kept the name

function PersonalInformation() {
  const dateInputRef = useRef(null);
  const nav = useNavigate();

  return (
    <div className="personal-information-wrapper">
      <div className="personal-information-content">
        <div className="personal-information-header">
          <div className="title">
            <p>Personal Information</p>
            <p>2 of 3</p>
          </div>
          <div className="close-icon">
            <i className="bi bi-x"></i>
          </div>
        </div>

        <Formik
          initialValues={{
            fullname: "",
            gender: "",
            phone: "",
            birthday: "",
          }}
          validationSchema={PersonalInfoSchema }
          onSubmit={(values) => {
            nav("/address");
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Full Name */}
              <div className="fullname">
                <Field
                  name="fullname"
                  placeholder="Full name"
                  className="fullname-input"
                />
                <ErrorMessage name="fullname" component="div" className="error" />
              </div>

              {/* Gender */}
              <div className="gender">
                <label>Gender:</label>
                <div className="male">
                  <Field type="radio" name="gender" value="male" className="radio" />
                  <label>Male</label>
                </div>
                <div className="female">
                  <Field type="radio" name="gender" value="female" className="radio" />
                  <label>Female</label>
                </div>
                <ErrorMessage name="gender" component="div" className="error" />
              </div>

              {/* Info Text */}
              <div className="info">
                <i className="bi bi-info-circle"></i>
                <p>The phone number and birthday are only visible to you</p>
              </div>

              {/* Phone Number */}
              <div className="phone">
                <div className="county-code">
                  <div className="code">+598</div>
                  <i className="bi bi-chevron-down"></i>
                </div>
                <div className="phone-number">
                  <Field
                    name="phone"
                    placeholder="Phone number"
                    className="phone-number-input"
                  />
                  <ErrorMessage name="phone" component="div" className="error" />
                </div>
              </div>

              {/* Birthday */}
              <div className="birthday" style={{ position: "relative" }}>
                <input
                  ref={dateInputRef}
                  type="date"
                  name="birthday"
                  value={values.birthday}
                  onChange={(e) => setFieldValue("birthday", e.target.value)}
                  className="birthday-input"
                  style={{
                    color: values.birthday ? "#1A0710A6" : "transparent",
                    position: "relative",
                    zIndex: 2,
                    background: "transparent",
                  }}
                />
                {!values.birthday && (
                  <span
                    className="custom-placeholder"
                    onClick={() => dateInputRef.current?.showPicker()}
                    style={{
                      position: "absolute",
                      left: 12,
                      zIndex: 1,
                      fontSize: "16px",
                      color: "#888",
                    }}
                  >
                    Birthday
                  </span>
                )}
                <div
                  className="birthday-icon"
                  onClick={() => dateInputRef.current?.showPicker()}
                  style={{ cursor: "pointer", zIndex: 3 }}
                >
                  <p>Optional</p>
                  <i className="bi bi-calendar4"></i>
                </div>
                <ErrorMessage name="birthday" component="div" className="error" />
              </div>

              <p className="description">
                Let us know about your birthday so as not to miss a gift
              </p>

              {/* Submit Button */}
              <button className="save-information" type="submit">
                Save Information
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PersonalInformation;
