 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    return `
<div id="mainContainer" style="margin-left: 25px; margin-right: 25px;">
    <div id="headerSigns" style="margin-left: 50px; margin-right: 50px;">
        <div class="zoomable">
            <img src="../assets/sign-aries.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-taurus.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-gemini.jpg " width=75px height=75px></img>
        </div> 

        <div class="zoomable">
            <img src="../assets/sign-cancer.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-leo.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-virgo.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-libra.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-scorpio.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-sagittarius.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-capricorn.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-aquarius.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable">
            <img src="../assets/sign-pisces.jpg" width=75px height=75px></img>
        </div>

    </div>

    <div id="quote">
        <h2 style="margin-left: 440px; margin-top: 20px; margin-bottom: 60px;">Astrology is like gravity. You don't have to believe in it for it to be working in your life.</h2>
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