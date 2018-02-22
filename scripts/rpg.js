
$(document).ready(function() {
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
		$(this).remove();
		$(this).appendTo(".offense-character");
		$("h2").text("Select your opponent!");
		$(this).text(this.healthPoints);
		$(".characters-list").appendTo(".opponents");
		$(".opponents").addClass("brawl");
	});




/*
	$("img#linda").on("click", function() {
		$("img#linda").remove();
	});

	$("img#gene").on("click", function() {
		$("img#gene").remove();
	});

	$("img#louise").on("click", function() {
		$("img#louise").remove();
	});

	$("img#tina").on("click", function() {
		$("img#tina").remove();
	});




/*
	$("#bob").on("click", function() {

	});

	$("#linda").on("click", function() {

	});

	$("#tina").on("click", function() {

	});

	$("#gene").on("click", function() {

	});

	$("#louise").on("click", function() {

	});
*/

});
