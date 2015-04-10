
(function PLAYER() {

	var Player = function(name, credit) {
		this.name = nameTedicaro;
		if (credit) { 
			this.credit = credit;
		}
		else {
			this.credit = "100";
		}
		console.log('Created a player '+ this.name);
	};

	Player.prototype.changeName = function(newName) {
		this.forename = newName;
	};
	
	Player.prototype.updateCredit = function(newCredit) {
		this.credit = newCredit;
	};
	
	Player.prototype.showCredit = function() {
		console.log("The credit is:"+ this.credit);
	};

	window.Player = Player;

})();

var player1 = new Player('Tomek');
var player2 = new Player('Gary', '400');
var player3 = new Player('Carl');

player1.updateCredit('200');

player1.showCredit();
player2.showCredit();
player3.showCredit();