 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('General');
  }

  async getHtml() {
    return `
        <h1>General</h1>
    `;
  }
}