import UserList from './Components/UserList'
import { Container,Row } from 'react-bootstrap'
import NavBar from './Components/NavBar'
import AddUserForm from './Components/AddUserForm'
import React, { Component } from 'react';

class App extends Component {
   constructor(props){
       super(props);
       this.state = {users : [
           {
               name : 'boss',
               email:'b@gmail',
               number: '488',
               address: 'hshsj',
               jobrole: 'gsjks',
               salary : '299',
               id : 'bhsjjsjn'
           },
           {
            name : 'nameus',
            email:'v@gmail',
            number: '63788',
            address: 'fangk',
            jobrole: 'tak',
            salary : '747',
            id : 'bhsjjsjn'
        },
        {
            name : 'stop',
            email:'@ndndn',
            number: '38783',
            address: 'hhhh',
            jobrole: 'cdsgvh',
            salary : '733',
            id : 'bhsjjsjn'
        },
       ]}
   }


   handleAddUser = (newUser) => {
       newUser.id = Math.random().toString();
       this.setState({
           users: [...this.state.users,newUser]
       })
   }



    render() {
        

        return (
            <>
            <NavBar/>
            <Container fluid>
                
               <Row>
               <AddUserForm addUser={this.handleAddUser}/>
               </Row>
               <div className="user-list">
               <UserList users={this.state.users}/> 
               </div> 
            </Container>
            </>
        );
    }
}

export default App;

