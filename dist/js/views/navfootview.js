import View from './view.js';

class NavFoot extends View {
  _nav = document.querySelector('nav');
  _foot = document.querySelector('footer');

  navFootToggle = function () {
    this._nav.classList.toggle('hide');
    this._foot.classList.toggle('hide');
  };
}

export default new NavFoot();
