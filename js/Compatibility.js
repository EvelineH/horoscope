 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Love Compatibility');
  }

  async getHtml() {
    return `
        <h1>Love Compatibility</h1>
    `;
  }
}