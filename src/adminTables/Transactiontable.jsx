import "../css/usertable.css";
import Table from "./Table";
const headers = [
    { keys: "id",   name: "ID" },
    { keys: "orderid",   name: "Order ID" },
    { keys: "amount",   name: "Amount" },
    { keys: "status",   name: "Status" },
    { keys: "date",   name: "Transaction Date" },
  ];
  const data = [
    {id:"123",orderid:"345",amount:"200",status:"pending",date:"03/04/2022"},
    {id:"124",orderid:"346",amount:"180",status:"success",date:"03/04/2022"},
    {id:"125",orderid:"347",amount:"300",status:"pending",date:"04/04/2022"},
    {id:"126",orderid:"348",amount:"470",status:"pending",date:"06/04/2022"},
    {id:"127",orderid:"349",amount:"230",status:"success",date:"06/04/2022"},
  ];
  
  const Transactiontable = () => {
    return (
      <div>
        <h4 className="dashboard-title"><i class="far fa-wallet"></i> Transaction Table</h4>
        <Table id="id" headers={headers} data={data} />
      </div>
    );
  };
export default Transactiontable;