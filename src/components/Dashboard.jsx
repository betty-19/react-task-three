"use client"

import { useState } from "react"
import "./Dashboard.css"
import Customers from "./Customers.jsx"
import Profile from "../assets/images/profile.png"

const Dashboard = () => {
  const [showCustomers, setShowCustomers] = useState(false)
  const [activeMenu, setActiveMenu] = useState("dashboard")
  const [compactSidebar, setCompactSidebar] = useState(false)

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`dashboard-wrapper ${compactSidebar ? "compact" : ""}`}>
        <div className="sidebar">
          {/* Top Section */}
          <div className="sidebar-top">
            <div className="dashboard-title">
              <i className="bi bi-gear" onClick={() => setCompactSidebar((prev) => !prev)}></i>
              {!compactSidebar && (
                <p>
                  Dashboard <span>v.01</span>
                </p>
              )}
            </div>

            <div className="lists">
              {["dashboard", "product", "customers", "income", "promote", "help"].map((menu) => (
                <div
                  key={menu}
                  className={`list ${activeMenu === menu ? "active" : ""}`}
                  onClick={() => {
                    setActiveMenu(menu)
                    setShowCustomers(menu === "customers")
                  }}
                >
                  <div className="icon-title">
                    <i className={`bi ${
                      menu === "dashboard" ? "bi-house" :
                      menu === "product" ? "bi-box" :
                      menu === "customers" ? "bi-people" :
                      menu === "income" ? "bi-currency-dollar" :
                      menu === "promote" ? "bi-megaphone" :
                      "bi-question-circle"
                    }`}></i>
                    {!compactSidebar && <p>{menu.charAt(0).toUpperCase() + menu.slice(1)}</p>}
                  </div>
                  {!compactSidebar && menu !== "dashboard" && <i className="bi bi-chevron-right"></i>}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="sidebar-bottom">
            {!compactSidebar && (
              <div className="access-pro">
                <p>Upgrade to PRO to get access all Features!</p>
                <button>Get Pro Now!</button>
              </div>
            )}

            <div className="login-user">
              <div className="user">
                <img src={Profile || "/placeholder.svg"} alt="Profile" />
                {!compactSidebar && (
                  <div className="user-info">
                    <p className="name">Evano</p>
                    <p className="position">Project Manager</p>
                  </div>
                )}
              </div>
              {!compactSidebar && <i className="bi bi-chevron-down"></i>}
            </div>
          </div>
        </div>
      </div>

      {/* Right-side content */}
      <div className="dashboard-content">
        {showCustomers ? (
          <Customers />
        ) : (
          <div className="default-content">
            <h2>Welcome to Dashboard</h2>
            <p>Select a menu item to view content</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
