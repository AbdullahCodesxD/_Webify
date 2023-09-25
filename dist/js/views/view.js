export default class View {
  _mainParent = document.querySelector("body");
  _save = document.querySelector("#saved");
  _allCode;
  currTool = "";
  _close = function (e) {
    this.target.closest(this._parent).classList.toggle(ez);
  };
  _clear = function () {
    this._parent.innerHtml = "";
    this._parent.innerText = "";
  };
  save = function () {
    document.body.style.overFlow = "hidden";
    this._save.classList.add("saved");
    setTimeout(function () {
      document.body.style.overFlow = "scroll";
      const save = this.document.querySelector("#saved");
      save.classList.remove("saved");
    }, 1000);
  };
}
