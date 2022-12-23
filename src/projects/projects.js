import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";
import "./../footer/footer";

import projectImg1 from "./../assets/images/project-1.png";
import projectImg2 from "./../assets/images/project-2.png";
import projectImg3 from "./../assets/images/project-3.png";

export class Projects extends LitElement {
  static styles = css`
    .projects-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      font-family: "sf-pro-text", sans-serif;
      padding: 2rem 0;
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
      font-size: 35px;
      line-height: 42px;
      font-weight: 700;
      margin: 0;
      margin-bottom: 30px;
    }
    .projects__card-section {
      display: flex;
      padding: 40px;
      gap: 30px;
      border-radius: 10px;
      border-bottom: var(--color-primary) 5px solid;
      box-shadow: 6px 4px 20px -2px rgba(0, 0, 0, 0.25);
      margin-bottom: 40px;
    }

    .projects__card__header {
      font-size: 20px;
      line-height: 29px;
      font-family: "sf-pro-display-semi", sans-serif;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 20px;
    }

    .projects__card__description {
      font-size: 16px !important ;
      line-height: 32px !important ;
      font-weight: 400;
      margin-bottom: 20px;
      color: var(--color-description);
    }

    .projects__card__link {
      color: var(--color-primary);
      text-decoration: none;
      transition: 0.2s all;
    }

    .projects__card__link:visited,
    .projects__card__link:active,
    .projects__card__link:hover {
      opacity: 0.7;
    }

    /* .projects__card__image-area {
    } */

    .projects__card__image {
      object-fit: cover;
      width: 400px;
    }

    /* Break Pointes  */
    /* 1400  - Large Laptop */
    /* 1200 - Small Laptop */
    /* 992 - Tab Landscape */
    /* 768 - Tab Portrait */
    /* 576 - Mobile */

    @media (max-width: 1200px) {
      .projects__card__image {
        width: 350px;
      }
    }

    @media (max-width: 991px) {
      .projects {
        padding: 50px 0px;
      }
      .projects__card-section {
        flex-direction: column;
      }

      .projects__card__image-area {
        width: 100%;
      }

      .projects__card__image {
        width: 100%;
      }

      /* .section__header {
        text-align: left;
        font-size: 27px !important ;
        line-height: 31px !important ;
        font-weight: 700;
      }

      .section__sub-header {
        text-align: left;
        font-size: 24px !important ;
        line-height: 29px !important ;
        font-weight: 700;
      } */

      .projects__card__header {
        font-size: 20px;
        line-height: 29px;
      }

      .projects__card__description {
        font-size: 19px !important ;
        line-height: 32px;
      }
    }

    /***************************************** */

    .projects-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .projects-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .projects-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .projects-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 992px) {
      .projects-area-box {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
      }
      .section__header {
        /* font-size: 23px; */
      }
      .section__sub-header {
        color: var(--color-primary);
        /* font-size: 18px; */
        padding-bottom: 5px;
      }
      .projects__card__description {
        /* font-size: 16px; */
        text-align: justify;
        letter-spacing: 0.03em;
        font-weight: 100;
      }
      .projects__card__header {
        /* font-size: 20px; */
        margin-top: 00px;
      }
      .projects__card-section {
        padding: 40px 30px;
      }
      .projects-container {
        padding: 50px 0;
      }
    }
    @media (max-width: 576px) {
      .projects-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      .projects__header {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
        margin-bottom: 30px;
        margin-top: 0px;
      }
      .section__sub-header {
        color: var(--color-primary);
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
        padding-bottom: 5px;
      }
      .projects__card__description {
        font-size: 19px !important ;
        line-height: 32px;
        text-align: justify;
        letter-spacing: 0.03em;
        font-weight: 100;
      }
      .projects__card__header {
        font-size: 20px;
        line-height: 29px;
        margin-top: 00px;
      }
      .projects__card-section {
        padding: 30px 20px;
      }
      .projects-container {
        padding: 30px 0;
      }
    }
  `;
  render() {
    return html`
      <landing-general page="Projects"></landing-general>
      <section class="projects-container">
        <div class="projects-area-box">
          <h3 class="section__sub-header">Our Projects</h3>
          <h1 class="section__header">Lorem ipsum dolor sit</h1>
          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">3GPP Online Charging System (OCS)</h4>
              <p class="projects__card__description">
                In a communications service provider (CSP) network an Online Charging System (OCS)
                is a core network element which performs real-time charging for services. An OCS
                authorizes subscribers' sessions subject to available credit on account and
                decrements account balance as services are consumed. When a subscriber's account
                balance is depleted authorization may be withdrawn and ongoing session(s)
                terminated. SigScale OCS includes a 3GPP AAA server function for authentication,
                authorization and accounting (AAA) of subscribers using DIAMETER or RADIUS
                protocols. TM Forum Open APIs for prepay balance management and product catalog
                management are supported with a web components front end.
              </p>
              <a
                class="projects__card__link"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/33597/ocs"
                target="_blank"
              >
                Source Code Repository | Wiki
              </a>
            </div>
            <div class="projects__card__image-area">
              <img src=${projectImg1} alt="" class="projects__card__image" />
            </div>
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">Resource Inventory Management (RIM)</h4>
              <p class="projects__card__description">
                TM Forum Resource Catalog (TMF634) & Inventory (TMF639) with disovery of managed
                objects through 3GPP Bulk CM (32.616).
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/33607/rim"
                >Source Code Repository | Wiki</a
              >
            </div>
            <div class="projects__card__image-area">
              <img src=${projectImg2} alt="" class="projects__card__image" />
            </div>
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">DIAMETER Signaling Controller (DSC)</h4>
              <p class="projects__card__description">A router for DIAMETER protocol traffic.</p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/98618/SigScale+DRA"
                >Source Code Repository | Wiki</a
              >
            </div>
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">M3UA Stack</h4>
              <p class="projects__card__description">
                SigScale M3UA is an implementation of SIGTRAN M3UA (MTP3 User Agent) protocol stack.
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/328083/m3ua"
              >
                Source Code Repository | Wiki</a
              >
            </div>
            <div class="projects__card__image"></div>
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">TCAP Stack</h4>
              <p class="projects__card__description">
                SigScale TCAP is full protocol stack implementation of Transaction Capabilities
                Application Part (TCAP) of Signaling System 7 (SS7).
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/66187/tcap"
              >
                Source Code Repository | Wiki
              </a>
            </div>
            <!-- <div class="projects__card__image">
              <img src="./assets/images/project-3.png" alt="" />
            </div> -->
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">CAMEL</h4>
              <p class="projects__card__description">
                SigScale CAP is protocol implementation of CAMEL Application Part (CAP) of SS7.
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/66156/cse"
              >
                Source Code Repository | Wiki
              </a>
            </div>
            <!-- <div class="projects__card__image">
              <img src="./assets/images/project-3.png" alt="" />
            </div> -->
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">MAP</h4>
              <p class="projects__card__description">
                SigScale MAP is protocol implementation of Mobile Application Part (CAP) of SS7.
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/328066/map"
              >
                Source Code Repository | Wiki
              </a>
            </div>
            <!-- <div class="projects__card__image">
              <img src="./assets/images/project-3.png" alt="" />
            </div> -->
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">SCCP</h4>
              <p class="projects__card__description">
                SigScale SCCP is an implementation of SS7 Signaling Connection Control Part (SCCP)
                protocol..
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/98587/sccp"
              >
                Source Code Repository | Wiki</a
              >
            </div>
            <!-- <div class="projects__card__image">
              <img src="./assets/images/project-3.png" alt="" />
            </div> -->
          </div>

          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">RADIUS Stack</h4>
              <p class="projects__card__description">
                SigScale RADIUS is an implementation of the RADIUS protocol stack.
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/33651/radierl"
              >
                Source Code Repository | Wiki
              </a>
            </div>
            <!-- <div class="projects__card__image">
              <img src="./assets/images/project-3.png" alt="" />
            </div> -->
          </div>
          <div class="projects__card-section">
            <div class="projects__card__content">
              <h4 class="projects__card__header">SigScale MIB</h4>
              <p class="projects__card__description">
                SNMP Management Information Base (MIB) for the SigScale Enterprise.
              </p>
              <a
                class="projects__card__link"
                target="_blank"
                href="https://sigscale.atlassian.net/wiki/spaces/SO/pages/33675/sigscale-mibs"
              >
                Source Code Repository | Wiki</a
              >
            </div>
            <!-- <div class="projects__card__image">
              <img src="./assets/images/project-3.png" alt="" />
            </div> -->
          </div>
        </div>
      </section>
      <app-footer></app-footer>
    `;
  }
}

window.customElements.define("app-projects", Projects);
