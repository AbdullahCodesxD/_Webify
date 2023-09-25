import View from "./view.js";

class viewHtml extends View {
  _parent = document.querySelector(".description");
  _HTMLObj = [
    {
      head: `
        <div class="headings">
                <!-- Main Heading -->
                <div class="parent-heading parent" data-set="mainHeading">
                  <h3>Main Heading</h3>

                  <div class="font-size">
                    <label for="h1">Font-size</label>
                    <input
                      type="number"
                      name="h1"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>


                  </div>
                </div>

                <!-- Section Heading -->
                <div class="parent-heading parent" data-set="sectionHeading">
                  <h3>Section Heading</h3>

                  <div class="font-size">
                    <label for="h2">Font-size</label>
                    <input
                      type="number"
                      name="h2"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>

                  </div>
                </div>

                <!-- Sub section Heading  -->
                <div class="parent-heading parent" data-set="subHeading">
                  <h3>Sub Heading</h3>

                  <div class="font-size">
                    <label for="h3">Font-size</label>
                    <input
                      type="number"
                      name="h3"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>


                  </div>
                </div>

                <!-- End -->
              </div>
        `,
    },

    {
      para: `
    <div class="paragraphs">
                <!-- Main Heading -->
                <div class="parent-paragraph parent" data-set="mainPara">
                  <h3>Main Paragraph</h3>

                  <div class="font-size">
                    <label for="main-para">Font-size</label>
                    <input
                      type="number"
                      name="main-para"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>


                  </div>
                </div>

                <!-- Section Paragraph -->
                <div class="parent-paragraph parent" data-set="sectionPara">
                  <h3>Section Paragraph</h3>

                  <div class="font-size">
                    <label for="lead">Font-size</label>
                    <input
                      type="number"
                      name="lead"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>

                  </div>
                </div>

                <!-- End -->
              </div>
        `,
    },

    {
      img: `
      <div class="images">
      <h3>Enter the url of images.</h3>

      <div id="images">
        
      </div>
    </div>
      `,
    },
    {
      colour: `
      <div class="select-colors">
      <h3>Select Colors</h3>

      <div id="select-colors">
       
      </div>
    </div>
      `,
    },
    // {
    //   button: `

    //   <div class="button-styling">
    //       <h3>Button Styling</h3>
    //       <div id="button-styling">
    //         <div>
    //           <h4>Main Button</h4>
    //           <!-- Button Background -->
    //           <div class="btn-bg">
    //             <h6>Transparent Background</h6>
    //             <input
    //               type="checkbox"
    //               name="transparent"
    //               id="transparent"
    //             />
    //           </div>

    //           <!-- Btn - border -->
    //           <div class="btn-border">
    //             <h6>Border</h6>
    //             <input type="checkbox" name="border-check" id="border" />
    //           </div>

    //           <!-- Btn - text - color -->
    //           <div class="btn-text-color">
    //             <h6>Text Color</h6>
    //             <input type="color" name="color" id="btn-color" />
    //           </div>
    //         </div>
    //         <!--  -->
    //         <!-- Seconday Button -->
    //         <div>
    //           <h4>Secondary Button</h4>
    //           <!-- Button Background -->
    //           <div class="btn-bg">
    //             <h6>Transparent Background</h6>
    //             <input
    //               type="checkbox"
    //               name="transparent"
    //               id="transparent"
    //             />
    //           </div>
    //           <!-- Btn - border -->
    //           <div class="btn-border">
    //             <h6>Border</h6>
    //             <input type="checkbox" name="border-check" id="border" />
    //           </div>

    //           <!-- Btn - text - color -->
    //           <div class="btn-text-color">
    //             <h6>Text Color</h6>
    //             <input type="color" name="color" id="btn-color" />
    //           </div>
    //         </div>
    //         <!-- End -->
    //       </div>
    //    </div>
    //   `,
    // },
    {
      other: `
      <div class="other-style">
          <h3>Others</h3>

          <div id="other-style">
            <div class="links">
              <label for="font">Links font-size</label>
              <input
                type="number"
                name="a_font-size"
                id="link-font"
                min="1"
                placeholder="Font-size"
              />
            </div>

            <div class="spacing">
              <label for="section">Section Spacing</label>
              <input
                type="number"
                name="section_margin"
                id="section-spacing"
                placeholder="Space B/W Sections in px"
                min="1"
              />
            </div>

            <div class="padding">
              <label for="padding">Section Padding</label>
              <input
                type="number"
                name="section_padding"
                id="section-padding"
                placeholder="Sections padding in px"
                min="1"
              />
            </div>

            <div class="width">
              <label for="width">Section width</label>
              <input
                type="number"
                name="section_width"
                id="section-width"
                placeholder="Sections width in px"
                min="1"
              />
            </div>
          </div>
       </div>
      
      `,
    },
  ];

  checkObj = function (objext) {
    if (!this._parent) return;
    // Checking for the obj and finding html
    let index = 0;
    this._HTMLObj.forEach((obj, i) => {
      let check = false;
      for (let key in obj) {
        key === objext ? (check = true) : (check = false);
      }
      if (check) index = i;
    });
    // HTml
    const html = Object.values(this._HTMLObj[index]);
    if (!html) return;
    this._parent.innerHTML = html;
  };
}

export default new viewHtml();
