 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('General');
  }

  async getHtml() {
    return new Promise(function(resolve, reject) {
      resolve(`
      <div id="mainContainer">
          <nav id="navigationBar" class="navigationBar">
              <a href="/horoscope/" class="nav__link" data-link>
                  <b>Home</b><img src="/horoscope/assets/icon-home.jpg" width=15px height=15px style="padding:3px"></a>
              <a href="/horoscope/general" class="nav__link" data-link>
                  <b>General</b><img src="/horoscope/assets/icon-general.jpg" width=15px height=15px style="padding:3px"></a>
              <a href="/horoscope/celebrities" class="nav__link" data-link>
                  <b>Celebrities</b><img src="/horoscope/assets/icon-celebrities.jpg"width=15px height=15px style="padding:3px"></a>
              <a href="/horoscope/jobs" class="nav__link" data-link><b>Jobs</b></a>
              <a href="/horoscope/compatibility" class="nav__link" data-link>
                  <b>Love Compatibility</b><img src="/horoscope/assets/icon-compatibility.jpg" width=15px height=15px style="padding:3px"></a>
              <a href="/horoscope/game" class="nav__link" data-link>
                  <b>Guess Sign</b><img src="/horoscope/assets/icon-game.jpg" width=15px height=15px style="padding:3px"></a>
              <a href="javascript:void(0);" class="icon" onclick="navFunction()">
                  <i class="fa fa-bars"></i>
              </a>
          </nav>
      </div>`)
    })
  }
}