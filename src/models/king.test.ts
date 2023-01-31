import { King } from './king';

describe('Given the class King', () => {
  describe('When pass the name, family, age and kingYears properties', () => {
    test('Then it should return an object with the same properties and the values given', () => {
      const r = new King('Robert', 'Baratheon', 50, 12);
      const result = {
        name: 'Robert',
        family: 'Baratheon',
        isAlive: true,
        age: 50,
        kingYears: 12,
      };
      expect(r).toEqual(result);
    });
  });

  describe('When a King item uses its method talk', () => {
    test('Then it should return "Vais a morir todos"', () => {
      const robert = new King('Robert', 'Baratheon', 50, 12);
      const r = robert.talk();
      expect(r).toBe('Vais a morir todos');
    });
  });
});
