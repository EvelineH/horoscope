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
          <a href="/horoscope/compatibility" class="nav__link" data-link>Love Compatibility</a>
          <a href="/horoscope/chart" class="nav__link" data-link>Birth Chart</a>
          <a href="/horoscope/game" class="nav__link" data-link>Guess Sign</a>
          <a href="javascript:void(0);" class="icon" onclick="navFunction()">
              <i class="fa fa-bars"></i>
          </a>
        </nav>

        <div style="width=60%; margin:auto">
          <div class="signCard" style="overflow:hidden">
            <div style="margin:0px 52px 0px 52px">
              <img src="/horoscope/assets/daily-${sign.sign}.jpg" width=96px height=96px>
            </div>
            <div class="signCardcontainer">
              <p class="white-label-20"><b>${sign.sign}</b></p> 
              <p class="white-label-17">Element: ${sign.element}</p> 
              <p class="white-label-17">Ruling Planet: ${sign.planet}</p>
              <p class="white-label-17">Ruling House: ${sign.house}</p> 
              <p class="white-label-17">Quality: ${sign.quality}</p> 
            </div>
          </div>
          
          <div class="textContainer" style="overflow:hidden; width:80%; margin-top:30px">
            <div>
              <p class="white-label-20-j"><b>Sign Facts</b></p>
              <p class="white-label-18">${sign.overview}</p>
            </div>

            <div>
              <p class="white-label-20-j"><b>Celebrities</b></p>
              <p class="white-label-18">${sign.celebrities}</p>
              <p class="white-label-18">Click on link to see more <a href="https://www.onthisday.com/people/star-signs.php">${sign.sign} stars</a></p>
            </div>
          </div>

        </div>
    </div>
    <script>
      revealCelebrities(sign.celebrities)
    </script>
    <footer>
      <p><b>Motto of Sign</p>
      <p><i>"${sign.motto}"</i>
    </footer>`;
  }
}