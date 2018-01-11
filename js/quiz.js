function Quiz(questions) {
	this.questions = questions;
}

Quiz.prototype.cateqoryQuiz = function(cat) {
	let category = cat;
	if (category) {
		 filter = this.questions.filter(function (e) {
			return e.category == category;
		})
		return filter;
	}
};


Quiz.prototype.calcCat = function(cat) {
	let category = cat;
	if (category) {
		 filter = this.questions.filter(function (e) {
			return e.category == category;
		})
		return filter.length;
	}
};

let quiz = new Quiz(questions);
