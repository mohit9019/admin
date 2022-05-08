import "../css/usertable.css";
import Table from "./Table";
import ApiCaller from "../apiCaller.js/apiCaller";
import { useEffect, useState } from "react";
const headers = [
    { keys: "_id",   name: "ID" },
    { keys: "template_id",   name: "Order ID" },
    { keys: "amount",   name: "Amount" },
    { keys: "status",   name: "Status" },
    { keys: "created_date",   name: "Transaction Date" },
  ];
  // const data = [
  //   {id:"123",orderid:"345",amount:"200",status:"pending",date:"03/04/2022"},
  //   {id:"124",orderid:"346",amount:"180",status:"success",date:"03/04/2022"},
  //   {id:"125",orderid:"347",amount:"300",status:"pending",date:"04/04/2022"},
  //   {id:"126",orderid:"348",amount:"470",status:"pending",date:"06/04/2022"},
  //   {id:"127",orderid:"349",amount:"230",status:"success",date:"06/04/2022"},
  // ];
  
  const Transactiontable = () => {
    
  const [data, setData] = useState([]);
  useEffect(() => {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'admin/transactions',
      data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
      if (res && res.status_code == '1') {
        res.data.map(user=>{
          user['created_date'] = new Date(user.created_date).toLocaleDateString();
        })
        setData(res.data);
      }
    })
  }, []);
    return (
      <div>
        <h4 className="dashboard-title"><i class="far fa-wallet"></i> Transaction Table</h4>
        <Table id="id" headers={headers} data={data} />
      </div>
    );
  };
export default Transactiontable;