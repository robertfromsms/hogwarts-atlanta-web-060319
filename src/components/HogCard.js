import React, { Component } from 'react';

export default class HogCard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showOrNotShow: false
		}
	}

	handleClick = (event) => {
		this.setState({showOrNotShow: !this.state.showOrNotShow})
	}

	showContent = () => {
		let hogNameFormated = this.props.pig.name.toLowerCase().split(" ").join("_")
		let picPath = require(`../hog-imgs/${hogNameFormated}.jpg`)
		let weight = this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']*310 

		return this.state.showOrNotShow ?
			(
				<div className="ui eight wide column">
	  				<div className="image">
	    				<img onClick={this.handleClick} src={picPath}/>
	  				</div>
	  				<div className="content">
	    				<a className="header">{this.props.pig.name}</a>
	  				</div>
    				<div className="description">
      					Highest Medal Achieved: {this.props.pig["highest medal achieved"].toUpperCase()}
      					<br/>
      					Speciality: {this.props.pig.specialty}
      					<br/>
      					Weight: {weight} lbs
      					<br/>
      					Greased: {this.props.pig.greased ? "Yes" : "No"}
    				</div>
				</div>
			)
		:
			(
				<div className="ui eight wide column">
	  				<div className="image">
	    				<img onClick={this.handleClick} src={picPath}/>
	  				</div>
	  				<div className="content">
	    				<a className="header">{this.props.pig.name}</a>
	  				</div>
				</div>
			) 
	}

	render() {
		return (
			this.showContent()
		)
	}
}