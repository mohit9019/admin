import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const AdminSidebar=()=>{
    const [togglesidebar, setTogglesidebar]=useState(0);
    const SidebarActive =(index) =>{
        setTogglesidebar(index); 
    }
    return(
        <>
            <div class="admin-sidemenu">
                <div className="sidebar-background">
                <div class="admin-logo">
                <p className="logo"><span className="v">V</span>RASM</p>
                </div>
                <div class="admin-list">
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li onClick={()=>SidebarActive(0)} className={togglesidebar===0?"active-tab":null}><span><i class="fad fa-analytics"></i>Dashboard</span></li>
                    </Link>
                    <Link to="/templates" style={{ textDecoration: "none" }}>
                        <li onClick={()=>SidebarActive(1)} className={togglesidebar===1?"active-tab":null}><span><i class="far fa-file-chart-line"></i>Templates</span></li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li onClick={()=>SidebarActive(2)} className={togglesidebar===2?"active-tab":null}><span><i class="far fa-user-friends"></i>Users</span></li>
                    </Link>
                    <Link to="/transactions" style={{ textDecoration: "none" }}>
                        <li onClick={()=>SidebarActive(3)} className={togglesidebar===3?"active-tab":null}><span><i class="far fa-wallet"></i>Transactions</span></li>
                    </Link>
                </ul>
            </div>
            <div className="clip-div">
                <img src="./images/sidebarclip2.png" className="analys-clip" />
            </div>
            </div>
            </div>
        </>
    );
}
export default AdminSidebar;