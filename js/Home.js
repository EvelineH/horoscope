 
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async fetchDaily() {
    return new Promise(function(resolve, reject) {
        fetch('/horoscope/back/daily-horoscope.json')
        // fetch('../back/daily-horoscope.json')
        .then(response => response.json())
        .then(dailyData => {
            dailyData = dailyData.daily
            resolve(dailyData);
        })
    })
  }


  async getHtml() {
    var dailyData = await this.fetchDaily()
    return `
<div id="mainContainer">
    <div id="headerSigns">
        <div class="zoomable" id="aries">
            <a href="/horoscope/sign/0" data-link>&nbsp;<img src="/horoscope/assets/sign-aries.jpg" width=75px height=75px></a></img>
        </div>

        <div class="zoomable" id="taurus">
            <a href="/horoscope/sign/0" data-link><img src="/horoscope/assets/sign-taurus.jpg" width=75px height=75px>&nbsp;</a></img>
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
        <h2>Astrology is like gravity. You don't have to believe in it for it to be working in your life</h2>
    </div>

    
    <nav id="navigationBar" class="navigationBar">
        <a href="/horoscope/" class="nav__link" data-link>Home</a>
        <a href="/horoscope/general" class="nav__link" data-link>General</a>
        <a href="/horoscope/compatibility" class="nav__link" data-link>Love Compatibility</a>
        <a href="/horoscope/chart" class="nav__link" data-link>Birth Chart</a>
        <a href="/horoscope/game" class="nav__link" data-link>Guess Sign</a>
        <a href="javascript:void(0);" class="icon" onclick="navFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </nav>

    <p class="white-label-30"><b>Daily Horoscopes</b></p>
    <div class="grid-container">
        <div class="grid-item">
            <p class="white-label-20">Aries</p>
            <p class="white-label-20">Mar 21 - Apr 19</p>
            <p class="white-label-17">${dailyData[0].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Taurus</p>
            <p class="white-label-20">Apr 20 - May 20</p>
            <p class="white-label-17">${dailyData[1].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Gemini</p>
            <p class="white-label-20">May 21 - Jun 20</p>
            <p class="white-label-17">${dailyData[2].prediction}</p>
        </div>  
        <div class="grid-item">
            <p class="white-label-20">Cancer</p>
            <p class="white-label-20">Jun 21 - Jul 22</p>
            <p class="white-label-17">${dailyData[3].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Leo</p>
            <p class="white-label-20">Jul 23 - Aug 22</p>
            <p class="white-label-17">${dailyData[4].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Virgo</p>
            <p class="white-label-20">Aug 23 - Sep 22</p>
            <p class="white-label-17">${dailyData[5].prediction}</p>
        </div>  
        <div class="grid-item">
            <p class="white-label-20">Libra</p>
            <p class="white-label-20">Sep 23 - Oct 22</p>
            <p class="white-label-17">${dailyData[6].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Scorpio</p>
            <p class="white-label-20">Oct 23 - Nov 21</p>
            <p class="white-label-17">${dailyData[7].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Sagittarius</p>
            <p class="white-label-20">Nov 22 - Dec 21</p>
            <p class="white-label-17">${dailyData[8].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Capricorn</p>
            <p class="white-label-20">Dec 22 - Jan 19</p>
            <p class="white-label-17">${dailyData[9].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Aquarius</p>
            <p class="white-label-20">Jan 20 - Feb 18</p>
            <p class="white-label-17">${dailyData[10].prediction}</p>
        </div>
        <div class="grid-item">
            <p class="white-label-20">Pisces</p>
            <p class="white-label-20">Feb 19 - March 20</p>
            <p class="white-label-17">${dailyData[11].prediction}</p>
        </div>  
    </div>

</div>`;
  }
}