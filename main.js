const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Sword',
    attack: function() {
        console.log(this.name + ' Fight');
    },
};

const player2 = {
    name: 'Sonia',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'Kunai',
    attack: function() {
        console.log(this.name + ' Fight');
    },
};

function createPlayer(playerClass, player1) {
    const player = document.createElement('div');
    const progress = document.createElement('div');
    const character = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const img = document.createElement('img');
    player.classList.add(playerClass);
    progress.classList.add('progressBar');
    character.classList.add('character');
    life.classList.add('life');
    name.classList.add('name');
    document.querySelector('.arenas').appendChild(player);
    player.appendChild(progress);
    player.appendChild(character);
    progress.appendChild(life);
    progress.appendChild(name);
    character.appendChild(img);
    life.style.width = player1.hp + '%';
    name.innerText = player1.name;
    img.src = player1.img
};
createPlayer('player1', player1);
createPlayer('player2', player2);