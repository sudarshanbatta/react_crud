import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users')
        setUsers(result.data.reverse())
    }
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers()
    }

    return (
        <div className="container">
            <div className="py-4"> <h4>User Details</h4></div>
            <table className="table table-dark table-striped table-hover border shadow table-sm">
                <thead className="thead-success">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link className="btn btn-primary btn-sm mr-2 " to={`/user/${item.id}`}><i class="fas fa-eye"></i></Link>
                                    <Link className="btn btn-success btn-sm mr-2" to={`/edit/${item.id}`}><i class="fas fa-pencil-alt"></i></Link>
                                    <Link className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}><i class="fas fa-trash"></i></Link>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home;