import { LitElement, css, html, unsafeCSS } from "lit";
import brandImage from "./../assets/images/Brand_logo.svg";
import rectanglePng from "./../assets/images/Nav_rectangle.png";
// import rectangleImage from "./../assets/images/Nav_rectangle.png";

// const checkSvgUrl = new URL("./../assets/images/Nav_rectangle.png", import.meta.url).toString();

class DesktopNavigation extends LitElement {
  static styles = css`
    .nav-desktop {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 90px;
      opacity: 1;
    }

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      height: 90px;
      z-index: -1;
      width: 100%;
    }

    .constrain-box {
      max-width: 1400px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: auto auto;
    }

    .nav-desktop {
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
    }

    .nav-desktop__brand {
      width: 200px;
    }

    .nav-desktop__nav-list {
      list-style: none;
      display: flex;
    }

    .nav-desktop__nav-item {
      margin-left: 2.5rem;
    }

    .nav-desktop__nav-item-link {
      font-size: 18px;
      text-decoration: none;
      color: var(--color-white);
      font-family: "sf-pro-text", sans-serif;
      transition: 0.3s ease all;
    }

    .nav-desktop__nav-item-link:hover {
      color: var(--color-primary);
      opacity: 0.9;
    }

    .nav-selected {
      color: var(--color-primary) !important;
    }

    @media (max-width: 992px) {
      .constrain-box {
        /* display: none; */
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }

      .nav-desktop__nav-list {
        display: none;
      }
    }

    @media (min-width: 992px) {
      .nav-desktop__nav-list {
        display: flex;
      }

      .nav-desktop__nav-item {
        margin-left: 2rem !important;
      }

      .nav-desktop__nav-item-link {
        font-size: 16px !important;
      }
    }

    @media (min-width: 1200px) {
      .constrain-box {
        max-width: 1140px;
      }

      .nav-desktop__nav-item {
        margin-left: 2rem !important;
      }

      .nav-desktop__nav-item-link {
        font-size: 18px !important;
      }
    }

    @media (min-width: 1400px) {
      .constrain-box {
        max-width: 1400px;
      }
    }

    @media (min-width: 576px) {
      .constrain-box {
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 576px) {
      .constrain-box {
        max-width: auto;
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    #active {
      color: var(--color-primary) !important;
    }
  `;

  static properties = {
    activePage: {
      type: String,
    },
    home: {
      type: Boolean,
    },
    about: {
      type: Boolean,
    },
    solutions: {
      type: Boolean,
    },
    services: {
      type: Boolean,
    },
    projects: {
      type: Boolean,
    },
    awards: {
      type: Boolean,
    },
    contacts: {
      type: Boolean,
    },
  };

  constructor() {
    super();
    this.home = true;
    this.about = false;
    this.solutions = false;
    this.services = false;
    this.projects = false;
    this.awards = false;
    this.contacts = false;
  }

  activeClasses() {
    switch (this.activePage) {
      case "home":
        this.home = true;
        this.about = false;
        this.solutions = false;
        this.services = false;
        this.projects = false;
        this.awards = false;
        this.contacts = false;
        break;
      case "about":
        this.solutions = false;
        this.about = true;
        this.home = false;
        this.services = false;
        this.projects = false;
        this.awards = false;
        this.contacts = false;
        break;
      case "solutions":
        this.services = false;
        this.solutions = true;
        this.about = false;
        this.home = false;
        this.projects = false;
        this.awards = false;
        this.contacts = false;
        break;
      case "services":
        this.projects = false;
        this.services = true;
        this.solutions = false;
        this.about = false;
        this.home = false;
        this.awards = false;
        this.contacts = false;
        break;
      case "projects":
        this.awards = false;
        this.projects = true;
        this.services = false;
        this.solutions = false;
        this.about = false;
        this.home = false;
        this.contacts = false;
        break;
      case "awards":
        this.contacts = false;
        this.awards = true;
        this.projects = false;
        this.services = false;
        this.solutions = false;
        this.about = false;
        this.home = false;
        break;
      case "contacts":
        this.contacts = true;
        this.awards = false;
        this.projects = false;
        this.services = false;
        this.solutions = false;
        this.about = false;
        this.home = false;

        break;
      default:
        break;
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.activeClasses();
  }

  render() {
    return html`
      <div class="wrapper">
        <nav class="nav-desktop">
          <img src=${rectanglePng} alt="background image" class="background-image" />
          <div class="constrain-box">
            <a href="/">
              <img class="nav-desktop__brand" src=${brandImage} />
            </a>
            <ul class="nav-desktop__nav-list">
              <li class="nav-desktop__nav-item">
                <a
                  href="/"
                  @click=${this._click}
                  id=${this.home ? "active" : ""}
                  class="nav-desktop__nav-item-link"
                  >Home</a
                >
              </li>
              <li class="nav-desktop__nav-item">
                <a
                  href="./about"
                  @click=${this._click}
                  id="${this.about ? "active" : ""}"
                  class="nav-desktop__nav-item-link"
                  >About</a
                >
              </li>
              <li class="nav-desktop__nav-item">
                <a
                  href="/solutions"
                  @click=${this._click}
                  id=${this.solutions ? "active" : ""}
                  class="nav-desktop__nav-item-link"
                  >Solutions</a
                >
              </li>
              <li class="nav-desktop__nav-item">
                <a
                  href="/services"
                  @click=${this._click}
                  id=${this.services ? "active" : ""}
                  class="nav-desktop__nav-item-link"
                  >Services</a
                >
              </li>
              <li class="nav-desktop__nav-item">
                <a
                  href="/projects"
                  @click=${this._click}
                  id=${this.projects ? "active" : ""}
                  class="nav-desktop__nav-item-link"
                  >Projects</a
                >
              </li>
              <li class="nav-desktop__nav-item">
                <a
                  href="/awards"
                  @click=${this._click}
                  id=${this.awards ? "active" : ""}
                  class="nav-desktop__nav-item-link"
                  >Awards</a
                >
              </li>
              <li class="nav-desktop__nav-item">
                <a
                  href="/contacts"
                  @click=${this._click}
                  id=${this.contacts ? "active" : ""}
                  class="nav-desktop__nav-item-link"
                  >Contacts</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    `;
  }

  _click(event) {
    this.dispatchEvent(
      new CustomEvent("custom-event", {
        detail: {
          title: { page: event.target.text },
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}

window.customElements.define("desktop-nav", DesktopNavigation);
