import "../css/usertable.css";
import Table from "./Table";
const headers = [
    { keys: "id",   name: "ID" },
    { keys: "name", name: "Name" },
    { keys: "type",   name: "Type" },
    { keys: "gender",  name: "Gender" },
    { keys: "dob", name: "Date of Birth" },
    { keys: "email",  name: "Email" },
    { keys: "college",  name: "College" },
    { keys: "course",  name: "Course" },
    { keys: "remove", name:"Remove"}
  ];
  const data = [
    { id: 1001, name: 'Devarshi Mistri', type:"Creator", gender:"male", dob:"15/03/2002", email:"devarshimistri@gmail.com",college:"KS",course:"MScIT" , remove:<i class="far fa-minus-circle"></i>},
    { id: 1002, name: 'Krupali Sheth', type:"Creator", gender:"female", dob:"30/04/2003", email:"krupali09@gmail.com",college:"BK",course:"Bca" , remove:<i class="far fa-minus-circle"></i>},
    { id: 1003, name: 'Patel Manav', type:"Buyer", gender:"male", dob:"14/07/2001", email:"mamavp03@gmail.com",college:"",course:"" , remove:<i class="far fa-minus-circle"></i>},
    { id: 1004, name: 'Mohit Chauhan', type:"Creator", gender:"male", dob:"23/10/2005", email:"mohit28@gmail.com",college:"Shiv Shakti",course:"BscIT" , remove:<i class="far fa-minus-circle"></i>},
    { id: 1005, name: 'Shah Franie', type:"Creator", gender:"female", dob:"31/09/2002", email:"franie05@gmail.com",college:"Navrang",course:"EC" , remove:<i class="far fa-minus-circle"></i>},
    { id: 1006, name: 'Chandel Monika', type:"Buyer", gender:"female", dob:"28/04/2001", email:"monika15@gmail.com",college:"",course:"" , remove:<i class="far fa-minus-circle"></i>},
    { id: 1007, name: 'Prajapati Haresh', type:"Creator", gender:"male", dob:"15/07/2000", email:"haresh16@gmail.com",college:"Ahmedabad",course:"Bca" , remove:<i class="far fa-minus-circle"></i>},
  ];
  
  const Usertable = () => {
    return (
      <div>
        <h4 className="dashboard-title"><i class="far fa-user-friends"></i> Users Table</h4>
        <Table id="id" headers={headers} data={data} />
      </div>
    );
  };
export default Usertable;