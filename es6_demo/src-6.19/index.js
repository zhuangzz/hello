import React from 'react';//语法错误时可以用babel自动转换
import ReactDOM from 'react-dom';
import Header from "./Header"
import Nav from "./Nav"
// import "./main.css"
// let d=false

let s='hello nan'
let a=123
// 	<p className={s}>{s}sksk</p>
// 	{/*<p>{8*12}</p>*/}
// 	<p>{d ? "123":"321"}</p>
// </div>
ReactDOM.render(
	<div>
		{a}{s}
		<Header></Header>
		<Header />
		<Nav />
	</div>
// ReactDOM.render(<World />
,document.getElementById('root'))








//标签区分大小写 h1; 'H1' is not defined  react/jsx-no-undef
//必须有结束标签,没有结束标签的要写自关闭 / 例如<img src='' /> 
//每个react 节点必须包裹在一个闭合标签内部,不能<p></p><p></p>只能<div><p></p><p></p></div>
//标签上class要写成className，for写成htmlFor




























































