import { LitElement, css, html } from "lit";

export class Awards extends LitElement {
    static styles = css``;
    render() {
        return html` <h1>This is awards</h1>`;
    }
}

window.customElements.define("app-awards", Awards);
