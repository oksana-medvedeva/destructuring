import Character from '../character';

test('should construct character properly', () => {
  const result = new Character('Vasya', 'Undead');

  expect(result).toEqual({
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: null, defence: null, special: [],
  });
});

test('should throw an error if name < 2', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('W', 'Undead');
    /* eslint-enable no-new */
  }).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('should throw an error if name > 10', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('Qwertyuiopa', 'Undead');
    /* eslint-enable no-new */
  }).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('should throw an error if type is wrong', () => {
  expect(() => {
    /* eslint-disable no-new */
    new Character('Woody', 'Woodpecker');
    /* eslint-enable no-new */
  }).toThrow(new Error('Укажите корректный тип персонажа'));
});
