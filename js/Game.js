 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Game');
  }

  async getHtml() {
    return `
    <div id="mainContainer">
      <nav id="navigationBar" class="navigationBar">
        <a href="/horoscope/" class="nav__link" data-link>Home</a>
        <a href="/horoscope/general" class="nav__link" data-link>General</a>
        <a href="/horoscope/compatibility" class="nav__link" data-link>Love Compatibility</a>
        <a href="/horoscope/chart" class="nav__link" data-link>Birth Chart</a>
        <a href="/horoscope/game" class="nav__link" data-link>Play Game</a>
        <a href="javascript:void(0);" class="icon" onclick="navFunction()">
            <i class="fa fa-bars"></i>
        </a>
      </nav>
      
      <p class="white-label-30-j">Let's play a Game</p>

      <form onsubmit="return false;">
        <label for="sign"><p class="white-label-20-j">First choose a sign:</p></label>
        <select name="sign" id="selectForm">
          <option value=0>Aries</option>
          <option value=1>Taurus</option>
          <option value=2>Gemini</option>
          <option value=3>Cancer</option>
          <option value=4>Leo</option>
          <option value=5>Virgo</option>
          <option value=6>Libra</option>
          <option value=7>Scorpio</option>
          <option value=8>Sagittarius</option>
          <option value=9>Capricorn</option>
          <option value=10>Aquarius</option>
          <option value=11>Pisces</option>
        </select>
        <br><br>
        <p class="white-label-20-j">Then click on submit</p>
        <input type="submit" value="Submit" onclick="createButtons()">
      </form>

      <p class="white-label-20-j">Now take a guess ! Which one is right ?</p>
      <button class="button" id="button1" type="button" style="vertical-align:middle"><span> Character 1</span></button>
      <button class="button" id="button2" type="button" style="vertical-align:middle"><span> Character 2</span></button>
    </div>
    `;
  }
}