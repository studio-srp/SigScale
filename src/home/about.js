import { LitElement, css, html } from "lit";
import computerGif from "./../assets/gifs/computer.gif";
import headPhone from "./../assets/gifs/headphone.gif";
import video from "./../assets/icons/video.svg";
import worldTech from "./../assets/icons/world-tech.svg";
import wifiGif from "./../assets/gifs/wifi.gif";
import locationGif from "./../assets/gifs/location.gif";

export class About extends LitElement {
  render() {
    return html` <section class="about">
      <div class="about-area-box">
        <div class="about-left">
          <div class="about-header-area">
            <h2 class="about-left__header">You Cannot Use Up Creativity</h2>
            <p class="about-left__description">
              SigScale is an open source company focused on software solutions for communications
              service providers (CSP).
            </p>
            <p class="about-left__description">
              Our core competency is in signaling and distributed fault tolerant systems. We have
              developed our own protocol stacks (SIGTRAN, TCAP, CAP, MAP, NGAP, RADIUS, EAP) in
              Erlang, allowing us to build microservices with very low footprint and massive
              scalability.
            </p>
          </div>

          <div class="about-card-area">
            <div class="about-left__card">
              <img src=${computerGif} alt="computer Icon" class="about-left__card--image" />
              <div class="about-left__card-content-box">
                <h4 class="about-left__card-content-box_header">Experience</h4>
                <p class="about-left__card-content-box_description">
                  Our great team of more than 1400 software experts.
                </p>
              </div>
            </div>

            <div class="about-left__card">
              <img src=${headPhone} alt="computer Icon" class="about-left__card--image" />
              <div class="about-left__card-content-box">
                <h4 class="about-left__card-content-box_header">Quick Support</h4>
                <p class="about-left__card-content-box_description">
                  We'll help you test bold new ideas while sharing you.
                </p>
              </div>
            </div>

            <a class="about-right__intro-video" href="#">
              <div class="about-right__intro-video__content">
                <img src=${video} alt="" />
                Intro Video
              </div>
            </a>
          </div>
        </div>
        <div class="about-right">
          <div class="about-right__image-container">
            <img src=${worldTech} alt="tech world" class="about-right__image" />
            <img src=${wifiGif} alt="wifi gif" class="wifi-gif-1" />
            <img src=${wifiGif} alt="wifi gif" class="wifi-gif-2" />
            <img src=${locationGif} alt="location gif" class="location-gif-1" />
            <img src=${locationGif} alt="location gif" class="location-gif-2" />
            <img src=${locationGif} alt="location gif" class="location-gif-3" />
            <img src=${locationGif} alt="location gif" class="location-gif-4" />
            <img src=${locationGif} alt="location gif" class="location-gif-5" />
          </div>
        </div>
      </div>
    </section>`;
  }

