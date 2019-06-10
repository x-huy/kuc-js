export function on(type: string, el: HTMLElement, fn: EventListener):void;
export function on(type: string, el: HTMLElement, selector: string, fn: EventListener):void;
export function on(type: string, el: HTMLElement, ...args: unknown[]) : void {
  let selector: string, handler: EventListener;
  if (typeof args[0] === 'function') {
    handler = args[0] as EventListener;
  } else {
    selector = args[0] as string;
    handler = args[1] as EventListener;
  }

  if (!selector) {
    el.addEventListener(type, handler);
    return;
  }

  el.addEventListener(type, (nativeEvent: Event) => {
    for (
      let target = nativeEvent.target as HTMLElement;
      target && target !== el;
      target = target.parentNode as HTMLElement
    ) {
      if (!target.matches(selector)) {
        continue;
      }

      const event = {
        ...nativeEvent,
        currentTarget: target
      };

      handler.call(target, event);
      break;
    }
  });
};
