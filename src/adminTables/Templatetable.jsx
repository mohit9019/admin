import axios from "axios";
import { useEffect, useState } from "react";
import "../css/usertable.css";
import Table from "./Table";
import ApiCaller from "../apiCaller.js/apiCaller";
const headers = [
  { keys: "_id", name: "ID" },
  { keys: "name", name: "Template Name" },
  { keys: "category", name: "Category" },
  { keys: "creator_id", name:"Creator"},
  { keys: "price", name: "Price" },
  // { keys: "sale", name: "Sales" },
  // { keys: "ratings", name: "Ratings" },
  { keys: "created_date", name: "Created Date" },
  // { keys: "remove", name: "Remove" }
];

const Templatetable = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'template/get',
      data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
      if (res && res.status_code == '1') {
        res.data.map(user=>{
          user['creator_id'] = user?.creator_id?.name ? user.creator_id?.name : '';
          user['created_date'] = new Date(user.created_date).toLocaleDateString();
        })
        setData(res.data);
      }
    })
  }, []);
  return (
    <div>
      <h4 className="dashboard-title"><i class="far fa-file-chart-line"></i> Templates Table</h4>
      <Table id="id" headers={headers} data={data} />
    </div>
  );
};
export default Templatetable;