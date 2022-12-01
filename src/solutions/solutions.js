import { LitElement, css, html } from "lit";

export class Solutions extends LitElement {
    static styles = css``;

    render() {
        return html` <h1>This is solutions</h1> `;
    }
}

window.customElements.define("app-solutions", Solutions);
