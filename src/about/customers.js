import { css, html, LitElement } from "lit";
import weLoveClt from "./../assets/images/we-love-clt.png";
import nel from "./../assets/images/nel.png";
import queen from "./../assets/images/queen.png";
import eminence from "./../assets/images/eminence.png";
import michael from "./../assets/images/michael.png";
import louis from "./../assets/images/louis.png";

export class Customers extends LitElement {
  render() {
    return html`
      <section class="customers">
        <div class="customers-area-box">
          <div class="customers-area__customers-left">
            <div class="customers-area__customer-card">
              <img src=${weLoveClt} alt="customer logo" />
            </div>
            <div class="customers-area__customer-card">
              <img src=${nel} alt="customer logo" />
            </div>
            <div class="customers-area__customer-card">
              <img src=${queen} alt="customer logo" />
            </div>
            <div class="customers-area__customer-card">
              <img src=${eminence} alt="customer logo" />
            </div>
            <div class="customers-area__customer-card">
              <img src=${michael} alt="customer logo" />
            </div>
            <div class="customers-area__customer-card">
              <img src=${louis} alt="customer logo" />
            </div>
          </div>
          <div class="customers-area__customers-right">
            <div class="customers-area__customers-right__card">
              <h3 class="customers-area__customers-right__card-heading">
                We have the privilege of working with exceptional customers
              </h3>
              <a
                class="cta-btn__primary-customers margin-top-medium cta-desktop-customers"
                >View more</a
              >
              <a class="cta-btn__primary margin-top-medium cta-mobile-customers"
                >View more</a
              >
            </div>
          </div>
        </div>
      </section>
    `;
  }

  static styles = css`
    .customers {
      background: #fafbfe;
      min-height: 100vh;
      display: flex;
      scroll-snap-align: start;
    }

    .customers-area__customers-left {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 70%;
    }

    .customers-area__customer-card {
      width: 30%;
      /* padding: 1rem; */
    }

    .customers-area__customers-right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 30%;
    }
    .customers-area__customers-right__card {
      max-width: 360px;
      padding: 60px 60px;
      /* margin: auto; */
      background-color: #04213d;
      border-radius: 10px;
      text-align: center;
    }

    .customers-area__customers-right__card-heading {
      font-size: 35px !important ;
      line-height: 31px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: white;
      font-family: "sf-pro-display-semi", sans-serif;
    }

    .cta-btn__primary-customers {
      color: #f9a418;
      font-family: "sf-pro-text", sans-serif;

      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: 3px;
      display: inline-block;
      padding: 0.7rem 0;
      border-radius: 5px;
      border: var(--color-primary) 1px solid;
      transition: 0.2s all ease-in;
      width: 90%;
    }

    .cta-btn__primary-customers:hover {
      cursor: pointer;
      background-color: var(--color-primary);
      color: white;
    }

    .cta-btn__primary {
      color: #f9a418;
      font-family: "sf-pro-text", sans-serif;
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: 3px;
      display: inline-block;
      padding: 0.7rem 1.4rem;
      border-radius: 5px;
      border: var(--color-primary) 1px solid;
      transition: 0.2s all ease-in;
    }

    .cta-btn__primary:hover {
      cursor: pointer;
      background-color: var(--color-primary);
      color: white;
    }

    .cta-mobile-customers {
      display: none;
      font-family: "sf-pro-text", sans-serif;
    }

    @media (max-width: 1400px) {
      .cta-btn__primary-customers {
        width: 100%;
      }
      .customers-area__customers-right__card-heading {
        font-size: 35px !important ;
        line-height: 31px;
        font-weight: 700;
      }
    }

    @media (max-width: 1200px) {
      .customers {
        padding-top: 6rem 0;
      }
      .customers-area-box {
        flex-direction: column-reverse;
      }

      .customers-area__customers-right {
        width: 100%;
      }

      .customers-area__customers-right__card {
        margin: auto;
        max-width: 600px;
        background: #fafbfe;
      }

      .customers-area__customers-right__card-heading {
        color: black;
        font-size: 35px !important ;
        line-height: 31px;
        font-weight: 700;
      }

      .cta-desktop-customers {
        display: none;
      }

      .cta-mobile-customers {
        display: inline-block;
      }

      .cta-mobile-customers {
        background-color: #f9a418;
        color: white;
      }

      .cta-mobile-customers:hover {
        background-color: #e4971b;
      }
    }

    @media (max-width: 992px) {
      .customers-area__customers-right__card {
        padding: 0 1rem;
      }

      .customers-area__customers-left {
        width: 90%;
      }
      .customers-area__customers-right__card-heading {
        max-width: 440px;
        font-size: 27px !important ;
        line-height: 31px;
        font-weight: 700;
      }
    }

    @media (max-width: 768px) {
      .customers-area__customers-left {
        margin-top: 30px;
        justify-content: space-between;
      }

      .customers-area__customer-card {
        width: 45%;
        display: flex;
        justify-content: center;
      }
    }

    @media (max-width: 576px) {
      .customers-area__customers-right__card-heading {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
      }
    }

    .customers-area-box {
      margin: auto auto;
      display: flex;
      max-width: 1400px;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    @media (max-width: 992px) {
      .customers-area-box {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }

    @media (min-width: 1200px) {
      .customers-area-box {
        max-width: 1140px;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .customers-area-box {
        max-width: 1400px !important;
      }
    }

    @media (min-width: 576px) {
      .customers-area-box {
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .customers-area-box {
        max-width: auto;
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }
  `;
}

window.customElements.define("about-customers", Customers);
