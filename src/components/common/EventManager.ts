export interface CustomEventHandler {
  (event: Event, detail: any): void;
}

export default class EventManager {
  private _element: HTMLElement;
  private _customEventTypes: string[];
  private _customHandlers: { [index: string]: CustomEventHandler[] };

  constructor({
    element,
    handlers,
    customEvents
  }: {
    element: HTMLElement;
    handlers: { [index: string]: Function };
    customEvents: string[];
  }) {
    this._element = element;
    this._customEventTypes = customEvents;
    this._customHandlers = {};
    this._initHandlers(handlers);
  }

  addEventHandler(type: string, handler: EventListener | CustomEventHandler) {
    this._isCustomEvent(type)
      ? this._addCustomEventHandler(type, handler)
      : this._addNativeEventHandler(type, handler as EventListener);
  }

  trigger({
    type,
    event,
    detail
  }: {
    type: string;
    event?: Event;
    detail?: any;
  }) {
    if (!this._isCustomEvent(type)) {
      return;
    }

    const handlers = this._customHandlers[type] || [];
    handlers.forEach(handler => handler(event, detail));
  }

  private _initHandlers(
    handlers: { [index: string]: Function | Function[] } = {}
  ) {
    Object.keys(handlers).forEach(type => {
      if (Array.isArray(handlers[type])) {
        (handlers[type] as Array<Function>).forEach(fn => {
          this.addEventHandler(type, fn as any);
        });
        return;
      }
      this.addEventHandler(type, handlers[type] as any);
    });
  }

  private _addCustomEventHandler(type: string, handler: CustomEventHandler) {
    if (!Array.isArray(this._customHandlers[type])) {
      this._customHandlers[type] = [];
    }

    this._customHandlers[type].push(handler);
  }

  private _addNativeEventHandler(type: string, handler: EventListener) {
    this._element.addEventListener(type, handler);
  }

  private _isCustomEvent(type: string) {
    return this._customEventTypes.indexOf(type) !== -1;
  }
}
