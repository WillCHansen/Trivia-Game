function openNav() {
    document.getElementById("myNav").style.width = "70%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// openNav();

var questions = [
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
	},
];



