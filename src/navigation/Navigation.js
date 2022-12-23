import { LitElement, css, html } from "lit";
import "./desktopNavigation.js";
import "./mobileNavigation.js";

class Navigation extends LitElement {
  static properties = {
    page: {
      type: String,
    },
  };

  constructor() {
    super();
    this.page = "home";
  }

  render() {
    return html`
      <desktop-nav @custom-event=${this._onCustomEvent} activePage=${this.page}></desktop-nav>
      <mobile-nav @custom-event=${this._onCustomEvent} activePage=${this.page}></mobile-nav>
      <slot></slot>
    `;
  }

  _onCustomEvent(event) {
    this.page = event.detail.title.page.toLowerCase();
  }
}

window.customElements.define("app-navigation", Navigation);
