import { Component, html, BaseProps, renderList } from '../common';
import { setClassName, setText, showHide } from '../../dom/element';
import { ListItem } from '../common/select';
import DropDownMenuItem from './DropDownMenuItem';
import './Dropdown.css';

type DropdownProps = BaseProps & {
  value?: string | number;
  items: ListItem[];
};

type DropdownState = DropdownProps & {
  isMenuVisible?: boolean;
};

export default class Dropdown extends Component<DropdownProps, DropdownState> {
  static customEvents = ['change'];

  _dropdownButton: HTMLDivElement;
  _dropdownMenu: HTMLDivElement;
  _text: HTMLSpanElement;

  _state = {
    ...this._props,
    isMenuVisible: false
  };

  setItems(items: ListItem[]) {
    this._setState({ items });
  }
  getItems(): ListItem[] {
    return this._state.items;
  }

  setValue(value: string | number) {
    this._setState({ value });
  }
  getValue(): string | number {
    return this._state.value;
  }

  protected _handleToggleMenu = () => {
    const isMenuVisible = !this._state.isMenuVisible;
    isMenuVisible
      ? document.addEventListener('click', this._handleClickOutside)
      : document.removeEventListener('click', this._handleClickOutside);
    this._setState({ isMenuVisible });
  };

  protected _handleClickOutside = (evt: MouseEvent) => {
    let target = evt.target as HTMLElement;

    if (!this.el.querySelector('.kuc-dropdown-outer').contains(target)) {
      this._setState({ isMenuVisible: false });
    }
  };

  protected _handleSelectItem = (menuItem: DropDownMenuItem, event: Event) => {
    const item = menuItem.getItem();
    if (item.isDisabled) {
      event.stopPropagation();
      return;
    }

    this._setState({
      value: item.value,
      isMenuVisible: false
    });
    this._eventManager.trigger({ type: 'change', event, detail: item.value });
  };

  protected _canShowMenu() {
    const { isMenuVisible, isDisabled, items } = this._state;
    return (
      isMenuVisible && !isDisabled && Array.isArray(items) && items.length > 0
    );
  }

  protected _getText(): string | number {
    const { items, value } = this._state;
    if (!Array.isArray(items)) {
      return '';
    }

    const item = items.filter(item => item.value === value)[0];
    return item ? item.value : '';
  }

  protected _events = {
    'click .kuc-dropdown-outer': this._handleToggleMenu.bind(this)
  };

  protected _domUpdater = {
    value: () => {
      this._setState({ items: this._state.items });
    },
    items: (items: ListItem[]) => {
      setText(this._text, this._getText());

      if (items) {
        this._renderItems();
      }
    },
    isMenuVisible: (value: boolean) => {
      showHide(this._dropdownMenu, value);
    },
    isDisabled: (value: boolean) => {
      setClassName(this._dropdownButton, {
        'kuc-dropdown': true,
        'kuc-dropdown-disable': value
      });
    }
  };

  _createDom() {
    return html`
      <div class="kuc-dropdown-container">
        <div class="kuc-dropdown-sub-container">
          <div class="kuc-dropdown-outer">
            <div class="kuc-dropdown" ref="_dropdownButton">
              <div class="kuc-dropdown-selected">
                <span class="kuc-dropdown-selected-name">
                  <span ref="_text"></span>
                  <span class="icon-arrow-down"
                    ><i class="fa fa-angle-down" aria-hidden="true"></i
                  ></span>
                </span>
              </div>
            </div>
          </div>
          <div class="kuc-list-outer" ref="_dropdownMenu"></div>
        </div>
      </div>
    `;
  }

  private _renderItems() {
    const { items, value } = this._state;
    renderList<ListItem>(
      items,
      item => {
        const menuItem = new DropDownMenuItem({
          isSelected: value === item.value,
          item
        });
        menuItem.on('click', this._handleSelectItem.bind(this, menuItem));

        return menuItem;
      },
      this._dropdownMenu
    );
  }
}
