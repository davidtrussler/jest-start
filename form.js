'use strict'; 

document.addEventListener('DOMContentLoaded', function() {
	bindEvents(); 
}); 

const bindEvents = function() {
  document.getElementById('button').addEventListener('click', clickBtn, false); 
}

const clickBtn = function(e) {
	e.preventDefault(); 
	// insertText();	
	copyContent();
}

// const insertText = function() {
// 	  let typedtext = document.getElementsByTagName('input').item(0).value;
// 	  document.getElementById('result').textContent = typedtext;
// }

const copyContent = function() {
		
}

module.exports = { bindEvents, clickBtn, insertText };
