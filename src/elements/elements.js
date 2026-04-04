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
    childrensList.forEach((elem) => {
      tag.appendChild(elem);
    });
  }

  return tag;
}

export function appendChild(parent, childrens) {
  childrens.foreach((child) => {
    parent.appendChild(child);
  });
}
