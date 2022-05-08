import axios from "axios";
import { useEffect } from "react";
import "../css/usertable.css";
import Table from "./Table";
import ApiCaller from "../apiCaller.js/apiCaller";
const headers = [
    { keys: "id",   name: "ID" },
    { keys: "name", name: "Template Name" },
    { keys: "user",  name: "Creator Name" },
    { keys: "category",   name: "Category" },
    { keys: "price",   name: "Price" },
    { keys: "sale", name: "Sales" },
    { keys: "ratings",  name: "Ratings" },
    { keys: "date",  name: "Created Date" },
    { keys: "remove", name:"Remove"}
  ];
  const data = [
    {id:"123",name:"Makaan",user:"devarshi mistri",category:"real estate",price:"700",sale:"3",ratings:"4/5",date:"04/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"124",name:"Shakti",user:"Prajapati Haresh",category:"Food",price:"900",sale:"5",ratings:"3/5",date:"06/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"125",name:"Zydus",user:"Shah Franie",category:"hospital",price:"150",sale:"7",ratings:"2/5",date:"06/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"126",name:"Rugby",user:"Patel Manav",category:"sports",price:"190",sale:"9",ratings:"3/5",date:"06/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"127",name:"Run",user:"devarshi mistri",category:"sports",price:"600",sale:"1",ratings:"2/5",date:"06/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"128",name:"vrasm",user:"devarshi mistri",category:"port-folio",price:"350",sale:"34",ratings:"1/5",date:"07/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"129",name:"Plastics",user:"Patel Manav",category:"others",price:"560",sale:"12",ratings:"4/5",date:"08/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"130",name:"Yanki",user:"Chandel Monika",category:"food",price:"680",sale:"8",ratings:"3/5",date:"08/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"131",name:"Dalal",user:"Krupali Sheth",category:"real estate",price:"390",sale:"10",ratings:"3/5",date:"09/05/2022",remove:<i class="far fa-minus-circle"></i> },
    {id:"132",name:"Kd hospital",user:"Mohit Chauhan",category:"hospital",price:"480",sale:"6",ratings:"2/5",date:"10/05/2022",remove:<i class="far fa-minus-circle"></i> },
  ];
  
  const Templatetable = () => {
    useEffect(() => {
      let apiCaller = new ApiCaller();
      apiCaller.postData({
        url: 'template/get',
        data:{} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
      }).then(res=>{
        if(res && res.status_code == '1'){
          console.log(res.data);
        }
      })
    },[]);
    return (
      <div>
        <h4 className="dashboard-title"><i class="far fa-file-chart-line"></i> Templates Table</h4>
        <Table id="id" headers={headers} data={data} />
      </div> 
    );
  };
export default Templatetable;