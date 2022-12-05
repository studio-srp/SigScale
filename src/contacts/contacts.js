import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";
import "./../footer/footer";
import "./contactForm";
import "./contactInfo";

export class Contacts extends LitElement {
  static styles = css``;
  render() {
    return html`
      <landing-general page="Contacts"></landing-general>
      <app-contacts-info></app-contacts-info>
      <app-contacts-form></app-contacts-form>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-contacts", Contacts);
