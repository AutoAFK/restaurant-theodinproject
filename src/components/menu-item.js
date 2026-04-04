import * as elements from "../elements/elements.js";

export class MenuItem {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  render = () => {
    const container = elements.createTag({
      element: "div",
      classList: ["menu-item"],
    });

    const header = elements.createTag({
      element: "h2",
      textContent: this.name,
      classList: ["item-header"],
    });

    const body = elements.createTag({
      element: "p",
      textContent: this.description,
      classList: ["item-body"],
    });

    const price = elements.createTag({
      element: "p",
      textContent: this.price,
      classList: ["item-price"],
    });

    elements.appendChild(container, [header, body, price]);
    
    return container;
  };
}
