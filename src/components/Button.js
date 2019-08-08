import React, {Component} from 'react'

export default class Button extends Component {
	constructor(props) {
		super(props)
	}

	grease = () => {
		return (
			<button className="ui pink button" onClick={this.props.greaseFun} >Greased or Not</button>
		)
	}

	weight = () => {
		return (
			<button className="ui pink button" onClick={this.props.weightFun} >Sort by Weight</button>
		)
	}

	name = () => {
		return (
			<button className="ui pink button" onClick={this.props.nameFun} >Sort by Names</button>
		)
	}

	render () {
		if (this.props.funct === "grease") {
			return this.grease()
		} 
		else if (this.props.funct ==="weight") {
			return this.weight()
		}
		else {
			return this.name()
		}
	}
}