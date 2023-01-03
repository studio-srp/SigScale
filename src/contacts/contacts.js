import { LitElement, css, html } from "lit";
import "./../Landing/landing.js";
import "./../footer/footer";
import "./contactForm";
import "./contactInfo";
import "./contactworkwithus.js";

export class Contacts extends LitElement {
  static styles = css``;
  render() {
    return html`
      <landing-general page="Contacts"></landing-general>
      <app-contacts-info></app-contacts-info>
      <contact-work-with-us></contact-work-with-us>
      <app-contacts-form></app-contacts-form>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-contacts", Contacts);
