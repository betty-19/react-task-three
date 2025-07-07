import { useState, useEffect } from "react";
import "./Dashboard.css";
import Customers from "../../components/Customers/Customers.jsx";
import Profile from "../../assets/images/profile.png";

const Dashboard = () => {
  const [showCustomers, setShowCustomers] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [compactSidebar, setCompactSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setShowCustomers(menu === "customers");
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="dashboard-container">

      {isMobile && (
  <div className={`gear-toggle mobile-title ${compactSidebar ? "compact" : ""}`}>
  <i
  className="bi bi-gear"
  onClick={() => {
    setCompactSidebar((prev) => {
      const newState = !prev;
      if (!newState) {
        setSidebarOpen(true);
      }
      return newState;
    });
  }}
></i>

    {!compactSidebar && (
      <p>
        Dashboard <span>v.01</span>
      </p>
    )}
  </div>
)}

      <div
        className={`dashboard-wrapper ${compactSidebar ? "compact" : ""} ${
          isMobile ? "mobile-sidebar" : ""
        } ${sidebarOpen ? "open" : ""}`}
      >
        <div className="sidebar">
          <div className="sidebar-top">
            <div className="dashboard-title">
              {!isMobile && (
                <i
                  className="bi bi-gear"
                  onClick={() => setCompactSidebar((prev) => !prev)}
                ></i>
              )}
              {!isMobile && !compactSidebar && (
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
                  onClick={() => handleMenuClick(menu)}
                >
                  <div className="icon-title">
                    <i
                      className={`bi ${
                        menu === "dashboard"
                          ? "bi-house"
                          : menu === "product"
                          ? "bi-box"
                          : menu === "customers"
                          ? "bi-people"
                          : menu === "income"
                          ? "bi-currency-dollar"
                          : menu === "promote"
                          ? "bi-megaphone"
                          : "bi-question-circle"
                      }`}
                    ></i>
                    {!compactSidebar && (
                      <p>{menu.charAt(0).toUpperCase() + menu.slice(1)}</p>
                    )}
                  </div>
                  {!compactSidebar && <i className="bi bi-chevron-right"></i>}
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-bottom">
            {!compactSidebar && (
              <div className="access-pro">
                <p>Upgrade to PRO to get access all Features!</p>
                <button>Get Pro Now!</button>
              </div>
            )}

            <div className="login-user">
              <div className="user">
                <img src={Profile} alt="Profile" />
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

      {/* Main Content */}
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
  );
};

export default Dashboard;
