import { LitElement, css, html } from "lit";
import "./../Landing/landing.js";
import "./aboutcompany.js";
import "./customers.js";
import "./whyus.js";
import "./../footer/footer.js";

export class About extends LitElement {
  render() {
    return html`
      <landing-general page="About Us"></landing-general>
      <about-company></about-company>
      <about-customers></about-customers>
      <why-us></why-us>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-about", About);
