$(document).ready(function() {

// setting up gameboard
$(".opponents").hide();
$("#brawl").hide();

var opponentChosen = false;
var characterChosen = false;
var opponents = [];

var bob = {
	healthPoints: 70,
	attackPoints: 10,
	counterAttackPower: 10
};

var linda = {
	healthPoints: 65,
	attackPoints: 8,
	counterAttackPower: 12
};

var tina = {
	healthPoints: 60,
	attackPoints: 8,
	counterAttackPower: 16
};

var gene = {
	healthPoints: 80,
	attackPoints: 5,
	counterAttackPower: 5
};

var louise = {
	healthPoints: 40,
	attackPoints: 18,
	counterAttackPower: 12
};

var offender;
var defender;

// onclick functions
function clickyCharacters() {
	$("p#bob").text(bob.healthPoints);
	$("div#bob").on("click", function() {
		if (characterChosen === false && opponentChosen === false) {
			offender = bob;
			opponents = [linda, tina, gene, louise];
			console.log(opponents);
			$(this).remove();
			$(this).appendTo(".offense-character");
			$("h2").text("Select your opponent!");
			$(".opponents").show();
			$(".characters-list").appendTo(".opponents");
			$(".opponents").addClass("brawl");
			characterChosen = true;
		}
		else if (characterChosen === true && opponentChosen === false) {
			defender = bob;
			$(this).remove();
			$(this).appendTo(".defense-character");
			$("h2").text("Get ready for a brawl!");
			$("#brawl").show();
			opponentChosen = true;
		}
		
	});

	$("p#linda").text(linda.healthPoints);
	$("div#linda").on("click", function() {
		if (characterChosen === false && opponentChosen === false) {
			offender = linda;
			opponents = [bob, tina, gene, louise];
			$(this).remove();
			$(this).appendTo(".offense-character");
			$("h2").text("Select your opponent!");
			$(".opponents").show();
			$(".characters-list").appendTo(".opponents");
			$(".opponents").addClass("brawl");
			characterChosen = true;
		}
		else if (characterChosen === true && opponentChosen === false) {
			defender = linda;
			$(this).remove();
			$(this).appendTo(".defense-character");
			$("h2").text("Get ready for a brawl!");
			$("#brawl").show();
			opponentChosen = true;
		}
	});

	
	$("p#tina").text(tina.healthPoints);
	$("div#tina").on("click", function() {
		if (characterChosen === false && opponentChosen === false) {
			offender = tina;
			opponents = [bob, linda, gene, louise];
			$(this).remove();
			$(this).appendTo(".offense-character");
			$("h2").text("Select your opponent!");
			$(".opponents").show();
			$(".characters-list").appendTo(".opponents");
			$(".opponents").addClass("brawl");
			characterChosen = true;
		}
		else if (characterChosen === true && opponentChosen === false) {
			defender = tina;
			$(this).remove();
			$(this).appendTo(".defense-character");
			$("h2").text("Get ready for a brawl!");
			$("#brawl").show();
			opponentChosen = true;
		}
	});

	
	$("p#gene").text(gene.healthPoints);
	$("div#gene").on("click", function() {
		if (characterChosen === false && opponentChosen === false) {
			offender = gene;
			opponents = [bob, linda, tina, louise];
			$(this).remove();
			$(this).appendTo(".offense-character");
			$("h2").text("Select your opponent!");
			$(".opponents").show();
			$(".characters-list").appendTo(".opponents");
			$(".opponents").addClass("brawl");
			characterChosen = true;
		}
		else if (characterChosen === true && opponentChosen === false) {
			defender = gene;
			$(this).remove();
			$(this).appendTo(".defense-character");
			$("h2").text("Get ready for a brawl!");
			$("#brawl").show();
			opponentChosen = true;
		}
	});

	
	$("p#louise").text(louise.healthPoints);
	$("div#louise").on("click", function() {
		if (characterChosen === false && opponentChosen === false) {
			offender = louise;
			opponents = [bob, linda, tina, gene];
			$(this).remove();
			$(this).appendTo(".offense-character");
			$("h2").text("Select your opponent!");
			$(".opponents").show();
			$(".characters-list").appendTo(".opponents");
			$(".opponents").addClass("brawl");
			characterChosen = true;
		}
		else if (characterChosen === true && opponentChosen === false) {
			defender = louise;
			$(this).remove();
			$(this).appendTo(".defense-character");
			$("h2").text("Get ready for a brawl!");
			$("#brawl").show();
			opponentChosen = true;
		}
	});
}
clickyCharacters();

// brawl button function and update health points for each character
$("button#brawl").on('click', function(){
	if (opponentChosen === true) {
		offender.counterAttackPower += offender.attackPoints;
		defender.healthPoints = defender.healthPoints - offender.counterAttackPower;
		offender.healthPoints = offender.healthPoints - defender.counterAttackPower;
		console.log(defender);
		console.log(offender);
		$("p#bob").text(bob.healthPoints);
		$("p#linda").text(linda.healthPoints);
		$("p#tina").text(tina.healthPoints);
		$("p#gene").text(gene.healthPoints);
		$("p#louise").text(louise.healthPoints);
	}
	if (bob.healthPoints <= 0) {
		$("div#bob").hide();
		$(".defense-character").empty();
		opponentChosen = false;
		$("button#brawl").hide();
		$("h2").text("Choose your next opponent!");
		clickyCharacters();
		if (bob === offender && bob.healthPoints <= 0 && defender.healthPoints > 0){
			$("h2").text("Uhhhhhhh. Game over.");
			console.log(defender);
		}
	}
	if (linda.healthPoints <= 0) {
		$("div#linda").hide();
		$(".defense-character").empty();
		opponentChosen = false;
		$("button#brawl").hide();
		$("h2").text("Choose your next opponent!");
		clickyCharacters();
		if (linda === offender && linda.healthPoints <= 0 && defender.healthPoints > 0){
			$("h2").text("Uhhhhhhh. Game over.");
			console.log(defender);
		}
	}
	if (tina.healthPoints <= 0) {
		$("div#tina").hide();
		$(".defense-character").empty();
		opponentChosen = false;
		$("button#brawl").hide();
		$("h2").text("Choose your next opponent!");
		clickyCharacters();
		if (tina === offender && tina.healthPoints <= 0 && defender.healthPoints > 0){
			$("h2").text("Uhhhhhhh. Game over.");
			console.log(defender);
		}
	}
	if (gene.healthPoints <= 0) {
		$("div#gene").hide();
		$(".defense-character").empty();
		opponentChosen = false;
		$("button#brawl").hide();
		$("h2").text("Choose your next opponent!");
		clickyCharacters();
		if (gene === offender && gene.healthPoints <= 0 && defender.healthPoints > 0){
			$("h2").text("Uhhhhhhh. Game over.");
			console.log(defender);
		}
	}
	if (louise.healthPoints <= 0) {
		$("div#louise").hide();
		$(".defense-character").empty();
		opponentChosen = false;
		$("button#brawl").hide();
		$("h2").text("Choose your next opponent!");
		clickyCharacters();
		if (louise === offender && louise.healthPoints <= 0 && defender.healthPoints > 0){
			$("h2").text("Uhhhhhhh. Game over.");
			console.log(defender);
		}
	}

	
	//	reset();


});





});

