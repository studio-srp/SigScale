import { LitElement, css, html } from "lit";
import aboutImage from "./../assets/images/about-us-banner.png";

export class AboutCompany extends LitElement {
  static styles = css`
    .about-area-box {
      margin: auto auto;
      display: flex;
      max-width: 1400px;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .about-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .about-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .about-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .about-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    .about-company {
      min-height: 100vh;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "sf-pro-display-semi", sans-serif;
      /* scroll-snap-align: start; */
    }

    .about-company-left {
      width: 40%;
      align-items: flex-start;
    }

    .about-company-left__image {
      width: 100%;
    }

    .about-company-right {
      width: 55%;
    }

    .about-company-right__sub-heading {
      font-family: "sf-pro-display-semi", sans-serif;
      color: var(--color-primary);
      text-transform: uppercase;
      font-size: 24px !important ;
      line-height: 29px;
      font-weight: 700;
      letter-spacing: 0.15em;
      margin-bottom: 5px;
    }

    .about-company-right__heading {
      font-family: "sf-pro-display-semi", sans-serif;
      font-size: 35px !important ;
      line-height: 31px;
      font-weight: 700;
    }

    .about-company-right__description {
      color: var(--color-description);
      margin-top: 15px;
      font-size: 19px;
      line-height: 32px;
    }

    .about-company-right__description:last-child {
      margin-top: 15px;
    }

    .about-company-right__btn-complex {
      border-bottom: var(--color-primary) 2px solid;
      margin-top: 30px;
      padding-bottom: 10px;
    }

    .vision-btn {
      font-size: 16px;
      width: 125px;
      height: 35px;
      outline: none;
      border: none;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin-right: 20px;
      background-color: var(--color-primary);
      color: white;
      cursor: pointer;
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

    .btn-cta {
      background-color: white;
      box-shadow: none;
      color: var(--color-primary);
    }

    @media (max-width: 1400px) {
      .about-area-box {
        align-items: flex-start;
      }
    }

    @media (max-width: 992px) {
      .about-company {
        min-height: auto !important;
        padding: 4rem 0;
      }

      .about-area-box {
        flex-direction: column-reverse;
        align-items: center;
      }

      .about-company-right {
        width: 100%;
        margin: auto;
      }

      .about-company-left {
        width: 300px;
        margin: auto;
        margin-bottom: 30px;
        display: none;
      }

      .about-company-right__sub-heading {
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .about-company-right__heading {
        font-size: 27px !important ;
        line-height: 31px;
        font-weight: 700;
      }

      .about-company-right__description {
        font-size: 19px;
        line-height: 32px;
      }
    }

    @media (max-width: 576px) {
      .about-company-right {
        width: 100%;
        margin: auto;
        padding-left: 3rem !important ;
        padding-right: 3rem !important ;
      }

      .about-company-right__sub-heading {
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .about-company-right__heading {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .about-company-right__description {
        font-size: 19px;
        line-height: 32px;
      }
    }
  `;

  static properties = {
    vision: {
      type: Boolean,
    },
  };

  constructor() {
    super();
    this.vision = true;
  }

  visionHandler() {
    this.vision = true;
  }
  missionHandler() {
    this.vision = false;
  }

  render() {
    let visionButton;
    let missionButton;
    let paragraph;
    if (this.vision) {
      visionButton = html`<button class="vision-btn">Vision</button>`;
      missionButton = html` <button class="vision-btn   btn-cta" @click=${this.missionHandler}>
        Mission
      </button>`;
      paragraph = html` <p class="about-company-right__description">
        This is vision. Our core competency is in signaling and distributed fault tolerant systems.
        We have developed our own protocol stacks (SIGTRAN,TCAP,CAP,MAP,NGAP,RADIUS,EAP) in Erlang,
        allowing us to build microservices with very low footprint and massive scalability.
      </p>`;
    } else {
      visionButton = html`<button class="vision-btn btn-cta" @click=${this.visionHandler}>
        Vision
      </button>`;
      missionButton = html` <button class="vision-btn">Mission</button>`;
      paragraph = html` <p class="about-company-right__description">
        This is mission. Our core competency is in signaling and distributed fault tolerant systems.
        We have developed our own protocol stacks (SIGTRAN,TCAP,CAP,MAP,NGAP,RADIUS,EAP) in Erlang,
        allowing us to build microservices with very low footprint and massive scalability.
      </p>`;
    }

    return html`
      <section class="about-company">
        <div class="about-area-box">
          <div class="about-company-left">
            <img src=${aboutImage} alt="about us cover image" class="about-company-left__image" />
          </div>
          <div class="about-company-right">
            <h3 class="about-company-right__sub-heading">about company</h3>
            <h2 class="about-company-right__heading">
              We Deal With The Aspects Of Professional IT Service
            </h2>
            <p class="about-company-right__description">
              SigScale is an open source company focused on software solutions for communications
              service providers (CSP).
            </p>
            <p class="about-company-right__description">
              Our core competency is in signaling and distributed fault tolerant systems. We have
              developed our own protocol stacks (SIGTRAN,TCAP,CAP,MAP,NGAP,RADIUS,EAP) in Erlang,
              allowing us to build microservices with very low footprint and massive scalability.
            </p>

            <div class="about-company-right__btn-complex">${visionButton} ${missionButton}</div>

            ${paragraph}
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define("about-company", AboutCompany);
