import React from 'react'

export default class App extends React.Component{
	constructor(){
		super()
		this.state={
			num:1,
			mate:true,
		}
	}
	handlePlu(num){
		this.setState({
			num:this.state.num+num
		})
	}
	hangdleChange(){
		this.setState({
			mate:!this.state.mate,
			height:!this.state.height
		})
	}
	render(){
		console.log(this.state)
		let styles={
			width:"300px",
			height:this.state.height ? "400px" : "100px",
			transition:"all 1s",
			background:"lightgreen"
		}
		return(
			<div>
			<p>数量是{this.state.num}</p>
			<button onClick={this.handlePlu.bind(this,1,4)}>+1</button>
			<button onClick={this.handlePlu.bind(this,-1)}>-1</button>
			<br />
			<p onClick={this.hangdleChange.bind(this)}>性别{this.state.mate ? "男":"女"}</p>
			<div style={styles}></div>
			</div>
			)
	}
}