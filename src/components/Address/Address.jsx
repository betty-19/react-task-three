import React,{useState} from "react";
import './Address.css';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";


function Address() {

    const [showAddMannualy, setShowAddMannualy] = useState(false);
    const nav = useNavigate();

  return (
    <div className="address-wrapper">
      <div className="address-content">
        <div className="address-information-header">
          <div className="title">
            <p>Add Address</p>
            <p>3 of 3</p>
          </div>
          <div className="close-icon">
            <i className="bi bi-x"></i>
          </div>
        </div>

        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
                <div className="address">
             { showAddMannualy?
             (  <div className="add-manualy-div">
                 <div className="input">
                           <div className="street-address">
                             <p className="label">Street Address</p>
                             <Field name="address" type="text" className="street-address-input" />
                           </div>
                           
                         </div>
                         <div className="appartment">
                <Field
                 
                  type="text"
                  name="appartment"
                  className="appartment-input"
                  placeholder="Appartment"
                 
                 
                />
                <div
                  className="appartment-right"
                >
                  Optional
                  
                </div>
              </div>
                         <div className="input">
                           <div className="city">
                             <p className="label">City</p>
                             <Field name="city" type="text" className="city-input" />
                           </div>
                           
                         </div>
                           <div className="state-zip">
                                         <div className="address-state-input">
                                           <div className="state">
                             <p className="label">State</p>
                             <Field name="state" type="text" className="state-input" />
                           </div>
                                         </div>
                                          <div className="zip-code">
                                           <div className="zip">
                             <p className="label">Zip Code</p>
                             <Field name="zip-code" type="text" className="zip-code-input" />
                           </div>
                                         </div>
                                       </div>
                                       <button className="save-information" type="submit" onClick={()=>{
                nav('/registered');
              }}>
                Save Information
              </button>

             </div>
            
            ):
             (
                <div className="search-address">
                  <div className="search-input">
                    <i className="bi bi-search"></i>
                    <Field
                      type="text"
                      name="search"
                      placeholder="Search for the address"
                      className="search-field"
                    />
                  </div>

                  <p className="address-description">
                    Your address is not visible to other users
                  </p>

                  <div className="location">
                    <div className="current-location">
                      <i className="bi bi-geo-alt"></i>
                      <p className="current-location-p">Use Current Location</p>
                    </div>
                    <div className="add-manualy">
                      <p className="current-location-p" onClick={()=>{
                        setShowAddMannualy(true)
                      }}>Add Manually</p>
                    </div>
                  </div>

                  <div className="sharing-address">
                    <p className="sharing-address-title">Sharing your address shows:</p>
                    <div className="sharing-with">
                      <div className="people-near-you">
                        <i className="bi bi-people"></i>
                        <p>People near you</p>
                      </div>
                      <div className="delivery-time">
                        <i className="bi bi-clock"></i>
                        <p>Estimated Delivery time</p>
                      </div>
                      <div className="shipping-cost">
                        <i className="bi bi-truck"></i>
                        <p>Estimated Shipping cost</p>
                      </div>
                    </div>
                  </div>
                </div>
              )} </div> 
              
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Address;
