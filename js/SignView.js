import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('SignView');
    this.id = params.id
  }

  async getHtml() {
    return new Promise(function(resolve, reject) {
        resolve('<p>SignView ${this.id}</p>');
    })
  }
}