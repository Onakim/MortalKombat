const $arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Sword',
    attack: function() {
        console.log(this.name + ' Fight');
    }
};

const player2 = {
    player: 2,
    name: 'Sonia',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'Kunai',
    attack: function() {
        console.log(this.name + ' Fight');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
    $tag.classList.add(className);
};
    return $tag;
};
function createPlayer(playerClass, playerObj) {    
    const player = createElement('div', playerClass);
    const progress = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const img = createElement('img');

    life.style.width = playerObj.hp + '%';
    name.innerText = playerObj.name + playerObj.hp;
    img.src = playerObj.img;
    
    player.appendChild(progress);
    player.appendChild(character);
    progress.appendChild(life);
    progress.appendChild(name);
    character.appendChild(img);
    return player;
};

function changeHP(player) {
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.floor(Math.random() * 10);
    playerLife.style.width = player.hp + '%';
    let playerName = document.querySelector('.player' + player.player + '.name');
    playerName = player.name + player.hp;

    console.log(playerName);

    if (player.hp < 0) {
        $arenas.appendChild(playerLose(player.name));
    }
} 
function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' lose';
    return loseTitle;
}
randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);    
});
$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));

const nameHP = document.querySelectorAll('.name');
//nameHP.textContent = 

console.log(nameHP);