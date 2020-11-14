import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('SignView');
    this.id = params.id;
  }

  async fetchSign() {
    return new Promise(function(resolve, reject) {
        fetch('/horoscope/back/single-sign.json')
        // fetch('/back/single-sign.json')
        .then(response => response.json())
        .then(data => {
            data = data.signs
            resolve(data);
        })
    })
  }

  async getHtml() {
    var signs = await this.fetchSign()
    var sign = signs[this.id]
    return `
    <div id="mainContainer">
        <nav id="navigationBar" class="navigationBar">
          <a href="/horoscope/" class="nav__link" data-link>Home</a>
          <a href="/horoscope/general" class="nav__link" data-link>General</a>
          <a href="/horoscope/celebrities" class="nav__link" data-link>Celebrities</a>
          <a href="/horoscope/jobs" class="nav__link" data-link>Jobs</a>
          <a href="/horoscope/compatibility" class="nav__link" data-link>Love Compatibility</a>
          <a href="/horoscope/game" class="nav__link" data-link>Guess Sign</a>
          <a href="javascript:void(0);" class="icon" onclick="navFunction()">
              <i class="fa fa-bars"></i>
          </a>
        </nav>

        <div class="signCard">
          <img src="/horoscope/assets/daily-${sign.sign}.jpg">
          <div class="signCardcontainer">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
    </div>`;
  }
}