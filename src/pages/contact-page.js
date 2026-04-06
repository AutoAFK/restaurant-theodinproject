import * as elements from "../elements/elements.js";
import "../styles/contact.css";

export default function ContactPage(container) {
  const title = elements.createTag({
    element: "h1",
    textContent: "Contact Us",
    classList: ["title"],
  });
  const contact = elements.createTag({
    element: "p",
    innerHTML: "Contact us at <a>chaos@chaos.com</a>",
    classList: ["contact"],
  });

  container.append(title, contact);
}
