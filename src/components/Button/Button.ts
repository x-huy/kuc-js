import { Component, BaseProps } from '../common';
import { html } from '../../dom/template';
import { setClassName, setText } from '../../dom/element';
import './Button.css';

export type Props = BaseProps & {
  text: string;
  type?: 'normal' | 'submit';
};

export default class Button extends Component<Props> {
  static defaultProps = {
    type: 'normal'
  };

  protected _domUpdater = {
    type: (type: string) =>
      setClassName(this.el, {
        'kuc-btn': true,
        normal: type === 'normal',
        submit: type === 'submit'
      }),
    text: (value: string) => setText(this.el, value)
  };

  protected _createDom() {
    return html`
      <button class="kuc-btn"></button>
    `;
  }
}
