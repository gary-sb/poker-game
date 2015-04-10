
(function PLAYER() {

	var Player = function(name, credit) {

		var playerName = name; //set initial name of the player

		if (credit) {           //block statement to check the initial amount of chips assigned to the player
			var chips = credit;
		} else {
			chips = "100";
		}

		// Getter and setter for the Player name
		this.getName = function(){
			return playerName;
		};
		this.setName = function(newName) {
			playerName = newName;
		};

		// Getter and Setter for the amount of chips of the Player
		this.getChips = function(){
			return chips;
		};
		this.setChips = function(newChips) {
			chips = newChips;
		};

		console.log('Created a player '+ playerName +' with this amount of chips '+ chips);
	};

	window.Player = Player;

})();

var player1 = new Player('Tomek');
var player2 = new Player('Gary', '400');
var player3 = new Player('Carl', '1000');

player1.setName('Tomekkio');
player1.setChips('200');

console.log(player1.getName());
console.log(player1.getChips());