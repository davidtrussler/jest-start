/**
 * @jest-environment jsdom
 */

const { bindEvents, clickBtn, insertText } = require('./form')
const { markup } = require('./markup')

console.log(typeof markup);


describe('inserting content', () => {
 document.body.innerHTML = markup;


  beforeEach(() => {
    bindEvents();
  });


  insertText();

  test('It copies content of input to another element', () => {
    document.getElementsByTagName('input').item(0).value = 'shut up';

    document.getElementById('button').click();
    expect(document.getElementById('result').textContent).toBe('shut up');
  }); 
});
