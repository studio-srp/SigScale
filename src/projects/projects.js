import { LitElement, css, html } from "lit";

export class Projects extends LitElement {
    static styles = css``;
    render() {
        return html` <h1>This is projects</h1>`;
    }
}

window.customElements.define("app-projects", Projects);
