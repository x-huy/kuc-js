import { render } from './render';
import EventManager, { CustomEventHandler } from './EventManager';
import { showHide, disable } from '../../dom/element';
import { on } from '../../dom/event';

export type BaseProps = {
  isVisible?: boolean;
  isDisabled?: boolean;
  [index: string]: any;
};

export default abstract class Component<Props = BaseProps, State = Props> {
  static defaultProps = { isVisible: true, isDisabled: false } as object;
  static customEvents: string[] = [];

  protected _fragmentEl: DocumentFragment;
  protected _el: HTMLElement;
  protected _events: { [index: string]: EventListener };
  protected _eventsToBind: object;
  protected _eventManager: EventManager;
  protected _state: State;
  protected _domUpdater: object;
  private _domUpdaterCache: object;

  constructor(protected _props: Props) {
    this._fragmentEl = null;
    this._el = null;
    this._events = {};
    this._eventsToBind = {};
    this._props = {
      ...Component.defaultProps,
      ...(this.constructor as any).defaultProps,
      ...this._props
    };
    this._state = { ...(this._props as any) };
  }

  get el() {
    return this._el;
  }

  update(data: Partial<Props>): void;
  update(key: keyof Props, value: any): void;

  update(...args: any): void {
    let data: Partial<Props> = {};
    if (args.length === 2) {
      const [key, value] = args;
      data[key as keyof Props] = value;
    } else {
      [data] = args;
    }

    this._props = { ...this._props, ...data };
    this._setState(data as any);
  }

  protected _setState(partialState: Partial<State>) {
    this._state = { ...this._state, ...partialState };
    this._isRendered() && this._updateDom(partialState);
  }

  protected _createDom(): DocumentFragment {
    throw new Error(
      'The derived class should implement the method "_createDom".'
    );
  }

  protected _updateDom(data: object) {
    Object.keys(data).forEach(name => {
      const updateFn = this._getDomUpdater(name);
      if (typeof updateFn === 'function') {
        updateFn(data[name]);
      }
    });
  }

  protected _getDomUpdater(name: string): object {
    if (this._domUpdaterCache) {
      return this._domUpdaterCache[name];
    }
    this._domUpdaterCache = { ...this._baseDomUpdater, ...this._domUpdater };
    return this._domUpdaterCache[name];
  }

  protected _baseDomUpdater = {
    isVisible: (value: boolean) => showHide(this.el, value),
    isDisabled: (value: boolean) => disable(this.el, value)
  };

  protected _isRendered(): boolean {
    return this.el !== null;
  }

  render() {
    const fragment = this._createDom();
    this._fragmentEl = fragment;
    this._el = fragment.querySelector(':first-child');

    render(fragment, this);
    this._updateDom(this._state as any);

    this._bindAllEvents();

    return fragment;
  }

  on(type: string, fn: EventListener | CustomEventHandler) {
    if (!this._isRendered()) {
      this._addEventToBind(type, fn);
      return;
    }

    this._eventManager.addEventHandler(type, fn);
  }

  protected _addEventToBind(
    event: string,
    fn: EventListener | CustomEventHandler
  ) {
    this._eventsToBind[event] = this._eventsToBind[event] || [];
    this._eventsToBind[event].push(fn);
  }

  protected _bindAllEvents() {
    this._bindEvents();

    this._eventManager = new EventManager({
      element: this._el,
      customEvents: (this.constructor as any).customEvents,
      handlers: {
        ...getEventHandlers(this._props),
        ...this._eventsToBind
      }
    });
  }

  protected _bindEvents() {
    Object.keys(this._events).forEach(event => {
      const handler = this._events[event];
      const [type, selector] = event.split(' ');
      selector
        ? on(type, this.el, selector, handler)
        : on(type, this.el, handler);
    });
  }

  setVisible(isVisible: boolean) {
    this._setState({ isVisible } as any);
  }

  setDisable(isDisabled: boolean) {
    this._setState({ isDisabled } as any);
  }
}

// helper methods

const getEventHandlers = (args: any): { [index: string]: Function } => {
  const eventNameRegex = /^on([A-Z].*)/; //e.g onClick, onChange
  return Object.keys(args)
    .filter(name => {
      return (
        typeof args[name] === 'function' && name.match(eventNameRegex) !== null
      );
    })
    .reduce((handlers: object, name: string) => {
      const eventName = name.match(eventNameRegex)[1].toLowerCase();
      handlers[eventName] = args[name];
      return handlers;
    }, {});
};
