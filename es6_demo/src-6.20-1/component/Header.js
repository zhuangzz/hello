import React from 'react';

export default class Header extends React.Component{
	// styles(){
	// 		return{
	// 		color:"blue",
	// 		textAlign:"center"
	// 	}}
	render(){
	let style={
		body:{
			width:"100px",
			height:"100px",
			backgroundColor:"yellow",
			marginLeft:"20px"
		},
		text:{
			color:"green",
			textAlign:"center",
			fontSize:"20px"
		}
	}

		return(
			<div>
				{/*<h1 style={this.styles()}>Header</h1>*/}
				<button style={Object.assign({},style.body,style.text)}>按钮</button>
				<button style={style.body}>按钮</button>
				<button style={style.body}>按钮</button>
				<button style={style.body}>按钮</button>
				<button style={{...style.body,...style.text}}>按钮</button>
			</div>)
	}
}