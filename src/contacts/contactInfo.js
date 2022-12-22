import { LitElement, css, html } from "lit";

import email from "./../assets/icons/email.svg";
import phone from "./../assets/icons/telephone.svg";

export class ContactInfo extends LitElement {
  static styles = css`
    .contact-info {
      /* min-height: 100vh; */
      font-family: "sf-pro-text", sans-serif;
      padding: 2rem 0;
      padding-bottom: 4rem;
      display: flex;
      justify-content: center;
      /* scroll-snap-align: start; */
    }

    .section__sub-header {
      font-family: "sf-pro-display-semi", sans-serif;
      color: var(--color-primary);
      text-transform: uppercase;
      font-size: 22px;
      line-height: 29px;
      font-weight: 700;
      letter-spacing: 0.15em;
      margin-bottom: 5px;
      margin-top: 22px;
    }

    .section__header {
      font-family: "sf-pro-display-semi", sans-serif;
      font-size: 35px !important ;
      line-height: 42px;
      font-weight: 700;
      margin: 0;
      margin-bottom: 30px;
    }

    .contact-info__card-section {
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .contact-info__card {
      box-sizing: border-box;
      padding: 30px 40px;
      border-top: 4px var(--color-primary) solid;
      border-radius: 15px;
      box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.1);
      width: calc(50% - 15px);
    }

    .contact-info__card-header {
      font-size: 20px;
      line-height: 29px !important ;
      margin-bottom: 10px;
      margin-top: 0px;
    }

    .contact-info__card-description {
      font-size: 16px !important ;
      line-height: 32px !important ;
      color: var(--color-description);
      margin-bottom: 15px;
    }

    .contact-info__card-links {
      display: flex;
      margin-top: 10px;
    }

    .contact-info__card-links > img {
      width: 25px;
      margin-right: 20px;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    .contact-info__card-links > p {
      font-size: 16px !important ;
      line-height: 32px !important ;
      font-weight: 300px;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    @media (max-width: 992px) {
      .section__sub-header {
        font-size: 24px !important ;
        line-height: 29px !important ;
        font-weight: 700;
      }
      .section__header {
        font-size: 27px !important ;
        line-height: 31px !important ;
        font-weight: 700;
      }
      .contact-info__card-header {
        font-size: 24px !important;
        line-height: 29px;
      }
      .contact-info__card-description {
        font-size: 19px !important ;
        line-height: 32px;
      }
      .contact-info__card-links > p {
        font-size: 19px !important ;
        line-height: 32px;
      }
    }

    @media (max-width: 576px) {
      .section__sub-header {
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
      }
      .section__header {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
      }
      .contact-info__card-header {
        font-size: 24px !important;
        line-height: 29px;
      }
      .contact-info__card-description {
        font-size: 19px !important ;
        line-height: 32px;
      }
      .contact-info__card-links > p {
        font-size: 19px !important ;
        line-height: 32px;
      }
    }
    /* Break Pointes  */
    /* 1400  - Large Laptop */
    /* 1200 - Small Laptop */
    /* 992 - Tab Landscape */
    /* 768 - Tab Portrait */
    /* 576 - Mobile */

    @media (max-width: 850px) {
      .contact-info__card {
        width: 100% !important;
      }
    }

    .contact-info-area-box {
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .contact-info-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
      /* .contact-info__card {
                width: 41%;
            } */
    }

    @media (min-width: 1400px) {
      .contact-info-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .contact-info-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        /* width: 100% !important; */
        padding-right: 5rem !important;
      }
      /* .contact-info__card {
                width: 38%;
            } */
    }

    @media (max-width: 850px) {
      .contact-info__card {
        width: 100%;
      }
    }

    @media (max-width: 576px) {
      .contact-info-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }
  `;
  render() {
    return html`
      <section class="contact-info">
        <div class="contact-info-area-box">
          <h3 class="section__sub-header">Find Us</h3>
          <h1 class="section__header">Contact Information</h1>
          <div class="contact-info__card-section">
            <div class="contact-info__card">
              <h4 class="contact-info__card-header">Sales</h4>
              <p class="contact-info__card-description">
                Please address inquiries about commercial sales and support about sigscale to this
                contact details:
              </p>

              <div class="contact-info__card-links">
                <img src=${email} alt="email icon" />
                <p>info@sigscale.com</p>
              </div>

              <div class="contact-info__card-links">
                <img src=${phone} alt="email icon" />
                <p>+63 920 837 0397</p>
              </div>
            </div>

            <div class="contact-info__card">
              <h4 class="contact-info__card-header">Support</h4>
              <p class="contact-info__card-description">
                Everyone is welcome to contact us with questions or issues around installing and
                using our open source software:
              </p>
              <p class="contact-info__card-description">
                Help on our products is found in our
                <a href="https://sigscale.atlassian.net/wiki/spaces/SO/overview">Knowledge Base</a>
                Additionally most of our open source projects have public
                <a href="https://sigscale.atlassian.net/jira/projects">Jira</a>
                issue tracking.
              </p>

              <div class="contact-info__card-links">
                <img src=${email} alt="email icon" />
                <p>support@sigscale.com</p>
              </div>

              <div class="contact-info__card-links">
                <img src=${phone} alt="email icon" />
                <p>+63 920 837 0397</p>
              </div>
            </div>

            <div class="contact-info__card">
              <h4 class="contact-info__card-header">Headquarters</h4>
              <p class="contact-info__card-description">
                SigScale Global Inc. Toronto, Ontario Canada
              </p>

              <div class="contact-info__card-links">
                <img src=${email} alt="email icon" />
                <p>admin@sigscale.com</p>
              </div>

              <!-- <div class="contact-info__card-links">
                <img src=${phone} alt="email icon" />
                <p>+63 920 837 0397</p>
              </div> -->
            </div>

            <div class="contact-info__card">
              <h4 class="contact-info__card-header">Development Center</h4>
              <p class="contact-info__card-description">Colombo 00300 Sri Lanka</p>

              <div class="contact-info__card-links">
                <img src=${email} alt="email icon" />
                <p>admin@sigscale.lk</p>
              </div>

              <!-- <div class="contact-info__card-links">
                <img src=${phone} alt="email icon" />
                <p>+63 920 837 0397</p>
              </div> -->
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define("app-contacts-info", ContactInfo);
