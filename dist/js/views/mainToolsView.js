import View from './view.js';

class toolsView extends View {
  // Main Elements
  _parent = document.querySelector('.main-tools'); //Parent
  _tools = this._parent?.querySelector('.tools'); //Tools box
  _description = this._parent?.querySelector('.description'); //Description for tool box
  // Toggle b/w differnt tools
  toggleTool = function () {
    this._tools?.addEventListener('click', this._toggleHandler.bind(this));
  };
  _toggleHandler = function (e) {
    // Returning if not element is found
    if (!e.target) return;

    // Removing The current class
    this._tools
      ?.querySelectorAll('.tool')
      .forEach((tool) => tool.classList.remove('current'));

    // Looking for the target and adding the current class
    const target = e.target.closest('.tool');
    target.classList.add('current');
    this.currTool = target.id;
  };

  // Updating tool in the model
  updateTool = function (handler) {
    this._tools?.addEventListener('click', function (e) {
      const id = e.target.closest('.tool').id;

      if (!id) return;
      handler(id);
    });
  };

  // Get Html
  handlerHTML = function (handler) {
    this._tools?.addEventListener('click', handler);
  };
  // Update Markup
  _updateMarkup = function (html) {
    this._description.innerHTML = '';
    this._description.innerHTML = html;
  };
  // get input
  getInputHandler = function (handler) {
    // Selecting Inputs
    const inputs = [...this._description.querySelectorAll('input')];
    const options = [...this._description.querySelectorAll('option')];

    // Getting an array of object of values
    const result = inputs.map((inp) => {
      // Getting Values out of field
      const inpName = inp.name;
      const inpValue = inp.value;
      // SToring them in an object
      return { [inpName]: inpValue };
    });

    const _value = options.map((op) => {
      // Checking for the selected one
      if (op.selected) {
        // Selected  one and removing heading from dataset
        const parent = op.closest('.parent').dataset.set.slice(0, -7);

        // Return the value and name

        return { [parent + 'Color']: op.value };
      }
    });
    const valueFiltered = _value.filter((val) => {
      if (val != undefined) return val;
    });
    // Passing the result inside the handler
    handler([...result, { colours: valueFiltered }]);
  };
  // update code
}
export default new toolsView();
