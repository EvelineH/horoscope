import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('SignView');
    this.id = params.id;
  }

  async getHtml() {
    // return new Promise(function(resolve, reject) {
    //     let p = this.id
    //     resolve('<p>${p}</p>');
    // })
    return `<p>Vies${this.id}</p>`;
  }
}