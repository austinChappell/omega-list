const file = require('./seleucids');

test('checks if more than 5 years', () => {
  const result = file.moreThanNYears(file.dataset, 5);
  expect(result.length).toBe(17);
});

test('checks for more than 200 years', () => {
  let expectNothing = file.moreThanNYears(file.dataset, 200);
  expect(expectNothing.length).toBe(0);
});

test('longest name', function(){
  const result = file.Ω(file.dataset);
  expect(result).toBe('Antiochus XI Epiphanes Philadelphus');
});

test('number of consorts is 2', () => {
  let result = file.findNConsort(file.dataset, 2);
  expect(result.length).toBe(5);
});

test('total friends, total drama', () => {
  let number = file.totalFriends(file.dataset);
  expect(number).toBe(13);
})

test('rulers with name Antiochus', () => {
  let result = file.rulersWithAName(file.dataset, 'Antiochus');
  expect(result).toBe(13);
})
