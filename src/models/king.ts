import { Character } from './character';

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    // eslint-disable-next-line no-unused-vars
    public kingYears: number
  ) {
    super(name, family, age);
  }

  talk() {
    return super.talk('Vais a morir todos');
  }
}
