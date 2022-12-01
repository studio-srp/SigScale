import { LitElement, css, html } from "lit";

export class Contacts extends LitElement {
    static styles = css``;
    render() {
        return html` <h1>This is contacts</h1>`;
    }
}

window.customElements.define("app-contacts", Contacts);
