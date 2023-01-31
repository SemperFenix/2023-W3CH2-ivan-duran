import { Character } from './character';
import { King } from './king';

export class Counselor extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    // eslint-disable-next-line no-unused-vars
    public boss: King
  ) {
    super(name, family, age);
    this.boss = boss;
  }

  talk() {
    return super.talk('No sé por qué, pero creo que voy a morir pronto');
  }
}
