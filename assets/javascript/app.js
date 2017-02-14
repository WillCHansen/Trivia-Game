var trivia = {
	curQ: 0,
	incorrect: 0,
	correct: 0,
	questions: [
		{
			question:"What is the largest freshwater lake in the world?",
			answerarr: ["Lake Bigwater","Lake Superior","Lake Wronganswer","The Ocean"],
			answer:"Lake Superior"
		},
		{
			question:"Where would you find the Sea of Tranquility?",
			answerarr: ["Canada","South","It Doesn't Exist","The Moon"],
			answer:"The Moon"
		},
		{
			question:"What is someone who shoes horses called?",
			answerarr: ["A farrier","Brave","Horses don't wear shoes.","Crazy"],
			answer:"A farrier"
		},
		{
			question:"Who invented the rabies vaccination?",
			answerarr: ["Henry McRabie","People naturally grew an immunity to Rabies.","Charles Foammouth","Louis Pasteur"],
			answer:"Louis Pasteur"
		},
		{
			question:"Polar bears feed mainly on what animal?",
			answerarr: ["Seals","People","Fish","Polar Bears have been extinct since the ice melted."],
			answer:"Seals"
		},
		{
			question:"In computer science, what does GUI stand for?",
			answerarr: ["Green up information","Gross ugly insects","Graphical user interface","There's no such thing as a GUI."],
			answer:"Graphical user interface"
		},
		{
			question:"What popular beverage once contained cocaine?",
			answerarr: ["Water","Coca-Cola","Gatorade","No one has ever put cocaine in a drink."],
			answer:"Coca-Cola"
		},
		{
			question:"A shuttlecock is used in what sport?",
			answerarr: ["Cricket","Football","Shuffleboard","Badmiton"],
			answer:"Badmiton"
		},
		{
			question:"Vodka, Galliano and orange juice are used to make which classic cocktail?",
			answerarr: ["Harvey Wallbanger","I don't know drink names.","Screwdriver","Uhhhhhhhhh"],
			answer:"Harvey Wallbanger"
		},
		{
			question:"What is converted into alcohol during brewing?",
			answerarr: ["Beer","Yeast","Moonshine","Sugar"],
			answer:"Sugar"
		}
	],
	gameStart: function(gameAreaSelector){
		$(gameAreaSelector).append("<h2>"+this.questions[this.curQ].question+"</h2>");
		for (var i = 0; i < this.questions[this.curQ].answerarr.length; i++) {
			$(gameAreaSelector).append("<p>"+this.questions[this.curQ].answerarr[i]+"</p>");
		}
		var pSelect = gameAreaSelector + " p";
		$(pSelect).each(function(){
			$(this).on("click", function(){
				if ($(this).html() == trivia.questions[trivia.curQ].answer){
					trivia.gameWin();
				}
				else{
					trivia.gameLose();
				}
			});
		});
		this.startTimer();
	},
	count: function(){
		counter--;
		$(".mainContent h3").html("Time Left: "+counter);
		if (counter == 0) {
			console.log("its 0")
			trivia.timeUp();
		};
	},
	startTimer: function(){
		counter = 20;
		timer = setInterval(trivia.count, 1000);
	},
	gameLose: function(){
		this.incorrect++;
		clearInterval(timer);
		console.log("loss");
		$(".mainContent p").remove();
		$(".mainContent").append("<p>Wrong! The correct answer was:</p>");
		$(".mainContent").append("<p>"+this.questions[this.curQ].answer+"</p>");
		setTimeout(function(){
			$(".mainContent p").remove();
			$(".mainContent h2").remove();
			trivia.curQ++;
			if (trivia.curQ == 10) {
				trivia.gameEnd();
			}
			else {
				trivia.gameStart(".mainContent");
			}
		}, 1000 * 4);
	},
	timeUp: function(){
		this.incorrect++;
		clearInterval(timer);
		$(".mainContent p").remove();
		$(".mainContent").append("<p>Time's up! The correct answer was:</p>");
		$(".mainContent").append("<p>"+this.questions[this.curQ].answer+"</p>");
		setTimeout(function(){
			$(".mainContent p").remove();
			$(".mainContent h2").remove();
			trivia.curQ++;
			if (trivia.curQ == 10) {
				trivia.gameEnd();
			}
			else {
				trivia.gameStart(".mainContent");
			}
		}, 1000 * 4);
	},
	gameWin: function(){
		this.correct++;
		clearInterval(timer);
		$(".mainContent p").remove();
		$(".mainContent").append("<p>Correct! Good Job!</p>");
		$(".mainContent").append("<p>"+this.questions[this.curQ].answer+"</p>");
		setTimeout(function(){
			$(".mainContent p").remove();
			$(".mainContent h2").remove();
			trivia.curQ++;
			if (trivia.curQ == 10) {
				trivia.gameEnd();
			}
			else {
				trivia.gameStart(".mainContent");
			}
		}, 1000 * 4);
	},
	gameEnd: function(){
		console.log("end")
		$(".mainContent").append("<h2>Game Over</h2>");
		$(".mainContent").append("<p>You got:</p>");
		$(".mainContent").append("<p>"+trivia.correct+" correct</p>");
		$(".mainContent").append("<p>"+trivia.incorrect+" incorrect</p>");
		$(".mainContent").append("<h2>Start Over</h2>");
		$(".mainContent h2:eq(1)").on("click", function(){
			trivia.curQ = 0;
			trivia.correct = 0;
			trivia.incorrect = 0;
			$(".mainContent p").remove();
			$(".mainContent h2").remove();
			$(".mainContent h2:eq(1)").remove();
			trivia.gameStart(".mainContent");
		});
	},
};

$("#start").on("click", function(){
	this.remove();
	trivia.gameStart(".mainContent");
});

// console.log(trivia.questions[1].question)



