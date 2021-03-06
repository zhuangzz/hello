import React from "react"
let eats = ['白菜','香蕉','菠萝','西瓜','豆芽','豆腐','苹果','apple','banana','melon','origin','pees','doudou','ohohoh','success','oh it is hard'];
export default class Random extends React.Component{
	constructor(){
		super()
		this.state={
			start:false,
			what:"请开始"
		}
	}
	random(){
		this.setState({
			what:eats[Math.floor(Math.random()*eats.length)]
		})
	}
	handleStart(){
		if(this.state.start){
			//停止
			clearInterval(this.timer)
		}else{
			this.timer=setInterval(this.random.bind(this),250)
		}
		this.setState({start:!this.state.start})
	}
	render(){
		return(
			<div>
				<h1>今天吃什么: {this.state.what}</h1>
				<button onClick={this.handleStart.bind(this)}>{this.state.start ? "停止":"开始"}</button>
			</div>)
	}
}