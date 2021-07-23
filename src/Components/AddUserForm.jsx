import { Form,Button } from 'react-bootstrap'
import './AddUserForm.css'
import React, { Component } from 'react';

class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
               name : '',
               email:'',
               number: '',
               address: '',
               jobrole: '',
               salary : '',
        }
    }
 
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addUser(this.state)

        this.setState({
               name : '',
               email:'',
               number: '',
               address: '',
               jobrole: '',
               salary : '',
        })
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleChange} 
                        value={this.state.name} placeholder="Enter Your FullName" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handleChange} 
                        value={this.state.email} placeholder="Example@gmail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" name="number" onChange={this.handleChange} 
                        value={this.state.number} placeholder="Your Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Home Address</Form.Label>
                        <Form.Control type="text" name="address" onChange={this.handleChange} 
                        value={this.state.address} placeholder="Your House Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Job Role</Form.Label>
                        <Form.Control type="text" name="jobrole" onChange={this.handleChange} 
                        value={this.state.jobrole} placeholder="Your Job Role" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Current Salary</Form.Label>
                        <Form.Control type="number" name="salary" onChange={this.handleChange} 
                        value={this.state.salary} placeholder="Your Current Salary" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Employee
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddUserForm;
