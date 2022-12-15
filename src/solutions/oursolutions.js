import { LitElement, css, html } from "lit";
import cyanBulb from "./../assets/icons/bulb-cyan.svg";
import yellowBulb from "./../assets/icons/bulb-yellow.svg";

export class OurSolutions extends LitElement {
  static styles = css`
    .our-solutions-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }
    .d-hidden {
      display: none !important;
    }

    @media (min-width: 1200px) {
      .our-solutions-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .our-solutions-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .our-solutions-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }
    @media (max-width: 992px) {
      .our-solutions__sub-header {
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .our-solutions__header {
        font-size: 27px !important ;
        line-height: 31px;
        font-weight: 700;
      }
      .our-solutions__card-header {
        font-size: 24px !important;
        line-height: 29px;
      }

      .our-solutions__card-description {
        font-size: 19px;
        line-height: 32px;
      }
    }

    @media (max-width: 576px) {
      .our-solutions-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      .our-solutions__sub-header {
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .our-solutions__header {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
      }
      .our-solutions__card-header {
        font-size: 24px !important;
        line-height: 29px;
      }

      .our-solutions__card-description {
        font-size: 19px;
        line-height: 32px;
      }
    }

    .our-solutions {
      min-height: 100vh;
      font-family: "sf-pro-text", sans-serif;
      padding: 70px 0;
      scroll-snap-align: start;
    }

    .our-solutions__sub-header {
      font-family: "sf-pro-display-semi", sans-serif;
      color: var(--color-primary);
      text-transform: uppercase;
      font-size: 24px !important ;
      line-height: 29px;
      font-weight: 700;
      letter-spacing: 0.15em;
      margin-bottom: 5px;
    }

    .our-solutions__header {
      font-family: "sf-pro-display-semi", sans-serif;
      font-size: 35px !important ;
      line-height: 31px;
      font-weight: 700;
      line-height: 42px;
      margin: 0;
      margin-bottom: 40px;
    }

    .our-solutions__card-area {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .our-solutions__card {
      width: 26%;
      border-top: 4px var(--color-primary) solid;
      padding: 50px 30px;
      box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-bottom: 30px;
      transition: 0.3s all;
    }

    @media (max-width: 1200px) {
      .our-solutions__card {
        width: 42%;
      }
    }

    @media (max-width: 992px) {
      .our-solutions__card {
        width: 100% !important;
      }
    }

    .our-solutions__card:hover {
      border-top: 4px var(--color-cyan) solid;
    }

    .our-solutions__card:hover .our-solutions__card-image {
      opacity: 0;
    }

    .our-solutions__card:hover .our-solutions__card-link {
      color: var(--color-cyan);
    }

    .our-solutions__image-complex {
      position: relative;
      margin-bottom: 110px;
    }

    .our-solutions__card-image {
      position: absolute;
      width: 50px;
      margin-bottom: 30px;
      transition: 0.3s all;
    }

    .our-solutions__card-image__cyan {
      position: absolute;
      width: 50px;
      margin-bottom: 30px;
    }

    .our-solutions__card-header {
      font-size: 27px;
      line-height: 29px;
    }

    .our-solutions__card-description {
      color: var(--color-description);
      font-size: 19px;
      line-height: 32px;
      margin-bottom: 25px;
    }

    .our-solutions__card-link {
      text-decoration: none;
      font-size: 14px;
      letter-spacing: 0.05em;
      color: var(--color-primary);
      transition: 0.3s all;
    }

    @media (max-width: 992px) {
      .our-solutions__card {
        width: 48%;
      }

      .our-solutions {
        padding: 70px 0;
      }
    }

    @media (max-width: 786px) {
      .our-solutions__header {
        font-size: 30px;
      }
      .our-solutions__sub-header {
        font-size: 20px;
      }

      .our-solutions {
        padding: 50px 0;
      }
    }

    @media (max-width: 576px) {
      .our-solutions {
        padding: 30px 0;
      }
      .our-solutions__sub-header {
        text-align: center;
      }

      .our-solutions__header {
        text-align: center;
      }

      .our-solutions__card {
        width: 100%;
      }

      .our-solutions__card-image {
        margin-bottom: 0;
        width: 40px;
      }
      .our-solutions__card-image__cyan {
        margin-bottom: 0;
        width: 40px;
      }

      .our-solutions__image-complex {
        display: inline-block;
        margin-right: 60px;
        margin-bottom: 60px;
      }

      .our-solutions__card-header {
        width: calc(100% - 70px);
        display: inline-block;
        max-width: 260px;
      }
    }
  `;

