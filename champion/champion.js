let champions = {};

const heroCardTemplate = document.querySelector('#hero-card');
const heroBox = document.querySelector('.hero-card-row');

fetch(
  'https://ddragon.leagueoflegends.com/cdn/10.22.1/data/zh_TW/champion.json'
)
  .then(function (response) {
    return response.json();
  })
  .then((c) => {
    champions = c.data;
    //todo
    showHeros();
  });

function showHeros() {
  Object.keys(champions).forEach((prop, index) => {
    const hero = champions[prop];
    let heroCard = heroCardTemplate.content.cloneNode(true);
    heroCard.querySelector(
      '.card-img-top'
    ).src = `https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${hero.id}_0.jpg`;
    heroCard.querySelector('.card-title').innerText = `${index + 1}. ${
      hero.id
    } - ${hero.name}`;
    heroCard.querySelector('.card-text').innerText =
      hero.blurb.substring(0, 30) + '...';

    heroCard.querySelector('.btn').onclick = function () {
      document.querySelector(
        '#exampleModalLabel'
      ).innerText = `${hero.id} - ${hero.name}`;
      document.querySelector(
        '.modal-img'
      ).src = `https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/${hero.id}_0.jpg`;
      Object.keys(hero.stats).forEach((detail) => {
        switch (detail) {
          case 'hp':
          case 'movespeed':
          case 'armor':
          case 'spellblock':
          case 'attackrange':
            document.querySelector(
              `.${detail}`
            ).innerText = `${detail.toUpperCase()} : ${hero.stats[detail]}`;
            break;
        }
      });
    };

    heroBox.append(heroCard);
  });
}
