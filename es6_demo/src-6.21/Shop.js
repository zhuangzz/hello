import React from "react";

export default class Shop extends React.Component{
	constructor(){
		super()
		this.state={
			shop:[
			{name:"洗发水",price:28,number:10},
			{name:"眉笔",price:25,number:20},
			{name:"护肤水",price:30,number:15},
			{name:"防晒霜",price:40,number:25}
			]
		}
	}
	handleNum(index,num){
		let newShop=this.state.shop;
		newShop[index].number=newShop[index].number+num;
		this.setState({
			shop:newShop
		})
	}
	// handleDe(index){
	// 	console.log(index)
	// 	let newShop=this.state.shop;
	// 	newShop.splice(index,1);
	// 	this.setState({shop:newShop})
	// }
    handleDe(i){
    		this.setState({
				shop:this.state.shop.filter((item,index)=>index!==i)
    })
  	}
	render(){
		let result=0;
		this.state.shop.forEach(item=>result+=(item.price*item.number))
		return (<div>
			{
			this.state.shop.length===0 ? 'haha': <table style={{width:"100%",textAlign:"center"}}>
			<thead>
				<tr>
					<th>商品名称</th>
					<th>单价</th>
					<th>数量</th>
					<th>合计</th>
					<th>删除</th>
				</tr>
			</thead>
			<tbody>
				{
				this.state.shop.map((item,index)=>
				<tr key={index}>
					<td>{item.name}   </td>
					<td>{item.price}   </td>
					<td>
						<button onClick={this.handleNum.bind(this,index,-1)}>-</button>
							{item.number}
						<button onClick={this.handleNum.bind(this,index,1)}>+</button>
					</td>
					<td>{item.price*item.number}</td>
					<td><buttion onClick={this.handleDe.bind(this,index)}>删除</buttion></td>
				</tr>
				)
			}
				<tr><td>总价：{result}</td></tr>
			</tbody>
			
				</table>
			  } </div>)
	}
}