  render() {
    return html`
      <section class="our-solutions">
        <div class="our-solutions-area-box">
          <h3 class="our-solutions__sub-header">our solutions</h3>
          <h1 class="our-solutions__header">How Can We Assist You</h1>
          <div class="our-solutions__card-area">
            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">
                Online Charging System (OCS)
              </h3>
              <p class="our-solutions__card-description">
                SigScale OCS is relied upon by global communications service
                providers (CSP) to provide real-time charging of prepaid voice,
                data and messaging services.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">3GPP AAA Server</h3>
              <p class="our-solutions__card-description">
                Use cases include untrusted non-3GPP access to Evolved Packet
                Core (EPC). May be used standalone with EAP-AKA' authentication
                of USIMs.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">
                CAMEL Service Environment (CSE)
              </h3>
              <p class="our-solutions__card-description">
                A CSE provides the Service Control Function (SCF) for
                intelligent network applications with Customized Mobile Enhanced
                Logic (CAMEL). The CSE hosts Service Logic Programs (SLP) which
                may be devloped by/for an operator to customize the mobile
                services offered to subscribers.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">
                DIAMETER Signaling Controller (DSC)
              </h3>
              <p class="our-solutions__card-description">
                CSPs use SigScale DSC to route DIAMETER protocol traffic within
                and between administrative domains.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">
                Global Title Translation (GTT)
              </h3>
              <p class="our-solutions__card-description">
                SigScale GTT routes SIGTRAN traffic by origin/destination SCCP
                global title (GT).Use cases include MVNO/MNO gateways and
                internal load balancing
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>

            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">Fault Management (FM)</h3>
              <p class="our-solutions__card-description">
                SigScale FM provides scalable fault surveillance, particularily
                suited to 3GPP CSPs. Our web components frontend provides
                flexible filtering over the TM Forum Alarm Management API
                (TMF642). Fault events may be ingested on TMF642, SigScale VES
                collector or ONAP DCAE.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">SNMP Collector</h3>
              <p class="our-solutions__card-description">
                This SNMP manager implements an advanced SNMP collector for ONAP
                DCAE. Use cases include 3GPP TMN Fault Management (FM) where
                Northbound Interfaces (NBI) of Element Management Systems (EMS)
                use an SNMP solution set.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>

            <div class="our-solutions__card">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">
                Resource Inventory Management (RIM)
              </h3>
              <p class="our-solutions__card-description">
                SigScale RIM implements TM Forum Resource Inventory API (TMF639)
                and discovery through 3GPP TMN Bulk CM (Configuration
                Management) (XML) file import. All 3GPP Network Resource Models
                (NRM) (e.g. NodeB, EPC MME, 5G Slice) are implemented as
                Resource Specifications in TMF634). Use cases include 3GPP FM &
                PM integration. SigScale RIM provides Managed Object (MO)
                details to enhance alarm and performance reporting and
                analystics.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
            <div class="our-solutions__card d-hidden">
              <div class="our-solutions__image-complex">
                <img
                  src=${cyanBulb}
                  alt="bulb image"
                  class="our-solutions__card-image__cyan"
                />
                <img
                  src=${yellowBulb}
                  alt="bulb image"
                  class="our-solutions__card-image"
                />
              </div>
              <h3 class="our-solutions__card-header">
                Resource Inventory Management (RIM)
              </h3>
              <p class="our-solutions__card-description">
                SigScale RIM implements TM Forum Resource Inventory API (TMF639)
                and discovery through 3GPP TMN Bulk CM (Configuration
                Management) (XML) file import. All 3GPP Network Resource Models
                (NRM) (e.g. NodeB, EPC MME, 5G Slice) are implemented as
                Resource Specifications in TMF634). Use cases include 3GPP FM &
                PM integration. SigScale RIM provides Managed Object (MO)
                details to enhance alarm and performance reporting and
                analystics.
              </p>
              <a
                href="/solutions-detailed.html"
                class="our-solutions__card-link"
                >Read more &#10148;</a
              >
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define("our-solutions", OurSolutions);
