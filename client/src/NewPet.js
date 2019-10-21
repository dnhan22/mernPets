import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';


class NewPet extends Component {

  constructor(props){
    super(props);
    this.state = {
      pet: {
        Name: "",
        Type: "",
        Description: "",
        Skill_1: "",
        Skill_2: "",
        Skill_3: "",
        }, 
        errors: {
        Name: "",
        Type: "",
        Description: "",
        Skill_1: "",
        Skill_2: "",
        Skill_3: "",
        }
    }
  }

addPet = e => {
    e.preventDefault();
    axios.post("/api/petshelter", this.state.pet)
    .then(res => {
        console.log(res);
        if(res.data.errors){
            this.setState({errors: res.data.errors});
        } else {
            this.props.history.push("/");
        }
    })
    .catch(err => console.log(err));
}
changeName = e => {
    this.setState({pet:{...this.state.pet, Name:e.target.value}});
}
changeType = e => {
    this.setState({pet:{...this.state.pet, Type:e.target.value}});
}
changeDescription = e => {
    this.setState({pet:{...this.state.pet, Description:e.target.value}});
}
changeSkill_1 = e => {
    this.setState({pet:{...this.state.pet, Skill_1:e.target.value}});
}
changeSkill_2 = e => {
    this.setState({pet:{...this.state.pet, Skill_2:e.target.value}});
}
changeSkill_3 = e => {
    this.setState({pet:{...this.state.pet, Skill_3:e.target.value}});
}


  render(){
    return (
      <>
      <h3>Know of a pet needing a home?</h3>
      <form onSubmit={this.addPet}>
      <input 
            type="text" 
            placeholder="Name" 
            onChange={this.changeName} 
        />
        {
            this.state.errors.Name ?
            <span>{this.state.errors.Name.message}</span> :
            ""
        }
        <p>Pet Type:</p>
        <input 
            type="text" 
            placeholder="Type" 
            onChange={this.changeType} 
        />
        {
            this.state.errors.Type ?
            <span>{this.state.errors.Type.message}</span> :
            ""
        }
        <p>Description:</p>
        <input 
            type="text" 
            placeholder="Description" 
            onChange={this.changeDescription} 
        />
        {
            this.state.errors.Description ?
            <span>{this.state.errors.Description.message}</span> :
            ""
        }
        <p>Skills:</p>
        Skill 1:&nbsp;<input 
            type="text" 
            placeholder="Skill 1" 
            onChange={this.changeSkill_1} 
        />
        {
            this.state.errors.Skill_1 ?
            <span>{this.state.errors.Skill_1.message}</span> :
            ""
        } <br/>
        Skill 2:&nbsp;<input 
            type="text" 
            placeholder="Skill 2" 
            onChange={this.changeSkill_2} 
        />
        {
            this.state.errors.Skill_2 ?
            <span>{this.state.errors.Skill_2.message}</span> :
            ""
        }<br/>
        Skill 3:&nbsp;<input 
            type="text" 
            placeholder="Skill 3" 
            onChange={this.changeSkill_3} 
        />
        {
            this.state.errors.Skill_3 ?
            <span>{this.state.errors.Skill_3.message}</span> :
            ""
        }<br/>
          
          <input type= "submit" value="Add pet" />
          &nbsp;
          <Link to="/"><button>Cancel</button></Link>

      </form>
      </>
    );
  }
}


export default NewPet;
