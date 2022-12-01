import { LitElement, css, html } from "lit";

export class Services extends LitElement {
    static styles = css``;
    render() {
        return html` <h1>This is services</h1>`;
    }
}

window.customElements.define("app-services", Services);
