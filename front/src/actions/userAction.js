import { ADD_USER ,GET_USER} from "./types"
import axios from "axios"

export const addUser = (newUser) =>(dispatch) =>{
  axios
        .post("http://localhost:5000/adduser",newUser)
        .then(({data}) => dispatch({
                type:ADD_USER,
                payload:data,
            }))
        .catch((err) => {
            alert("ERROR IN ADD NEW USER")
        });
    
        
        
};

export const  getuser = () =>(dispatch) =>{
    axios.get("http://localhost:5000/users")
       .then(({data}) => dispatch({
            type:GET_USER,
            payload:data,
        }))
    .catch(err=>{alert("ERROR IN GET USER")})
}



export const deleteuser = (id)=> (dispatch) =>{
    axios
    .delete(`http://localhost:5000/delete/${id}`)
    .then(() => dispatch(getuser()))
    .catch(err=>{alert("ERROR Deleteting")})
}
// export const updateuser=(id,newData)=>{
//     axios
//     .put(`http://localhost:5000/updateuser/${id}`,newData)
//     .then(()=> dispatch(getuser()))
//     .catch((err)=>{alert("ERROR updating user")})
    
// }