  static styles = css`
    .about {
      font-family: "sf-pro-text", sans-serif;
      display: flex;
      align-items: center;
      min-height: 100vh;
      /* scroll-snap-align: none; */
    }

    .about-left {
      min-height: 650px;
      gap: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .about-left__header {
      font-size: 35px !important ; //36
      line-height: 31px;
      font-weight: 700;
      letter-spacing: -0.0015em;
      max-width: 350px;
      margin-bottom: 20px;
      margin-top: 0;
      font-family: "sf-pro-display-semi";
    }

    .about-left__description {
      font-size: 17px; //14
      line-height: 32px;
      font-weight: 400;
      letter-spacing: -0.005em;
      max-width: 80%;
      color: var(--color-description);
      margin-bottom: 16px;
    }

    .about-left__card {
      display: flex;
      align-items: flex-start;
    }

    .about-left__card:first-child {
      margin-bottom: 30px;
    }
    .about-left__card--image {
      width: 70px;
      margin-right: 30px;
    }

    .about-left__card-content-box_header {
      font-size: 20px !important; //20
      line-height: 29px;
      font-weight: 700;
      margin-top: 0px !important ;

      /* letter-spacing: -0.005em; */
      margin-bottom: 4px;
      font-family: "sf-pro-display-semi", sans-serif;
    }

    .about-left__card-content-box_description {
      font-size: 16px; //16
      line-height: 32px;
      font-family: "sf-pro-text", sans-serif;
      margin: 0;
      color: var(--color-description);
    }

    .about-right__intro-video {
      display: inline-block;
      margin-left: 100px;
      width: 185px;
      text-decoration: none;
      color: white;
      margin-top: 30px;
    }

    .about-right__intro-video__content {
      align-items: center;
      display: flex;
      background-color: var(--color-primary);
      justify-content: space-between;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-transform: uppercase;
      font-size: 1rem;
      /* letter-spacing: 3px; */
      padding: 0.7rem 1.4rem;
      border-radius: 5px;
    }

    .about-right {
    }

    .about-right__image {
      width: 540px;
    }

    .about-right__image-container {
      position: relative;
    }

    .wifi-gif-1 {
      position: absolute;
      left: 230px;
      top: 20px;
      width: 5rem;
    }

    .wifi-gif-2 {
      position: absolute;
      left: 260px;
      top: 320px;
      width: 4rem;
    }

    .location-gif-1 {
      position: absolute;
      left: 310px;
      top: 108px;
      width: 5rem;
    }

    .location-gif-2 {
      position: absolute;
      left: 400px;
      top: 209px;
      width: 3rem;
    }

    .location-gif-3 {
      position: absolute;
      left: 163px;
      top: 209px;
      width: 3rem;
    }

    .location-gif-4 {
      position: absolute;
      top: 299px;
      left: 107px;
      width: 5rem;
    }

    .location-gif-5 {
      position: absolute;
      top: 400px;
      left: 160px;
      width: 3rem;
    }

    .about-area-box {
      margin: 3rem auto;
      display: flex;
      max-width: 1400px;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    @media (min-width: 1400px) {
      .about-area-box {
        max-width: 1400px !important;
      }
    }

    @media (min-width: 1200px) {
      .about-area-box {
        max-width: 1140px;
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
    }

    @media (max-width: 992px) {
      .about-left__header {
        font-size: 27px !important ;
      }

      .about-area-box {
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }

    @media (min-width: 576px) {
      .about-area-box {
        padding-left: 5rem !important;
        padding-right: 5rem !important;
      }
      .about-left__header {
        line-height: 29px;
      }
      .about-left__card-content-box_description {
        /* font-size: 19px !important; */
        line-height: 20px;
      }
    }

    @media (max-width: 576px) {
      .about-area-box {
        max-width: auto;
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    @media (max-width: 1400px) {
      .about-right__image {
        width: 480px;
      }
      .wifi-gif-1 {
        top: 2px;
        left: 200px;
      }
      .wifi-gif-2 {
        left: 250px;
        top: 280px;
      }

      .location-gif-1 {
        left: 280px;
        top: 90px;
      }
      .location-gif-2 {
        left: 360px;
        top: 195px;
      }
      .location-gif-3 {
        left: 160px;
        top: 200px;
      }
      .location-gif-4 {
        top: 270px;
        left: 90px;
      }
      .location-gif-5 {
        left: 150px;
        top: 380px;
      }
    }
    @media (max-width: 1200px) {
      .about-right__image {
        width: 400px;
      }

      .wifi-gif-1 {
        top: 2px;
        width: 4rem;
        left: 180px;
      }
      .wifi-gif-2 {
        left: 200px;
        width: 3rem;
        top: 240px;
      }

      .location-gif-1 {
        left: 230px;
        width: 4rem;
        top: 80px;
      }
      .location-gif-2 {
        left: 300px;
        width: 2.5rem;
        top: 160px;
      }
      .location-gif-3 {
        left: 150px;
        width: 2.5rem;
        top: 180px;
      }
      .location-gif-4 {
        top: 230px;
        left: 85px;
        width: 4rem;
      }
      .location-gif-5 {
        left: 120px;
        top: 310px;
        width: 2.5rem;
      }
    }

    @media (max-width: 992px) {
      /* .about-area-box {
                padding: 3rem;
                display: block;
            } */

      .about-left {
        margin: auto;
        width: 100%;
        align-items: center;
      }

      .about-left__header {
        text-align: center;
        margin: 0 auto;
      }

      .about-left__description {
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
      }

      .about-left__card {
        width: 80%;
        margin: auto;
        justify-content: center;
      }

      .about-right__intro-video {
        margin: auto;
        margin-top: 30px;
        text-align: center;
      }

      .about-card-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .about-right {
        display: none;
      }
    }

    @media (min-width: 850px) {
    }

    @media (max-width: 850px) {
    }

    @media (max-width: 768px) {
      .about-left__card {
        flex-direction: column;
        align-items: center;
      }

      .about-left__card:first-child {
        margin-top: 40px;
      }
      .about-left__card-content-box_header {
        text-align: center;
        /* font-size: 18px; */
      }

      .about-left__card-content-box_description {
        text-align: center;
        /* font-size: 15px; */
      }

      .about-left__card--image {
        margin: 0;
      }

      .about-left__header {
        /* font-size: 30px; */
      }

      .about-left__description {
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        /* font-size: 14px; */
      }
      .about {
        margin: 3rem 0;
      }
    }

    @media (max-width: 576px) {
      .about-left__description {
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
      }

      .about-area-box {
        height: auto;
      }
      .about {
        display: block;
      }
    }
  `;
}

window.customElements.define("app-home-about", About);
