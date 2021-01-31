 
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
          <a href="/horoscope/" class="nav__link" data-link>Home</a>
          <a href="/horoscope/general" class="nav__link" data-link>General</a>
          <a href="/horoscope/compatibility" class="nav__link" data-link>Love Compatibility</a>
          <a href="/horoscope/chart" class="nav__link" data-link>Birth Chart</a>
          <a href="/horoscope/game" class="nav__link" data-link>Play Game</a>
          <a href="javascript:void(0);" class="icon" onclick="navFunction()">
              <i class="fa fa-bars"></i>
          </a>
        </nav>

        <div class="textContainer">
          <div style="padding: 0px 10px 10px 10px">
            <p class="white-label-20"><b>Where did zodiac signs come from ?</b></p>
            <p class="white-label-18"> The stars are just one of the many things in the natural world that human beings have turned to for answers over the years. </p>
            <p class="white-label-18"> “We don’t really know who first came up with the idea for looking at things in nature and divining influences on humans,” says astronomer Sten Odenwald, the director of Citizen Science at the NASA Space Science Education Consortium. “There’s some indication that cave art shows this idea that animals and things can be imbued with some kind of spirit form that then has an influence on you, and if you appease that spirit form, then you will have a successful hunt. That was taken over by the idea of divination, where you can actually look at things in nature and study them carefully, such as tea-leaf reading.” </p>
            <p class="white-label-18"> Some form of astrology shows up in various belief systems in ancient cultures.</p>
            <p class="white-label-18"> In Ancient China, noblemen looked at eclipses or sunspots as portents of good or bad times for their emperor, though it’s thought that those signs had less application to the lives of other individuals. (Odenwald points out that in societies where people in the lower classes had less control over their lives, divination could seem pointless.) The Sumarians and Babylonians, by around the middle of the second millennium BC, appeared to have had many divination practices — they looked at spots on the liver and the entrails of animals, for example — and their idea that watching planets and stars was a way to keep track of where gods were in the sky can be traced to The Venus tablet of Ammisaduqa. This tablet, which is dated to the first millennium BC and tracks the motion of Venus, is one of the earliest pieces of what’s been called Babylonian planetary omens. The ancient Egyptians contributed the idea that patterns of stars made up constellations, through which the sun appears to “move” at a specific times during the year.</p>
          </div>
        </div>
        
        <div class="textContainer">
          <div style="padding: 0px 10px 10px 10px">
            <p class="white-label-20"><b>What are the 12 signs of the zodiac ?</b></p>
            <p class="white-label-18">It was during this Ancient Greek period that the 12 star signs of the zodiac with which many people are likely familiar today — <a href="/horoscope/sign/0" data-link> Aries</a> (roughly March 21-April 19), <a href="/horoscope/sign/1" data-link> Taurus</a> (April 20-May 20), <a href="/horoscope/sign/2" data-link> Gemini</a> (May 21-June 20), <a href="/horoscope/sign/3" data-link> Cancer</a> (June 21-July 22), <a href="/horoscope/sign/4" data-link> Leo</a> (July 23-Aug. 22), <a href="/horoscope/sign/5" data-link> Virgo</a> (Aug. 23-Sept. 22), <a href="/horoscope/sign/6" data-link> Libra</a> (Sept. 23-Oct. 22), <a href="/horoscope/sign/7" data-link> Scorpio</a> (Oct. 23-Nov. 21), <a href="/horoscope/sign/8" data-link> Sagittarius</a> (Nov. 22-Dec. 21), <a href="/horoscope/sign/9" data-link> Capricorn</a> (Dec. 22-Jan. 19), <a href="/horoscope/sign/10" data-link> Aquarius</a> (Jan. 20 to Feb. 18) and <a href="/horoscope/sign/11" data-link> Pisces</a> (Feb. 19 to March 20) — were set down. These Western, or tropical, zodiac signs were named after constellations and matched with dates based on the apparent relationship between their placement in the sky and the sun.</p>
          </div>
        </div>
      </div>`)
    })
  }
}