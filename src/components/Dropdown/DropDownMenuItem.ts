import { BaseProps, Component, html } from '../common';
import { ListItem } from '../common/select';
import { setText, setClassName } from '../../dom/element';

type DropDownMenuItemProps = BaseProps & {
  item: ListItem;
  isSelected: boolean;
};

export default class DropDownMenuItem extends Component<DropDownMenuItemProps> {
  protected _text: HTMLSpanElement;

  getItem(): ListItem {
    return this._props.item;
  }

  protected _domUpdater = {
    item: (item: ListItem) => {
      setText(this._text, item.label);
      setClassName(this.el, {
        'kuc-list-item': true,
        'kuc-list-item-selected': this._props.isSelected,
        'kuc-list-item-disable': item.isDisabled
      });
    }
  };

  protected _createDom() {
    return html`
      <div>
        <span class="kuc-icon-check"
          ><i class="fa fa-check" aria-hidden="true"></i
        ></span>
        <span class="kuc-list-item-label" ref="_text"></span>
      </div>
    `;
  }
}
