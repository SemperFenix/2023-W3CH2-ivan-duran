import { Counselor } from '../models/counselor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

const joffrey = new King('Joffrey', 'Baratheon', 17, 2);
const jaime = new Fighter('Jaime', 'Lannister', 35, 'Sword', 8);
const daenerys = new Fighter('Daenerys', 'Targaryen', 19, 'Dragon', 6);
const tyrion = new Counselor('Tyrion', 'Lannister', 28, joffrey);
const bronn = new Squire('Bronn', 'None', 38, 3, jaime);

export const mockCharacters = [joffrey, jaime, daenerys, tyrion, bronn];
