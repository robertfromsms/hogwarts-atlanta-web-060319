import React, { Component } from 'react';
import HogCard from './HogCard'

export default class CardsContainer extends Component {
	constructor(props) {
		super(props)
	}
// formating hogs and other shit here
	
	render() {
		let aBunchofHogs = this.props.hogs.map((hog) => <HogCard pig={hog} />)
		
		return (
			<div className="ui grid container">
				{aBunchofHogs}
			</div>
		)
	}

}