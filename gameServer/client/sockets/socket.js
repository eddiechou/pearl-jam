var Client = {};
Client.socket = io.connect()

Client.askNewPlayer = function() {
	Client.socket.emit('addNewPlayer');
};

Client.socket.on('newPlayer', function(data) {
	console.log(data);
	Game.addNewPlayer(data.id, data.x, data.y);
})

Client.socket.on('allPlayers', function(data) {
	data.forEach((player) => {
		Game.addNewPlayer(player.id, player.x, player.y);
	})
})

Client.socket.on('remove', function(playerId) {
	Game.remove(playerId);
})