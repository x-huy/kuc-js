import { Component, BaseProps, html } from '../common';
import './TextBox.css';

type Props = BaseProps & {
  value?: string;
};

export default class Text extends Component<Props> {
  _inputEl: HTMLInputElement;

  static customEvents = ['input', 'change'];

  setValue(value: string) {
    this._setState({ value });
  }
  getValue(): string {
    return this._state.value;
  }

  protected _handleInput(type: string, event: Event) {
    const value = (event.currentTarget as HTMLInputElement).value;
    this._setState({ value });
    this._eventManager.trigger({ type, event, detail: value });
  }

  protected _events = {
    'input .kuc-input-text': this._handleInput.bind(this, 'input'),
    'change .kuc-input-text': this._handleInput.bind(this, 'change')
  };

  protected _domUpdater = {
    value: (value: string) => (this._inputEl.value = value),
    isDisabled: (value: boolean) => (this._inputEl.disabled = value)
  };

  protected _createDom() {
    return html`
      <div class="kuc-input-outer">
        <input class="kuc-input-text" type="text" ref="_inputEl" />
      </div>
    `;
  }
}
