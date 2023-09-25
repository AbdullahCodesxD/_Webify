import View from './view.js';

class Template extends View {
  _parent = document.querySelector('.templates');

  toggleTemplate = function () {
    // Selecting the parent template with the #
    const Templates = this?._parent.closest('#templates');
    Templates.classList.toggle('hide');
  };
  templateHandler = function (handler) {
    this._parent?.addEventListener(
      'click',
      function (e) {
        // Selecting the btn that is clickd
        const target = e.target.closest('.btn--tiny');

        // Checking if btn is clicked
        if (!target) return;

        // Selecting the parent
        const template = target.closest('.template');
        const dataSet = template.dataset.template;

        // HideTemplate
        this.toggleTemplate();

        // Passing the value to the handler
        handler(dataSet);
      }.bind(this)
    );
  };
}

export default new Template();
