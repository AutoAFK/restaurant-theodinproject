export function createTag({ element, textContent, classList, childrensList }) {
  const tag = document.createElement(element);
  tag.textContent = textContent;

  classList.forEach((item) => {
    tag.classList.toggle(item);
  });

  childrensList.forEach((elem) => {
    tag.appendChild(elem);
  });
}

export function appendChild(parent, childrens) {
  childrens.foreach((child) => {
    parent.appendChild(child);
  });
}
