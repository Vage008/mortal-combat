const player1 = {   //Создали обьект
    name: 'SCORPION', //дали последующие значения этому обьекту
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai', 'Sherengan', 'Biokogan'],
    attack() { // Cоздали функцию и тело функцию
        console.log(player1.name + ' ' + 'Fight...')
    },
};

const player2 = {
    name: 'KITANA',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Suriken', 'kickfight', 'Bigdrama'],
    attack() {
        console.log(player2.name + ' ' + 'Fight...')
    },
};

function createPlayer(playerClass, objectName) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');
    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($progressBar);
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = objectName.hp + '%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = objectName.name;
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = objectName.img;
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);