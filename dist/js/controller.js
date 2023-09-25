import characterChanger from "./basic/character.js";
import toolsView from "./views/mainToolsView.js";
import viewHtml from "./views/toolsViewHtml.js";
import BtnView from "./views/buttonView.js";
import editorView from "./views/editorView.js";
import templateView from "./views/templateView.js";
import NavFoot from "./views/navfootview.js";
import * as model from "./model.js";
import navfootview from "./views/navfootview.js";
import buttonView from "./views/buttonView.js";

////////////////////////////////////
const toolToggle = function () {
  toolsView.toggleTool();
  toolsView.updateTool(model.changeCurrTool);
};
const changeDesc = function () {
  const tool = model.state.currTool;

  viewHtml.checkObj(tool);
  if (tool === "img") {
    editorView.addImages();
  }
  if (tool === "colour") {
    editorView.colorDescUpdate(model.state.main, model.state.second);
  }
};

// -------------------------------------------
// Template Handler
const templateFunction = function (tempNo) {
  // Selecting Button
  editorView.toggleEditor();
  navfootview.navFootToggle();

  // Giving the model no of the selected temp
  model.state.currTemplate = Number(tempNo);
  editorView.templatesCode(model.state.currTemplate);

  // Calculating how many images are in the template and creating desc for that
  editorView.checkImages();
};
// CrossBtn
const crossFunction = function () {
  editorView.toggleEditor();
  templateView.toggleTemplate();
  navfootview.navFootToggle();
  editorView.clearCode();
};

// ---------------------------------------------
const updateInput = function (obj) {
  // Getting the curr tool
  const obja = model.state.currTool;
  // Updating the curr tool object
  model.state.toolsInfo[obja] = obj;
};

const saveFunction = function () {
  // See which is the current elements selected
  const currTool = model.state.currTool;
  // look for input value in each of the input fields
  toolsView.getInputHandler(updateInput);

  // Updating color in the model
  if (currTool === "colour") {
    model.updateColor();
  }

  if (currTool === "head" || currTool === "para") {
    // Updating Color for headings and paragraphs
    // model.updateTypoColors();
    const colorCSS = model.updateColorOfEl();
    // Updating Font-Size for current tool
    const newCSS = editorView.updateFontCss(model.updateFontCss);
    editorView.updateCSS(newCSS);
    // console.log(newCSS);
    // ADdign new CSS
    editorView.addCSS(colorCSS);
  }

  if (currTool === "img") {
    editorView.checkImages();
    editorView.checkImageUrl(model.updateImages);
  }
};
const getCode = function () {
  buttonView.getCodeHandler(model.giveCode);
};
// -------------------

const init = function () {
  toolToggle();
  characterChanger();
  toolsView.handlerHTML(changeDesc);
  BtnView.saveHandler(saveFunction);
  BtnView.saveEnterHandler(saveFunction);
  templateView.templateHandler(templateFunction);
  editorView.crossHandler(crossFunction);
  getCode();
};
init();
