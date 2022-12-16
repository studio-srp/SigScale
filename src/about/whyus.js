import { LitElement, css, html } from "lit";
import backgroundImage from "./../assets/images/choose-our-token.png";
import bulbImage from "./../assets/icons/bulb.svg";

export class WhyUs extends LitElement {
  static styles = css`
    .whyus-area-box {
      display: flex;
      /* margin-bottom: auto; */
      justify-content: space-between;
      max-width: 1400px;
      gap: 40px;
      margin: auto;
      margin-bottom: 30px;
      margin-top: 30px;
    }

    @media (min-width: 1200px) {
      .whyus-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .whyus-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .whyus-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .whyus-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    .why-us {
      min-height: 100vh;
      display: flex;
      align-items: center;
      font-family: "sf-pro-text", sans-serif;
     /* scroll-snap-align: start; */
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

    .background-image {
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
      z-index: 2;
    }

    .why-us-left__content {
      z-index: 5;
    }
    .why-us-left {
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      color: white;
    }

    .why-us-left__content {
      width: 80%;
      margin: auto;
    }

    .why-us-left__sub-heading {
      text-transform: uppercase;
      color: var(--color-primary);
      font-size: 24px !important ;
      line-height: 29px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .why-us-left__heading {
      font-size: 35px !important ;
      line-height: 31px;
      font-weight: 700;
      font-family: "sf-pro-display-semi", sans-serif;
      letter-spacing: 0.05em;
      font-weight: 700;
      line-height: 42px;
    }

    .why-us-right {
      width: 55%;
    }
    .why-us-right__content-box {
      display: flex;
      justify-content: start;
      align-items: center;
      /* margin-bottom: 3rem; */
    }

    .why-us-right__content-box:last-child {
      margin-bottom: 0;
    }

    .content-box__image {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-primary);
      border-radius: 15px;
      margin-right: 30px;
    }

    .content-box__image > img {
      height: 70px;
    }

    .content-box__content {
      width: 78%;
    }

    .content-box__header {
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 10px;
    }

    .content-box__description {
      font-size: 19px;
      line-height: 32px;
      color: var(--color-description);
    }

    @media (max-width: 992px) {
      .why-us {
        min-height: auto;
        padding: 80px 0;
        height: auto;
      }

      .whyus-area-box {
        flex-direction: column;
      }

      .why-us-left {
        width: 100%;
        margin: auto;
        padding: 40px 0;
        margin-bottom: 50px;
      }

      .why-us-right {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .why-us-right__content-box {
        margin-bottom: 30px;
        width: 45%;
        align-items: flex-start;
      }

      .why-us-left__sub-heading {
        font-size: 24px !important ;
 line-height: 29px;
 font-weight: 700;}
    .why-us-left__heading {
        font-size: 27px !important ;
 line-height: 31px;
 font-weight: 700;
    }
      .content-box__header {
        font-size: 24px !important;
 line-height: 29px;
    }

    .content-box__description {
        font-size: 19px;
      line-height: 32px;
    }
    }

    @media (max-width: 786px) {
      .why-us-right {
        justify-content: center !important;
        align-items: center;
      }

      .whyus-area-box {
        gap: 0;
      }
      .content-box__image {
        margin: auto;
        /* margin-bottom: 15px; */
      }
      .content-box__header {
        /* font-size: 16px; */
        text-align: center;
      }
      .content-box__description {
        /* font-size: 14px; */
        text-align: center;
      }

      .why-us-right__content-box {
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 30px 0px;
      }
    }
    @media (max-width: 576px) {

      .why-us-left__sub-heading {
        font-size: 24px !important ;
 line-height: 29px;
 font-weight: 700;
    .why-us-left__heading {
        font-size: 27px !important ;
 line-height: 29px;
 font-weight: 700;
    }
      .content-box__header {
        font-size: 27px !important ;
 line-height: 29px;
 font-weight: 700;
    }

    .content-box__description {
        font-size: 19px;
 line-height: 32px;
    }
    }
  `;

  render() {
    return html`
      <section class="why-us">
        <div class="whyus-area-box">
          <div class="why-us-left">
            <img src=${backgroundImage} alt="background image" class="background-image" />
            <div class="overlay"></div>
            <div class="why-us-left__content">
              <h3 class="why-us-left__sub-heading">about company</h3>
              <h2 class="why-us-left__heading">Why Choose Our Token?</h2>
            </div>
          </div>
          <div class="why-us-right">
            <div class="why-us-right__content-box">
              <div class="content-box__image">
                <img src=${bulbImage} alt="bulb image" />
              </div>
              <div class="content-box__content">
                <h4 class="content-box__header">Lorem ipsum dolor sit amet</h4>
                <p class="content-box__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt
                </p>
              </div>
            </div>

            <div class="why-us-right__content-box">
              <div class="content-box__image">
                <img src=${bulbImage} alt="bulb image" />
              </div>
              <div class="content-box__content">
                <h4 class="content-box__header">Lorem ipsum dolor sit amet</h4>
                <p class="content-box__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt
                </p>
              </div>
            </div>
            <div class="why-us-right__content-box">
              <div class="content-box__image">
                <img src=${bulbImage} alt="bulb image" />
              </div>
              <div class="content-box__content">
                <h4 class="content-box__header">Lorem ipsum dolor sit amet</h4>
                <p class="content-box__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt
                </p>
              </div>
            </div>

            <div class="why-us-right__content-box">
              <div class="content-box__image">
                <img src=${bulbImage} alt="bulb image" />
              </div>
              <div class="content-box__content">
                <h4 class="content-box__header">Lorem ipsum dolor sit amet</h4>
                <p class="content-box__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define("why-us", WhyUs);
