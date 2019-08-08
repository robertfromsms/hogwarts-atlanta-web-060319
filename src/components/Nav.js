import piggy from '../porco.png'
import React from 'react'
import Button from './Button'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<Button funct="grease" greaseFun={props.greaseFun}/>
			<Button funct="weight" weightFun={props.weightFun}/>
			<Button funct="name" nameFun={props.nameFun}/>
		</div>
	)
}

export default Nav
