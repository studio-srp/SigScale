import { LitElement, css, html } from "lit";

export class About extends LitElement {
    render() {
        return html` <h1>This is about</h1>`;
    }
}

window.customElements.define("app-about", About);
