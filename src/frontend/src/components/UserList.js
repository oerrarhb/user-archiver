import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import AppNavbar from "./AppNavBar";
import { Route,Link } from "react-router-dom";
import UserEdit from "./UserEdit";


class UserList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {users : []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount()
    {
        fetch('/users')
            .then(response => response.json())
            .then(data => this.setState({users:data}));
    }

    async remove(id)
    {
        await fetch(`/users/${id}`,
        {
            method : 'DELETE',
            headers : 
            {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(()=> {
            let updatedUsers = [...this.state.users].filter(user => user.id !== id);
            this.setState({users: updatedUsers});
        });
    }


    render()
    {
        const {users, isLoading} = this.state;
        if(isLoading)
        {
            return <p>Loading ...</p>
        }

        const usersList = users.map(user =>
            {
                return <tr key={user.id}>
                   <td style={{whiteSpace: 'nowrap'}}>{user.id}</td>
                   <td>{user.firstName}</td>
                   <td>{user.lastName}</td> 
                   <td>{user.email}</td> 
                   <td>
                       <ButtonGroup>
                       <Button size="sm" color="primary" tag={Link} to={"/users/" + user.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(user.id)}>Delete</Button>
                        <Route path='/users/:id' component={UserEdit}/>
                       </ButtonGroup>
                   </td>
                </tr>
            });

            return (
                <div>
                    <AppNavbar/>
                    <Container fluid>
                        <div style={{display:"inline-block", float:"right"}} className="float-right">
                            <Button color="success" tag={Link} to="/users/new">Add User</Button>
                            
                        </div>
                        <h3 style={{display : "inline-block"}} >Users</h3>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="10%">Id</th>
                                <th width="20%">First Name</th>
                                <th width="20%">Last Name</th>
                                <th width="30%">E-mail</th>
                                <th width="20%">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {usersList}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            );


    }


}



export default UserList;