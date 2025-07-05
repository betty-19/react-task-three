import React, { useState } from 'react';
import './Customers.css'
import Active1 from '../assets/images/active1.png'
import Active2 from '../assets/images/active2.png'
import Active3 from '../assets/images/active3.png'
import Active4 from '../assets/images/active4.png'
import Active5 from '../assets/images/active5.png'

const Customers =()=>{
    const [activePage,setActivePage] = useState(1);
   const customers = [
    {customerName:"Jane Cooper",company:"Microsoft", phoneNumber:"(225) 555-0118",email:"jane@microsoft.com",country:"United States", Status:"active"},
    {customerName:"Floyd Miles",company:"Yahoo", phoneNumber:"(205) 555-0100",email:"floyd@yahoo.com",country:"Kiribati", Status:"active"},
    {customerName:"Ronald Richards",company:"Adobe", phoneNumber:"(302) 555-0107",email:"ronald@adobe.com",country:"Israel", Status:"Inactive"},
    {customerName:"Marvin McKinney",company:"Tesla", phoneNumber:"(252) 555-0126",email:"marvin@tesla.com",country:"Iran", Status:"Inactive"},
    {customerName:"Jerome Bell",company:"Google", phoneNumber:"(629) 555-0129",email:"jerome@google.com",country:"Réunion", Status:"active"},
    {customerName:"Kathryn Murphy",company:"Microsoft", phoneNumber:"(406) 555-0120",email:"kathryn@microsoft.com",country:"Curaçao", Status:"active"},
    {customerName:"Jacob Jones",company:"Yahoo", phoneNumber:"(208) 555-0112",email:"jacob@yahoo.com",country:"Brazil", Status:"active"},
    {customerName:"Kristin Watson",company:"Facebook", phoneNumber:"(704) 555-0127",email:"kristin@facebook.com",country:"Åland Islands", Status:"Inactive"}
  ]

return(
    <div className="customers-wrapper">
        <div className="user-search">
            <p>Hello Evano 👋🏼,</p>
             <div className="customer-input">
                                <i className="bi bi-search"></i>
                                <input
                                  type="text"
                                  name="search"
                                  placeholder="Search"
                                  className="customer-search-field"
                                />
                              </div>
        </div>
        <div className="earning">
            <div className="total-customers">
                <div className="total-customers-icon">
                      <i className="bi bi-people"></i>
                </div>
                <div className="earning-right">
                    <p className='earning-right-p'>Total Customers</p>
                    <p className='earning-right-number'>5,423</p>
                    <p className='earning-right-percentage'><i className='bi bi-arrow-up'></i> <span>16%</span> this month</p>
                </div>
            </div>
            <div className="members">
                <div className="total-customers-icon">
                      <i className="bi bi-people"></i>
                </div>
                <div className="earning-right">
                    <p className='earning-right-p'>Members</p>
                    <p className='earning-right-number'>1,893</p>
                    <p className='earning-right-percentage'><i className='bi bi-arrow-down'></i> <span>1%</span> this month</p>
                </div>
            </div>
            <div className="active-now">
                <div className="total-customers-icon">
                      <i className="bi bi-people"></i>
                </div>
                <div className="earning-right">
                    <p className='earning-right-p'>Active Now</p>
                    <p className='earning-right-number'>189</p>
                    <div className='earning-right-images'>
                        <img src={Active1} alt="" className='img-one'/>
                        <img src={Active2} alt="" className='img-two'/>
                        <img src={Active3} alt="" className='img-three'/>
                        <img src={Active4} alt="" className='img-four'/>
                        <img src={Active5} alt="" className='img-five'/>

                    </div>
                </div>
            </div>
        </div>
        <div className="product">
            <div className="product-header">
                <div className="product-header-left">
                    <p>All Customers</p>
                <p className='active-members'>Active Members</p>
                </div>
                
                <div className="product-header-right">
                        <div className="product-search">
                                                        <i className="bi bi-search"></i>
                                                        <input
                                                        type="text"
                                                        name="search"
                                                        placeholder="Search"
                                                        className="product-search-field"
                                                        />
                        </div>
                       <div className="sort">
                                                        
                            <p>sort by: </p>
                            <div className="dropdown">
                                <p>Newest</p>
                                <i className='bi bi-chevron-down'></i>
                            </div>
                        </div>

                </div>
                
                
            </div>
            <table className='table'>
  <thead>
    <tr>
      <th>Customer Name</th>
      <th>Company</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Country</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {
      customers.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.customerName}</td>
            <td>{item.company}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
            <td>{item.country}</td>
            <td>
              <p className={item.Status === 'active' ? 'active-status' : 'inactive-status'}>
                {item.Status}
              </p>
            </td>
          </tr>
        );
      })
    }
  </tbody>
</table>

                <div className="paging">
      <p>Showing data 1 to 8 of 256k entries</p>
      <div className="pages">
        <div className="previous">
            <i className='bi bi-chevron-left'></i>
        </div>
     {[1, 2, 3].map((pageNum) => (
  <div
    key={pageNum}
    className={`page ${activePage === pageNum ? 'activePage' : ''}`}
    onClick={() => setActivePage(pageNum)}
  >
    {pageNum}
  </div>
))}
        <div className="next">
            <i className='bi bi-chevron-right'></i>
        </div>
      </div>
</div>
        </div>
    </div>
)
}
export default Customers