
$(document).ready(function() {
	var opponentChosen = 0;
	var characterChosen = 0;
	var opponents = [];

	var bob = {
		healthPoints: 70,
		attackPoints: 10,
		counterAttackPower: 10
	};
	$("p#bob").text(bob.healthPoints);

	var linda = {
		healthPoints: 65,
		attackPoints: 8,
		counterAttackPower: 12
	};
	$("p#linda").text(linda.healthPoints);

	var tina = {
		healthPoints: 60,
		attackPoints: 8,
		counterAttackPower: 16
	};
	$("p#tina").text(tina.healthPoints);

	var gene = {
		healthPoints: 80,
		attackPoints: 5,
		counterAttackPower: 5
	};
	$("p#gene").text(gene.healthPoints);

	var louise = {
		healthPoints: 40,
		attackPoints: 18,
		counterAttackPower: 12
	};
	$("p#louise").text(louise.healthPoints);


	$(document).on("click", ".character", function() {
		if (characterChosen === 0 && opponentChosen === 0) {
		$(this).remove();
		$(this).appendTo(".offense-character");
		$("h2").text("Select your opponent!");
		$(".characters-list").appendTo(".opponents");
		$(".opponents").addClass("brawl");
		characterChosen++;
	}
	else if (characterChosen !== 0 && opponentChosen === 0) {
		$(this).remove();
		$(this).appendTo(".defense-character");
		$("h2").text("Get ready for a brawl!");
		opponentChosen++;
	}

	//if opponentChosen !== 0, then brawl button function
	//brawl button -> subtract attack from HP, counter
	//if opponentChosen HP <= 0, hide(), select next
	//if characterChosen <= 0, game ends, user loses
	//if opponents === 0, game ends, user wins

	});





});
