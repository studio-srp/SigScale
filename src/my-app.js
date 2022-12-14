import { LitElement, css, html } from "lit";

// import "./navigation/navigation.js";
import "./app-content.js";
import "./footer/footer.js";

export class MyApp extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <app-navigation></app-navigation>
      </header>
      <app-content></app-content>
    `;
  }
}

window.customElements.define("my-app", MyApp);

window.addEventListener("vaadin-router-location-changed", (event) => {
  let navs = document.querySelectorAll("a.nav-desktop__nav-item-link");
  for (let i = 0; i < navs.length; i++) {
    if (event.detail.location.pathname === "/") {
      if (navs[i].innerHTML === "Home") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    } else if (event.detail.location.pathname === "/about") {
      if (navs[i].innerHTML === "About") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    } else if (event.detail.location.pathname === "/solutions") {
      if (navs[i].innerHTML === "Solutions") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    } else if (event.detail.location.pathname === "/services") {
      if (navs[i].innerHTML === "Services") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    } else if (event.detail.location.pathname === "/projects") {
      if (navs[i].innerHTML === "Projects") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    } else if (event.detail.location.pathname === "/awards") {
      if (navs[i].innerHTML === "Awards") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    } else if (event.detail.location.pathname === "/contacts") {
      if (navs[i].innerHTML === "Contacts") {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    }
  }
});
