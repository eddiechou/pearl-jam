var Game = {};

Game.init = function() {
	game.state.disableVisibilityChange = true;
};

Game.preload = function() {
	game.load.image('background', 'assets/board.png');
	game.load.image('character', 'assets/ball.png');
}

Game.create = function() {
	Game.playerMap = {};
	Game.add.sprite(0, 0, 'background');
	Client.askNewPlayer();
}

Game.addNewPlayer = function(id, x, y) {
	Game.playerMap[id] = Game.add.sprite(x, y, 'character');
}

Game.remove = function(id) {
	Game.playerMap[id].destroy();
	delete Game.playerMap[id];
}