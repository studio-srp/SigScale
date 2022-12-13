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

        @media (max-width: 576px) {
            .our-solutions-area-box {
                padding-left: 2rem !important;
                padding-right: 2rem !important;
            }
        }

        .our-solutions {
            min-height: 100vh;
            font-family: "sf-pro-text", sans-serif;
            padding: 120px 0;
            scroll-snap-align: start;
        }

        .our-solutions__sub-header {
            font-family: "sf-pro-display-semi", sans-serif;
            color: var(--color-primary);
            text-transform: uppercase;
            font-size: 24px;
            letter-spacing: 0.15em;
            margin-bottom: 5px;
        }

        .our-solutions__header {
            font-family: "sf-pro-display-semi", sans-serif;
            font-size: 36px;
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
            font-size: 20px;
            margin-bottom: 15px;
        }

        .our-solutions__card-description {
            color: var(--color-description);
            font-size: 16px;
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
                padding: 90px 0;
            }
        }

        @media (max-width: 786px) {
            .our-solutions__header {
                font-size: 30px;
            }
            .our-solutions__sub-header {
                font-size: 20px;
            }
        }

        @media (max-width: 576px) {
            .our-solutions {
                padding: 60px 0;
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
                            <h3 class="our-solutions__card-header">Online Charging System (OCS)</h3>
                            <p class="our-solutions__card-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                            </p>
                            <a href="/solutions-detailed.html" class="our-solutions__card-link"
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
                            <h3 class="our-solutions__card-header">Online Charging System (OCS)</h3>
                            <p class="our-solutions__card-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                            </p>
                            <a href="/solutions-detailed.html" class="our-solutions__card-link"
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
                            <h3 class="our-solutions__card-header">Online Charging System (OCS)</h3>
                            <p class="our-solutions__card-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                            </p>
                            <a href="/solutions-detailed.html" class="our-solutions__card-link"
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
                            <h3 class="our-solutions__card-header">Online Charging System (OCS)</h3>
                            <p class="our-solutions__card-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                            </p>
                            <a href="/solutions-detailed.html" class="our-solutions__card-link"
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
                            <h3 class="our-solutions__card-header">Online Charging System (OCS)</h3>
                            <p class="our-solutions__card-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                            </p>
                            <a href="/solutions-detailed.html" class="our-solutions__card-link"
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
                            <h3 class="our-solutions__card-header">Online Charging System (OCS)</h3>
                            <p class="our-solutions__card-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt
                            </p>
                            <a href="/solutions-detailed.html" class="our-solutions__card-link"
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
