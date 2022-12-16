import { LitElement, css, html } from "lit";

import landingImage from "./../assets/images/Landing_banner.png";
import "./about.js";
import "./solutions.js";
import "./achievements.js";
import "./workwithus.js";
import "./customers.js";
import "./../footer/footer.js";

export class Home extends LitElement {
  static styles = css`
    .landing-banner {
      height: calc(100vh - 90px);
      width: 100vw;
      scroll-snap-align: start;
      overflow: hidden;
      position: relative;
    }

    .background-image-home-landing {
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .landing-banner__content {
      position: absolute;
      display: block;
      z-index: 300;
      top: 45%;
      transform: translateY(-50%);
      margin-bottom: 90px;
    }
    .landing-banner__header {
      padding-top: 5vh;
      color: white;
      font-family: "sf-pro-display-semi", sans-serif;
      font-weight: 600;
      font-size: 96px;
      line-height: 90%;
      letter-spacing: -0.06em;
    }

    .banner-highlight {
      color: var(--color-primary);
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

    .content-area-box-between {
      max-width: 1400px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      position: relative;
      background-color: transparent;
    }

    @media (max-width: 992px) {
      .content-area-box-between {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }

    @media (min-width: 1200px) {
      .content-area-box-between {
        max-width: 1140px;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .content-area-box-between {
        max-width: 1400px;
      }
    }

    @media (min-width: 576px) {
      .content-area-box-between {
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }

      .landing-banner__header {
        width: 430px;
      }
    }

    @media (max-width: 576px) {
      .content-area-box-between {
        max-width: auto;
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      .landing-banner {
        background-position: left;
      }

      .landing-banner__header {
        max-width: 430px;
        font-size: 70px;
      }
    }

    .content-wrapper {
      z-index: 5;
      position: relative;
      height: 100%;
      width: 500px;
    }
  `;

  render() {
    return html`
      <section class="landing-banner">
        <div class="content-area-box-between">
          <div class="content-wrapper">
            <div class="landing-banner__content">
              <h1 class="landing-banner__header">
                Cloud<span class="banner-highlight"> Solutions </span>for Digital Problems
              </h1>
              <a class="cta-btn__primary margin-top-large">Explore more</a>
            </div>
          </div>
        </div>
        <img src=${landingImage} alt="background image" class="background-image-home-landing" />
      </section>
      <app-home-about></app-home-about>
      <app-home-solutions></app-home-solutions>
      <app-home-achievements></app-home-achievements>
      <app-home-work></app-home-work>
      <app-home-customers></app-home-customers>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-home", Home);
