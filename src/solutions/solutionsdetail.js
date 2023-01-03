import { LitElement, css, html } from "lit";
import "./../Landing/landing.js";
import image from "./../assets/images/Solutions_detailed_post.png";

class SolutionsDetails extends LitElement {
  render() {
    return html`
      <landing-general page="Solutions" subpage="Details"></landing-general>
      <section class="detailed-solution">
        <div class="detailed-solution-area-box">
          <img src=${image} alt="post image" class="detailed-solution__image" />
          <h1 class="detailed-solution__header">Online Charging System (OCS)</h1>
          <p class="detailed-solution__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation
            ullamco laboris nisi commodo consequat.
          </p>

          <p class="detailed-solution__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <p class="detailed-solution__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </section>

      <app-footer></app-footer>
    `;
  }

  static styles = css`
    .detailed-solution-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .detailed-solution-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .detailed-solution-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .detailed-solution-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        /* width: 100% !important; */
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .detailed-solution-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    .detailed-solution {
      min-height: 100vh;
      display: flex;
      font-family: "sf-pro-text", sans-serif;
      padding: 30px 0;

      /* scroll-snap-align: start; */
    }

    .detailed-solution__image {
      width: 100%;
      margin-bottom: 30px;
    }

    .detailed-solution_header {
      font-size: 35px;
      /* margin-bottom: 50px; */
    }

    .detailed-solution__description {
      font-size: 16px;
      color: var(--color-description);
      margin-top: 20px;
    }

    /* Break Pointes  */
    /* 1400  - Large Laptop */
    /* 1200 - Small Laptop */
    /* 992 - Tab Landscape */
    /* 768 - Tab Portrait */
    /* 576 - Mobile */

    @media (max-width: 768px) {
      .detailed-solution {
        min-height: auto;
        padding: 30px 0;
      }
      .detailed-solution_header {
        font-size: 30px;
      }

      .detailed-solution__description {
        font-size: 16px;
      }
    }
  `;
}

window.customElements.define("solutions-details", SolutionsDetails);
