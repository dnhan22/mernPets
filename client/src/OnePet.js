import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class OnePet extends Component {

  constructor(props){
    super(props);
    this.state = {
      pet: {}
    }
  }




  componentDidMount (){
      let _id = this.props.match.params._id;
    axios.get(`/api/petshelter/${_id}`)
      .then(res => {
        this.setState({pet: res.data});
      })
      .catch(err => console.log(err));
  }

  delete = (_id, e) => {
    e.preventDefault();
    axios.delete(`/api/petshelter/${_id}`)
    .then(res => {
        console.log(res);
    if(res.data.errors){
            console.log(res.data.errors);
    } else {
        this.props.history.push("/")
    }
    })
    .catch(err => console.log(err));
  }


  render(){
    return (
      <>
        <h3>Details about {this.state.pet.Name}</h3>
        <p>Pet Type: {this.state.pet.Type}</p>
        <p>Description: {this.state.pet.Description}</p>
        <p>Skills:</p>
        {this.state.pet.Skill_1} <br/>
        {this.state.pet.Skill_2} <br/>
        {this.state.pet.Skill_3} <br/>
            <a href="/"onClick={this.delete.bind(this, this.state.pet._id)}>
            <button>Adopt this pet</button>
            </a>
        </>
    );
  }
}

export default OnePet;
