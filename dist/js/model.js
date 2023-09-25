export const state = {
  currTemplate: null,
  currTool: null,
  main: "",
  second: "",
  toolsInfo: {},
};

export const changeCurrTool = function (tool) {
  state.currTool = tool;
};
export const updateTypoColors = function () {
  // Updating color for paragraph and heading
  if (state.toolsInfo.head) {
    const length = state.toolsInfo.head.length;
    const { colours } = state.toolsInfo.head[length - 1];
    // Array for storing colors to push back later;
    console.log("heyyyyyyyyyyyyyyyyy");
    const arrColours = colours.map((color) => {
      const val = Object.values(color);
      const colour = state[val];
      console.log(colour, colours);
      if (!colour) return;
      return colour;
    });
  }

  if (state.toolsInfo.para) {
    const length = state.toolsInfo.para.length;
    const { colours } = state.toolsInfo.para[length - 1];
    // Array for storing colors to push back later;

    const arrColours = colours.map((colo) => {
      const val = Object.values(colo);
      const colour = state[val];
      if (!colour) return;
      return colour;
    });
    // console.log(arrColours, '---------------');
  }
};
export const updateColor = function () {
  // Getting the values out of colors
  const main = Object.values(state.toolsInfo.colour[0]);
  const second = Object.values(state.toolsInfo.colour[1]);
  state.main = main;
  state.second = second;
};

const updateEl = function (cssArr, elObj) {
  // Taking the value out of el object
  const key = Object.keys(elObj)[0];
  const value = Object.values(elObj)[0];

  let updatedCSS;
  let elIndex;

  cssArr.forEach((el, i) => {
    // Looping over arr to find the object to change css of;

    if (el.includes(`${key}`) || el.includes(`.${key}`)) {
      // Converting the el to array
      const el = cssArr[i].split("\n");

      // Checking if the array contains color or font-size for multiple blocks of same element
      if (!el.join("\n").includes("font-size")) return;

      elIndex = i;

      updatedCSS = el
        .map((ela, e, elArr) => {
          const font = ela.includes("font-size");

          // console.log(ela, font, ";;;;;;;;;;;;;;");
          if (font) {
            const check = state.currTool;
            // checking if the element contains the font

            const str = `font-size : ${value}px;`;
            // updatedCSS = str;
            // Returning it coz we are using map and an array is required
            return (el[e] = str);
          } else {
            // Returning the remaining CSS
            return ela;
          }
        })
        .join("\n");
    }
  });

  cssArr[elIndex] = updatedCSS;
  // console.log(...cssArr);
  return cssArr;
};
export const updateColorOfEl = function () {
  if (state.currTool === "head") {
    // Checking which color is selected for each element
    const h1Color =
      state.toolsInfo.head[state.toolsInfo.head.length - 1].colours[0];
    const h2Color =
      state.toolsInfo.head[state.toolsInfo.head.length - 1].colours[1];
    const h3Color =
      state.toolsInfo.head[state.toolsInfo.head.length - 1].colours[2];
    const colorArr = [h1Color, h2Color, h3Color];
    // Getting the color of main and second
    const main = state.main;
    const second = state.second;

    const strArr = colorArr.map((color, i) => {
      // Which one wants which color
      if (Object.values(color)[0] === "main") {
        const color =
          main === ""
            ? ""
            : `h${i + 1}{
          color : ${main} !important ;
        }`;

        return color;
      } else if (Object.values(color)[0] === "second") {
        const color =
          second === ""
            ? ""
            : `h${i + 1}{
          color : ${second} !important;
        }`;
        return color;
      }
    });
    return strArr;
  }
  // IF THE CURRENT TOOL IS PARA
  if (state.currTool === "para") {
    // SELECTING THE COLORS FOR PARAS AND PUTTING IT IN ARRAY
    const mainPara =
      state.toolsInfo.para[state.toolsInfo.para.length - 1].colours[0];
    const leadPara =
      state.toolsInfo.para[state.toolsInfo.para.length - 1].colours[1];
    const colorArr = [mainPara, leadPara];
    // SELECTING THE COLOR VALUES
    const main = state.main;
    const second = state.second;
    // PUTTING THE CLASSES OF PARA IN ARRAY
    const paraClass = ["main-para", "lead"];

    // RETURNING THE STRING IN AN ARRAY
    const strArr = colorArr.map((color, i) => {
      // Which one wants which color

      if (Object.values(color)[0] === "main") {
        const color =
          main === ""
            ? ""
            : `.${paraClass[i]}{
          color : ${main} !important;
        }`;

        return color;
      } else if (Object.values(color)[0] === "second") {
        const color =
          second === ""
            ? ""
            : `.${paraClass[i]}{
          color : ${second} !important;
        }`;
        return color;
      }
    });
    return strArr;
  }
};

export const updateFontCss = function (css) {
  // Current tool
  const curr = state.currTool;
  // Converting the recieved css to array
  const cssArr = css.split("}");
  let updatedArr = css;
  if (curr === "head") {
    // All the headings
    const { h1 } = state.toolsInfo.head[0];
    const { h2 } = state.toolsInfo.head[1];
    const { h3 } = state.toolsInfo.head[2];
    // Adding all the headings to an array
    const headArr = [h1, h2, h3];
    // Looping over arr to find the desired item
    headArr.forEach((head, i) => {
      if (head === "") return;

      updatedArr = updateEl(cssArr, state.toolsInfo.head[i]).join("}");
    });
  }
  if (curr === "para") {
    const { main } = state.toolsInfo.para[0];
    const { lead } = state.toolsInfo.para[0];

    const paraArr = [main, lead];
    paraArr.forEach((para, i) => {
      if (para === "") return;
      updatedArr = updateEl(cssArr, state.toolsInfo.para[i]).join("}");
    });

    // console.log(main, lead);
  }

  // returning arr to be used in the view
  return updatedArr;
};

// Update images
export const updateImages = function (imageArr, imagesInDescription) {
  const imagesUrlArr = state.toolsInfo.img;

  imagesUrlArr.forEach((image, i) => {
    // GOING BACK BEFORE HITTING THE COLORS
    if (i >= imagesUrlArr.length - 1) return;
    // Getting the urls out of the provided arr
    const url = image.url;
    // Returning if the url is empty
    if (url.trim() === "" || !url.includes("http")) return;
    const img = imageArr[i];
    const imgInDesc = imagesInDescription[i];
    img.src = url;
    imgInDesc.src = url;
  });
};
export const giveCode = function (code) {
  window.localStorage.setItem("code", code.join("---"));
  const loc = window.location.href.split("/");
  loc[loc.length - 1] = "code.html";
  window.location.href = loc.join("/");
};
