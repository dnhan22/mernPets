import React, { Component } from 'react';
import './App.css';
import AllPets from './AllPets';
import NewPet from './NewPet';
import OnePet from './OnePet';
import EditPet from './EditPet';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div class="p-3 mb-2 bg-info text-white">

      <h1>Pet Shelter</h1>
      </div>

      <Link to="/">Home</Link>
      &nbsp;&nbsp;
      <Link to="/new">Add a pet to the shelter</Link>

      &nbsp;&nbsp;
      <Route exact path="/" component={AllPets} />
      <Route path="/new" component={NewPet} />
      <Route exact path="/petshelter/:_id" component={OnePet} />
      <Route path="/petshelter/:_id/edit" component={EditPet} />

      </BrowserRouter>
    );
  }
}


export default App;
