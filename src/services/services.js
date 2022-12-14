import { LitElement, css, html } from "lit";
import "./our-services";
import landingImage from "./../assets/images/about-us-landing.png";

export class Services extends LitElement {
  static styles = css`
    .landing-services-banner {
      display: flex;
      align-items: flex-end;
      font-family: "sf-pro-text", sans-serif;
      height: calc(40vh - 90px);
      width: 100vw;
      overflow: hidden;
      position: relative;
    }

    .background-image-service-landing {
      object-fit: cover;
      position: absolute;
      /* display: none; */
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .overlay {
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .landing-services-banner > .content-area-box {
      width: 1400px;
      margin: auto;
      margin-bottom: 4rem;
    }

    .landing-banner__content {
      position: absolute;
      display: block;
      z-index: 300;
      /* top: 0%; */
      transform: translateY(-50%);
      margin-bottom: 90px;
    }

    .landing-banner__links {
      display: flex;
      align-items: flex-start;
      margin-bottom: 80px;
    }

    .landing-banner__header {
      font-family: "sf-pro-display-semi";
      font-size: 36px;
      color: var(--color-white);
      margin-bottom: 1rem;
    }

    .landing-banner__nav {
      font-size: 20px;
      color: #1df2ba;
      text-decoration: none;
      height: 30px;
    }

    .landing-banner__divider {
      display: inline-block;
      margin: 0 10px;
      width: 3px;
      height: 25px;
      background-color: var(--color-primary);
      color: var(--color-primary);
    }
    /* --------------------------------------------------------- */

    /* .our-services-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    } */

    @media (min-width: 1200px) {
      .content-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .content-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .content-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .content-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      .landing-banner__content {
        position: absolute;
        display: block;
      }
      .landing-banner__header {
        font-size: 30px;
      }
      .landing-banner__nav {
        font-size: 18px;
      }
      .landing-banner__divider {
        height: 20px;
      }
    }
    @media (max-width: 992px) {
      .content-area-box {
        padding-left: 3rem;
        padding-right: 3rem;
      }
      .landing-banner__content {
        position: absolute;
        display: block;
      }
      .landing-banner__header {
        font-size: 32px;
      }
      .landing-banner__nav {
        font-size: 20px;
      }
      .landing-banner__divider {
        height: 22px;
      }
    }
  `;
  render() {
    return html`
      <section class="landing-services-banner">
        <div class="content-area-box">
          <div class="landing-banner__content">
            <h1 class="landing-banner__header">Services</h1>
            <div class="landing-banner__links">
              <a class="landing-banner__nav" href="#">Home</a
              ><span class="landing-banner__divider"></span
              ><a href="#" class="landing-banner__nav">Services</a>
            </div>
          </div>
        </div>
        <img src=${landingImage} alt="background image" class="background-image-service-landing" />
        <div class="overlay"></div>
      </section>
      <our-services></our-services>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-services", Services);
