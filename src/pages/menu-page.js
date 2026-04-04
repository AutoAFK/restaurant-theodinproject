import MenuItem from "../components/menu-item.js";
import * as elements from "../elements/elements.js";
import "../styles/menu.css";

export default function MenuPage(container) {
  const title = elements.createTag({
    element: "h1",
    textContent: "Menu",
    classList: ["title"],
  });
  const menuItems = elements.createTag({
    element: "div",
    classList: ["menu-items"],
    childrensList: [
      new MenuItem("potatos", "A crunchy potato", 25).render(),
      new MenuItem("potatos", "A crunchy potato", 25).render(),
      new MenuItem("potatos", "A crunchy potato", 25).render(),
      new MenuItem("potatos", "A crunchy potato", 25).render(),
      new MenuItem("potatos", "A crunchy potato", 25).render(),
      new MenuItem("potatos", "A crunchy potato", 25).render(),
      new MenuItem("potatos", "A crunchy potato", 25).render(),
    ],
  });

  container.append(title, menuItems);
}
