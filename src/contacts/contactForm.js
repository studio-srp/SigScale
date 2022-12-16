import { LitElement, css, html } from "lit";

export class ContactForm extends LitElement {
  static styles = css`
    .contacts {
      min-height: 100vh;
      display: flex;
      width: 100vw;
      padding: 50px 0;
      /* display: flex; */
      /* align-items: center; */
      /* scroll-snap-align: start; */
    }

    .contacts-contact-page {
      padding: 70px 0;
    }

    .contacts-contact__sub-header {
      color: var(--color-primary);
      font-size: 24px !important ;
      line-height: 29px;
      font-weight: 700;
      font-family: "sf-pro-display-semi", sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0px;
    }

    .contacts-contact__header {
      font-size: 35px !important ;
      line-height: 31px;
      font-weight: 700;
      letter-spacing: 0.05em;
      font-family: "sf-pro-display-semi", sans-serif;
      margin-bottom: 50px;
      margin-top: 10px;
    }

    .row-dual {
      display: flex;
      gap: 50px;
      justify-content: space-between;
      width: 100%;
    }

    .text-div {
      width: 100%;
      position: relative;
    }

    .text-label {
      font-size: 14px;
      font-family: "sf-pro-text", sans-serif;
      padding-left: 29px;
      position: absolute;
      left: 0;
      top: 20px;
      opacity: 0;
      transition: 0.2s all;
    }

    .text-box:focus + .text-label,
    .textarea-box:focus + .text-label {
      opacity: 1;
      top: -23px;
      color: rgb(126, 126, 126);
      font-size: 13px;
    }

    .text-box {
      width: 100%;
      padding: 20px 25px;
      outline: none;
      border: none;
      border-radius: 15px;
      border-left: var(--color-primary) 4px solid;
      box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.05);
      font-size: 14px;
      font-family: "sf-pro-text", sans-serif;
      margin-bottom: 40px;
      box-sizing: border-box;
    }

    .text-box:focus::placeholder {
      color: transparent;
    }

    .textarea-box {
      box-sizing: border-box;
      width: 100%;
      padding: 20px 25px;
      outline: none;
      border: none;
      border-radius: 15px;
      border-left: var(--color-primary) 4px solid;
      box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.05);
      font-size: 14px;
      font-family: "sf-pro-text", sans-serif;
      resize: none;
      height: 150px;
      margin-bottom: 30px;
      /* scroll-snap-align: start; */
    }

    .submit-btn {
      background-color: var(--color-primary);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      border: none;
      outline: none;
      display: inline-block;
      width: 250px;
      padding: 15px 25px;
      font-family: "sf-pro-text", sans-serif;
      font-size: 19px !important ;
      line-height: 32px !important ;
      color: white;
    }

    /* Break Pointes  */
    /* 1400  - Large Laptop */
    /* 1200 - Small Laptop */
    /* 992 - Tab Landscape */
    /* 768 - Tab Portrait */
    /* 576 - Mobile */

    @media (max-width: 768px) {
      .row-dual {
        flex-direction: column;
        margin-bottom: 0;
        gap: 0;
      }

      .text-div {
        margin-bottom: 0;
      }

      .submit-btn {
        margin: auto;
      }
    }
    /* ************************************************* */

    .contacts-contact-area-box {
      width: 100% !important;
    }

    .contacts-contact-area-box {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      height: 100%;
    }

    @media (min-width: 1200px) {
      .contacts-contact-area-box {
        max-width: 1140px !important;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (min-width: 1400px) {
      .contacts-contact-area-box {
        max-width: 1400px !important;
      }
    }

    @media (max-width: 1200px) {
      .contacts-contact-area-box {
        padding-left: 5rem !important;
        max-width: 1140px !important;
        /* width: 100% !important; */
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .contacts-contact__sub-header {
        font-size: 27px !important ;
        line-height: 29px;
        font-weight: 700;
      }

      .contacts-contact__header {
        font-size: 24px !important ;
        line-height: 29px;
        font-weight: 700;
      }
    }

    @media (max-width: 992px) {
      .contacts-contact__sub-header {
        font-size: 24px !important ;
        line-height: 29px !important ;
        font-weight: 700;
      }

      .contacts-contact__header {
        font-size: 27px !important ;
        line-height: 31px !important ;
        font-weight: 700;
      }
    }
  `;
  render() {
    return html`
      <section class="contacts">
        <div class="contacts-contact-area-box">
          <h3 class="contacts-contact__sub-header">Contact Us</h3>
          <h1 class="contacts-contact__header">Let's Talk</h1>
          <div class="row-dual">
            <div class="text-div">
              <input type="text" class="text-box" name="name" id="name" placeholder="Your Name" />
              <label for="name" class="text-label">Your Name</label>
            </div>
            <div class="text-div">
              <input
                type="text"
                class="text-box"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <label for="email" class="text-label">Your Email</label>
            </div>
          </div>

          <div class="row-dual">
            <div class="text-div">
              <input
                type="text"
                class="text-box"
                name="phone"
                id="phone"
                placeholder="Your Phone"
              />
              <label for="name" class="text-label">Your Phone</label>
            </div>
            <div class="text-div">
              <input
                type="text"
                class="text-box"
                name="subject"
                id="subject"
                placeholder="Your Subject"
              />
              <label for="email" class="text-label">Your Subject</label>
            </div>
          </div>

          <div class="text-div">
            <textarea
              type="text"
              class="textarea-box"
              name="phone"
              id="phone"
              placeholder="Your Message"
            ></textarea>

            <label for="email" class="text-label">Your Message</label>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </div>
      </section>
    `;
  }
}

window.customElements.define("app-contacts-form", ContactForm);
