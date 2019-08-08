import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import CardsContainer from './CardsContainer'

class App extends Component {
  constructor() {
  	super()
  	this.state= {
  		hogs: hogs,
  		changedHogs: hogs
  	}
  }

  nameFun = (event) => {
  	let changedHogs = this.state.hogs.sort((hog1, hog2) => {return (hog1.name.charCodeAt(0) - hog2.name.charCodeAt(0))})
  	this.setState({changedHogs: changedHogs})
  	return null
  }

  greaseFun = (event) => {
  	let changedHogs = this.state.hogs.filter((hog) => hog.greased)
  	this.setState({changedHogs: changedHogs})
  	return null
  }

  weightFun = (event) => {
  	let changedHogs = this.state.hogs.sort((hog1, hog2) => {return hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})
  	this.setState({changedHogs: changedHogs})
  	return null
  }

  render() {
    return (
      <div className="App">
          <Nav nameFun={this.nameFun} greaseFun={this.greaseFun} weightFun={this.weightFun} />
          <CardsContainer hogs={this.state.changedHogs} />
      </div>
    )
  }
}

export default App;
