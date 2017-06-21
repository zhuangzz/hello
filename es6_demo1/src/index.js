
// function ji(q,w,...rest){
// 	console.log(q,w)
// 	return rest
// }
// console.log(ji(1,2,3,4,5,6,7,8))
//1 2
//[3, 4, 5, 6, 7, 8]
//rest可以换成任何字母
//return后面不再读


// console.log(isNaN(Number('a')))
//true

// function sum(...xx){
// 	let a=0
// 	for (let i=0;i<xx.length;i++){
// 		if(isNaN(xx[i])) continue;
// 		a+=xx[i]
// 	}
// 	return a
// }
// console.log(sum(1,2,3,'w',4,5,6,7,8))
// //36
//a+=xx[i]变成a+=Number(xx[i])后面“”里可以是空


// let arr4=[1,2,3,4]
// let arr5=[6,7,8,9]
// let ar=arr4.concat(arr5,[999])
// //数组[1, 2, 3, 4, 6, 7, 8, 9, 999]
// let arr7=[1,2,3,4]
// let arr8=[6,7,8,9]
// let arr=[...arr7,...arr8,999,666]
// //展开数组 [1, 2, 3, 4, 6, 7, 8, 9, 999, 666]
// console.log(ar,'\n',arr)


// let a="mengxiang"
// let b=a.toUpperCase()
// console.log(b)



// class Pers{//类首字母大写
// 	// 只能写方法 
// 	//constructor,自动执行，接收实例对象的参数
// 	constructor(name){
// 		this.name=name
// 		// console.log(this.name)
// 	}
// 	say(){
// 		// console.log(this.name)
// 	}
// }
// class Woman extends Pers{
// 	constructor(name,tall,sex){
// 		super(name)//继承父类所有属性
// 		this.tall=tall
// 		this.sex=sex
// 	}run(){
// 		console.log(88)
// 	}
// }
// // var name=new Pers('haha')
// // name.say()
// var lili=new Woman('nan',122,'nv')
// console.log(lili)
// lili.say()
// lili.run()



// class Pers{
// 	constructor(name){
// 		this.name=name
// 	}
// 	say(){
// 	}
// }
// class Woman extends Pers{
// 	constructor(name,tall,sex){
// 		super(name)
// 		this.tall=tall
// 		this.sex=sex
// 	}run(){
// 		console.log(88)
// 	}
// }
// var lili=new Woman('nan',122,'nv')
// console.log(lili)
// lili.say()
// lili.run()
 





//在test.js里var a=3;
// var b=4;
// var c=5;
// var v=0;
// class Name{
// 	constructor(name){		
//  		this.name=name
// 	}
// 	say(){}
// }
// //第一种导出变量，命名倒出
// export{a,b,c,v,Name}

//在index,js中
// import {a as b,Name as N}from'./test.js'
// //用后面的代替前边的
// var nam=new N("huihui")
// console.log(b,nam)
//结果3 4 5 0 Name {name: "huihui"}
// import * as cc from'./test.js'
// console.log(cc)


// import ccc from'./test.js'
// console.log(ccc(6,8))
// import _ from 'lodash'
// console.dir(_)

// let sum=[1,2,3].filter(function(element){
// 	console.log(element)
// 	// return element>2
// 	return 1
// })
// console.log(sum)



// let arr=['dd','rrr','wwwww'];
// let res=arr.map(item=>`<h1>${item}</h1>`)
// console.log(res)
// let text='';
// // for (var i = 0; i <res.length; i++) {
// // 	text+=res[i]
// // }
// res.forEach(item => text+=item)//前三行
// document.write(text)



// let arr=[
// 	{name:'n',age:11},
// 	{name:'na',age:12},
// 	{name:'nan',age:13},
// 	{name:'an',age:14},
// 	{name:'a',age:15}
// ]
// let index=arr.findIndex(item=>item.age===14)
// console.log(index)



//对象拼接
//后面覆盖
let obj1={
	name:'meng',
	age:76
}
let obj2={
	tall:234
}

// var res=Object.assign({},obj1,obj2)
console.log(Object.assign({},obj1,obj2,{name:'msms'}))



















