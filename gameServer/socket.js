module.exports = function(io) {

	var lastPlayerId = 0

	io.on('connection', function(socket) {
		console.log('connected');
		socket.on('addNewPlayer', function() {
			socket.player = {
				id: lastPlayerId++,
				x: Math.random() * 900,
				y: Math.random() * 600
			}
			socket.emit('allPlayers', getAllPlayers());
			socket.broadcast.emit('newPlayer', socket.player);
		})

		socket.on('disconnect', function() {
			io.emit('remove', socket.player.id);
		})

	})

	function getAllPlayers() {
		var players = [];
		Object.keys(io.sockets.connected).forEach(function(socketID) {
			var player = io.sockets.connected[socketID].player;
			if (player) {
				players.push(player);
			}
		});
		return players;
	}

}
