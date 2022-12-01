import { LitElement, css, html } from "lit";

import "./navigation/Navigation.js";
import "./app-content.js";

export class MyApp extends LitElement {
    static get properties() {
        return {
            // docsHint: { type: String },
            // count: { type: Number },
        };
    }

    constructor() {
        super();
        // this.docsHint = "Click on the Vite and Lit logos to learn more";
        // this.count = 0;
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
