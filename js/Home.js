 
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    return `
<div id="mainContainer">
    <div id="headerSigns">
        <div class="zoomable" id="aries">
            <img src="/horoscope/assets/sign-aries.jpg"></img>
        </div>

        <div class="zoomable" id="taurus">
            <img src="/horoscope/assets/sign-taurus.jpg"></img>
        </div>

        <div class="zoomable" id="gemini">
            <img src="/horoscope/assets/sign-gemini.jpg"></img>
        </div> 

        <div class="zoomable" id="cancer">
            <img src="/horoscope/assets/sign-cancer.jpg"></img>
        </div>

        <div class="zoomable" id="leo">
            <img src="/horoscope/assets/sign-leo.jpg"></img>
        </div>

        <div class="zoomable" id="virgo">
            <img src="/horoscope/assets/sign-virgo.jpg"></img>
        </div>

        <div class="zoomable" id="libra">
            <img src="/horoscope/assets/sign-libra.jpg"></img>
        </div>

        <div class="zoomable" id="scorpio">
            <img src="/horoscope/assets/sign-scorpio.jpg"></img>
        </div>

        <div class="zoomable" id="sagittarius">
            <img src="/horoscope/assets/sign-sagittarius.jpg"></img>
        </div>

        <div class="zoomable" id="capricorn">
            <img src="/horoscope/assets/sign-capricorn.jpg"></img>
        </div>

        <div class="zoomable" id="aquarius">
            <img src="/horoscope/assets/sign-aquarius.jpg"></img>
        </div>

        <div class="zoomable" id="pisces">
            <img src="/horoscope/assets/sign-pisces.jpg"></img>
        </div>

    </div>

    <div id="quote" class="mainQuote">
        <h2>Astrology is like gravity. You don't have to believe in it for it to be working in your life.</h2>
    </div>

    
    <nav id="navigationBar" class="navigationBar">
        <ul>
            <li><a href="/horoscope/" class="nav__link" data-link>Home</a></li>
            <li><a href="/horoscope/general" class="nav__link" data-link>General</a></li>
            <li><a href="/horoscope/celebrities" class="nav__link" data-link>Celebrities</a></li>
            <li><a href="/horoscope/jobs" class="nav__link" data-link>Jobs</a></li>
            <li><a href="/horoscope/compatibility" class="nav__link" data-link>Love Compatibility</a></li>
            <li><a href="/horoscope/game" class="nav__link" data-link>Guess Who ?</a></li>
        </ul>
    </nav>
</div>`;
  }
}