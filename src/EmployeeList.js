import { useEffect, useState } from "react";
import Employee from "./Employee";




function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
            name: "qwer",
            email: "qwer@asdf.asdf",
            phone: "12341234",
            skills: "qwerqwer,qwerqwre,qwer",
            avatar: "https://i.imgur.com/Q9qFt3m.png"
        }]);
    const [count, setCount] = useState(0);

    function generateNewProfile(count) {
        var newProfile;
        switch (count) {
            case 1:
                newProfile = {
                name: "asdf",
                email: "asd@asdf.asdf",
                phone: "3456345646",
                skills: "sdgfsdg,dsfgsdgsd,sdgsdg",
                    avatar: "https://i.imgur.com/ebHfuth.png"
                }  
                break;
            case 2:
                newProfile = {
                    name: "zxcv",
                    email: "zxcv@asdf.asdf",
                    phone: "78696789679",
                    skills: "xcvbxcvb,xcvbxcvb,xcvbxcvb",
                    avatar: "https://i.imgur.com/TUhCrsY.png"
                }
                break;
            case 3:
                newProfile = {
                    name: "tyui",
                    email: "tyui@asdf.asdf",
                    phone: "45674567",
                    skills: "uiopuiop,uiopuipo,uiopuiop",
                    avatar: "https://i.imgur.com/t9HFQvX.png"
                }
                break;
            default:
                newProfile = {
                    name: "tyui",
                    email: "tyui@asdf.asdf",
                    phone: "45674567",
                    skills: "uiopuiop,uiopuipo,uiopuiop",
                    avatar: "https://i.imgur.com/t9HFQvX.png"
                }
                break;
        }
        return newProfile;
    }

    function handelAddEmployee() {
        setCount(count + 1);
        setEmployees(employees.concat(generateNewProfile(count)));
    }

    return (
        <div>
            <h3>Employeelist</h3>
            <button className="button" onClick={handelAddEmployee}>Add Employee</button>
            {employees.map((emp) => (
                <Employee EmployeeData={emp}/> 
            ))}
        </div>
        );
}

export default EmployeeList;