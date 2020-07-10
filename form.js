'use strict'; 

document.addEventListener('DOMContentLoaded', function() {
	console.log('loaded!'); 

	// Bind events
	bindEvents(); 
}); 

const bindEvents = function() {
  document.getElementById('button').addEventListener('click', clickBtn, false); 
  
}

const clickBtn = function(e) {
	e.preventDefault(); 
	insertText();	
	console.log('CLICK!!!!!!');
}

const insertText = function() {
	  let typedtext = document.getElementsByTagName('input').item(0).value;
	  document.getElementById('result').textContent = typedtext;
}

module.exports = { bindEvents, clickBtn, insertText };
