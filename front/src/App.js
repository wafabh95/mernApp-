import { useSelector,useDispatch } from "react-redux";
import {useState} from 'react'
import{ addUser } from "./actions/userAction"
import UserList from "./Components/UserList"

function App() {
  const users = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch();
  const [ form , setForm ] = useState({fname:"",lname:""});
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  return (
    <div className="App">
         {/* {users} */}
         
         <label>fname</label>
         <input onChange={handleChange} name="fname" type="text" placeholder="Entrer your firstName"/>

        
         <label>lname</label>
         <input onChange={handleChange} name="lname" type="text" placeholder="Entrer your lastName"/>

        <button onClick={()=>dispatch(addUser(form))}>add new User</button>
        
      <UserList/>
    </div>
  );
}

export default App;
