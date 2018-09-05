import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import './App.css';

const PATH_BASE = 'http://api.petfinder.com/';
const PATH_METHOD = 'pet.getRandom?';
const PATH_KEY = '&key=fcbfa080699b09531eb04df767036e85';
const PATH_ARG = '&arg1=dog'


const url = `${PATH_BASE}${PATH_METHOD}${PATH_KEY}${PATH_ARG}`;
console.log(url);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
    };


    this.fetchSearch = this.fetchSearch.bind(this);
    this.setPet = this.setPet.bind(this);

  }

  fetchSearch(){
    //http://api.petfinder.com/pet.getRandom?key=fcbfa080699b09531eb04df767036e85&arg1=dog
    
    fetchJsonp('http://api.petfinder.com/pet.getRandom?key=fcbfa080699b09531eb04df767036e85&type=dog&location=78703&output=full&format=json').then(response =>{return response.json()}).then(json=>{this.setPet(json.petfinder.pet)});

  }
  setPet(result){
    console.log(result);
    console.log(result.media.photos)


    this.setState({results: result});
  }

 

  render() {
    const {item} = this.state;
    return (
      <div className="Page">

     
     <FormContainer/>


        






      </div>
     

     
    );
  }
}

const FormContainer = () =>{
  return(
       <div class="container">
          <form id="pet-form">
                <div class="form-group">
                  <label for="animal">Animal</label>
                  <select id="animal" class="form-control form-control-lg mb-3">
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="bird">Bird</option>
                    <option value="barnyard">Barnyard</option>
                  </select>
                  <input type="text" id="zip" class="form-control form-control-lg" placeholder="Enter your zipcode"/>
                  <input type="submit" value="Find" class="btn btn-dark btn-lg btn-block mt-3" />
                </div>
            </form>

          <div id="results"></div>
       </div>


  );
}

export default App;
