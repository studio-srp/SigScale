import { LitElement, css, html } from "lit";
import "./../Landing/Landing.js";
import "./../footer/footer";

import projectImg1 from "./../assets/images/project-1.png";
import projectImg2 from "./../assets/images/project-2.png";
import projectImg3 from "./../assets/images/project-3.png";

export class Projects extends LitElement {
    static styles = css`
        .projects-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            font-family: "sf-pro-text", sans-serif;
            padding: 70px 0;
            scroll-snap-align: start;
        }

        .section__sub-header {
            font-family: "sf-pro-display-semi", sans-serif;
            color: var(--color-primary);
            text-transform: uppercase;
            font-size: 24px;
            letter-spacing: 0.15em;
            margin-bottom: 5px;
        }

        .section__header {
            font-family: "sf-pro-display-semi", sans-serif;
            font-size: 36px;
            line-height: 42px;
            margin: 0;
            margin-bottom: 40px;
        }
        .projects__card-section {
            display: flex;
            /* background-color: red; */
            align-items: flex-start;
            padding: 40px;
            gap: 30px;
            border-radius: 10px;
            border-bottom: var(--color-primary) 5px solid;
            box-shadow: 6px 4px 20px -2px rgba(0, 0, 0, 0.25);
            margin-bottom: 40px;
        }

        /* .projects__card__content {
    } */

        .projects__card__header {
            font-size: 30px;
            font-family: "sf-pro-display-semi", sans-serif;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .projects__card__description {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 20px;
            color: var(--color-description);
        }

        .projects__card__link-area {
            color: var(--color-primary);
        }

        .projects__card__link {
            text-decoration: none;
            transition: 0.2s all;
            color: black;
        }

        .projects__card__link:visited,
        .projects__card__link:active,
        .projects__card__link:hover {
            opacity: 0.7;
        }

        /* .projects__card__image-area {
    } */

        .projects__card__image {
            object-fit: cover;
            width: 400px;
        }

        /* Break Pointes  */
        /* 1400  - Large Laptop */
        /* 1200 - Small Laptop */
        /* 992 - Tab Landscape */
        /* 768 - Tab Portrait */
        /* 576 - Mobile */

        @media (max-width: 1200px) {
            .projects__card__image {
                width: 350px;
            }
        }

        @media (max-width: 991px) {
            .projects {
                padding: 50px 0px;
            }
            .projects__card-section {
                flex-direction: column;
            }

            .projects__card__image-area {
                width: 100%;
            }

            .projects__card__image {
                width: 100%;
            }

            .section__header {
                text-align: left;
            }

            .section__sub-header {
                text-align: left;
            }
        }

        /***************************************** */

        .projects-area-box {
            margin: auto auto;
            display: flex;
            flex-direction: column;
            max-width: 1400px;
            height: 100%;
        }

        @media (min-width: 1200px) {
            .projects-area-box {
                max-width: 1140px !important;
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (min-width: 1400px) {
            .projects-area-box {
                max-width: 1400px !important;
            }
        }

        @media (max-width: 1200px) {
            .projects-area-box {
                padding-left: 5rem !important;
                max-width: 1140px !important;
                padding-right: 5rem !important;
            }
        }

        @media (max-width: 992px) {
            .projects-area-box {
                padding-left: 3rem !important;
                padding-right: 3rem !important;
            }
            .section__header {
                font-size: 23px;
            }
            .section__sub-header {
                color: var(--color-primary);
                font-size: 18px;
                padding-bottom: 5px;
            }
            .projects__card__description {
                font-size: 16px;
                text-align: justify;
                letter-spacing: 0.03em;
                font-weight: 100;
            }
            .projects__card__header {
                font-size: 20px;
                margin-top: 00px;
            }
            .projects__card-section {
                padding: 40px 30px;
            }
            .projects-container {
                padding: 50px 0;
            }
        }
        @media (max-width: 576px) {
            .projects-area-box {
                padding-left: 2rem !important;
                padding-right: 2rem !important;
            }
            .projects__header {
                font-size: 21px;
                margin-bottom: 30px;
                margin-top: 0px;
            }
            .section__sub-header {
                color: var(--color-primary);
                font-size: 16px;
                padding-bottom: 5px;
            }
            .projects__card__description {
                font-size: 15px;
                text-align: justify;
                letter-spacing: 0.03em;
                font-weight: 100;
            }
            .projects__card__header {
                font-size: 18px;
                margin-top: 00px;
            }
            .projects__card-section {
                padding: 30px 20px;
            }
            .projects-container {
                padding: 40px 0;
            }
        }
    `;
    render() {
        return html`
            <landing-general page="Projects"></landing-general>
            <section class="projects-container">
                <div class="projects-area-box">
                    <h3 class="section__sub-header">Our Projects</h3>
                    <h1 class="section__header">Lorem ipsum dolor sit</h1>
                    <div class="projects__card-section">
                        <div class="projects__card__content">
                            <h4 class="projects__card__header">
                                3GPP Online Charging System (OCS)
                            </h4>
                            <p class="projects__card__description">
                                In a communications service provider (CSP) network an Online
                                Charging System (OCS) is a core network element which performs
                                real-time charging for services. An OCS authorizes subscribers'
                                sessions subject to available credit on account and decrements
                                account balance as services are consumed. When a subscriber's
                                account balance is depleted authorization may be withdrawn and
                                ongoing session(s) terminated. SigScale OCS includes a 3GPP AAA
                                server function for authentication, authorization and accounting
                                (AAA) of subscribers using DIAMETER or RADIUS protocols. TM Forum
                                Open APIs for prepay balance management and product catalog
                                management are supported with a web components front end.
                            </p>
                            <div class="projects__card__link-area">
                                Source Code Repository:
                                <a href="#" class="projects__card__link">github.com/sigscale/ocs</a>
                            </div>
                        </div>
                        <div class="projects__card__image-area">
                            <img src=${projectImg1} alt="" class="projects__card__image" />
                        </div>
                    </div>

                    <div class="projects__card-section">
                        <div class="projects__card__content">
                            <h4 class="projects__card__header">
                                3GPP Online Charging System (OCS)
                            </h4>
                            <p class="projects__card__description">
                                In a communications service provider (CSP) network an Online
                                Charging System (OCS) is a core network element which performs
                                real-time charging for services. An OCS authorizes subscribers'
                                sessions subject to available credit on account and decrements
                                account balance as services are consumed. When a subscriber's
                                account balance is depleted authorization may be withdrawn and
                                ongoing session(s) terminated. SigScale OCS includes a 3GPP AAA
                                server function for authentication, authorization and accounting
                                (AAA) of subscribers using DIAMETER or RADIUS protocols. TM Forum
                                Open APIs for prepay balance management and product catalog
                                management are supported with a web components front end.
                            </p>
                            <div class="projects__card__link-area">
                                Source Code Repository:
                                <a href="#" class="projects__card__link">github.com/sigscale/ocs</a>
                            </div>
                        </div>
                        <div class="projects__card__image-area">
                            <img src=${projectImg2} alt="" class="projects__card__image" />
                        </div>
                    </div>

                    <div class="projects__card-section">
                        <div class="projects__card__content">
                            <h4 class="projects__card__header">
                                3GPP Online Charging System (OCS)
                            </h4>
                            <p class="projects__card__description">
                                In a communications service provider (CSP) network an Online
                                Charging System (OCS) is a core network element which performs
                                real-time charging for services. An OCS authorizes subscribers'
                                sessions subject to available credit on account and decrements
                                account balance as services are consumed. When a subscriber's
                                account balance is depleted authorization may be withdrawn and
                                ongoing session(s) terminated. SigScale OCS includes a 3GPP AAA
                                server function for authentication, authorization and accounting
                                (AAA) of subscribers using DIAMETER or RADIUS protocols. TM Forum
                                Open APIs for prepay balance management and product catalog
                                management are supported with a web components front end.
                            </p>
                            <div class="projects__card__link-area">
                                Source Code Repository:
                                <a href="#" class="projects__card__link">github.com/sigscale/ocs</a>
                            </div>
                        </div>
                        <div class="projects__card__image-area">
                            <img src=${projectImg3} alt="" class="projects__card__image" />
                        </div>
                    </div>

                    <!-- <div class="projects__card-section">
                        <div class="projects__card__content">
                            <h4 class="projects__card__header">3GPP Online Charging System (OCS)</h4>
                            <p class="projects__card__description">
                                In a communications service provider (CSP) network an Online Charging
                                System (OCS) is a core network element which performs real-time charging
                                for services. An OCS authorizes subscribers' sessions subject to
                                available credit on account and decrements account balance as services
                                are consumed. When a subscriber's account balance is depleted
                                authorization may be withdrawn and ongoing session(s) terminated.
                                SigScale OCS includes a 3GPP AAA server function for authentication,
                                authorization and accounting (AAA) of subscribers using DIAMETER or
                                RADIUS protocols. TM Forum Open APIs for prepay balance management and
                                product catalog management are supported with a web components front
                                end.
                            </p>
                            <div class="projects__card__link-area">
                                Source Code Repository:
                                <a href="#" class="projects__card__link">github.com/sigscale/ocs</a>
                            </div>
                        </div>
                        <div class="projects__card__image">
                            <img src="./assets/images/project-2.png" alt="" />
                        </div>
                    </div> -->

                    <!-- <div class="projects__card-section">
                        <div class="projects__card__content">
                            <h4 class="projects__card__header">3GPP Online Charging System (OCS)</h4>
                            <p class="projects__card__description">
                                In a communications service provider (CSP) network an Online Charging
                                System (OCS) is a core network element which performs real-time charging
                                for services. An OCS authorizes subscribers' sessions subject to
                                available credit on account and decrements account balance as services
                                are consumed. When a subscriber's account balance is depleted
                                authorization may be withdrawn and ongoing session(s) terminated.
                                SigScale OCS includes a 3GPP AAA server function for authentication,
                                authorization and accounting (AAA) of subscribers using DIAMETER or
                                RADIUS protocols. TM Forum Open APIs for prepay balance management and
                                product catalog management are supported with a web components front
                                end.
                            </p>
                            <div class="projects__card__link-area">
                                Source Code Repository:
                                <a href="#" class="projects__card__link">github.com/sigscale/ocs</a>
                            </div>
                        </div>
                        <div class="projects__card__image">
                            <img src="./assets/images/project-3.png" alt="" />
                        </div>
                    </div> -->
                </div>
            </section>
            <app-footer></app-footer>
        `;
    }
}

window.customElements.define("app-projects", Projects);
