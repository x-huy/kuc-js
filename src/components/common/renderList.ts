import Component from "./Component";

const renderList = <T>(
  items: T[],
  fn: (item: T, index: number) => Component,
  parentNode?: HTMLElement | DocumentFragment
): DocumentFragment => {
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const instance = fn(item, index);
    fragment.appendChild(instance.render());
  });

  if (parentNode) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
    parentNode.appendChild(fragment);
  }

  return fragment;
};

export { renderList as default };
