import React from 'react';
import ReactDOM from 'react-dom';
import Wor from './Wor';
import Header from'./component/Header.js';
import Main from'./component/Main.js';
import Footer from'./component/Footer.js';
let i=document.querySelector('#root')

ReactDOM.render(
	<div>
		<Wor />
		<Header />
		<Main />
		<Footer />
	</div>,i)