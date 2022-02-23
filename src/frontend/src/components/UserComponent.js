import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component
{
    constructor()
    {
        super(this.props);
        this.state = 
        {
            users :[]
        }
    }

    //Start Point
    componentDidMount()
    {
        UserService.getUsers().then((response) => {
            this.setState({ users : response.data})
        })
    }

    render()
    {
        return(
            <div>
                <h1 className= "text-center">Users List</h1>
                <table>className = "table table-striped"</table>
                <thead>
                    <tr>
                        <td>User ID</td>
                        <td>User First Name</td>
                        <td>User Last Name</td>
                        <td>User Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user => 
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.lastName}</td>
                                <td>{user.firstName}</td>
                                <td>{user.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </div>
        )
    }

}

export default UserComponent;