import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,

    // eslint-disable-next-line no-unused-vars
    public servilism: number,
    public boss: Fighter
  ) {
    super(name, family, age);
    this.servilism = servilism;
    this.boss = boss;
  }

  talk() {
    return super.talk('Soy un loser');
  }
}
