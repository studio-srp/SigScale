import { html, LitElement } from "lit";

export class Landing extends LitElement {
    render() {
        return html` <p>Landing section</p> `;
    }

    static styles = css``;
}

window.customElements.define("about-landing", Landing);
