import { Card,Button,Container,Row,Col } from 'react-bootstrap'
import './User.css'
import React from 'react';

const User = ({user}) => {
    return (
        <div className='user' key={user.id}>
        <Container>
            <Row>
            <Col sm={6}>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Added Employee</Card.Title>
            <Card.Text>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Phone Number : {user.number}</p>
            <p>Home Address : {user.address}</p>
            <p>Job Role : {user.jobrole}</p>
            <p>Current Salary : {user.salary}</p>
            </Card.Text>
            <Button style={{marginRight : '10px' }} variant="outline-secondary">Edit</Button>
            <Button variant="outline-danger">Delete</Button>
        </Card.Body>
        </Card>
           </Col>
           </Row>
        </Container>
        </div>
        
    );
}

export default User;

