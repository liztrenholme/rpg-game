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
	if (opponentChosen === true && characterChosen === true) {
		offender.counterAttackPower = Math.round(offender.counterAttackPower * 1.05);
		defender.healthPoints = defender.healthPoints - offender.counterAttackPower;
		offender.healthPoints = offender.healthPoints - defender.counterAttackPower;

// displaying health points above each character
$("p#bob").text(bob.healthPoints);
$("p#linda").text(linda.healthPoints);
$("p#tina").text(tina.healthPoints);
$("p#gene").text(gene.healthPoints);
$("p#louise").text(louise.healthPoints);
}


// bob
if (bob.healthPoints < 1 && bob !== offender) {
	$("div#bob").hide();
	$(".defense-character").empty();
	opponentChosen = false;
	opponents.push("bob");
	$("button#brawl").hide();
	$("h2").text("Choose your next opponent!");
	clickyCharacters();
}
else if (bob.healthPoints < 1 && bob === offender) {
	$("div#bob").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (bob.healthpoints < 1 && defender.healthPoints < 1) {
	$("div#bob").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (opponents.length === 4) {
	$("h2").text("You won! Butts, butts, butts!!");
}

// linda
if (linda.healthPoints < 1 && linda !== offender) {
	$("div#linda").hide();
	$(".defense-character").empty();
	opponentChosen = false;
	opponents.push("linda");
	$("button#brawl").hide();
	$("h2").text("Choose your next opponent!");
	clickyCharacters();
}
else if (linda.healthPoints < 1 && linda === offender) {
	$("div#linda").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (linda.healthpoints < 1 && defender.healthPoints < 1) {
	$("div#linda").hide();
	$(".defense-character").empty();
	characterChosen = false;
	console.log(defender);
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (opponents.length === 4) {
	$("h2").text("You won! Butts, butts, butts!!");
}

// tina
if (tina.healthPoints < 1 && tina !== offender) {
	$("div#tina").hide();
	$(".defense-character").empty();
	opponentChosen = false;
	opponents.push("tina");
	$("button#brawl").hide();
	$("h2").text("Choose your next opponent!");
	clickyCharacters();
}
else if (tina.healthPoints < 1 && tina === offender) {
	$("div#tina").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (tina.healthpoints < 1 && defender.healthPoints < 1) {
	$("div#tina").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (opponents.length === 4) {
	$("h2").text("You won! Butts, butts, butts!!");
}

// gene
if (gene.healthPoints < 1 && gene !== offender) {
	$("div#gene").hide();
	$(".defense-character").empty();
	opponentChosen = false;
	opponents.push("gene");
	$("button#brawl").hide();
	$("h2").text("Choose your next opponent!");
	clickyCharacters();
}
else if (gene.healthPoints < 1 && gene === offender) {
	$("div#gene").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (gene.healthpoints < 1 && defender.healthPoints < 1) {
	$("div#gene").hide();
	$(".defense-character").empty();
	characterChosen = false;
	console.log(defender);
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (opponents.length === 4) {
	$("h2").text("You won! Butts, butts, butts!!");
}

// louise
if (louise.healthPoints < 1 && louise !== offender) {
	$("div#louise").hide();
	$(".defense-character").empty();
	opponentChosen = false;
	opponents.push("louise");
	$("button#brawl").hide();
	$("h2").text("Choose your next opponent!");
	clickyCharacters();
}
else if (louise.healthPoints < 1 && louise === offender) {
	$("div#louise").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (louise.healthpoints < 1 && defender.healthPoints < 1) {
	$("div#louise").hide();
	$(".defense-character").empty();
	characterChosen = false;
	$("h2").text("Uhhhhhhh. Game over.");
}
else if (opponents.length === 4) {
	$("h2").text("You won! Butts, butts, butts!!");
}
});
});

