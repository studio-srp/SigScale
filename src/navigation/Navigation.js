import { LitElement, css, html } from "lit";
import "./desktopNavigation.js";
import "./mobileNavigation.js";

class Navigation extends LitElement {
    render() {
        return html`
            <desktop-nav></desktop-nav>
            <mobile-nav></mobile-nav>
            <slot></slot>
        `;
    }
}

window.customElements.define("app-navigation", Navigation);
