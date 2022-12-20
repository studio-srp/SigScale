import { LitElement, css, html } from "lit";
import dollerGif from "./../assets/gifs/doller.gif";
import todoList from "./../assets/gifs/todo list.gif";
import noConnection from "./../assets/gifs/no connection.gif";
import mobileGif from "./../assets/gifs/mobile.gif";
import gpsGif from "./../assets/gifs/gps.gif";
import informationGif from "./../assets/gifs/infomation.gif";
import imageBackground from "./../assets/images/Solutions_background.svg";

export class Solutions extends LitElement {
  render() {
    return html`
      <section class="solutions">
        <div class="solutions-area-box">
          <div class="solutions-left">
            <h2 class="solutions-left__header">
              We deliver solutions with the goal of trusting workships
            </h2>
            <a class="cta-btn__primary margin-top-medium cta-desktop">Explore more</a>
          </div>
          <div class="solutions-right">
            <div class="solutions-right__card-section">
              <div class="solutions-right__card">
                <div class="solutions-right__card-image__container">
                  <img src=${dollerGif} alt="image of doller" class="solutions-right__card-image" />
                </div>
                <p class="solutions-right__card-description margin-top-x-small">
                  Online charging system
                </p>
              </div>
              <div class="solutions-right__card">
                <div class="solutions-right__card-image__container">
                  <img src=${todoList} alt="todo list image" class="solutions-right__card-image" />
                </div>
                <p class="solutions-right__card-description margin-top-x-small">
                  Resource Inventory Management
                </p>
              </div>
              <div class="solutions-right__card">
                <div class="solutions-right__card-image__container">
                  <img src=${noConnection} alt="" class="solutions-right__card-image" />
                </div>
                <p class="solutions-right__card-description margin-top-x-small">
                  <span class="uppercase">diameter</span> signaling controller
                </p>
              </div>

              <div class="solutions-right__card">
                <div class="solutions-right__card-image__container">
                  <img src=${mobileGif} alt="" class="solutions-right__card-image" />
                </div>
                <p class="solutions-right__card-description margin-top-x-small">
                  mobile application part
                </p>
              </div>
              <div class="solutions-right__card">
                <div class="solutions-right__card-image__container">
                  <img src=${gpsGif} alt="" class="solutions-right__card-image" />
                </div>
                <p class="solutions-right__card-description margin-top-x-small">
                  Resource Inventory Management
                </p>
              </div>
              <div class="solutions-right__card">
                <div class="solutions-right__card-image__container">
                  <img src=${informationGif} alt="" class="solutions-right__card-image" />
                </div>
                <p class="solutions-right__card-description margin-top-x-small">
                  SigScale <span class="uppercase">mib</span>
                </p>
              </div>
            </div>
          </div>

          <a class="cta-btn__primary margin-top-large cta-mobile">Explore more</a>
        </div>

        <img src=${imageBackground} alt="image background" class="image-background-solutions" />
      </section>
    `;
  }
  static styles = css`
    .solutions {
      width: 100vw;
      font-family: "sf-pro-text", sans-serif;
      min-height: 100vh;
      position: relative;
      display: flex;
      /* padding: 70px 0 !important; */
      justify-content: center;
    }

    .image-background-solutions {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 5;
    }

    .solutions-left {
      width: 50%;
    }

    .solutions-left__header {
      font-size: 35px !important ;
      line-height: 31px;
      font-weight: 700;
      color: white;
      line-height: 97.5%;
      width: 405px;
      font-family: "sf-pro-display-semi", sans-serif;
      margin: 0;
    }

    .solutions-right {
      width: 60%;
    }

    .solutions-right__card-section {
      display: flex;
      flex-wrap: wrap;
    }

    .solutions-right__card {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 33%;
    }

    .solutions-right__card:nth-child(n) {
      margin-top: 3rem;
    }

    .solutions-right__card-image__container {
      height: 100px;
      width: 100px;
      background-color: white;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: var(--color-primary) 5px solid;
    }

    .solutions-right__card-image {
      height: 50%;
      width: 50%;
    }

    .solutions-right__card-description {
      color: white;
      text-align: center;
      font-size: 19px;
      line-height: 32px;
      text-transform: capitalize;

      max-width: 150px;
    }

    .uppercase {
      text-transform: uppercase;
    }

    .cta-mobile {
      display: none;
    }

    .cta-btn__primary {
      color: #f9a418;
      margin-top: 30px;
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

    .cta-mobile {
      display: none;
    }

    @media (max-width: 1400px) {
      .solutions-area-box {
        padding: 0 !important;
      }
    }

    @media (max-width: 1200px) {
      .solutions-left__header {
        width: 405px;
      }
    }

    @media (max-width: 992px) {
      .solutions-left {
        width: 60%;
      }

      .solutions-area-box {
        flex-direction: column;
        padding-top: 3.5rem !important;
        padding-bottom: 3.5rem !important;
      }

      .solutions-left__header {
        width: 100%;
        text-align: center;
        margin-bottom: 1rem;
        font-size: 27px !important ;
        line-height: 31px;
        font-weight: 700;
      }

      .cta-mobile {
        display: block;
      }

      .cta-desktop {
        display: none;
      }

      .solutions-right {
        width: 80%;
      }
      .solutions-right__card-description {
        font-size: 16px;
        line-height: 32px;
      }
    }

    @media (max-width: 768px) {
      .solutions-left__header {
        font-size: 30px;
      }

      .solutions-left {
        width: 80%;
      }
      .cta-mobile {
        margin-top: 40px;
      }
    }

    @media (max-width: 576px) {
      .solutions {
        /* margin-top: 70px !important;
        margin-bottom: 70px !important; */
      }
      .solutions-right__card {
        width: 40%;
      }

      .solutions-right__card-section {
        justify-content: space-evenly;
      }
      .solutions-left__header {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .solutions-right {
        width: 100%;
      }
    }

    .solutions-area-box {
      margin: auto;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      z-index: 6;
    }

    @media (max-width: 992px) {
      .solutions-area-box {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }

    @media (min-width: 1200px) {
      .solutions-area-box {
        max-width: 1140px;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .solutions-area-box {
        max-width: 1400px !important;
      }
    }

    @media (min-width: 576px) {
      .solutions-area-box {
        padding-left: 5rem !important;
        padding-right: 5rem !important;
        margin: auto 0;
      }
    }

    @media (max-width: 576px) {
      .solutions-area-box {
        max-width: auto;
        /* padding-left: 2rem !important;
        padding-right: 2rem !important; */
        padding: 3.5rem 2rem !important;
      }
    }
  `;
}

window.customElements.define("app-home-solutions", Solutions);
