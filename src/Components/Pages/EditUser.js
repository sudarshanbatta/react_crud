import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";

const EditUser = () => {
    const params = useParams();
    const history = useHistory()
    const { id } = params;
    const [user, editUser] = useState({
        name: "",
        email: "",
        website: "",
        phone: "",
        username: ""
    })
    const { name, email, website, phone, username } = user
     useEffect(()=>{
        loadUser()
     },[])

     const onChangeUser = (e) =>{
       editUser({...user,[e.target.name]:e.target.value})
     }
     const loadUser = async ()=>{
      const result = await axios.get(`http://localhost:3003/users/${id}`)
       editUser(result.data);
     }

     const onSubmit = async e =>{
         e.preventDefault();
         await axios.put(`http://localhost:3003/users/${id}`,user)
         history.push("/")
     }

    return (
        <div className="container">
            <div className="w-50 mx-auto shadow p-5">
                <h5 className="text-center mb-4">EDIT USER</h5>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            className="form-control form-control-lg"
                            value={name}
                            onChange={(e) => onChangeUser(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            className="form-control form-control-lg"
                            value={username}
                            onChange={(e) => onChangeUser(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => onChangeUser(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            name="phone"
                            className="form-control form-control-lg"
                            value={phone}
                            onChange={(e) => onChangeUser(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter website"
                            name="website"
                            className="form-control form-control-lg"
                            value={website}
                            onChange={(e) => onChangeUser(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Edit User</button>
                </form>
            </div>
        </div>
    )
}
export default EditUser;