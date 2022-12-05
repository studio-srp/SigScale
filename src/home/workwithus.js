import { html, LitElement, css } from "lit";
import backgroundImage from "./../assets/images/Solutions_background.svg";

export class WorkWithUs extends LitElement {
    render() {
        return html`
            <section class="contact">
                <div class="contact-area-box">
                    <h3 class="contact-subheading">want to work with us</h3>
                    <h1 class="contact-heading">Digitally transform and grow your business!</h1>

                    <p class="contact-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.
                    </p>

                    <a class="cta-btn__primary margin-top-medium">Contact Us</a>
                </div>
                <img src=${backgroundImage} alt="background image" class="background-image" />
            </section>
        `;
    }

    static styles = css`
        .contact {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            font-family: "sf-pro-text", sans-serif;
            position: relative;
            scroll-snap-align: start;
        }

        .background-image {
            position: absolute;
            object-fit: cover;
            height: 100%;
            width: 100%;
            z-index: 4;
        }

        .contact-area-box {
            z-index: 5;
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

        .contact-subheading {
            font-size: 24px;
            font-weight: normal;
            letter-spacing: 0.015em;
            color: var(--color-primary);
            text-transform: uppercase;
            font-family: "sf-pro-display-semi", sans-serif;
        }

        .contact-heading {
            font-size: 42px;
            /* line-height: 54px; */
            letter-spacing: -0.03em;
            text-align: center;
            color: white;
            font-family: "sf-pro-display-semi", sans-serif;
        }

        .contact-paragraph {
            margin-top: 2rem;
            width: 620px;
            font-size: 20px;
            text-align: center;
            color: white;
        }

        @media (max-width: 1400px) {
        }

        @media (max-width: 1200px) {
            .contact-heading {
                line-height: 39px;
            }
        }

        @media (max-width: 992px) {
        }

        @media (max-width: 768px) {
            .contact-subheading {
                display: none;
            }

            .contact-heading {
                width: 90%;
                font-size: 30px;
                line-height: 39px;
            }

            .contact-paragraph {
                width: 80%;
                font-size: 14px;
            }
        }

        @media (max-width: 576px) {
        }

        .contact-area-box {
            margin: auto auto;
            display: flex;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }

        @media (max-width: 992px) {
            .contact-area-box {
                padding-left: 5rem;
                padding-right: 5rem;
            }
        }

        @media (min-width: 1200px) {
            .contact-area-box {
                max-width: 1140px;
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (min-width: 1400px) {
            .contact-area-box {
                max-width: 1400px;
            }
        }

        @media (min-width: 576px) {
            .contact-area-box {
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (max-width: 576px) {
            .contact-area-box {
                max-width: auto;
                padding-left: 2rem !important;
                padding-right: 2rem !important;
            }
        }
    `;
}

window.customElements.define("app-home-work", WorkWithUs);
