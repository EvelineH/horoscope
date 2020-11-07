 
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
            <img src="/horoscope/assets/sign-aries.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="taurus">
            <img src="/horoscope/assets/sign-taurus.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="gemini">
            <img src="/horoscope/assets/sign-gemini.jpg" width=75px height=75px></img>
        </div> 

        <div class="zoomable" id="cancer">
            <img src="/horoscope/assets/sign-cancer.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="leo">
            <img src="/horoscope/assets/sign-leo.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="virgo">
            <img src="/horoscope/assets/sign-virgo.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="libra">
            <img src="/horoscope/assets/sign-libra.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="scorpio">
            <img src="/horoscope/assets/sign-scorpio.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="sagittarius">
            <img src="/horoscope/assets/sign-sagittarius.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="capricorn">
            <img src="/horoscope/assets/sign-capricorn.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="aquarius">
            <img src="/horoscope/assets/sign-aquarius.jpg" width=75px height=75px></img>
        </div>

        <div class="zoomable" id="pisces">
            <img src="/horoscope/assets/sign-pisces.jpg" width=75px height=75px></img>
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

    <p>Daily Horoscopes</p>
    <div class="grid-container">
        <div class="grid-item">
            <p>Aries</p>
            <p>Mar 21 - Apr 19</p>
        </div>
        <div class="grid-item">
            <p>Taurus</p>
            <p>Apr 20 - May 20</p>
        </div>
        <div class="grid-item">
            <p>Gemini</p>
            <p>May 21 - Jun 20</p>
        </div>  
        <div class="grid-item">
            <p>Cancer</p>
            <p>Jun 21 - Jul 22</p>
        </div>
        <div class="grid-item">
            <p>Leo</p>
            <p>Jul 23 - Aug 22</p>
        </div>
        <div class="grid-item">
            <p>Virgo</p>
            <p>Aug 23 - Sep 22</p>
        </div>  
        <div class="grid-item">
            <p>Libra</p>
            <p>Sep 23 - Oct 22</p>
        </div>
        <div class="grid-item">
            <p>Scorpio</p>
            <p>Oct 23 - Nov 21</p>
        </div>
        <div class="grid-item">
            <p>Sagittarius</p>
            <p>Nov 22 - Dec 21</p>
        </div>
        <div class="grid-item">
            <p>Capricorn</p>
            <p>Dec 22 - Jan 19</p>
        </div>
        <div class="grid-item">
            <p>Aquarius</p>
            <p>Jan 20 - Feb 18</p>
        </div>
        <div class="grid-item">
            <p>Pisces</p>
            <p>Feb 19 - March 20</p>
        </div>  
    </div>

</div>`;
  }
}