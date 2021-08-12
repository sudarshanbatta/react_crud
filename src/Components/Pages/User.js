import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
const User = () => {
    const params = useParams();
    const history = useHistory()
    const { id } = params;
    const [user, setUser] = useState({
        name: "",
        email: "",
        website: "",
        phone: "",
        username: ""
    })
    useEffect(() => {
        loadUser()
    }, [])

    // /const { name, email, website, phone, username } = user
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data);
    }

    return (
        <div className="container">
            <Link className="btn btn-primary mt-3" to="/">Back To Home</Link>
            <h2 className="display-6 mt-3">User Id :{id}</h2>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">User Name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
            </ul>
        </div>
    )
}
export default User;