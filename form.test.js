/**
 * @jest-environment jsdom
 */

const { bindEvents, clickBtn, insertText } = require('./form')
const { markup } = require('./markup')

console.log(typeof markup);


beforeEach(() => {
  document.body.innerHTML = markup;
  bindEvents();
});

// describe('inserting content', () => {

//   insertText();

//   test('It copies content of input to another element', () => {
//     document.getElementsByTagName('input').item(0).value = 'shut up';

//     document.getElementById('button').click();
//     expect(document.getElementById('result').textContent).toBe('shut up');
//   }); 
// });

describe.only('copying billing to delivery', () => {
  document.getElementsByTagName('.billing input[type=text]');

  .value = 'United Kingdom';

  copyContent();

  expect()

});
