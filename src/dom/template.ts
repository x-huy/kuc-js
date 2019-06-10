import { Component } from '../components/common';
import ComponentManager from '../components/common/component-manager';

export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): DocumentFragment {
  const htmlStr = htmlString(strings, ...values);
  return createFragment(htmlStr);
}

export const htmlString = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => {
  return strings.raw.reduce(
    (acc: string | number, lit: string | number, i: number) => {
      let value = values[i - 1];

      if (typeof value === 'function') {
        value = value();
      } else if (typeof value === 'string' || typeof value === 'number') {
        value = htmlEscape(String(value));
      }

      return acc + String(value) + lit;
    }
  );
};

export function htmlEscape(str: string) {
  return str
    .replace(/&/g, '&amp;') // first!
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}

function createFragment(htmlStr: string): DocumentFragment {
  const frag = document.createDocumentFragment();
  const rootEl = document.createElement('div');

  rootEl.innerHTML = htmlStr;

  while (rootEl.firstChild) {
    frag.appendChild(rootEl.firstChild);
  }

  return frag;
}

export const uiComponent = (component: Component, ref?: string) => () => {
  const key = ComponentManager.add(component);
  return htmlString`<div
    data-component-key="${key}"
    data-ref="${ref}"></div>`;
};
