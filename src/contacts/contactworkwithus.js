import { LitElement, css, html } from "lit";
import backgroundImage from "./../assets/images/work with us.png";

export class ContactWorkWithUs extends LitElement {
  static styles = css`
    .contacts-work-with-us {
      height: 40vh;
      text-align: center;
      padding: 110px 0;
      font-family: "sf-pro-text", sans-serif;
      scroll-snap-align: start;
      position: relative;
    }

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
      z-index: 2;
    }

    .contacts-work-with-us__sub-heading {
      font-family: "sf-pro-display-semi", sans-serif;
      text-transform: uppercase;
      text-align: center;
      color: var(--color-primary);
      font-size: 20px;
      letter-spacing: 0.15em;
      margin-bottom: 10px;
    }

    .contacts-work-with-us__heading {
      font-family: "sf-pro-display-semi", sans-serif;
      color: white;
      font-size: 36px;
      text-align: center;
      letter-spacing: 0.05em;
      margin-bottom: 30px;
    }

    .contacts-work-with-us__cta-btn {
      text-decoration: none;
      color: black;
      display: inline-block;
      margin: auto;
      padding: 20px 40px;
      color: var(--color-primary);
      border: var(--color-primary) 2px solid;
      border-radius: 5px;
      margin: auto;
      transition: 0.2s all;
    }

    .contacts-work-with-us__cta-btn:hover {
      background-color: var(--color-primary);
      color: white;
    }

    .content-area {
      z-index: 5;
    }

    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      object-fit: cover;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      z-index: 3;
    }

    /* Break Pointes  */
    /* 1400  - Large Laptop */
    /* 1200 - Small Laptop */
    /* 992 - Tab Landscape */
    /* 768 - Tab Portrait */
    /* 576 - Mobile */

    @media (max-width: 768px) {
      .contacts-work-with-us__heading {
        font-size: 30px !important;
      }

      .contacts-work-with-us__sub-heading {
        font-size: 16px;
      }

      .cta-btn {
        padding: 14px 20px;
      }
    }

    .contacts-work-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .contacts-work-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .contacts-work-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .contacts-work-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .contacts-work-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }
  `;

  render() {
    return html`
      <section class="contacts-work-with-us">
        <div class="contacts-work-area-box">
          <div class="content-area">
            <h3 class="contacts-work-with-us__sub-heading">
              Want to work with us?
            </h3>
            <h2 class="contacts-work-with-us__heading">
              Digitally transform and grow your business
            </h2>
            <a class="contacts-work-with-us__cta-btn" href="#">Contact Us</a>
          </div>
        </div>
        <img
          src=${backgroundImage}
          alt="background image"
          class="background-image"
        />
        <div class="overlay"></div>
      </section>
    `;
  }
}

window.customElements.define("contact-work-with-us", ContactWorkWithUs);
