import React from "react"
import PropTypes from 'prop-types';
export default class Btn extends React.Component{
	render(){
	console.log(this.props)
	let styles={
		background:this.props.bg,
		// padding:this.props.pad||30+"px",
		// height:this.props.he+"px",
		// width:this.props.wi,
		borderRadius:this.props.bor,
		color:this.props.co,
		textAlign:this.props.ta,
		fontSize:this.props.fs
		}
	return(

			<button style={styles}>{this.props.children}</button>)
	}
}
Btn.defaultProps={
		co:"green",
		// he:80,
		// wi:"140px",
		bor:"50%",
		bg:"yellow",
		ta:"center",
		fs:"30px"
	}
Btn.propTypes = {
  he: PropTypes.number
}