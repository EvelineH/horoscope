 
import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Love Compatibility');
  }

  async fetchData() {
    return new Promise(function(resolve, reject) {
        fetch('/horoscope/back/compatibility.json')
        // fetch('../back/compatibility.json')
        .then(response => response.json())
        .then(compData => {
            compData = compData.data
            console.log(compData)
            resolve(compData);
        })
    })
  }

  async getHtml() {
    var compData = await this.fetchData()
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

      <p class="white-label-30"><b>Love Compatibility</b></p>

      <div style="overflow-x:auto;">
        <table>
          <tr>
            <th></th>
            <th><a href="/horoscope/sign/0" data-link>Aries</a></th>
            <th><a href="/horoscope/sign/1" data-link>Taurus</a></th>
            <th><a href="/horoscope/sign/2" data-link>Gemini</a></th>
            <th><a href="/horoscope/sign/3" data-link>Cancer</a></th>
            <th><a href="/horoscope/sign/4" data-link>Leo</a></th>
            <th><a href="/horoscope/sign/5" data-link>Virgo</a></th>
            <th><a href="/horoscope/sign/6" data-link>Libra</a></th>
            <th><a href="/horoscope/sign/7" data-link>Scorpio</a></th>
            <th><a href="/horoscope/sign/8" data-link>Sagittarius</a></th>
            <th><a href="/horoscope/sign/9" data-link>Capricorn</a></th>
            <th><a href="/horoscope/sign/10" data-link>Aquarius</a></th>
            <th><a href="/horoscope/sign/11" data-link>Pisces</a></th>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/0" data-link>Aries</a></td>
            <td>${compData[0].percents[0]}</td>
            <td>${compData[0].percents[1]}</td>
            <td>${compData[0].percents[2]}</td>
            <td>${compData[0].percents[3]}</td>
            <td>${compData[0].percents[4]}</td>
            <td>${compData[0].percents[5]}</td>
            <td>${compData[0].percents[6]}</td>
            <td>${compData[0].percents[7]}</td>
            <td>${compData[0].percents[8]}</td>
            <td>${compData[0].percents[9]}</td>
            <td>${compData[0].percents[10]}</td>
            <td>${compData[0].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/1" data-link>Taurus</a></td>
            <td>${compData[1].percents[0]}</td>
            <td>${compData[1].percents[1]}</td>
            <td>${compData[1].percents[2]}</td>
            <td>${compData[1].percents[3]}</td>
            <td>${compData[1].percents[4]}</td>
            <td>${compData[1].percents[5]}</td>
            <td>${compData[1].percents[6]}</td>
            <td>${compData[1].percents[7]}</td>
            <td>${compData[1].percents[8]}</td>
            <td>${compData[1].percents[9]}</td>
            <td>${compData[1].percents[10]}</td>
            <td>${compData[1].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/2" data-link>Gemini</a></td>
            <td>${compData[2].percents[0]}</td>
            <td>${compData[2].percents[1]}</td>
            <td>${compData[2].percents[2]}</td>
            <td>${compData[2].percents[3]}</td>
            <td>${compData[2].percents[4]}</td>
            <td>${compData[2].percents[5]}</td>
            <td>${compData[2].percents[6]}</td>
            <td>${compData[2].percents[7]}</td>
            <td>${compData[2].percents[8]}</td>
            <td>${compData[2].percents[9]}</td>
            <td>${compData[2].percents[10]}</td>
            <td>${compData[2].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/3" data-link>Cancer</a></td>
            <td>${compData[3].percents[0]}</td>
            <td>${compData[3].percents[1]}</td>
            <td>${compData[3].percents[2]}</td>
            <td>${compData[3].percents[3]}</td>
            <td>${compData[3].percents[4]}</td>
            <td>${compData[3].percents[5]}</td>
            <td>${compData[3].percents[6]}</td>
            <td>${compData[3].percents[7]}</td>
            <td>${compData[3].percents[8]}</td>
            <td>${compData[3].percents[9]}</td>
            <td>${compData[3].percents[10]}</td>
            <td>${compData[3].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/4" data-link>Leo</a></td>
            <td>${compData[4].percents[0]}</td>
            <td>${compData[4].percents[1]}</td>
            <td>${compData[4].percents[2]}</td>
            <td>${compData[4].percents[3]}</td>
            <td>${compData[4].percents[4]}</td>
            <td>${compData[4].percents[5]}</td>
            <td>${compData[4].percents[6]}</td>
            <td>${compData[4].percents[7]}</td>
            <td>${compData[4].percents[8]}</td>
            <td>${compData[4].percents[9]}</td>
            <td>${compData[4].percents[10]}</td>
            <td>${compData[4].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/5" data-link>Virgo</a></td>
            <td>${compData[5].percents[0]}</td>
            <td>${compData[5].percents[1]}</td>
            <td>${compData[5].percents[2]}</td>
            <td>${compData[5].percents[3]}</td>
            <td>${compData[5].percents[4]}</td>
            <td>${compData[5].percents[5]}</td>
            <td>${compData[5].percents[6]}</td>
            <td>${compData[5].percents[7]}</td>
            <td>${compData[5].percents[8]}</td>
            <td>${compData[5].percents[9]}</td>
            <td>${compData[5].percents[10]}</td>
            <td>${compData[5].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/6" data-link>Libra</a></td>
            <td>${compData[6].percents[0]}</td>
            <td>${compData[6].percents[1]}</td>
            <td>${compData[6].percents[2]}</td>
            <td>${compData[6].percents[3]}</td>
            <td>${compData[6].percents[4]}</td>
            <td>${compData[6].percents[5]}</td>
            <td>${compData[6].percents[6]}</td>
            <td>${compData[6].percents[7]}</td>
            <td>${compData[6].percents[8]}</td>
            <td>${compData[6].percents[9]}</td>
            <td>${compData[6].percents[10]}</td>
            <td>${compData[6].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/7" data-link>Scorpio</a></td>
            <td>${compData[7].percents[0]}</td>
            <td>${compData[7].percents[1]}</td>
            <td>${compData[7].percents[2]}</td>
            <td>${compData[7].percents[3]}</td>
            <td>${compData[7].percents[4]}</td>
            <td>${compData[7].percents[5]}</td>
            <td>${compData[7].percents[6]}</td>
            <td>${compData[7].percents[7]}</td>
            <td>${compData[7].percents[8]}</td>
            <td>${compData[7].percents[9]}</td>
            <td>${compData[7].percents[10]}</td>
            <td>${compData[7].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/8" data-link>Sagittarius</a></td>
            <td>${compData[8].percents[0]}</td>
            <td>${compData[8].percents[1]}</td>
            <td>${compData[8].percents[2]}</td>
            <td>${compData[8].percents[3]}</td>
            <td>${compData[8].percents[4]}</td>
            <td>${compData[8].percents[5]}</td>
            <td>${compData[8].percents[6]}</td>
            <td>${compData[8].percents[7]}</td>
            <td>${compData[8].percents[8]}</td>
            <td>${compData[8].percents[9]}</td>
            <td>${compData[8].percents[10]}</td>
            <td>${compData[8].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/9" data-link>Capricorn</a></td>
            <td>${compData[9].percents[0]}</td>
            <td>${compData[9].percents[1]}</td>
            <td>${compData[9].percents[2]}</td>
            <td>${compData[9].percents[3]}</td>
            <td>${compData[9].percents[4]}</td>
            <td>${compData[9].percents[5]}</td>
            <td>${compData[9].percents[6]}</td>
            <td>${compData[9].percents[7]}</td>
            <td>${compData[9].percents[8]}</td>
            <td>${compData[9].percents[9]}</td>
            <td>${compData[9].percents[10]}</td>
            <td>${compData[9].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/10" data-link>Aquarius</a></td>
            <td>${compData[10].percents[0]}</td>
            <td>${compData[10].percents[1]}</td>
            <td>${compData[10].percents[2]}</td>
            <td>${compData[10].percents[3]}</td>
            <td>${compData[10].percents[4]}</td>
            <td>${compData[10].percents[5]}</td>
            <td>${compData[10].percents[6]}</td>
            <td>${compData[10].percents[7]}</td>
            <td>${compData[10].percents[8]}</td>
            <td>${compData[10].percents[9]}</td>
            <td>${compData[10].percents[10]}</td>
            <td>${compData[10].percents[11]}</td>
          </tr>
          <tr>
            <td><a href="/horoscope/sign/11" data-link>Pisces</a></td>
            <td>${compData[11].percents[0]}</td>
            <td>${compData[11].percents[1]}</td>
            <td>${compData[11].percents[2]}</td>
            <td>${compData[11].percents[3]}</td>
            <td>${compData[11].percents[4]}</td>
            <td>${compData[11].percents[5]}</td>
            <td>${compData[11].percents[6]}</td>
            <td>${compData[11].percents[7]}</td>
            <td>${compData[11].percents[8]}</td>
            <td>${compData[11].percents[9]}</td>
            <td>${compData[11].percents[10]}</td>
            <td>${compData[11].percents[11]}</td>
          </tr>
        </table>
      </div>
    </div>
    `;
  }
}