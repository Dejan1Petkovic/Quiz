function Questions(text, options, answer, points, category) {
	this.text = text;
	this.options = options;
	this.answer = answer;
	this.points = points;
  this.category = category;
}



let questions = [
	new Questions("Which is the capital of Serbia?", ["Zagreb", "Subotica", "Belgrade", "Kikinda"], "Belgrade", 5, "Geografy"),
	new Questions("Which is the capital of Croatia?", ["Zagreb", "Subotica", "Sofija", "Kikinda"], "Zagreb", 5, "Geografy"),
	new Questions("Which is the capital of Macedonia?", ["Zagreb", "Subotica", "Skopje", "Kikinda"], "Skopje", 5, "Geografy"),
	new Questions("Which is the capital of Bulgary?", ["Sofija", "Subotica", "Zagreb", "Kikinda"], "Sofija", 5, "Geografy"),
	new Questions("Which is the capital of Slovenia?", ["Zagreb", "Subotica", "Kikinda", "Ljubljana"], "Ljubljana", 5, "Geografy"),
	new Questions("Which is the capital of Hungary?", ["Zagreb", "Subotica", "Budapest", "Kikinda"], "Budapest", 5, "Geografy"),
	new Questions("Which is the capital of Slovakia?", ["Zagreb", "Subotica", "Bratislava", "Kikinda"], "Bratislava", 5, "Geografy"),
	new Questions("Which is the capital of Italy?", ["Zagreb", "Kikinda", "Roma", "Subotica"], "Roma", 5, "Geografy"),
  new Questions("2+2?", ["8", "3", "4", "5"], "4", 5, "Math"),
	new Questions("10+4?", ["13", "14", "15", "16"], "14", 5, "Math"),
	new Questions("7-3?", ["4", "3", "5", "6"], "4", 5, "Math"),
	new Questions("8-2?", ["6", "5", "4", "7"], "6", 5, "Math"),
	new Questions("15-4?", ["12", "11", "10", "13"], "11", 5, "Math"),
	new Questions("2+5-4?", ["2", "3", "4", "5"], "3", 5, "Math"),
	new Questions("1+3?", ["4", "3", "5", "2"], "4", 5, "Math"),
	new Questions("The most trofy footbal club is?", ["Partizan", "Herta", "Real Madrid", "Chelsea"], "Real Madrid", 5, "Sports"),
	new Questions("The most trofy basketball club in Serbia is?", ["Partizan", "Red Star", "Vojvodina", "Megaleks"], "Partizan", 5, "Sports"),
	new Questions("The most trofy basketball national team in Europe is?", ["Spain", "Serbia", "Russia", "Greece"], "Serbia", 5, "Sports"),
]
