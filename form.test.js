/**
 * @jest-environment jsdom
 */

// const form = require('./form');
// import {bindEvents, clickBtn} from './form';
const { bindEvents, clickBtn, insertText } = require('./form')

// console.log(form); 

// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, './form.htm'), 'utf8');
// jest.dontMock('fs'); 

test('inserting content', () => {
 document.body.innerHTML = `
    <form>
			<label for="this">enter text</label>
			<input type="text" id="this">
			<p id="result"></p>
			<button type="button" id="button">Click me</button>
		</form>
  `;

  bindEvents();

  insertText();

    document.getElementsByTagName('input').item(0).value = 'shut up';


  console.log(document.getElementsByTagName('input').item(0));

  // Array.prototype.slice.call(document.getElementsByTagName('input'))[0].value = 'shut up';
  // document.getElementsByTagName('input').item(0).value = 'shut up';

  // Array.prototype.slice.call(document.getElementsByTagName('button'))[0].click();
  document.getElementById('button').click();
  // expect(document.getElementById('this').value).toBe('shut up');

  expect(document.getElementById('result').textContent).toBe('shut up');
});
