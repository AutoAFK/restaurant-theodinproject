import * as elements from "../elements/elements.js";

export default function MainPage(container) {
  const title = elements.createTag({
    element: "h1",
    textContent: "The Chaos Restaurant",
    classList: ["title"],
  });
  const description = elements.createTag({
    element: "p",
    textContent:
      "Here in our restaurant you find the most unorganized staff you will ever see!",
  });
  const recommendation = elements.createTag({
    element: "p",
    innerHTML:
      "Although everything is very messy you would be amazed to find out that our food actually tastes <strong>good</strong>.",
  });

  container.append(title, description, recommendation);
}
