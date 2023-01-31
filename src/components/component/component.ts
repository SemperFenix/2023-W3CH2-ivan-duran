export abstract class Component {
  selector!: string; // Usamos el operador ! para asegurar que los valores no van a ser null
  element!: HTMLElement;
  template!: string; // Declaramos estos parámetros para que los coja el método render, pero no necesitamos constructor
  // constructor() {
  //   render(); // Este método se ejecutará por defecto al crear cualquier objeto de esta clase (o que la tenga heredada)
  // }

  render() {
    // Si lo separamos, habrá que llamarlo cuando queramos utilizarlo.
    const element = document.querySelector(this.selector) as HTMLElement;
    element.insertAdjacentHTML('beforeend', this.template);
  }
}
