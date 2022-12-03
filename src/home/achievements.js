import { css, html, LitElement } from "lit";
import awards1 from "./../assets/images/awards-1.png";
import awards2 from "./../assets/images/awards-2.png";
import awards3 from "./../assets/images/awards-3.png";

export class Achievements extends LitElement {
    render() {
        return html`
            <section class="achievements">
                <div class="achievements-area-box">
                    <div class="achievements-section">
                        <h1 class="achievements-header">Check out our latest achievements</h1>
                        <div class="achievements-card-section margin-top-large">
                            <div class="achievements-card">
                                <img
                                    src=${awards1}
                                    alt="award image"
                                    class="achievements-card__image"
                                />
                                <div class="achievements-card-content">
                                    <h3 class="achievements-card__header">
                                        Award for Best use of Open Digital Framework
                                    </h3>
                                    <p class="achievements-card__description margin-top-small">
                                        SigScale is proud to share the award for Best use of ODF at
                                        the 2021 Catalyst Awards with champions...
                                    </p>

                                    <a href="#" class="achievements-card__link margin-top-small"
                                        >Read More &rarr;</a
                                    >
                                </div>
                            </div>
                            <div class="achievements-card">
                                <img
                                    src=${awards2}
                                    alt="award image"
                                    class="achievements-card__image"
                                />
                                <div class="achievements-card-content">
                                    <h3 class="achievements-card__header">
                                        Award for Best use of Open Digital Framework
                                    </h3>
                                    <p class="achievements-card__description margin-top-small">
                                        SigScale is proud to share the award for Best use of ODF at
                                        the 2021 Catalyst Awards with champions...
                                    </p>

                                    <a href="#" class="achievements-card__link margin-top-small"
                                        >Read More &rarr;</a
                                    >
                                </div>
                            </div>
                            <div class="achievements-card">
                                <img
                                    src=${awards3}
                                    alt="award image"
                                    class="achievements-card__image"
                                />
                                <div class="achievements-card-content">
                                    <h3 class="achievements-card__header">
                                        Award for Best use of Open Digital Framework
                                    </h3>
                                    <p class="achievements-card__description margin-top-small">
                                        SigScale is proud to share the award for Best use of ODF at
                                        the 2021 Catalyst Awards with champions...
                                    </p>

                                    <a href="#" class="achievements-card__link margin-top-small"
                                        >Read More &rarr;</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="view-more__wrap">
                            <a href="/awards.html" class="view-more">View More</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static styles = css`
        .achievements {
            min-height: 100vh;
            display: flex;
            align-items: center;
            scroll-snap-align: start;
        }
        .achievements-card-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .achievements-card {
            overflow: hidden;
            width: 32%;
            text-align: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
            border-radius: 15px;
            color: black;
            border-bottom: var(--color-primary) 5px solid;
            box-shadow: 6px 4px 20px -2px rgba(0, 0, 0, 0.25);
        }

        .achievements-card__image {
            height: 300px;
            margin-bottom: 20px;
        }
        .achievements-card-content {
            text-align: left;
            padding: 0 3rem;
        }
        .achievements-card__header {
            font-weight: 700;
            line-height: 95.69%;
            font-size: 20px;
            font-family: "sf-pro-display-semi", sans-serif;
        }

        .achievements-header {
            font-family: "sf-pro-display-semi", sans-serif;
            font-size: 36px;
            margin: auto;
            margin-bottom: 50px;
        }

        .achievements-card__description {
            font-size: 15px;
            line-height: 19px;
            color: var(--color-description);
        }

        .achievements-card__link {
            display: inline-block;
            text-decoration: none;
            color: var(--color-primary);
        }

        .view-more {
            text-decoration: none;
            background-color: var(--color-primary);
            display: inline-block;
            padding: 15px 20px;
            font-family: "sf-pro-text", sans-serif;
            color: white;
            border-radius: 5px;
        }

        .view-more__wrap {
            display: flex;
            margin-top: 30px;
            justify-content: center;
        }

        @media (max-width: 1400px) {
        }

        @media (max-width: 1200px) {
            .achievements-card-section {
                justify-content: space-evenly;
            }
            .achievements-card {
                width: 45%;
            }

            .achievements-card:last-child {
                display: none;
            }
        }

        @media (max-width: 992px) {
            .achievements-header {
                text-align: center;
                max-width: 440px;
                margin: auto;
                margin-bottom: 50px;
            }
        }

        @media (max-width: 768px) {
            .achievements-area-box {
                display: block;
            }
            .achievements {
                display: block;
            }

            .achievements-card {
                width: 100%;
                margin-bottom: 30px;
            }

            .achievements-card:last-child {
                display: block;
            }

            .achievements-card-section {
                flex-direction: column;
                margin-top: 40px !important;
            }
        }

        @media (max-width: 576px) {
        }

        .achievements-area-box {
            margin: auto auto;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }

        @media (max-width: 992px) {
            .achievements-area-box {
                padding-left: 5rem;
                padding-right: 5rem;
            }
        }

        @media (min-width: 1200px) {
            .achievements-area-box {
                max-width: 1140px;
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (min-width: 1400px) {
            .achievements-area-box {
                max-width: 1400px;
            }
        }

        @media (min-width: 576px) {
            .achievements-area-box {
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }
        }

        @media (max-width: 576px) {
            .achievements-area-box {
                max-width: auto;
                padding-left: 2rem !important;
                padding-right: 2rem !important;
            }
        }
    `;
}

window.customElements.define("app-home-achievements", Achievements);
