type cssClassMap = {
  [index: string]: boolean;
};

export const setClassName = (el: Element, classes: cssClassMap) => {
  const className = Object.keys(classes)
    .filter(className => classes[className])
    .join(' ');

  el.className = className;
};

export const setText = (el: Element, text: string | number) =>
  (el.textContent = String(text));

export const showHide = (el: HTMLElement, isVisible: boolean) => {
  // show
  if (isVisible && el.style.display === 'none') {
    el.style.display = el.dataset.originalDisplay;
    delete el.dataset.originalDisplay;
    return;
  }

  // hide
  if (!isVisible && el.style.display !== 'none') {
    el.dataset.originalDisplay = el.style.display;
    el.style.display = 'none';
  }
};

export const disable = (el: any, isDisabled: boolean) =>
  (el.disabled = isDisabled);
