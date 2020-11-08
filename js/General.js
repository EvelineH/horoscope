 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('General');
  }

  async getHtml() {
    return `
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

    <div class="textContainer">
      <p class="white-label-30"><b>Where did zodiac signs come from?</b></p>
      <p class="white-label-18">  The stars are just one of the many things in the natural world that human beings have turned to for answers over the years. </p>
      <p class="white-label-18">  “We don’t really know who first came up with the idea for looking at things in nature and divining influences on humans,” says astronomer Sten Odenwald, the director of Citizen Science at the NASA Space Science Education Consortium. “There’s some indication that cave art shows this idea that animals and things can be imbued with some kind of spirit form that then has an influence on you, and if you appease that spirit form, then you will have a successful hunt. That was taken over by the idea of divination, where you can actually look at things in nature and study them carefully, such as tea-leaf reading.” </p>
      <p class="white-label-18">  Some form of astrology shows up in various belief systems in ancient cultures.</p>
      <p class="white-label-18">  In Ancient China, noblemen looked at eclipses or sunspots as portents of good or bad times for their emperor, though it’s thought that those signs had less application to the lives of other individuals. (Odenwald points out that in societies where people in the lower classes had less control over their lives, divination could seem pointless.) The Sumarians and Babylonians, by around the middle of the second millennium BC, appeared to have had many divination practices — they looked at spots on the liver and the entrails of animals, for example — and their idea that watching planets and stars was a way to keep track of where gods were in the sky can be traced to The Venus tablet of Ammisaduqa. This tablet, which is dated to the first millennium BC and tracks the motion of Venus, is one of the earliest pieces of what’s been called Babylonian planetary omens. The ancient Egyptians contributed the idea that patterns of stars made up constellations, through which the sun appears to “move” at a specific times during the year.</p>
    </div>
</div>`;
  }
}