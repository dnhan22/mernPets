import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';


class EditPet extends Component {

constructor(props) {
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
    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(`/api/petshelter/${_id}`)
          .then(res => {
              console.log(res.data);
            this.setState({pet: res.data});
          })
          .catch(err => console.log(err));
      }
    changeName = e => {
        let pet = {...this.state.pet};
        pet.Name = e.target.value;
        this.setState({pet: pet});
        console.log(this.state.pet.Name);
    }
    changeType = e => {
        let pet = {...this.state.pet};
        pet.Type = e.target.value;
        this.setState({pet: pet});
    }
    changeDescription = e => {
        let pet = {...this.state.pet};
        pet.Description = e.target.value;
        this.setState({pet: pet});
    }
    changeSkill_1 = e => {
        let pet = {...this.state.pet};
        pet.Skill_1 = e.target.value;
        this.setState({pet: pet});
    }
    changeSkill_2 = e => {
        let pet = {...this.state.pet};
        pet.Skill_2 = e.target.value;
        this.setState({pet: pet});
    }
    changeSkill_3 = e => {
        let pet = {...this.state.pet};
        pet.Skill_3 = e.target.value;
        this.setState({pet: pet});
    }
    editPet = e => {
        e.preventDefault();
        let _id = this.props.match.params._id;
        axios.put(`api/petshelter/${_id}/edit`, this.state.pet)
        .then(res => {
            console.log(res);
        if(res.data.errors){
            this.setState({errors: res.data.errors});
        } else {
            this.props.history.push("/")
        }
        })
        .catch(err => console.log(err));
    }
      render(){
        return (
        <form onSubmit={this.editPet}>
        <p>Pet Name:</p>
        <input 
            type="text" 
            placeholder="Name" 
            onChange={this.changeName} 
            value={this.state.pet.Name} 
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
            value={this.state.pet.Type}
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
            value={this.state.pet.Description}
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
            value={this.state.pet.Skill_1}
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
            value={this.state.pet.Skill_2}
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
            value={this.state.pet.Skill_3}
        />
        {
            this.state.errors.Skill_3 ?
            <span>{this.state.errors.Skill_3.message}</span> :
            ""
        }<br/>
        <input type="submit" value="Edit Pet" />
        &nbsp;
        <Link to="/"><button>Cancel</button></Link>
        </form>

        );
      }
    }
export default EditPet;
