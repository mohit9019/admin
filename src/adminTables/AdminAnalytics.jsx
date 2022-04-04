import React from "react";
import "../css/adminanalytics.css";
const AdminAnalytics=()=>{
    return(
        <>
                <h4 className="dashboard-title"><i class="far fa-analytics"></i>Dashboard</h4>
                <div class="dashboard">
                <div class="admin-graph">
                    <div class="uper-chart">
                    <iframe style={{background:"#FFFFFF",border:"none",borderRadius:"8px",transition: "all 0.4s ease",width:"47%",height:"300"}} src="https://charts.mongodb.com/charts-project-0-fawnn/embed/charts?id=62433dd8-1279-46f5-86c3-4eedd064d184&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
               
                    <iframe style={{background:"#FFFFFF",border:"none",borderRadius:"8px",transition: "all 0.4s ease",width:"47%",height:"300"}} src="https://charts.mongodb.com/charts-project-0-fawnn/embed/charts?id=62456039-d994-496f-82c3-ee4c0c1e4bae&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
                    </div>
                    <div class="lower-chart">
                    <iframe style={{background:"#FFFFFF",border:"none",borderRadius:"8px",transition: "all 0.4s ease",width:"100%",height:"400px"}} src="https://charts.mongodb.com/charts-project-0-fawnn/embed/charts?id=62457097-d994-4414-8739-ee4c0c24695d&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
                  </div>
                </div>

                <div class="count-div">
                    <div class="user-count">
                    <h4> <span><i class="fad fa-users"></i></span> 5000</h4>
                    <span>Users</span>
                     </div>
                     <div class="user-count">
                        <h4><span><i class="fad fa-browser"></i></span> 356</h4>
                        <span>Template Uploaded</span>
                         </div>
                         <div class="user-count">
                            <h4> <sapn><i class="fad fa-chart-line"></i></sapn>230</h4>
                            <span>Sales</span>
                          </div>
                </div>
                 </div>
        </>
    );
}
export default AdminAnalytics;