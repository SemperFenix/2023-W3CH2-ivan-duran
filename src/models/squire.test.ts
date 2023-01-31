import { Squire } from './squire';
import { Fighter } from './fighter';

describe('Given the class Squire', () => {
  describe('When pass the name, family, age, boss and servilism', () => {
    test('Then it should return an object with the same properties, isAalive true and the values given', () => {
      const jaime = new Fighter('Jaime', 'Lannister', 30, 'Sword', 8);
      const r = new Squire('Jon', 'Arryn', 18, 10, jaime);
      const result = {
        name: 'Jon',
        family: 'Arryn',
        isAlive: true,
        age: 18,
        servilism: 10,
        boss: jaime,
      };
      expect(r).toEqual(result);
    });
  });

  describe('When a Counselor item uses its method talk', () => {
    test('Then it should return "Soy un loser"', () => {
      const jaime = new Fighter('Jaime', 'Lannister', 30, 'Sword', 8);
      const jon = new Squire('Jon', 'Arryn', 18, 10, jaime);
      const r = jon.talk();
      expect(r).toBe('Soy un loser');
    });
  });
});
