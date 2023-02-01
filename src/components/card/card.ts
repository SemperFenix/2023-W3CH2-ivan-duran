import { mockCharacters } from '../../mocks/characters';
import { King } from '../../models/king';
import { Fighter } from '../../models/fighter';
import { Counselor } from '../../models/counselor';
import { Squire } from '../../models/squire';
import { Component } from '../component/component';

const areKings = JSON.parse(
  JSON.stringify(mockCharacters.filter((item) => item instanceof King))
);
const areFighters = JSON.parse(
  JSON.stringify(mockCharacters.filter((item) => item instanceof Fighter))
);
const areCounselors = JSON.parse(
  JSON.stringify(mockCharacters.filter((item) => item instanceof Counselor))
);
const areSquires = JSON.parse(
  JSON.stringify(mockCharacters.filter((item) => item instanceof Squire))
);

export class Card extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render();
  }

  private createTemplate() {
    let cardTemplate = '';

    areKings.forEach((item: King) => {
      cardTemplate += `'<li class="character col">
      <div class="card character__card">
      <img
        src="assets/img/${item.name.toLowerCase()}.jpg"
        alt="${item.name} ${item.family}"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
        item.family
      }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age}</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Años de reinado: ${item.kingYears}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;
    });
    areFighters.forEach((item: Fighter) => {
      cardTemplate += `'<li class="character col">
      <div class="card character__card">
      <img
        src="assets/img/${item.name.toLowerCase()}.jpg"
        alt="${item.name} ${item.family}"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
        item.family
      }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age}</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
                <li>Arma: ${item.weapon}</li>
                <li>Destreza: ${item.dexterity}</li>          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;
    });
    areCounselors.forEach((item: Counselor) => {
      cardTemplate += `'<li class="character col">
      <div class="card character__card">
      <img
        src="assets/img/${item.name.toLowerCase()}.jpg"
        alt="${item.name} ${item.family}"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
        item.family
      }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age}</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
                                <li>Asesora a: ${item.boss.name} ${
        item.boss.family
      }</li>
        </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;
    });
    areSquires.forEach((item: Squire) => {
      cardTemplate += `'<li class="character col">
      <div class="card character__card">
      <img
        src="assets/img/${item.name.toLowerCase()}.jpg"
        alt="${item.name} ${item.family}"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
        item.family
      }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age}</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
                <li>Peloteo: ${item.servilism}</li>
                <li>Sirve a: ${item.boss.name} ${
        item.boss.family
      }</li>         </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;
    });

    return cardTemplate;
  }
}
