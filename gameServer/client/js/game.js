var Game = {};

Game.init = function() {
	game.state.disableVisibilityChange = true;
};

Game.preload = function() {
	game.load.image('background', 'assets/board.png');
	game.load.image('character', 'assets/ball.png');
}

Game.create = function() {
	Game.add.sprite(0, 0, 'background');
}
Game.addNewPlayer = function(id) {
	Game.add.sprite(0, 0, 'character');
}