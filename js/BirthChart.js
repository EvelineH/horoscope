import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Chart');
  }

  async getHtml() {
    return `
    <div id="mainContainer">
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

        <div class="textContainer">
            <div style="padding: 0px 10px 10px 10px">
                <p class="white-label-20"><b>What Is An Astrology Chart? The Birth Chart Explained</b></p>
                <p class="white-label-18"> An astrology birth chart—also called an astrology natal chart—is a map of where all the planets were in their journey around the Sun (from our vantage point on earth) at the exact moment you were born. An astrology chart reading can reveal your strengths and weaknesses, your opportunities for soul growth, the best timing for your most important moves.</p>
                <p class="white-label-18"> To calculate your astrology birth chart, you’ll need your time, date and place of birth. Some people don’t know their birth time. If you can’t find it on your birth certificate, you can try contacting the Vital Records office in your state or area of birth. And if that still doesn’t work, make as close of an estimate as you can or enter 12:00 noon. </p>
                <p class="white-label-18"> Without a birth time, you won’t be able to accurately learn your rising sign, or ascendant. Nor will you correctly know which houses the planets in your chart fall in. But there is still a LOT of data you can glean by entering your date and location of birth—so don’t let that stop you from checking out your astrology natal chart.</p>
                <p class="white-label-20"><b>What can an astrologer see in your chart?</b></p>
                <p class="white-label-18"> Astrology charts can turn up surprising insight about your patterns and preferences. They’re an excellent way of understanding your own “blind spots” and using that knowledge for personal growth and self-improvement. You can learn which talents to develop and where you may have weak spots to develop.</p>
                <p class="white-label-18"> Typically, an astrologer looks for a few key things in the birth chart</p>
                <ul>
                    <li class="white-label-18"><b> What zodiac sign and which of the 12 houses each planet in the chart is in</b></li>
                    <li class="white-label-18"><b> Venus, Mars and the moon’s zodiac sign and house for love</b></li>
                    <li class="white-label-18"><b> Saturn for where you may need to work harder, Jupiter for where you could be lucky</b></li>
                    <li class="white-label-18"><b> The “aspects” or angles formed between any two planets</b></li>
                    <li class="white-label-18"><b> If there’s a “stellium” (3 or more planets in one sign), which creates a heavy concentration of one specific energy for the person</b></li>
                    <li class="white-label-18"><b> The balance of elements (planets in fire, earth, air and water signs) in the chart</b></li>
                    <li class="white-label-18"><b> The balance of qualities in the chart (planets in cardinal, mutable or fixed signs)</b></li>
                    <li class="white-label-18"><b> The pattern formed by the planets (there are 7 classical chart “shapes”)</b></li>
                </ul>
                <p class="white-label-18"><i> In order to create your own natal map visit <a href="https://www.astrology.com/birth-chart/"> site </a></i></p>
            </div>
        </div>
    </div>
    `;
  }
}