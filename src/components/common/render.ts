import ComponentManager from './component-manager';

export const render = (
  fragment: DocumentFragment,
  collectTo: object = null
) => {
  const instances = {
    ...getRefNodes(fragment),
    ...renderUiComponents(fragment)
  };

  if (collectTo) {
    Object.keys(instances).forEach(name => (collectTo[name] = instances[name]));
  }
};

const getRefNodes = (node: ParentNode): object => {
  const elements = {};
  const refElements = Array.prototype.slice.call(
    node.querySelectorAll(`[ref]`)
  );

  refElements.forEach((element: HTMLElement) => {
    const name = element.getAttribute('ref').trim();
    element.removeAttribute('ref');
    if (name) {
      mergeElementToObject(elements, name, element);
    }
  });

  return elements;
};

const renderUiComponents = (node: ParentNode) => {
  const components = {};
  const uiComponentElements = Array.prototype.slice.call(
    node.querySelectorAll('[data-component-key]')
  );

  uiComponentElements.forEach((element: HTMLElement) => {
    const { componentKey, ref } = element.dataset;
    const instance = ComponentManager.get(componentKey);
    if (!instance) {
      return;
    }

    element.parentNode.replaceChild(instance.render(), element);
    ComponentManager.remove(componentKey);

    const name = ref ? ref.trim() : '';
    if (name) {
      mergeElementToObject(components, name, instance);
    }
  });

  return components;
};

const mergeElementToObject = (obj: object, key: string, element: any) => {
  if (!obj[key]) {
    obj[key] = element;
    return;
  }

  if (!Array.isArray(obj[key])) {
    obj[key] = [obj[key]];
  }
  obj[key].push(element);
};
