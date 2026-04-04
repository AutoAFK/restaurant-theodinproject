export function createTag({
  element,
  innerHTML,
  textContent,
  classList,
  childrensList,
}) {
  const tag = document.createElement(element);
  tag.textContent = textContent;
  if (innerHTML) {
    tag.innerHTML = innerHTML;
  }
  if (classList) {
    classList.forEach((item) => {
      tag.classList.toggle(item);
    });
  }

  if (childrensList) {
    childrensList.forEach((item) => {
      tag.appendChild(item);
    });
  }

  return tag;
}

export function appendChilds(parent, childrens) {
  childrens.forEach((child) => {
    parent.appendChild(child);
  });
}
