import { Character } from './character';
describe('Given the class Character', () => {
  describe('When pass the name, family and age properties', () => {
    test('Then it should return an object with the same properties and the values given', () => {
      const r = new Character('Eddard', 'Stark', 42);
      const result = {
        name: 'Eddard',
        family: 'Stark',
        isAlive: true,

        age: 42,
      };
      expect(r).toEqual(result);
    });
  });
});
