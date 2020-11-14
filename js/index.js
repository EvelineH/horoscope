import Home from './Home.js';
import General from './General.js';
import Celebrities from './Celebrities.js';
import Jobs from './Jobs.js';
import Compatibility from './Compatibility.js';
import Game from './Game.js';
import SignView from './SignView.js';
import { u } from './lib.js';

const cleanPath = path =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
      return [
        key,
        values[i]
      ];
    })
  );
};

const pushTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: u('/'), view: Home },
    { path: u('/general'), view: General },
    { path: u('/celebrities'), view: Celebrities },
    { path: u('/jobs'), view: Jobs },
    { path: u('/compatibility'), view: Compatibility },
    { path: u('/game'), view: Game },
    { path: u('/sign/:id'), view: SignView }
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(cleanPath(route.path))
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  
  if (!match) {
    match = {
      route: routes[0],
      result: [
        location.pathname
      ]
    };
  }
  
  const view = new match.route.view(getParams(match));
  document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      pushTo(e.target.href);
    }
  });
  router();
});
