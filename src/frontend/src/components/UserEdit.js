import { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from "./AppNavBar";

class UserEdit extends Component
{
    emptyItem = {
        firstName : '',
        lastName : '',
        email : '',
    }

    constructor(props)
    {
        super(props);
        this.state = {
            item : this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    async componentDidMount()
    {
        if(this.props.match.params.id !=='new')
        {
            const user = await (await fetch(`/users/${this.props.match.params.id}`)).json();
            this.setState({item:user});
        }
    }


    handleChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event)
    {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/users' + (item.id ? '/' + item.id : ''),
        {
            method : (item.id) ? 'PUT' : 'POST',
            headers : 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(item),
        });
        this.props.history.push('/users');
    }


    render()
    {
        const {item} = this.state;
        console.log(item.id);
        const title = <h2>{item.id ? 'Edit User': 'Add User'}</h2>

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={item.firstName || ''} onChange={this.handleChange} autoComplete = "firstName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={item.lastName || ''} onChange={this.handleChange} autoComplete = "lastName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-Mail</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''} onChange={this.handleChange} autoComplete = "email"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/users">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>

    }
}

export default withRouter(UserEdit);