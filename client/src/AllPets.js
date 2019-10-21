import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
    Link
  } from 'react-router-dom';

class AllPets extends Component {

  constructor(props){
    super(props);
    this.state = {
      pets: []
    }
  }




  componentDidMount (){
    axios.get("/api/petshelter")
      .then(res => {
        console.log(res)
        this.setState({pets: res.data});
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <>
      <h3>These pets are looking for a home!</h3>
      <table border ="1">
        <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
        {
          this.state.pets.map(p => 
            <tr key={p._id}>
              <td><strong>{p.Name}</strong></td>
              <td>{p.Type}</td>
              <td><Link to={"/petshelter/" + p._id}><button>Details</button></Link></td>
              <td><Link to={"/petshelter/" + p._id +"/edit"}><button>Edit</button></Link></td>

            </tr>
            )
        }
        </tbody>
      </table>
      </>
    );
  }
}


export default AllPets;
