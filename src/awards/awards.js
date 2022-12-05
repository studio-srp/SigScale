import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";
import "./../footer/footer";

import award1 from "./../assets/images/awards-3.png";
import award2 from "./../assets/images/awards-2.png";
import award3 from "./../assets/images/awards-3.png";

export class Awards extends LitElement {
  static styles = css`
    .awards-section {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      font-family: "sf-pro-text", sans-serif;
      padding: 80px 0;

      scroll-snap-align: start;
      /* display: flex; */
    }

    .awards-section__sub-header {
      color: var(--color-primary);
      font-size: 24px;
      font-family: "sf-pro-display-semi", sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0px;
    }

    .awards-section__header {
      font-size: 36px;
      letter-spacing: 0.05em;
      font-family: "sf-pro-display-semi", sans-serif;
      margin-bottom: 30px;
      margin-top: 10px;
    }

    .awards-card {
      overflow: hidden;
      /* width: 100%; */
      text-align: center;
      padding: 40px;
      border-radius: 15px;
      color: black;
      border-bottom: var(--color-primary) 5px solid;
      box-shadow: 6px 4px 20px -2px rgba(0, 0, 0, 0.25);
      margin-bottom: 40px;
    }

    .awards-card__image {
      object-fit: cover;
      max-width: 100%;
      height: auto;
      width: 100%;
    }
    .awards-card-content {
      text-align: left;
      /* padding: 0 3rem; */
    }
    .awards-card__header {
      font-weight: 400;
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 24px;
      font-family: "sf-pro-display-semi", sans-serif;
    }

    .awards-card__description {
      font-size: 16px;

      /* line-height: 19px; */
      color: var(--color-description);
    }

    /* 
@media (max-width: 1400px) {
}

@media (max-width: 1200px) {
   
    .awards-card {
        width: 45%;
    }

    .awards-card:last-child {
        display: none;
    }
}

@media (max-width: 992px) {
   
}

@media (max-width: 768px) {
    .awards-card {
        width: 80%;
    }

    .awards-card:nth-child(2) {
        display: none;
    }
} */

    /* ********************************************************* */

    @media (min-width: 1200px) {
      .awards-section-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .awards-section-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .awards-section-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        /* width: 100% !important; */
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .awards-section-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }
  `;
  render() {
    return html` <landing-general page="Awards"></landing-general>
      <section class="awards-section">
        <div class="awards-section-area-box">
          <h3 class="awards-section__sub-header">Lorem Ipsum</h3>
          <h1 class="awards-section__header">Lorem ipsum dolor sit amet</h1>
          <div class="awards-section__card-section">
            <div class="awards-card">
              <img src=${award1} alt="award image" class="awards-card__image" />
              <div class="awards-card-content">
                <h3 class="awards-card__header">
                  Award for Best use of Open Digital Framework
                </h3>
                <p class="awards-card__description margin-top-small">
                  We offer our CSP customers commercial subscription support
                  services to meet their business assurance requirements. While
                  vendors of proprietary solutions will charge you relative to
                  the amount of your customer traffic, SigScale offers our
                  software license free. We charge relative to only your use of
                  our support resources. Subscription packages are sized to
                  include a guaranteed monthly minimum volume, availability
                  windows and response time to match your requirements.
                </p>
              </div>
            </div>
            <div class="awards-card">
              <img src=${award2} alt="award image" class="awards-card__image" />
              <div class="awards-card-content">
                <h3 class="awards-card__header">
                  Award for Best use of Open Digital Framework
                </h3>
                <p class="awards-card__description margin-top-small">
                  We offer our CSP customers commercial subscription support
                  services to meet their business assurance requirements. While
                  vendors of proprietary solutions will charge you relative to
                  the amount of your customer traffic, SigScale offers our
                  software license free. We charge relative to only your use of
                  our support resources. Subscription packages are sized to
                  include a guaranteed monthly minimum volume, availability
                  windows and response time to match your requirements.
                </p>
              </div>
            </div>

            <div class="awards-card">
              <img src=${award3} alt="award image" class="awards-card__image" />
              <div class="awards-card-content">
                <h3 class="awards-card__header">
                  Award for Best use of Open Digital Framework
                </h3>
                <p class="awards-card__description margin-top-small">
                  We offer our CSP customers commercial subscription support
                  services to meet their business assurance requirements. While
                  vendors of proprietary solutions will charge you relative to
                  the amount of your customer traffic, SigScale offers our
                  software license free. We charge relative to only your use of
                  our support resources. Subscription packages are sized to
                  include a guaranteed monthly minimum volume, availability
                  windows and response time to match your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <app-footer></app-footer>`;
  }
}

window.customElements.define("app-awards", Awards);
