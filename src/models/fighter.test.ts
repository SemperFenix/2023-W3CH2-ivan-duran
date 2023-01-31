import { Fighter } from './fighter';

describe('Given the class Fighter', () => {
  describe('When pass the name, family, age, weapon and dexterity properties', () => {
    test('Then it should return an object with the same properties, alive true and the values given', () => {
      const r = new Fighter('Jaime', 'Lannister', 30, 'Sword', 8);
      const result = {
        name: 'Jaime',
        family: 'Lannister',
        isAlive: true,

        age: 30,
        weapon: 'Sword',
        dexterity: 8,
      };
      expect(r).toEqual(result);
    });
  });

  describe('When a King item uses its method talk', () => {
    test('Then it should return "Primero pego y luego pregunto"', () => {
      const jaime = new Fighter('Jaime', 'Lannister', 30, 'Sword', 8);
      const r = jaime.talk();
      expect(r).toBe('Primero pego y luego pregunto');
    });
  });
});
