 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Jobs');
  }

  async getHtml() {
    return `
        <h1>Jobs</h1>
    `;
  }
}