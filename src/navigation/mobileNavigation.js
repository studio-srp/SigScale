import { LitElement, html, css } from "lit";

class MobileNavigation extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html`
            <div class="nav-mobile">
                <input
                    type="checkbox"
                    name="menu"
                    id="navigation-toggler"
                    class="nav-mobile__checkbox"
                />
                <label for="navigation-toggler" class="nav-mobile__button">
                    <div class="nav-mobile__icon"></div>
                </label>
                <div class="nav-mobile__background">&nbsp;</div>
                <nav class="nav-mobile__nav">
                    <ul class="nav-mobile__list">
                        <li class="nav-mobile__item">
                            <a href="/index.html" class="nav-mobile__link">Home</a>
                        </li>
                        <li class="nav-mobile__item">
                            <a href="./about.html" class="nav-mobile__link">About</a>
                        </li>
                        <li class="nav-mobile__item">
                            <a href="/solutions.html" class="nav-mobile__link">Solutions</a>
                        </li>
                        <li class="nav-mobile__item">
                            <a href="/services.html" class="nav-mobile__link">Services</a>
                        </li>
                        <li class="nav-mobile__item">
                            <a href="/projects.html" class="nav-mobile__link">Projects</a>
                        </li>

                        <li class="nav-mobile__item">
                            <a href="/awards.html" class="nav-mobile__link">Awards</a>
                        </li>

                        <li class="nav-mobile__item">
                            <a href="/contacts.html" class="nav-mobile__link">Contacts</a>
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
                    height: 3rem;
                    width: 3rem;
                    background-image: radial-gradient(#ffc444, var(--color-primary));
                    border-radius: 50%;
                    opacity: 1;
                    position: absolute;
                    top: -71px;
                    right: 5rem;
                    z-index: 1000;
                    transform: scale(1);
                    transition: 0.8s transform cubic-bezier(0.83, 0, 0.17, 1);
                }

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
                }

                .nav-mobile__item {
                    margin: 1rem;
                }

                .nav-mobile__link:link,
                .nav-mobile__link:visited {
                    display: inline-block;
                    text-decoration: none;
                    text-transform: uppercase;
                    color: black;
                    font-size: 20px;
                    padding: 1rem 3rem;
                    background-image: linear-gradient(
                        120deg,
                        transparent 0%,
                        transparent 50%,
                        white 50%
                    );
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
                    transform: translateX(5px);
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
