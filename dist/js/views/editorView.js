import View from "./view.js";

class editorView extends View {
  _parent = document.querySelector("#editor");
  _mainEditor = this._parent?.querySelector(".main-editor");
  _code = this._mainEditor?.querySelector("#code");
  _css = this._mainEditor?.querySelector("#css");
  _cross = this._parent?.querySelector(".cross");
  _newCSS;
  toggleEditor = function () {
    this._parent.classList.toggle("hide");
  };
  crossHandler = function (handler) {
    this._cross?.addEventListener("click", function (e) {
      handler();
    });
  };

  // CODE OF THE TEMPLATES
  // Inside of the arrays first one is html and the second one is css
  _codes = [
    // First ONe
    [
      `
      <section id="custom__1" class="grid__1">
              <div class="full__img">
                <img src="./Extra/pro1/first.jfif" alt="" />
              </div>
              <div class="grid__content">
                <h1>
                  <span class="one">NEW</span>
                  <span class="two">COLLECTION</span>
                  <span class="three">PRE-FALL</span>
                  <span class="four">/WINTER 2023</span>
                </h1>
                <div class="content">
                  <a href="#" class="btn btn__light">Shop women</a>
                  <a href="#" class="btn btn__dark">shop men</a>
                </div>
                <a href="#" class="arrow"
                  ><svg
                    width="36"
                    height="38"
                    viewBox="0 0 36 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.105 23.645L18 32.75L8.895 23.645"
                      stroke="#292D32"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 1V32.495"
                      stroke="#292D32"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div class="quater__img">
                <img src="./Extra/pro1/second.jfif" alt="" />
              </div>
            </section>

            <section id="custom__2" class="grid__2"
              ><img src="./Extra/pro1/ny.png" alt="" />
              <img src="./Extra/pro1/ny.png" alt="" />
              <img src="./Extra/pro1/ny.png" alt="" />
              <img src="./Extra/pro1/ny.png" alt="" />
              <img src="./Extra/pro1/ny.png" alt="" />
              <img src="./Extra/pro1/ny.png" alt="" />
            </section>

            <section id="custom__3" class="grid__3">
              <div class="container">
                <div class="grid">
                  <div class="left">
                    <div class="image image_1">
                      <img src="./Extra/pro1/third.jfif" alt="" />
                      <h3 class="top">TOP</h3>
                    </div>
                  </div>
                  <div class="middle">
                    <h2>Be your best</h2>
                  </div>

                  <div class="right">
                    <div class="image image_2">
                      <img src="./Extra/pro1/four.jfif" alt="" />
                      <h3 class="bottom">Bottom</h3>
                    </div>
                    <div class="image image_3">
                      <img src="./Extra/pro1/four.jfif" alt="" />
                      <h3 class="swim">Swim</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="custom__4" class="section__4">
              <!-- SLIDER CONTAINER -->
              <div class="custom__container">
                <!-- SLIDER HEADING -->
                <h2 class="slider__heading">New Arrivals</h2>
                <!-- SLIDER BTNS -->
                <div class="slider__btns">
                  <button class="btn-slider btn-left"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.5 12H3.66998"
                        stroke="black"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button class="btn-slider btn-right"
                    ><svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0563 11.1187L38.4375 22.4999L27.0563 33.8811"
                        stroke="black"
                        stroke-width="1.85"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.02271 22.5L37.8409 22.5"
                        stroke="black"
                        stroke-width="1.85"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <!-- SLIDER  -->
                <div class="slider">
                  <div class="slide"
                    ><img src="./Extra/pro1/five.jfif" alt=""
                  /></div>
                  <div class="slide selected"
                    ><img src="./Extra/pro1/five.jfif" alt=""
                  /></div>
                  <div class="slide"
                    ><img src="./Extra/pro1/five.jfif" alt=""
                  /></div>
                  <div class="slide"
                    ><img src="./Extra/pro1/five.jfif" alt=""
                  /></div>
                  <div class="slide"
                    ><img src="./Extra/pro1/five.jfif" alt=""
                  /></div>
                  <div class="slide"
                    ><img src="./Extra/pro1/five.jfif" alt=""
                  /></div>
                </div>
              </div>
            </section>

            <section id="custom__5" class="section__5">
              <div class="container">
                <div class="box">
                  <p class="lead">HEZEKIAH</p>
                  <h3 id="look">
                    <svg
                      width="141"
                      height="92"
                      viewBox="0 0 141 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7949 90.8271C14.7949 87.8271 225.795 -15.6729 99.7949 3.32709C-26.2051 22.3271 -23.7051 70.827 62.2949 90.8271"
                        stroke="#B0CBE8"
                        stroke-linecap="round"
                      />
                    </svg>

                    <span class="look">Look</span>
                    <span class="book">Book</span>
                  </h3>
                  <a href="#" class="btn">Shop the look</a>
                </div>

                <div class="touch_slider">
                  <div class="touch__slide"
                    ><img src="./Extra/pro1/six.jfif" alt=""
                  /></div>
                  <div class="touch__slide"
                    ><img src="./Extra/pro1/six.jfif" alt=""
                  /></div>
                  <div class="touch__slide"
                    ><img src="./Extra/pro1/six.jfif" alt=""
                  /></div>
                  <div class="touch__slide"
                    ><img src="./Extra/pro1/six.jfif" alt=""
                  /></div>
                  <div class="touch__slide"
                    ><img src="./Extra/pro1/six.jfif" alt=""
                  /></div>
                  <div class="touch__slide"
                    ><img src="./Extra/pro1/six.jfif" alt=""
                  /></div>
                </div>
              </div>
            </section>

            <section id="custom__6" class="section__6">
              <div class="container">
                <div class="contain">
                  <img src="./Extra/pro1/six.jfif" alt="" />
                  <h3>Discover</h3>
                </div>
                <div class="contain">
                  <img src="./Extra/pro1/six.jfif" alt="" />
                  <h3>Discover</h3>
                </div>
              </div>
            </section>

            <section id="custom__7" class="section__7">
              <div class="heading">
                <h2>About The Brand</h2>
                <svg
                  width="196"
                  height="57"
                  viewBox="0 0 196 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.50003 56.5C12 56.5 345.5 -4.40638 112 1.59362C-121.5 7.59362 85 47 90.5 47"
                    stroke="#B0CBE8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="container">
                <div class="container__left">
                  <div class="top_1"
                    ><h3>EXPERIENCE A HIGHER FORM OF STREET WEAR</h3>
                    <p class="lead"
                      >Oceans Gallery is a luxury fashion brand that creates
                      organic pieces of streetwear designed to inspire, empower,
                      and express. At the core of our work is the belief that
                      fashion offers each of us the unique opportunity to
                      express ourselves fully without ever saying a word.</p
                    ></div
                  >
                  <div class="bottom_1">
                    <img src="./Extra/pro1/eight.jfif" alt="" />
                    <div class="cuntent">
                      <h3>Social</h3>
                      <p class="lead">
                        At Oceans Gallery, our team aims to push fashion further
                        than its perceived boundaries. So while we do offer
                        T-shirts that are high quality and pleasing to the eye,
                        we also have worked to make sure our T- shirts are at
                        the cutting edge of fashion by establishing.</p
                      >
                    </div>
                  </div>
                </div>
                <div class="container__right">
                  <div class="top_1">
                    <img src="./Extra/pro1/seven.jfif" alt="" />
                  </div>
                  <div class="bottom_1">
                    <div class="cuntent__1">
                      <h3
                        >STYLE IS MORE THAN THE CLOTHES WE WEAR. IT IS AN
                        INTIMATE EXPRESSION OF WHO WE ARE</h3
                      >
                      <p class="lead"
                        >Oceans Gallery is a luxury fashion brand that creates
                        organic pieces of streetwear designed to inspire,
                        empower, and express. At the core of our work is the
                        belief that fashion offers each of us the unique
                        opportunity to express ourselves fully without ever
                        saying a word.</p
                      ></div
                    >
                    <img src="./Extra/pro1/nine.jfif" alt="" />
                  </div>
                </div>
              </div>
            </section>
     `,
      `
      * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    :root {
      --max-width: 1100px;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
    }
    .btn {
      padding: 14px 22px;
      font-size: 15px;
      text-decoration: none;
      text-transform: capitalize;
    }
    .btn__light {
      border: 1px solid #000;
      color: #222;
    }
    .btn__dark {
      background-color: #000;
      color: #f4f4f4;
    }
    #custom__1 {
      display: grid;
      grid-template-columns: 1fr 1.2fr 1fr;
      padding: 40px;
      position: relative;
    }
    #custom__1 .grid__content {
      background-color: #f4f4f4;
      padding: 40px 40px 100px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
    #custom__1 .grid__content .content {
      display: flex;
      gap: 20px;
    }
    .grid__content h1 {
      font-size: 38px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      color:#222;
    }
    h1 span {
      position: relative;
      color: inherit;
    }
    h1 .one {
      left: 20%;
    }
    h1 .three {
      left: 30%;
    }
    .grid__content .arrow {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -40%);
      border: 1px solid #222;
      border-radius: 50%;
      height: 45px;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
    .full__img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 10%;
    }
    .quater__img img {
      width: 100%;
      height: 85%;
      object-fit: cover;
      object-position: 55%;
    }
    
    #custom__2 {
      max-width: var(--max-width);
      display: grid;
      margin: auto;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      padding: 70px 0;
      align-items: center;
      justify-items: center;
    }
    #custom__2 img {
      width: 60%;
      height: 100%;
    }
    .container {
      max-width: var(--max-width);
      display: block;
      margin: auto;
    }
    #custom__3 .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      position: relative;
    }
    .grid .middle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #000;
      color: #f4f4f4;
      padding: 20px;
      height: 160px;
      width: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 50%;
      border: 7px solid #f4f4f4;
      z-index: 1;
    }
    .grid .middle h2 {
      line-height: 1.3;
    }
    .grid .right {
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
    .grid .left {
      height: 100%;
    }
    .grid .left .image,
    .grid .left img {
      height: 100%;
    }
    .grid .right .image {
      height: 250px;
      object-fit: cover;
      width: 100%;
    }
    .right img {
      height: 100%;
      width: 100%;
    
      object-fit: cover;
      object-position: bottom;
    }
    
    #custom__3 img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .image {
      position: relative;
    }
    .top,
    .bottom,
    .swim {
      text-transform: uppercase;
      position: absolute;
      padding: 10px 20px;
      background: #eae5cb;
      font-size: 12px;
      font-weight: 200;
      color: #222;
    }
    
    .top {
      top: 5%;
      left: 5%;
    }
    .bottom {
      top: 10%;
      right: 5%;
    }
    .swim {
      bottom: 10%;
      right: 5%;
    }
    /* SECTION 4*/
    #custom__4 {
      position: relative;
      max-width: var(--max-width);
      margin: auto;
      padding: 100px 0;
    }
    
    .slider__heading {
      position: absolute;
      top: 30%;
      left: 10%;
      text-shadow: -35px -12px #eae5cb;
    }
    .slider__heading:after {
      position: absolute;
      content: '';
      text-shadow: 2px 2px red;
    }
    .slider__btns {
      position: absolute;
      top: 27.5%;
      right: 9%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    .btn-slider {
      background-color: transparent;
      border: none;
      z-index: 2;
      cursor: pointer;
    }
    .btn-right {
      position: relative;
      top: 0;
      left: 0;
    }
    .btn-right:after {
      position: absolute;
      top: 0;
      left: 20%;
      content: '';
      height: 100%;
      width: 100%;
      background-color: #b0cbe8;
      z-index: -1;
    }
    
    .slider {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      width: 100%;
      height: 100%;
      gap: 25px;
      overflow: hidden;
    }
    .slide {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 342px;
      transition: all 0.5s ease-in-out;
    }
    .selected {
      transition: 0.25s !important;
    }
    .selected img {
      height: 350px !important;
      width: 100% !important;
    }
    .selected + .slide {
      align-items: flex-end;
      justify-content: flex-start;
    }
    .slider img {
      transition: all 0.3s ease-in-out;
      height: 200px;
      width: 80%;
      object-fit: cover;
      object-position: right;
      /* transform: translate(-100%); */
    }
    .custom__container {
      height: 350px;
    }
    #custom__6 .container {
      display: flex;
      gap: 20px;
    }
    .container .contain {
      width: 49%;
      text-align: center;
    }
    .contain h3 {
      padding: 30px 0 10px 0;
      border-bottom: 2px solid #b0cbe8;
      width: fit-content;
      display: block;
      margin: auto;
      margin-bottom: 50px;
      text-align: center;
    }
    #custom__6 .container img {
      width: 100%;
    }
    #custom__7 {
      position: relative;
    }
    #custom__7 svg {
      position: absolute;
      top: 0;
      left: 50%;
      z-index: -1;
      transform: translate(-100%);
      /* height: 30px/; */
    }
    #custom__7 h2 {
      text-align: center;
      position: relative;
    }
    
    #custom__7 img {
      width: 100%;
      height: 100%;
    }
    #custom__7 .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 40px 0;
      margin: 30px auto;
      gap: 0px;
    }
    #custom__7 .container__left {
      display: flex;
      flex-direction: column;
      gap: 70px;
    }
    #custom__7 .container__left .top_1,
    .bottom_1 .cuntent {
      padding: 0px 50px 50px 50px;
      position: relative;
    }
    #custom__7 .container__left .top_1:after,
    .bottom_1 .cuntent:after,
    .cuntent__1:after {
      position: absolute;
      top: -10%;
      left: 30%;
      height: 100%;
      width: 100%;
      content: '';
      background: #f9f9f9;
      /* background-color: red; */
      z-index: -1;
    }
    .bottom_1 .cuntent:after,
    .cuntent__1:after {
      top: -50%;
      left: -0%;
      height: 100%;
      width: 50%;
    }
    
    .cuntent__1:after {
      top: 10%;
      width: 60%;
      left: -5%;
      /* height: 300px; */
      height: 100%;
    }
    #custom__7 .container__left .top_1 h3,
    .cuntent h3,
    .cuntent__1 h3 {
      line-height: 37px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .cuntent h3 {
      margin-top: 25px;
      /* margin */
    }
    #custom__7 .lead {
      line-height: 1.6;
      color: #363636;
    }
    section .lead {
      font-size: 15px;
    }
    .container__left img {
      height: 500px !important;
      width: 80% !important;
      object-fit: cover;
      object-position: top;
      display: block;
      margin: auto;
    }
    
    #custom__7 .container__right img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      object-position: top;
    }
    
    .cuntent__1 {
      padding: 70px 30px 20px 70px;
      display: flex;
      flex-direction: column;
      /* gap: 30px; */
      position: relative;
    }
    .cuntent__1 ~ img {
      width: 80% !important;
      height: 300px !important;
      object-fit: cover !important;
      object-position: top !important;
      padding-top: 10px;
      display: block;
      margin-left: auto;
    }
    #custom__5 {
      margin: 30px 0;
    }
    #custom__5 .box {
      /* padding: 50px 60px; */
      height: 270px;
      width: 570px;
      background-color: #000;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;
      gap: 10px;
      margin-left: 60px;
      position: relative;
      z-index: 2;
    }
    .box .lead {
      color: #eae5cb;
      font-size: 12px;
      /* margin-left: 50px; */
    }
    #look {
      position: relative;
      display: flex;
      flex-direction: column;
    }
    section h3{
      font-size: 20px;
    }
    .book {
      position: relative;
      left: 35%;
      width: fit-content;
    }
    #look svg {
      position: absolute;
      height: 60px;
      left: -10%;
    }
    .box .btn {
      background-color: #b0cbe8;
      color: #000;
      width: fit-content;
      margin-top: 30px;
      word-spacing: 1px;
      text-transform: uppercase;
      font-size: 11px;
    }
    #custom__5 .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .touch_slider {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      overflow: hidden;
      position: relative;
      gap: 20px;
      left: -5%;
      cursor: grab;
      overflow: scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }
    .touch_slider::-webkit-scrollbar {
      display: none;
    }
    .touch__slide {
      scroll-snap-align: start;
    }
    .touch_slider img {
      width: 350px;
      height: 400px;
      object-fit: cover;
    }
    section h2{
      font-size:22px
    }
    `,
    ],
    // Second one
    [
      `
    <main>
              <div class="container">
                <div class="model">
                  <h1>Model</h1>
                  <div class="line"></div>
                  <h1>Quantum Series X</h1>
                </div>
                <div class="speed">
                  <h3>Top Speed</h3>
                  <div class="line"></div>
                  <h3 id="speed"><span data-speed="370">370</span>+MPH</h3>
                </div>
                <div class="price">
                  <h3>Price</h3>
                  <div class="line"></div>
                  <h3>1.2M</h3>
                </div>
                <div class="desc">
                  <h3>Description</h3>
                  <p class="main-para"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi minus fugiat labore deserunt illo, debitis sequi
                    tenetur voluptatum recusandae. Ullam quae soluta ipsa
                    mollitia molestiae, vero nihil tempora repellat dolorum
                    ratione facere delectus repellendus dolorem. Quis
                    praesentium corrupti quos iusto.</p
                  >
                </div>
              </div>
            </main>
    `,
      `
    @import url('https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap');

    /* Utilities */
    :root {
      --font: 'Hanalei Fill', cursive;
      --main-color: #fb2312;
    }
    body {
      font-family: var(--font);
      background-color: #fbfbfb;
    }
    .model .line,
    .speed .line,
    .price .line,
    .desc .line {
      width: 2px;
      height: 60px;
      background-color: var(--main-color);
    }
    h1 {
      font-size: 86px;
      color: var(--main-color);
    }
    .speed h3,
    .price h3,
    .desc h3 {
      font-size: 52px;
      color: var(--main-color);
    }
    h1::selection,
    h3::selection,
    span::selection {
      color: #8925fe;
      background-color: #111;
    }
    main {
      position: relative;
      height: 100vh;
      width: 100%;
      background-size: 65vw;
      background-position: 100% 550%;
      overflow: hidden;
    }
    main::after {
      position: absolute;
      content: '';
      bottom: -20%;
      right: 0;
      height: 80vh;
      width: 60vw;
      z-index: -1;
      background: url('./Extra/project.png') no-repeat center
        center/cover;
    }

    /* CSS */
    main {
      position: relative;
    }
    main::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 100%;
      background: url('./Extra/file.svg');
      z-index: -1;
      opacity: 0.09;
    }
    main .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 40px;
      max-width: 1152px;
      margin: auto;
    }
    main .container div {
      display: grid;
      gap: 20px;
      grid-template-columns: 285px 3px 2fr;
      align-items: center;
    }
    main .container div:nth-child(1) {
      margin-bottom: 40px;
    }
    main .container div:nth-last-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 32vw;
      position: relative;
      z-index: 2;
    }
    main .container div:nth-last-child(1) .main-para {
      color: transparent;
      background-image: linear-gradient(
        45deg,
        #122e62,
        var(--main-color)
      );
      background-clip: text;
      -webkit-background-clip: text;
      font-size: 14px;
      line-height: 1.7;
    }
    main .container div:nth-last-child(1) p::selection {
      color: #8925fe;
      background-color: #222;
    }
    `,
    ],
    // Third One
    [
      `
      <nav class="py-1">
        <div class="container">
            <div class="logo">
                <h4>Logo</h4>
            </div>
            <div class="links">
                <li class="link"><a href="main.html">Home</a></li>
                <li class="link"><a href="package.html">Package</a></li>
            </div>
        </div>
    </nav>
    <!-- HEADER -->
    <section id="header">
        <div class="container">
            <div class="left">
                <div class="content">
                    <h1>
                        All-In-One Business Software Solution To Dominate Local Businesses
                    </h1>
                    <p class="main-para">

                        Looking for a business software platform that can help you manage your digital strategy and grow
                        your business?

                        VirtualClouds offers a Business Software platform that is designed to help local businesses
                        manage
                        their digital strategy and grow their customer base. With our easy-to-use tools, you can book
                        appointments, market your products, and report on your success – all from one central location.
                    </p>
                    <a href="#" class="btn-dark">
                        Get Your Free Strategy Session
                    </a>
                </div>
            </div>
            <div class="right">
                <img src="./Extra/pro-3/strategy1.jpg" alt="">
            </div>
        </div>
    </section>
    <!-- WHAT WE DO -->
    <section id="work" class="py-2">
        <div class="container">
            <h2 class="text-align">What We Do</h2>
            <p class="lead text-align">Here are some of the services that we provide</p>

            <div class="grid">
                <div class="work">
                    <img src="./Extra/pro-3/work-1.jpg" alt="" class="work-img">

                    <h3>Seo (Search Engine Optimization)</h3>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione autem tempora minima sapiente
                        velit repellendus. Laudantium molestias voluptates perspiciatis iste, quod soluta quaerat minus
                        quasi repellendus sit cum qui necessitatibus.</p>

                    <a href="#" class="btn-light">Learn More</a>
                </div>
                <div class="work">
                    <img src="./Extra/pro-3/work-2.jpg" alt="" class="work-img">
                    <h3>SMM (Social Media Marketing)</h3>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione autem tempora minima sapiente
                        velit repellendus. Laudantium molestias voluptates perspiciatis iste, quod soluta quaerat minus
                        quasi repellendus sit cum qui necessitatibus.</p>

                    <a href="#" class="btn-light">Learn More</a>
                </div>
                <div class="work">
                    <img src="./Extra/pro-3/work-3.jpg" alt="" class="work-img">
                    <h3>Web Design & Development</h3>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione autem tempora minima sapiente
                        velit repellendus. Laudantium molestias voluptates perspiciatis iste, quod soluta quaerat minus
                        quasi repellendus sit cum qui necessitatibus.</p>

                    <a href="#" class="btn-light">Learn More</a>
                </div>
                <div class="work">
                    <img src="./Extra/pro-3/work-4.jpg" alt="" class="work-img">
                    <h3>PPC (Pay Per Click)</h3>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione autem tempora minima sapiente
                        velit repellendus. Laudantium molestias voluptates perspiciatis iste, quod soluta quaerat minus
                        quasi repellendus sit cum qui necessitatibus.</p>

                    <a href="#" class="btn-light">Learn More</a>
                </div>
                <div class="work">
                    <img src="./Extra/pro-3/work-5.jpg" alt="" class="work-img">
                    <h3>Lead Generation</h3>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione autem tempora minima sapiente
                        velit repellendus. Laudantium molestias voluptates perspiciatis iste, quod soluta quaerat minus
                        quasi repellendus sit cum qui necessitatibus.</p>

                    <a href="#" class="btn-light">Learn More</a>
                </div>
                <div class="work">
                    <img src="./Extra/pro-3/work-6.jpg" alt="" class="work-img">
                    <h3>Content Writing</h3>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione autem tempora minima sapiente
                        velit repellendus. Laudantium molestias voluptates perspiciatis iste, quod soluta quaerat minus
                        quasi repellendus sit cum qui necessitatibus.</p>

                    <a href="#" class="btn-light">Learn More</a>
                </div>

            </div>
        </div>
    </section>
    <!-- LATEST BLOGS -->
    <section id="blogs" class="py-2">
        <div class="container">
            <h2 class="text-align">Latest Blog Posts</h2>
            <p class="lead text-align">Here are some of the latest blogs</p>

            <div class="grid">
                <div class="blog">

                    <img src="./Extra/pro-3/work-1.jpg" alt="" class="img-blog">

                    <h3 class="text-align">Blog Title</h3>

                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio minus
                        accusantium placeat id quas officia est saepe quibusdam omnis.</p>

                    <a href="#" class="read-more">Read More</a>
                </div>
                <div class="blog">

                    <img src="./Extra/pro-3/work-6.jpg" alt="" class="img-blog">

                    <h3 class="text-align">Blog Title</h3>

                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio minus
                        accusantium placeat id quas officia est saepe quibusdam omnis.</p>

                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- CALL TO ACTION -->
    <section id="action" class="py-2">
        <div class="container text-align">
            <h2>Call To Action</h2>
            <p class="lead">Contact Us to get your reservation booked <br>
                Click Below To Book You Reservation</p>

            <a href="#" class="btn-light">Book Your Free Consulation</a>
        </div>
    </section>
    <!-- NEWS LATER -->
    <section id="news" class="py-2">
        <div class="container text-align">
            <h2>Sign Up To Our Newletter</h2>
            <p class="lead text-align">You can contact us below <br>
                By Signing Up to oure newletter
            </p>
            <div class="flex">
                <input type="email" name="" id="" placeholder=" email@domain.com">
                <button class="btn-dark">Sign Up</button>
            </div>
        </div>
    </section>
    <!-- FOOTER -->
    <footer class="py-2">
        <div class="container">
            <div class="grid">
                <div class="address">
                    <h3>LOGO</h3>

                    <p class="lead">
                        Address: 123 USA <br> Atlanta,GA 4567
                    </p>

                    <p class="lead telephone">
                        Telephone : 000-0000-000
                        <br>
                        Email:support@domin.com
                    </p>
                </div>

                <div class="services">
                    <h3>Services</h3>
                    <p class="lead">
                        Seo(Search Engine Optimization)
                        <br>
                        SMM(Social Media Marketing)
                        <br>
                        PPC(Pay Per Click)
                        <br>
                        Web Design & Development
                        <br>
                        Lead Generation
                        <br>
                        Content Marketing
                    </p>
                </div>
                <div class="quick-links">
                    <h3>Quick Links</h3>

                    <li>
                        <a href="#">Home</a>
                        <a href="#">Marketing</a>
                    </li>
                </div>

                <div class="socials">
                    <h3>Connect With Us</h3>

                    <div class="social">
                        <a href=""><i class="fab fa-facebook"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-reddit"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      `,
      `
      * {
  padding: 0;
  margin: 0;
  box-sizing: border-box; }
  #work p,
  #action p{
    color:#f4f4f4;
  }
html {
  font-size: 1em; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }

a {
  font-family: "Poppins", sans-serif; }

p {
  font-family: "Roboto", sans-serif;
 }

ul,
li {
  list-style: none; }

a {
  text-decoration: none; }

.lead {
  font-family: "Roboto", sans-serif;
  line-height: 1.7;
  margin: 2rem 0px; }

.container {
  display: block;
  max-width: 1080px;
  margin: 0 auto; }

.text-align {
  text-align: center; }

.py-1 {
  padding: 1rem; }

.py-2 {
  padding: 2rem; }

.py-3 {
  padding: 2.5rem; }

.my-1 {
  margin: 1rem; }

.my-2 {
  margin: 2rem; }

.btn-dark, .btn-light {
  padding: 1rem 1.5rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border-radius: 30px; }

.btn-dark {
  background-color: #222;
  color: #f4f4f4; }
  .btn-dark:hover {
    background-color: #111; }

.btn-light {
  background-color: #f4f4f4;
  color: #222; }
  .btn-light:hover {
    background-color: #fff; }

nav {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #222;
  color: #fff;
  z-index: 10; }
  nav .container {
    display: flex;
    align-items: center;
    justify-content: space-between; }
    nav .container .links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      width: 50%; }
      nav .container .links li a {
        color: #f4f4f4;
        transition: all 0.5s ease-in-out;
        padding: 10px;
        position: relative; }
        nav .container .links li a:before {
          position: absolute;
          content: '';
          top: 100%;
          left: 0;
          height: 1px;
          width: 0%;
          background-color: #fff;
          transition: all 0.4s ease; }
        nav .container .links li a:hover {
          color: #fff; }
          nav .container .links li a:hover:before {
            width: 100%; }

#header {
  position: relative;
  top: 0;
  left: 0;
  height: 91.2vh;
  width: 100%;
  padding: 1rem 0px 0px 0px; }
  #header .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 40px; }
    #header .container .left {
      width: 70vw;
      height: 100%; }
      #header .container .left .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%; }
        #header .container .left .content h1 {
          width: 100%;
          line-height: 1.1;
          font-size: 2rem;
          margin-bottom: 1rem; }
        #header .container .left .content .main-para {
          font-size:16px;
          width: 89%; }
        #header .container .left .content .btn-dark {
          margin-top: 15px;
          width: fit-content;
          border-radius: 30px; }
          #header .container .left .content .btn-dark:hover {
            border-radius: 0px; }
    #header .container .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; }
      #header .container .right img {
        display: block;
        margin: auto;
        width: 100%;
        height: 100%; }

#work {
  color: #f4f4f4;
  background-color: #222; }
  #work .container .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px; }
    #work .container .grid .work {
      width: 100%;
      height: 100%;
      margin: 20px 0px;
      padding: 0px 20px; }
      #work .container .grid .work .work-img {
        width: 300px;
        height: 250px;
        display: block;
        margin: 0px auto 30px auto;
        border-radius: 5px 100px 5px 100px; }
      #work .container .grid .work h3 {
        text-align: center;
        margin-bottom: 30px; }
      #work .container .grid .work .lead {
        margin-bottom: 30px;
        line-height: 1.5; }
      #work .container .grid .work .btn-light {
        width: fit-content;
        display: block;
        margin: 0 auto; }
        #work .container .grid .work .btn-light:hover {
          border-radius: 0; }

#blogs .container .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 10px; }
  #blogs .container .grid .blog {
    display: block;
    margin: auto; }
    #blogs .container .grid .blog .read-more {
      text-decoration: wavy;
      text-decoration-color: red;
      text-decoration: underline solid #222 2px;
      color: #000;
      transition: all 0.2s ease-in-out; }
      #blogs .container .grid .blog .read-more:hover {
        text-decoration-color: transparent; }
  #blogs .container .grid .lead {
    width: 350px;}
  #blogs .container .grid .img-blog {
    width: 350px;
    height: 250px;
    display: block;
    margin: 20px auto; }

#action {
  background-color: #222;
  color: #fff; }
  #action .container h2 {
    font-size: 2rem;
    margin-bottom: 40px; }
  #action .container .lead {
    margin-bottom: 50px;
  font-size:16px }
  #action .container .btn-light:hover {
    border-radius: 0; }

#news .container h2 {
  font-size: 1.7rem; }
#news .container .lead {
  font-family: "Poppins", sans-serif;}
#news .container .flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; }
#news .container input {
  padding: 0.8rem; }
#news .container .btn-dark {
  width: 120px;
  border: none; }
  #news .container .btn-dark:hover {
    background-color: #666; }

footer {
  background-color: #222;
  color: #fff;
  gap: 20px; }
  footer .container .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); }
    footer .container .grid h2 {
      font-size: 2rem; }
    footer .container .grid h3 {
      font-size: 1.2rem; }
    footer .container .grid .quick-links {
      text-align: center; }
      footer .container .grid .quick-links h3 {
        margin-bottom: 31px; }
      footer .container .grid .quick-links li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; }
        footer .container .grid .quick-links li a {
          color: #f4f4f4;
          text-decoration: underline 1px solid #fff;
          margin: 5px 0px;
          transition: all 0.2s; }
          footer .container .grid .quick-links li a:hover {
            color: #fff;
            text-decoration: transparent; }
    footer .container .grid .socials {
      text-align: center; }
      footer .container .grid .socials h3 {
        margin-bottom: 36px; }
      footer .container .grid .socials i {
        color: #fff;
        margin: 0px 10px;
        font-size: 1.2rem;
        transition: all 0.3s ease-in-out; }
        footer .container .grid .socials i:hover {
          color: #777; }
section h2{
  font-size:2rem;
}
section h3{
  font-size:18px;
}
section .lead{
  font-size:16px;
}
#package {
  margin: 40px 0px; }
  #package .container {
    width: 100%; }
    #package .container .mob-pack {
      display: none; }
    #package .container .text-align {
      margin-bottom: 60px; }
    #package .container table,
    #package .container th,
    #package .container td {
      border: 1px solid #222;
      border-collapse: collapse; }
    #package .container th,
    #package .container td {
      padding: 20px; }
    #package .container table {
      width: 100%; }
      #package .container table td {
        text-align: center;
        font-size: 18px; }
      #package .container table .tick,
      #package .container table .cross {
        color: green;
        font-size: 20px;
        font-style: bold; }
      #package .container table .cross {
        color: red; }
      #package .container table th span {
        color: #222;
        position: relative;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }
      #package .container table th .value {
        font-size: 30px;
        color: #000; }
      #package .container table th .right {
        bottom: 10px;
        left: 34%; }

@media (max-width: 1150px) {
  #header {
    margin: 170px 0px; }
    #header .container {
      flex-direction: column; }
      #header .container .left .content h2 {
        width: 600px; }
      #header .container .right img {
        width: 90%;
        height: 100%; }

  #work .container .grid {
    grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 375px) {
  #header {
    margin-bottom: 400px; }
    #header .container {
      height: 150%; }
      #header .container .btn-dark {
        font-size: 14px; } }
@media (max-width: 820px) {
  #header {
    margin-bottom: 40px; }
    #header .container {
      flex-direction: column;
      gap: 20px; }
      #header .container .left .content h2 {
        width: 350px; }

  #work .container .grid {
    grid-template-columns: repeat(2, 1fr); }

  footer .container {
    text-align: center; }
    footer .container .grid {
      gap: 40px;
      grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) {
  #header {
    margin: 150px 0px; }
    #header .container {
      flex-direction: column;
      height: 100%; }
      #header .container .left .content h2 {
        width: 300px; }

  #work {
    padding: 1rem; }
    #work .container .grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px; }

  #blogs .container .grid {
    grid-template-columns: repeat(1, 1fr); }

  #news .container .flex {
    flex-direction: column;
    gap: 10px; }

  footer .container {
    text-align: center; }
    footer .container .grid {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      justify-content: center; }

  #package .container table {
    display: none; }
  #package .container .mob-pack {
    display: block; }
    #package .container .mob-pack .plan .head {
      background-color: #222;
      color: #fff;
      padding: 2rem 0px; }
    #package .container .mob-pack .plan .content {
      text-align: left;
      margin-bottom: 20px; }
      #package .container .mob-pack .plan .content .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%; }
        #package .container .mob-pack .plan .content .flex p {
          width: 200px;
          height: 55px;
          border: 1px solid #222;
          padding: 1rem; }
        #package .container .mob-pack .plan .content .flex p,
        #package .container .mob-pack .plan .content .flex div {
          border-collapse: collapse; }
        #package .container .mob-pack .plan .content .flex div {
          border: 1px solid #222;
          padding: 1rem;
          height: 55px; }
        #package .container .mob-pack .plan .content .flex .tick {
          color: green; }
        #package .container .mob-pack .plan .content .flex .cross {
          color: red; } }

      `,
    ],
    // Fourth One
    [
      `
      <!-- NAVIGATION BAR -->
      <nav>
        <div class="container">
          <h3 class="logo"><a href="index.html">Logo</a></h3>
          <ul>
            <li><a href="index.html" class="selected">Home</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
      </nav>
      <!-- MAIN SECTION -->
      <section class="section" id="main">
        <div class="container">
          <h1 class="tag__line">
            <span class="highlight">Enjoy</span> Your stay.
          </h1>
          <p class="main-para">
            Enjoy your stay at
            <span class="highlight">one of the best and finnest hotel</span> on
            the entire globe.We make you feel like you are at home.
          </p>
          <a href="about.html" class="btn">Learn More</a>
        </div>
      </section>
  
      <!-- SERVICES -->
      <section class="section" id="services">
        <div class="container">
          <h2 class="sub__heading">
            <span class="highlight">Services</span> We offer
          </h2>
          <p class="lead">Here are the list of services that we offer</p>
  
          <div class="services__container">
            <div class="services">
              <img src="./Extra/pro-4/gym.jpg" alt="An image of gym" />
              <h3 class="services__heading">GYM</h3>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                repellat commodi consequatur totam quod in! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div class="services">
              <img src="./Extra/pro-4/pool.jpg" alt="An image of pool" />
              <h3 class="services__heading">POOL</h3>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                repellat commodi consequatur totam quod in! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div class="services">
              <img
                src="./Extra/pro-4/transportation.jpg"
                alt="An image of transportation"
              />
              <h3 class="services__heading">Transportation</h3>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                repellat commodi consequatur totam quod in! Lorem ipsum dolor sit
                amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- FOOTER -->
      <footer>
        <p class="lead">This site is &copy; by <span class="owner">Abdullah</span></p>
      </footer>
      `,
      `
      .container {
        display: block;
        max-width: 1140px;
        margin: 0 auto;
      }
      .btn {
        padding: 1rem 1.5rem;
        background-color: #e8a87c;
        border-radius: 2px;
        color: #333;
        text-decoration: none;
      }
      .btn:hover {
        opacity: 0.9;
        color: #fff;
      }
      body {
        font-family: "Roboto", sans-serif;
        background: #f6fafa;
        /* font-family: 'Source Sans Pro', sans-serif; */
      }
      .lead {
        font-size: 15px;
        line-height: 1.7;
        color: #737373;
      }
      
      /* Nav */
      nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        /* padding: 1rem 0; */
        z-index: 60;
        background: #444;
        color: #fff;
        height: 63px;
      }
      nav .container {
        width: 70vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        overflow: hidden;
      }
      nav .container .logo a {
        font-size: 22px;
        text-transform: uppercase;
        color: #f4f4f4;
        text-decoration: none;
      }
      nav .container .logo a:hover {
        color: #f7d08a;
      }
      
      nav .container ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 100%; */
      }
      
      ul li a {
        padding: 2rem 1.5rem;
        color: #fff;
        text-decoration: none;
      }
      .selected {
        background-color: #333;
        color: #e8a87c;
      }
      
      ul li a:hover {
        background-color: #e8a87c;
        color: #444;
      }
      /* SECTIONS */
      #main {
        background: url(./Extra/pro-4/hotel.jpg) no-repeat center center/cover;
        height: 100vh;
        width: 100%;
        position: relative;
      }
      #main::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        /* background: rgba(0, 0, 0, ); */
      }
      #main .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: inherit;
        gap: 2.9rem;
        position: relative;
      }
      #main h1 {
        font-size: 42px;
        font-family: "Source Sans Pro", sans-serif;
        color: #eeee;
        /* opacity: 0.7; */
        /* max-width: 55vw; */
        line-height: 0.9;
        text-transform: capitalize;
      }
      .highlight {
        color: #e8a87c;
        text-transform: capitalize;
      }
      #main .main-para {
        font-family: "Roboto", sans-serif;
      
        /* max-width: 80vw; */
        font-size: 16.6px;
        color: #f6fafa;
        opacity: 0.85;
      }
      /* SERVICES */
      #services .container {
        padding: 2rem;
      }
      #services h2 {
        text-align: center;
        font-size: 26px;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0 0 1rem 0;
      }
      .lead {
        text-align: center;
        font-size: 16px;
      }
      .services__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
      }
      .services__container .services {
        background-color: #1f1f1f;
        border-radius: 10px 10px 0 0;
        /* height: 350px; */
        padding: 0 0 30px 0;
        overflow: hidden;
        border-bottom: 2px solid #e8a87c;
      }
      .services img {
        width: 100%;
        height: 200px;
        border-radius: 10px 10px 0 0;
        filter: saturate(0.5);
        transition: all 0.3s ease-in-out;
        border-bottom: 2px solid #e8a87c;
      }
      .services img:hover {
        filter: saturate(1);
      }
      .services h3 {
        margin: 1rem 0;
        text-align: center;
        color: #e8a87c;
        font-size: 18px;
      }
      
      .services .lead {
        /* text-align: center; */
        padding: 0 20px;
        color: #ccc;
        opacity: 0.9;
        font-size: 14px;
        line-height: 1.5;
        text-align:left;
      }
      footer {
        padding: 30px 0;
        background-color: #222;
        border-top: 2px solid #e8a87c;
      }
      footer p {
        text-align: center;
      }
      footer .lead{
        color:#f4f4f4
      }
      footer .owner {
        color: #e8a87c;
        /* text-transform: uppercase; */
        font-size: 17px;
        /* text-decoration: ; */
        text-decoration: underline #ccc 1px;
      }
      `,
    ],
  ];
  // GIVING THE CODE
  templatesCode = function (index) {
    // index is not zero based so have to subtract one from it
    const codeArr = this._codes[index - 1];
    this._updateEditor(codeArr[0], codeArr[1]);
  };
  // Update the editor
  _updateEditor = function (html, css) {
    this._code.innerHTML = "";
    this._css.innerHTML = "";
    this._code.insertAdjacentHTML("afterbegin", html);
    this._css.insertAdjacentHTML("afterbegin", css);
    this._allCode = [html, css];
    console.log(this._allCode);
  };
  // Clear the code from the editor
  clearCode = function () {
    this._code.innerHTML = "";
    this._css.innerHTML = "";
  };
  // Returning the css inside the function
  updateFontCss = function (handler) {
    const css = this._css.innerHTML;
    return handler(css);
  };
  // Updating The CSS
  updateCSS = function (css) {
    this._css.innerHTML = "";
    this._css.insertAdjacentHTML("afterbegin", css);
    // this._css.insertAdjacentHTML("beforeend", this._newCSS);
  };
  // Adding the css
  addCSS = function (css) {
    this._newCSS = css.join("\n");
    this._css.insertAdjacentHTML("beforeend", this._newCSS);
  };
  // Updating the others
  updateOthers = function (handler, other) {
    const css = this._css.innerHTML;
    return handler(other, css);
  };
  // Updating the color everytime color description is opened
  colorDescUpdate = function (main, second) {
    const parent = this._parent.querySelector("#select-colors");
    main = main === "" ? "#222222" : main;
    second = second === "" ? "#222222" : second;

    const str = ` 
              <div>
                  <h4>Main Color</h4>
                  <input type="color" value='${main}' name="main-color" id="color" />
                  </div>
              <div>
                <h4>Primary Color</h4>
                <input type="color" value='${second}' name="primary-color" id="color" />
              </div>
              `;

    parent.insertAdjacentHTML("afterbegin", str);
  };
  // Calculate How many images are present
  checkImages = function () {
    const images = this._code.querySelectorAll("img");
  };
  // add images
  addImages = function () {
    // Selecting all the images in the code
    const imgContain = document.querySelector("#images");
    const images = this._code.querySelectorAll("img");
    images.forEach((img) => {
      imgContain.insertAdjacentHTML(
        "beforeend",
        `
                <div id="image">
              <label for="url">Image Url</label>
              <input
                autocomplete="off"
                type="url"
                name="url"
                id="url"
                placeholder="Enter URL"
              />

              <img src="${img.src}" alt="" loading="lazy" />
            </div>
      `
      );
    });
  };
  // return url and image
  checkImageUrl = function (handler) {
    const images = [...this._code.querySelectorAll("img")];
    const imagesOfDescription = [
      ...this._parent.querySelector(".description").querySelectorAll("img"),
    ];
    handler(images, imagesOfDescription);
  };
}
export default new editorView();
