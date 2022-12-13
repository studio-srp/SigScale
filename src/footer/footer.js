import { LitElement, css, html } from "lit";
import brandLogo from "./../assets/images/Brand_logo.png";
import background from "./../assets/images/Footer_rectangle.svg";
import linkedIn from "./../assets/icons/linkedin.svg";

export class Footer extends LitElement {
    static properties = {
        page: { type: String },
    };

    constructor() {
        super();
        this.name = document.getElementById("container");
    }

    menuHandler(e) {
        console.log(this.name);
        this.name.scrollTo({
            top: 0,
            left: 0,
        });
    }

    render() {
        return html`
            <footer class="footer">
                <img src=${background} alt="background image" class="background-image" />
                <div class="footer-area-box">
                    <div class="footer-area">
                        <div class="footer-section">
                            <img src=${brandLogo} alt="brand logo" class="footer-branch-logo" />
                            <p class="footer-area__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                                corporis quod odio officia accusamus necessitatibus nemo consequatur
                                ipsam cupiditate ut.
                            </p>
                        </div>
                        <div class="footer-section">
                            <div class="footer-section__links">
                                <a
                                    href="/about"
                                    @mousedown="${this.menuHandler}"
                                    class="footer-links"
                                    >About</a
                                >
                                <a
                                    href="/solutions"
                                    @mousedown="${this.menuHandler}"
                                    class="footer-links"
                                    >Solutions</a
                                >
                                <a
                                    href="/services"
                                    @mousedown="${this.menuHandler}"
                                    class="footer-links"
                                    >Services</a
                                >
                            </div>
                            <div class="footer-section__links">
                                <a
                                    href="/projects"
                                    @mousedown="${this.menuHandler}"
                                    class="footer-links"
                                    >Projects</a
                                >
                                <a
                                    href="/awards"
                                    @mousedown="${this.menuHandler}"
                                    class="footer-links"
                                    >Awards</a
                                >
                                <a
                                    href="/contacts"
                                    @mousedown="${this.menuHandler}"
                                    class="footer-links"
                                    >Contacts</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="hr-line"></div>
                    <div class="footer-bottom-bar">
                        <p class="footer-area__copyright">
                            &copy; 2022 All right reserved by Sigscale
                        </p>
                        <a href="#" class="linedin-link">
                            <img src=${linkedIn} alt="linkedin icon" />
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }

    static styles = css`
        .background-image {
            position: absolute;
            object-fit: cover;
            height: 100%;
            width: 100%;
            z-index: 4;
        }

        .footer {
            width: 100%;
            padding: 6rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "sf-pro-text", sans-serif;
            position: relative;
            scroll-snap-align: start;
        }

        .footer-area-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between !important;
            width: 100% !important;
            align-items: flex-start;
        }

        .footer-area {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .footer-section:first-child {
            width: 50%;
        }

        .footer-section {
            /* width: 20%; */
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .footer-section:first-child {
            align-items: flex-start;
        }

        .footer-section:last-child {
            flex-direction: row;
            align-items: flex-end;
            /* justify-content: end; */
            gap: 100px;
        }

        .footer-section__links {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: end;
        }

        .footer .footer-branch-logo {
            width: 60%;
            min-width: 230px;
            margin: 0;
        }

        .footer-area__header {
            color: var(--color-primary);
            text-transform: uppercase;
            font-size: 20px;
            line-height: 25px;
            letter-spacing: 0.15em;
            font-weight: 700;
            text-align: center;
            font-family: "sf-pro-display-semi", sans-serif;
            margin-bottom: 20px;
        }

        .footer-area__copyright {
            font-size: 12px;
            font-weight: 500;
            color: var(--color-white);
            text-align: center;
            font-family: "sf-pro-text", sans-serif;
        }

        .footer-area__description {
            font-size: 14px;
            width: 70%;
            color: #cfcfcf;
        }
        .footer-links {
            text-decoration: none;
            display: inline-block;
            margin-bottom: 20px;
            width: 100%;
            color: white;
            border-bottom: 4px transparent solid;
            transition: 0.2s all;
            font-size: 14px;
            text-align: end;
        }

        .footer-links:hover {
            color: var(--color-primary);
        }

        .hr-line {
            width: 100%;
            background-color: #acacac;
            height: 1px;
            margin-top: 20px;
            border-radius: 10px;
            position: relative;
        }

        .footer:hover .hr-line::after {
            width: 100%;
        }
        .footer-bottom-bar {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .footer-bottom-bar > a > img {
            width: 18px;
        }

        .linedin-link {
            display: inline-block;
        }

        @media (max-width: 1400px) {
        }

        @media (max-width: 1200px) {
        }

        @media (max-width: 992px) {
            .footer-area__description {
                width: 100%;
            }

            .footer-section:last-child {
                gap: 30px;
            }
        }

        @media (max-width: 768px) {
            .footer-area__header {
                font-size: 18px;
            }

            .footer-area__copyright {
                font-size: 10px;
            }

            .footer-area {
                flex-direction: column;
            }

            .footer-section,
            .footer-section:first-child,
            .footer-section:last-child {
                width: 100%;
            }

            .footer-section__links {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                flex-direction: row;
                margin-top: 20px;
            }

            .footer-section:first-child {
                align-items: center;
            }

            .footer-area__description {
                text-align: center;
            }
            .footer-section__links:first-child > .footer-links {
                text-align: start;
            }

            .footer-links {
                text-align: start;
                margin-bottom: 0;
                width: auto;
            }
        }

        @media (max-width: 576px) {
            .footer-branch-logo {
                width: 100%;
            }

            .footer-section__links {
                flex-direction: column;
            }

            .footer-links {
                margin-bottom: 10px;
            }
        }

        .footer-area-box {
            display: flex;
            flex-direction: column !important;
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            z-index: 5;
        }

        @media (max-width: 992px) {
            .footer-area-box {
                padding-left: 5rem;
                padding-right: 5rem;
            }
        }

        @media (min-width: 1200px) {
            .footer-area-box {
                max-width: 1140px;
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (min-width: 1400px) {
            .footer-area-box {
                max-width: 1400px;
            }
        }

        @media (min-width: 576px) {
            .footer-area-box {
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (max-width: 576px) {
            .footer-area-box {
                max-width: auto;
                padding-left: 2rem !important;
                padding-right: 2rem !important;
            }
        }
    `;
}

window.customElements.define("app-footer", Footer);
