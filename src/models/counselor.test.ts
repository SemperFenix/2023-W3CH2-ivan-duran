import { Counselor } from './counselor';
import { King } from './king';

describe('Given the class Counselor', () => {
  describe('When pass the name, family, age, weapon and boss', () => {
    test('Then it should return an object with the same properties, isAalive true and the values given', () => {
      const robert = new King('Robert', 'Baratheon', 50, 12);
      const r = new Counselor('Little', 'Finger', 35, robert);
      const result = {
        name: 'Little',
        family: 'Finger',
        isAlive: true,
        age: 35,
        boss: robert,
      };
      expect(r).toEqual(result);
    });
  });

  describe('When a Counselor item uses its method talk', () => {
    test('Then it should return "No sé por qué, pero creo que moriré pronto"', () => {
      const robert = new King('Robert', 'Baratheon', 50, 12);
      const little = new Counselor('Little', 'Finger', 35, robert);
      const r = little.talk();
      expect(r).toBe('No sé por qué, pero creo que voy a morir pronto');
    });
  });
});
