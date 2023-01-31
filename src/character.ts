export class Character {
  public isAlive: boolean = true;
  constructor(public name: string, public family: string, public age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  talk(phrase: string) {
    return phrase;
  }
}
