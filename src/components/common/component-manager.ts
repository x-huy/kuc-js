import Component from "./Component";

const ComponentManager = {
  _components: {},
  add(component: Component): string {
    const key = String(Math.random());
    this._components[key] = component;
    return key;
  },
  get(key: string): Component {
    return this._components[key];
  },
  remove(key: string) {
    delete this._components[key];
  }
};

export { ComponentManager as default };
