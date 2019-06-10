import { Component, html, uiComponent } from '../../src/components/common';
import { setText } from '../../src/dom/element';
import { Button } from '../../src';
import { createSection } from './section';
import './counter.css';

type CounterProps = {
  value: number;
};

class Counter extends Component<CounterProps> {
  static customEvents = ['change'];

  protected _valueEl: HTMLInputElement;
  protected _btnDown: Button;
  protected _btnUp: Button;

  getValue(): number {
    return this._state.value;
  }
  setValue(value: number) {
    this._setState({ value });
  }

  protected _domUpdater = {
    value: (value: number) => {
      setText(this._valueEl, value);
      this._btnDown.setDisable(value === 0);
    }
  };

  private _handleUpDown(action: string, event: Event) {
    const value = this._state.value + (action === 'up' ? 1 : -1);
    this._setState({ value });

    this._eventManager.trigger({ type: 'change', event, detail: value });
  }

  protected _createDom() {
    const btnDown = uiComponent(
      new Button({ text: '▼', onClick: this._handleUpDown.bind(this, 'down') }),
      '_btnDown'
    );
    const btnUp = uiComponent(
      new Button({ text: '▲', onClick: this._handleUpDown.bind(this, 'up') }),
      '_btnUp'
    );

    return html`
      <span class="example-counter">
        ${btnDown}
        <span class="example-counter-value" ref="_valueEl"></span>
        ${btnUp}
      </span>
    `;
  }
}

export default (container: HTMLElement) => {
  const counterSection = createSection('Counter').appendTo(container);
  const counter = new Counter({ value: 1 });
  counter.on('change', (evt, value) =>
    console.log('Counter (changed), value:', value)
  );
  counterSection.appendChild(counter.render());
};
