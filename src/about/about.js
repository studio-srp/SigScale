import { LitElement, css, html } from "lit";
import "./landing.js";

export class About extends LitElement {
    render() {
        return html`
            <h1>This is about</h1>
            <about-landing></about-landing>
        `;
    }
}

window.customElements.define("app-about", About);
