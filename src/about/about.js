import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";

export class About extends LitElement {
    render() {
        return html` <landing-general page="About Us"></landing-general> `;
    }
}

window.customElements.define("app-about", About);
