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


const copyContent = function() {
		
}

module.exports = { bindEvents, clickBtn, insertText };
