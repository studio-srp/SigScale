import { LitElement, css, html } from "lit";
import serviceicon1 from "./../assets/icons/bulb-yellow.svg";
import serviceicon2 from "./../assets/icons/bulb-yellow.svg";

export class OurServices extends LitElement {
  render() {
    return html`
      <section class="our-services">
        <div class="our-services-area-box">
          <h3 class="our-services__sub-header">Our services</h3>
          <h1 class="our-services__header">How Can We Assist You</h1>
          <div class="our-services__card-area">
            <div class="our-services__card">
              <div class="our-services__image-complex">
                <img
                  src=${serviceicon1}
                  alt="bulb image"
                  class="our-services__card-image"
                />
              </div>
              <h3 class="our-services__card-header">
                Online Charging System (OCS)
              </h3>
              <p class="our-services__card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam iste quas eius quibusdam, culpa autem nihil laudantium
                delectus consequatur non provident animi beatae excepturi vitae
                aliquid cumque.
              </p>
              <p class="our-services__card-description">
                Ipsam, et temporibus dolorum deleniti at quasi officia tenetur
                non provident eum repudiandae obcaecati sunt sequi doloremque
                modi quod voluptatum mollitia autem praesentium voluptatem minus
                nostrum vel! Beatae atque similique repellat vel aliquid fuga
                labore totam magnam qui, perspiciatis aperiam optio possimus
                voluptatibus obcaecati saepe, cumque at voluptatum corrupti enim
                voluptas. Suscipit, pariatur autem? Autem vero quae aut facilis,
                iste necessitatibus perspiciatis commodi qui tempora nesciunt
                doloremque, sint aliquam! Aliquid nostrum perferendis ipsa
                ducimus blanditiis
              </p>
            </div>

            <div class="our-services__card">
              <div class="our-services__image-complex">
                <img
                  src=${serviceicon2}
                  alt="bulb image"
                  class="our-services__card-image"
                />
              </div>
              <h3 class="our-services__card-header">
                Online Charging System (OCS)
              </h3>
              <p class="our-services__card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam iste quas eius quibusdam, culpa autem nihil laudantium
                delectus consequatur non provident animi beatae excepturi vitae
                aliquid cumque.
              </p>
              <p class="our-services__card-description">
                Ipsam, et temporibus dolorum deleniti at quasi officia tenetur
                non provident eum repudiandae obcaecati sunt sequi doloremque
                modi quod voluptatum mollitia autem praesentium voluptatem minus
                nostrum vel! Beatae atque similique repellat vel aliquid fuga
                labore totam magnam qui, perspiciatis aperiam optio possimus
                voluptatibus obcaecati saepe, cumque at voluptatum corrupti enim
                voluptas. Suscipit, pariatur autem? Autem vero quae aut facilis,
                iste necessitatibus perspiciatis commodi qui tempora nesciunt
                doloremque, sint aliquam! Aliquid nostrum perferendis ipsa
                ducimus blanditiis
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  static styles = css`
    .our-services {
      min-height: 100vh;
      display: flex;
      padding: 80px 0;
      font-family: "sf-pro-text", sans-serif;
      scroll-snap-align: start;
      /* background-color: green; */
    }

    .our-services__sub-header {
      color: var(--color-primary);
      font-size: 24px;
      font-family: "sf-pro-display-semi", sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0px;
    }

    .our-services__header {
      font-size: 35px;
      letter-spacing: 0.05em;
      font-family: "sf-pro-display-semi", sans-serif;
      margin-bottom: 100px;
      margin-top: 10px;
    }

    .our-services__card {
      /* width: 100%; */
      border-bottom: 4px var(--color-primary) solid;
      padding: 50px 40px;
      box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-bottom: 30px;
      transition: 0.3s all;
    }

    .our-services__image-complex {
      position: relative;
      margin-bottom: 110px;
    }

    .our-services__card-image {
      position: absolute;
      width: 50px;
      margin-bottom: 30px;
      transition: 0.3s all;
    }

    .our-services__card-header {
      font-size: 24px;
      margin-bottom: 15px;
    }

    .our-services__card-description {
      font-size: 18px;
      color: var(--color-description);
      font-weight: 200;
      margin-bottom: 25px;
    }

    .our-services__card-link {
      text-decoration: none;
      font-size: 14px;
      letter-spacing: 0.05em;
      color: var(--color-primary);
      transition: 0.3s all;
    }

    /* ---------------------------------------------------------- */

    .our-services-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .our-services-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .our-services-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .our-services-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .our-services-area-box {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }

      .our-services__header {
        font-size: 21px;
        margin-bottom: 30px;
        margin-top: 0px;
      }
      .our-services__sub-header {
        color: var(--color-primary);
        font-size: 16px;
        padding-bottom:5px;
      }
      .our-services__card-description {
        font-size: 15px;
        text-align: justify;
        letter-spacing: 0.03em;
        font-weight: 100;
      }
      .our-services__card-header {
        font-size: 18px;
      }
      .our-services__card {
        padding: 30px 20px;
      }
      .our-services {
      padding: 40px 0;
    }
  }
    @media (max-width: 992px) {
      .our-services-area-box {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
      }

      .our-services__header {
        font-size: 23px;
        margin-bottom: 30px;
        margin-top: 0px;
      }
      .our-services__sub-header {
        color: var(--color-primary);
        font-size: 18px;
        padding-bottom:5px;
      }
      .our-services__card-description {
        font-size: 16px;
        text-align: justify;
        letter-spacing: 0.03em;
        font-weight: 100;
      }
      .our-services__card-header {
        font-size: 20px;
      }
      .our-services__card {
        padding: 40px 30px;
      }
      .our-services {
      padding: 50px 0;
    }
  `;
}

window.customElements.define("our-services", OurServices);
