import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('SignView');
  }

  async getHtml() {
    return new Promise(function(resolve, reject) {
        resolve('<p>SignView</p>');
    })
  }
}