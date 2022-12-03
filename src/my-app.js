import { LitElement, css, html } from "lit";

import "./navigation/Navigation.js";
import "./app-content.js";
import "./footer/footer.js";

export class MyApp extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <header>
                <app-navigation></app-navigation>
            </header>
            <app-content></app-content>
        `;
    }
}

window.customElements.define("my-app", MyApp);
