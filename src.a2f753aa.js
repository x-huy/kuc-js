parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8FcO":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.createSection=function(e){var t=document.createElement("section");t.innerHTML='<h3 class="js-title"></h3><div class="js-body"></div>',t.querySelector(".js-title").textContent=e;var n=t.querySelector(".js-body");return{appendTo:function(e){return e.appendChild(t),this},appendChild:function(e){return n.appendChild(e),this}}};
},{}],"3hYq":[function(require,module,exports) {

},{}],"7nTy":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t={_components:{},add:function(t){var e=String(Math.random());return this._components[e]=t,e},get:function(t){return this._components[t]},remove:function(t){delete this._components[t]}};exports.default=t;
},{}],"2pGP":[function(require,module,exports) {
"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},e=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};exports.__esModule=!0;var t=e(require("./component-manager"));exports.render=function(e,t){void 0===t&&(t=null);var a=r({},n(e),o(e));t&&Object.keys(a).forEach(function(r){return t[r]=a[r]})};var n=function(r){var e={};return Array.prototype.slice.call(r.querySelectorAll("[ref]")).forEach(function(r){var t=r.getAttribute("ref").trim();r.removeAttribute("ref"),t&&a(e,t,r)}),e},o=function(r){var e={};return Array.prototype.slice.call(r.querySelectorAll("[data-component-key]")).forEach(function(r){var n=r.dataset,o=n.componentKey,i=n.ref,u=t.default.get(o);if(u){r.parentNode.replaceChild(u.render(),r),t.default.remove(o);var c=i?i.trim():"";c&&a(e,c,u)}}),e},a=function(r,e,t){r[e]?(Array.isArray(r[e])||(r[e]=[r[e]]),r[e].push(t)):r[e]=t};
},{"./component-manager":"7nTy"}],"4r6T":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(t){var e=t.element,n=t.handlers,s=t.customEvents;this._element=e,this._customEventTypes=s,this._customHandlers={},this._initHandlers(n)}return t.prototype.addEventHandler=function(t,e){this._isCustomEvent(t)?this._addCustomEventHandler(t,e):this._addNativeEventHandler(t,e)},t.prototype.trigger=function(t){var e=t.type,n=t.event,s=t.detail;this._isCustomEvent(e)&&(this._customHandlers[e]||[]).forEach(function(t){return t(n,s)})},t.prototype._initHandlers=function(t){var e=this;void 0===t&&(t={}),Object.keys(t).forEach(function(n){Array.isArray(t[n])?t[n].forEach(function(t){e.addEventHandler(n,t)}):e.addEventHandler(n,t[n])})},t.prototype._addCustomEventHandler=function(t,e){Array.isArray(this._customHandlers[t])||(this._customHandlers[t]=[]),this._customHandlers[t].push(e)},t.prototype._addNativeEventHandler=function(t,e){this._element.addEventListener(t,e)},t.prototype._isCustomEvent=function(t){return-1!==this._customEventTypes.indexOf(t)},t}();exports.default=t;
},{}],"I+l/":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.setClassName=function(e,t){var s=Object.keys(t).filter(function(e){return t[e]}).join(" ");e.className=s},exports.setText=function(e,t){return e.textContent=String(t)},exports.showHide=function(e,t){if(t&&"none"===e.style.display)return e.style.display=e.dataset.originalDisplay,void delete e.dataset.originalDisplay;t||"none"===e.style.display||(e.dataset.originalDisplay=e.style.display,e.style.display="none")},exports.disable=function(e,t){return e.disabled=t};
},{}],"x77S":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t}).apply(this,arguments)};function r(r,e){for(var n,a,o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];"function"==typeof o[0]?a=o[0]:(n=o[0],a=o[1]),n?e.addEventListener(r,function(r){for(var o=r.target;o&&o!==e;o=o.parentNode)if(o.matches(n)){var s=t({},r,{currentTarget:o});a.call(o,s);break}}):e.addEventListener(r,a)}exports.__esModule=!0,exports.on=r;
},{}],"F9dN":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var n=require("./render"),s=e(require("./EventManager")),i=require("../../dom/element"),r=require("../../dom/event"),o=function(){function e(n){var s=this;this._props=n,this._baseDomUpdater={isVisible:function(t){return i.showHide(s.el,t)},isDisabled:function(t){return i.disable(s.el,t)}},this._fragmentEl=null,this._el=null,this._events={},this._eventsToBind={},this._props=t({},e.defaultProps,this.constructor.defaultProps,this._props),this._state=t({},this._props)}return Object.defineProperty(e.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),e.prototype.update=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var s={};if(2===e.length){var i=e[0],r=e[1];s[i]=r}else s=e[0];this._props=t({},this._props,s),this._setState(s)},e.prototype._setState=function(e){this._state=t({},this._state,e),this._isRendered()&&this._updateDom(e)},e.prototype._createDom=function(){throw new Error('The derived class should implement the method "_createDom".')},e.prototype._updateDom=function(t){var e=this;Object.keys(t).forEach(function(n){var s=e._getDomUpdater(n);"function"==typeof s&&s(t[n])})},e.prototype._getDomUpdater=function(e){return this._domUpdaterCache?this._domUpdaterCache[e]:(this._domUpdaterCache=t({},this._baseDomUpdater,this._domUpdater),this._domUpdaterCache[e])},e.prototype._isRendered=function(){return null!==this.el},e.prototype.render=function(){var t=this._createDom();return this._fragmentEl=t,this._el=t.querySelector(":first-child"),n.render(t,this),this._updateDom(this._state),this._bindAllEvents(),t},e.prototype.on=function(t,e){this._isRendered()?this._eventManager.addEventHandler(t,e):this._addEventToBind(t,e)},e.prototype._addEventToBind=function(t,e){this._eventsToBind[t]=this._eventsToBind[t]||[],this._eventsToBind[t].push(e)},e.prototype._bindAllEvents=function(){this._bindEvents(),this._eventManager=new s.default({element:this._el,customEvents:this.constructor.customEvents,handlers:t({},a(this._props),this._eventsToBind)})},e.prototype._bindEvents=function(){var t=this;Object.keys(this._events).forEach(function(e){var n=t._events[e],s=e.split(" "),i=s[0],o=s[1];o?r.on(i,t.el,o,n):r.on(i,t.el,n)})},e.prototype.setVisible=function(t){this._setState({isVisible:t})},e.prototype.setDisable=function(t){this._setState({isDisabled:t})},e.defaultProps={isVisible:!0,isDisabled:!1},e.customEvents=[],e}();exports.default=o;var a=function(t){var e=/^on([A-Z].*)/;return Object.keys(t).filter(function(n){return"function"==typeof t[n]&&null!==n.match(e)}).reduce(function(n,s){return n[s.match(e)[1].toLowerCase()]=t[s],n},{})};
},{"./render":"2pGP","./EventManager":"4r6T","../../dom/element":"I+l/","../../dom/event":"x77S"}],"lOwY":[function(require,module,exports) {
"use strict";var e=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r,n=t(require("../components/common/component-manager"));function o(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return i(exports.htmlString.apply(void 0,[e].concat(t)))}function a(e){return e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")}function i(e){var t=document.createDocumentFragment(),r=document.createElement("div");for(r.innerHTML=e;r.firstChild;)t.appendChild(r.firstChild);return t}exports.html=o,exports.htmlString=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.raw.reduce(function(e,r,n){var o=t[n-1];return"function"==typeof o?o=o():"string"!=typeof o&&"number"!=typeof o||(o=a(String(o))),e+String(o)+r})},exports.htmlEscape=a,exports.uiComponent=function(t,o){return function(){var a=n.default.add(t);return exports.htmlString(r||(r=e(['<div\n    data-component-key="','"\n    data-ref="','"></div>'],['<div\n    data-component-key="','"\n    data-ref="','"></div>'])),a,o)}};
},{"../components/common/component-manager":"7nTy"}],"xk1k":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=function(e,r,t){var d=document.createDocumentFragment();if(e.forEach(function(e,t){var i=r(e,t);d.appendChild(i.render())}),t){for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(d)}return d};exports.default=e;
},{}],"1U5u":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./Component");exports.Component=e.default,exports.BaseProps=e.BaseProps;var r=require("../../dom/template");exports.html=r.html,exports.uiComponent=r.uiComponent;var t=require("./renderList");exports.renderList=t.default;
},{"./Component":"F9dN","../../dom/template":"lOwY","./renderList":"xk1k"}],"SCUe":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function u(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(u.prototype=n.prototype,new u)}}(),e=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};exports.__esModule=!0;var n=require("../common");require("./TextBox.css");var u,r=function(r){function i(){var t=null!==r&&r.apply(this,arguments)||this;return t._events={"input .kuc-input-text":t._handleInput.bind(t,"input"),"change .kuc-input-text":t._handleInput.bind(t,"change")},t._domUpdater={value:function(e){return t._inputEl.value=e},isDisabled:function(e){return t._inputEl.disabled=e}},t}return t(i,r),i.prototype.setValue=function(t){this._setState({value:t})},i.prototype.getValue=function(){return this._state.value},i.prototype._handleInput=function(t,e){var n=e.currentTarget.value;this._setState({value:n}),this._eventManager.trigger({type:t,event:e,detail:n})},i.prototype._createDom=function(){return n.html(u||(u=e(['\n      <div class="kuc-input-outer">\n        <input class="kuc-input-text" type="text" ref="_inputEl" />\n      </div>\n    '],['\n      <div class="kuc-input-outer">\n        <input class="kuc-input-text" type="text" ref="_inputEl" />\n      </div>\n    '])))},i.customEvents=["input","change"],i}(n.Component);exports.default=r;
},{"../common":"1U5u","./TextBox.css":"3hYq"}],"jf6M":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./TextBox");exports.default=e.default;
},{"./TextBox":"SCUe"}],"VeAP":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};exports.__esModule=!0;var n=require("../common"),r=require("../../dom/template"),o=require("../../dom/element");require("./Button.css");var u,c=function(n){function c(){var t=null!==n&&n.apply(this,arguments)||this;return t._domUpdater={type:function(e){return o.setClassName(t.el,{"kuc-btn":!0,normal:"normal"===e,submit:"submit"===e})},text:function(e){return o.setText(t.el,e)}},t}return t(c,n),c.prototype._createDom=function(){return r.html(u||(u=e(['\n      <button class="kuc-btn"></button>\n    '],['\n      <button class="kuc-btn"></button>\n    '])))},c.defaultProps={type:"normal"},c}(n.Component);exports.default=c;
},{"../common":"1U5u","../../dom/template":"lOwY","../../dom/element":"I+l/","./Button.css":"3hYq"}],"9AbU":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./Button");exports.default=e.default;
},{"./Button":"VeAP"}],"qG1B":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};exports.__esModule=!0;var n,r=require("../common"),i=require("../../dom/element"),s=function(s){function c(){var t=null!==s&&s.apply(this,arguments)||this;return t._domUpdater={item:function(e){i.setText(t._text,e.label),i.setClassName(t.el,{"kuc-list-item":!0,"kuc-list-item-selected":t._props.isSelected,"kuc-list-item-disable":e.isDisabled})}},t}return t(c,s),c.prototype.getItem=function(){return this._props.item},c.prototype._createDom=function(){return r.html(n||(n=e(['\n      <div>\n        <span class="kuc-icon-check"\n          ><i class="fa fa-check" aria-hidden="true"></i\n        ></span>\n        <span class="kuc-list-item-label" ref="_text"></span>\n      </div>\n    '],['\n      <div>\n        <span class="kuc-icon-check"\n          ><i class="fa fa-check" aria-hidden="true"></i\n        ></span>\n        <span class="kuc-list-item-label" ref="_text"></span>\n      </div>\n    '])))},c}(r.Component);exports.default=s;
},{"../common":"1U5u","../../dom/element":"I+l/"}],"WhxZ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var o=require("../common"),i=require("../../dom/element"),s=r(require("./DropDownMenuItem"));require("./Dropdown.css");var a,u=function(r){function u(){var e=null!==r&&r.apply(this,arguments)||this;return e._state=n({},e._props,{isMenuVisible:!1}),e._handleToggleMenu=function(){var t=!e._state.isMenuVisible;t?document.addEventListener("click",e._handleClickOutside):document.removeEventListener("click",e._handleClickOutside),e._setState({isMenuVisible:t})},e._handleClickOutside=function(t){var n=t.target;e.el.querySelector(".kuc-dropdown-outer").contains(n)||e._setState({isMenuVisible:!1})},e._handleSelectItem=function(t,n){var r=t.getItem();r.isDisabled?n.stopPropagation():(e._setState({value:r.value,isMenuVisible:!1}),e._eventManager.trigger({type:"change",event:n,detail:r.value}))},e._events={"click .kuc-dropdown-outer":e._handleToggleMenu.bind(e)},e._domUpdater={value:function(){e._setState({items:e._state.items})},items:function(t){i.setText(e._text,e._getText()),t&&e._renderItems()},isMenuVisible:function(t){i.showHide(e._dropdownMenu,t)},isDisabled:function(t){i.setClassName(e._dropdownButton,{"kuc-dropdown":!0,"kuc-dropdown-disable":t})}},e}return e(u,r),u.prototype.setItems=function(e){this._setState({items:e})},u.prototype.getItems=function(){return this._state.items},u.prototype.setValue=function(e){this._setState({value:e})},u.prototype.getValue=function(){return this._state.value},u.prototype._canShowMenu=function(){var e=this._state,t=e.isMenuVisible,n=e.isDisabled,r=e.items;return t&&!n&&Array.isArray(r)&&r.length>0},u.prototype._getText=function(){var e=this._state,t=e.items,n=e.value;if(!Array.isArray(t))return"";var r=t.filter(function(e){return e.value===n})[0];return r?r.value:""},u.prototype._createDom=function(){return o.html(a||(a=t(['\n      <div class="kuc-dropdown-container">\n        <div class="kuc-dropdown-sub-container">\n          <div class="kuc-dropdown-outer">\n            <div class="kuc-dropdown" ref="_dropdownButton">\n              <div class="kuc-dropdown-selected">\n                <span class="kuc-dropdown-selected-name">\n                  <span ref="_text"></span>\n                  <span class="icon-arrow-down"\n                    ><i class="fa fa-angle-down" aria-hidden="true"></i\n                  ></span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class="kuc-list-outer" ref="_dropdownMenu"></div>\n        </div>\n      </div>\n    '],['\n      <div class="kuc-dropdown-container">\n        <div class="kuc-dropdown-sub-container">\n          <div class="kuc-dropdown-outer">\n            <div class="kuc-dropdown" ref="_dropdownButton">\n              <div class="kuc-dropdown-selected">\n                <span class="kuc-dropdown-selected-name">\n                  <span ref="_text"></span>\n                  <span class="icon-arrow-down"\n                    ><i class="fa fa-angle-down" aria-hidden="true"></i\n                  ></span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class="kuc-list-outer" ref="_dropdownMenu"></div>\n        </div>\n      </div>\n    '])))},u.prototype._renderItems=function(){var e=this,t=this._state,n=t.items,r=t.value;o.renderList(n,function(t){var n=new s.default({isSelected:r===t.value,item:t});return n.on("click",e._handleSelectItem.bind(e,n)),n},this._dropdownMenu)},u.customEvents=["change"],u}(o.Component);exports.default=u;
},{"../common":"1U5u","../../dom/element":"I+l/","./DropDownMenuItem":"qG1B","./Dropdown.css":"3hYq"}],"3FDn":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./Dropdown");exports.default=e.default;
},{"./Dropdown":"WhxZ"}],"WdSo":[function(require,module,exports) {
"use strict";exports.__esModule=!0,require("./components/common/common.css");var o=require("./components/TextBox");exports.TextBox=o.default;var e=require("./components/Button");exports.Button=e.default;var t=require("./components/Dropdown");exports.Dropdown=t.default;
},{"./components/common/common.css":"3hYq","./components/TextBox":"jf6M","./components/Button":"9AbU","./components/Dropdown":"3FDn"}],"dBpr":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./section"),t=require("../../src");exports.default=function(n){var o=e.createSection("Textbox").appendTo(n),r=new t.TextBox({value:"hello"});r.on("input",function(){return console.log("txt1 (input):",r.getValue())}),r.on("change",function(){return console.log("txt1 (changed):",r.getValue())}),o.appendChild(r.render());var a=new t.TextBox({isDisabled:!0});a.setValue("disabled textbox"),o.appendChild(a.render())};
},{"./section":"8FcO","../../src":"WdSo"}],"zONe":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("./section"),e=require("../../src");exports.default=function(n){var o=t.createSection("Button").appendTo(n),r=new e.Button({text:"Button 1"});r.on("click",function(){return console.log('"Button 1" is clicked')}),o.appendChild(r.render());var i=new e.Button({text:"Button 2",type:"submit"});i.on("click",function(){return console.log('"Button 2" is clicked')}),o.appendChild(i.render());var u=new e.Button({text:"Button 3",isDisabled:!0});o.appendChild(u.render())};
},{"./section":"8FcO","../../src":"WdSo"}],"4aj5":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./section"),n=require("../../src");exports.default=function(a){var l=e.createSection("Dropdown").appendTo(a),o=new n.Dropdown({items:[{label:"Orange",value:"Orange"},{label:"Banana",value:"Banana"},{label:"Lemon",value:"Lemon",isDisabled:!0},{label:"Apple",value:"Apple"}],value:"Banana"});o.on("change",function(e,n){console.log('The "'+n+'" is selected.')}),l.appendChild(o.render());var i=new n.Dropdown({items:[]});i.setItems([{label:"iPhone 6",value:"iPhone 6"},{label:"iPhone 7",value:"iPhone 7",isDisabled:!0},{label:"iPhone 8",value:"iPhone 8"},{label:"iPhone X",value:"iPhone X"}]),i.on("change",function(e,n){console.log('The "'+n+'" is selected.')}),l.appendChild(i.render())};
},{"./section":"8FcO","../../src":"WdSo"}],"m54m":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),t=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};exports.__esModule=!0;var n=require("../../src/components/common"),o=require("../../src/dom/element"),r=require("../../src"),a=require("./section");require("./counter.css");var u,s=function(a){function s(){var e=null!==a&&a.apply(this,arguments)||this;return e._domUpdater={value:function(t){o.setText(e._valueEl,t),e._btnDown.setDisable(0===t)}},e}return e(s,a),s.prototype.getValue=function(){return this._state.value},s.prototype.setValue=function(e){this._setState({value:e})},s.prototype._handleUpDown=function(e,t){var n=this._state.value+("up"===e?1:-1);this._setState({value:n}),this._eventManager.trigger({type:"change",event:t,detail:n})},s.prototype._createDom=function(){var e=n.uiComponent(new r.Button({text:"▼",onClick:this._handleUpDown.bind(this,"down")}),"_btnDown"),o=n.uiComponent(new r.Button({text:"▲",onClick:this._handleUpDown.bind(this,"up")}),"_btnUp");return n.html(u||(u=t(['\n      <span class="example-counter">\n        ','\n        <span class="example-counter-value" ref="_valueEl"></span>\n        ',"\n      </span>\n    "],['\n      <span class="example-counter">\n        ','\n        <span class="example-counter-value" ref="_valueEl"></span>\n        ',"\n      </span>\n    "])),e,o)},s.customEvents=["change"],s}(n.Component);exports.default=function(e){var t=a.createSection("Counter").appendTo(e),n=new s({value:1});n.on("change",function(e,t){return console.log("Counter (changed), value:",t)}),t.appendChild(n.render())};
},{"../../src/components/common":"1U5u","../../src/dom/element":"I+l/","../../src":"WdSo","./section":"8FcO","./counter.css":"3hYq"}],"7QCb":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var t=e(require("./textbox")),r=e(require("./button")),u=e(require("./dropdown")),o=e(require("./counter")),d=document.querySelector("main");t.default(d),r.default(d),u.default(d),o.default(d);
},{"./textbox":"dBpr","./button":"zONe","./dropdown":"4aj5","./counter":"m54m"}]},{},["7QCb"], null)
//# sourceMappingURL=src.a2f753aa.js.map