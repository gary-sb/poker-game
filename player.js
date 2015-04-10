//Tomek task

(function PLAYER() {
	var Player = function(name, credit) {
		this.name = name;
			if (credit) { 
				var credit = credit;
			}
			else {
				var credit = 100;
			}
		 this.showCredit = function(){
       	 return credit;
   		 };
		this.updateCredit = function(newCredit) {
		credit = newCredit;
		};
		console.log('Created a player '+ this.name +' with a credit of ' +credit);
	};
	Player.prototype.changeName = function(newName) {
		this.forename = newName;
	};
	window.Player = Player;
})();

var player1 = new Player('Tomek');
var player2 = new Player('Gary', '400');
var player3 = new Player('Carl');

player1.updateCredit('200');

console.log(player1.showCredit());
console.log(player2.showCredit());
console.log(player3.showCredit());
