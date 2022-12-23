import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";
import "./oursolutions.js";
import "./../footer/footer.js";

export class Solutions extends LitElement {
  static styles = css`
    /* *,
        *::after,
        *::before {
            box-sizing: border-box !important;
        } */
  `;

  render() {
    return html`
      <landing-general page="Solutions"></landing-general>
      <our-solutions></our-solutions>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-solutions", Solutions);
