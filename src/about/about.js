import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";
import "./aboutcompany.js";

export class About extends LitElement {
    render() {
        return html`
            <landing-general page="About Us"></landing-general>
            <about-company></about-company>
        `;
    }
}

window.customElements.define("app-about", About);
