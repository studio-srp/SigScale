import { LitElement, html, css } from "lit";

class MobileNavigation extends LitElement {
  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = null;
  }

  menuHandler(e) {
    this.name.click();
  }

  firstUpdated() {
    this.name = this.shadowRoot.getElementById("classButton");
  }

  render() {
    return html`
      <div class="nav-mobile">
        <input type="checkbox" name="menu" id="navigation-toggler" class="nav-mobile__checkbox" />
        <label for="navigation-toggler" class="nav-mobile__button" id="classButton">
          <div class="nav-mobile__icon"></div>
        </label>
        <div class="nav-mobile__background">&nbsp;</div>
        <nav class="nav-mobile__nav">
          <ul class="nav-mobile__list">
            <li class="nav-mobile__item">
              <a href="/" @mousedown="${this.menuHandler}" class="nav-mobile__link">Home</a>
            </li>
            <li class="nav-mobile__item">
              <a href="./about" @mousedown="${this.menuHandler}" class="nav-mobile__link">About</a>
            </li>
            <li class="nav-mobile__item">
              <a href="/solutions" @mousedown="${this.menuHandler}" class="nav-mobile__link"
                >Solutions</a
              >
            </li>
            <li class="nav-mobile__item">
              <a href="/services" @mousedown="${this.menuHandler}" class="nav-mobile__link"
                >Services</a
              >
            </li>
            <li class="nav-mobile__item">
              <a href="/projects" class="nav-mobile__link" @mousedown="${this.menuHandler}"
                >Projects</a
              >
            </li>

            <li class="nav-mobile__item">
              <a href="/awards" @mousedown="${this.menuHandler}" class="nav-mobile__link">Awards</a>
            </li>

            <li class="nav-mobile__item">
              <!-- @click="${this.menuHandler}" -->
              <a href="/contacts" @mousedown="${this.menuHandler}" class="nav-mobile__link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }

  static get styles() {
    return css`
      .nav-mobile {
        display: block;
      }

      @media (max-width: 992px) {
        .nav-mobile {
          display: block;
        }
        .nav-mobile__background,
        .nav-mobile__button {
          right: 5rem !important;
        }

        .nav-mobile__background,
        .nav-mobile__button {
          right: 5rem !important;
        }

        .nav-desktop__nav-list {
          display: none;
        }

        .nav-mobile {
          display: block;
          position: relative;
          font-family: "Poppins", sans-serif;
        }

        .nav-mobile__checkbox {
          display: none;
        }

        .nav-mobile__button {
          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          background-color: var(--color-primary);
          position: absolute;
          top: -71px;
          right: 5rem;
          z-index: 2000;
          box-shadow: 0 1rem 3rem rgba(black, 0.1);
        }

        .nav-mobile__icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .nav-mobile__icon,
        .nav-mobile__icon::after,
        .nav-mobile__icon::before {
          display: inline-block;
          height: 2.5px;
          width: 25px;
          background-color: white;
          transition: all 0.2s;
        }
        .nav-mobile__icon::after,
        .nav-mobile__icon::before {
          content: "";
          position: absolute;
          color: white;
          left: 0;
        }

        .nav-mobile__icon::after {
          top: 7px;
        }

        .nav-mobile__icon::before {
          top: -7px;
        }

        .nav-mobile__background {
          /* height: 3rem;
          width: 3rem;
          border-radius: 50%;
          opacity: 1;
          position: absolute;
          top: -71px;
          right: 5rem;
          z-index: 1000;
          transform: scale(1);
          transition: 0.8s transform cubic-bezier(0.83, 0, 0.17, 1);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */

          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          opacity: 1;
          position: absolute;
          top: -71px;
          right: 5rem;
          z-index: 1000;
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          transition: 1s transform ease-in-out;
          background: rgba(0, 0, 0, 0.8);
        }

        /* if backdrop support: very transparent and blurred */
        @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
          .nav-mobile__background {
            background: rgba(0, 0, 0, 0.4);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(15px);
            -webkit-box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px;
            box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px;
          }
        }

        /* 
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        opacity: 1;
        position: absolute;
        top: -71px;
        right: 5rem;
        z-index: 1000;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.83, 0, 0.17, 1) 0s;
        transition: -webkit-transform 0.8s cubic-bezier(0.83, 0, 0.17, 1) 0s;
        -o-transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1) 0s;
        transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1) 0s;
        transition: transform 0.8s cubic-bezier(0.83, 0, 0.17, 1) 0s,
          -webkit-transform 0.8s cubic-bezier(0.83, 0, 0.17, 1) 0s;
        background: rgba(0, 0, 0, 0.4);
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
        -webkit-box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px;
        box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px; */

        .nav-mobile__checkbox:checked ~ body {
          overflow: hidden;
        }

        .nav-mobile__nav {
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          text-align: center;
          z-index: 1500;
          opacity: 0;
          width: 50rem;
          transition: 0.8s all cubic-bezier(0.68, -0.6, 0.32, 1.6);
          visibility: hidden;
        }

        .nav-mobile__list {
          list-style: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          opacity: 0;
          transition: all 0.8s;
          padding: 0;
        }

        .nav-mobile__item {
          margin: 1rem;
        }

        .nav-mobile__link:link,
        .nav-mobile__link:visited {
          display: inline-block;
          text-decoration: none;
          text-transform: uppercase;
          color: white;
          font-size: 20px;
          padding: 1rem 3rem;
          background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
          background-size: 230%;
          transition: 0.4s all;
          font-family: "sf-pro-text", sans-serif;
        }

        .nav-mobile__link > span {
          margin-right: 1.5rem;
        }

        .nav-mobile__link:hover,
        .nav-mobile__link:active {
          background-position: 100%;
          color: black;
          transform: translateX(5px) skewX(-5deg);
        }

        .nav-mobile__checkbox:checked ~ .nav-mobile__background {
          transform: scale(80);
        }

        .nav-mobile__checkbox:checked {
          overflow: hidden;
        }

        .nav-mobile__checkbox:checked ~ .nav-mobile__nav {
          visibility: visible;
          opacity: 1;
          width: 100%;
        }

        .nav-mobile__checkbox:checked ~ .nav-mobile__nav .nav-mobile__list {
          opacity: 1;
        }

        .nav-mobile__button:hover .nav-mobile__icon::before {
          top: -9px;
        }

        .nav-mobile__button:hover .nav-mobile__icon::after {
          top: 9px;
        }

        .nav-mobile__checkbox:checked ~ .nav-mobile__button .nav-mobile__icon {
          background-color: transparent;
        }

        .nav-mobile__checkbox:checked ~ .nav-mobile__button .nav-mobile__icon::after {
          top: 0;
          transform: rotate(135deg);
        }

        .nav-mobile__checkbox:checked ~ .nav-mobile__button .nav-mobile__icon::before {
          top: 0;
          transform: rotate(-135deg);
        }
      }

      @media (min-width: 992px) {
        .nav-mobile {
          display: none;
        }
      }

      @media (min-width: 1200px) {
      }

      @media (min-width: 1400px) {
      }

      @media (min-width: 576px) {
        .nav-mobile__background,
        .nav-mobile__button {
          right: 5rem !important;
        }
      }

      @media (max-width: 576px) {
        .nav-mobile__background,
        .nav-mobile__button {
          right: 2rem !important;
        }
      }
    `;
  }
}

window.customElements.define("mobile-nav", MobileNavigation);
