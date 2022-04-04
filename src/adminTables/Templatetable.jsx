import "../css/usertable.css";
import Table from "./Table";
const headers = [
    { keys: "id",   name: "ID" },
    { keys: "name", name: "Name" },
    { keys: "age",  name: "Age" },
    { keys: "id",   name: "ID" },
    { keys: "name", name: "Name" },
    { keys: "age",  name: "Age" },
  ];
  const data = [
    { id: 1, name: 'mohit',  age: 20, id: 1, name: 'mohit',  age: 20},
    { id: 2, name: 'dev',   age: 20, id: 1, name: 'mohit',  age: 20},
    { id: 3, name: 'manav',   age: 20, id: 1, name: 'mohit',  age: 20},
    { id: 1, name: 'mohit',  age: 20, id: 1, name: 'mohit',  age: 20},
  ];
  
  const Templatetable = () => {
    return (
      <div>
        <h4 className="dashboard-title"><i class="far fa-file-chart-line"></i> Templates Table</h4>
        <Table id="id" headers={headers} data={data} />
      </div> 
    );
  };
export default Templatetable;