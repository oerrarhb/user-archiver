import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import AppNavbar from "./AppNavBar";






class Home extends Component
{
    render()
    {
        return(
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link">
                        <Link to="/users">Users</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Home;