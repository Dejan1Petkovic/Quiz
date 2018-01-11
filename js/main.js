let mainRow = document.querySelector('#mainRow');
let selectedQuizRow = document.querySelector('#selectedQuizRow');
let choseQuiz = document.querySelectorAll('.quiz');
let quizStartBtn = document.querySelector('#quizStartBtn');
let quizHeader = document.querySelector('#quizHeader');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let questionsRow = document.querySelector('#questionsRow');
let options = document.querySelectorAll('.option');
let counter = 0;
let currentQuestion ="";
let typeOfQuiz = '';
let data =[];
let score = 0;


for (var i = 0; i < choseQuiz.length; i++) {
  choseQuiz[i].addEventListener('click', choseQuizFunction);
}

function choseQuizFunction() {
  typeOfQuiz = this.innerHTML;
  if (typeOfQuiz == 'Geografy') {
    displaySelectedQuizRow(typeOfQuiz);
  } else if (typeOfQuiz == 'Math') {
    displaySelectedQuizRow(typeOfQuiz);
  } else if (typeOfQuiz == 'Sports') {
    displaySelectedQuizRow(typeOfQuiz);
  }
  quizStartBtn.addEventListener('click', displayGame)
}

function displayGame() {
  quizStartBtn.style.display = 'none';
  questionsRow.style.display = 'block';
  startGame();
}

function startGame() {
   data = quiz.cateqoryQuiz(typeOfQuiz);
   oneQuestion();
}

function oneQuestion() {
  if (counter !== data.length) {
     currentQuestion = data[counter];
    	h5.innerHTML = currentQuestion.text;

      let x = [0,1,2,3];

    	for (var i = 0; i < options.length; i++) {
    		let rand = Math.floor(Math.random()*x.length);
    		options[i].innerHTML = data[counter].options[x[rand]];
    		options[i].onclick = userAnswer;
    		x.splice(rand,1);
    	}
      	h4.innerHTML = 'Question '+(counter + 1)+' / '+data.length;
  }else {
  			h4.innerHTML ='Total score is : '+score+'!!!<br><a href="index.html">PLAY AGAIN</a>';
  }
}

function userAnswer() {
  if (currentQuestion.answer == this.innerHTML) {
    score += currentQuestion.points;
  }
  counter++;
	startGame();
}

function displaySelectedQuizRow(typeOfQuiz) {
  mainRow.style.display = 'none';
  selectedQuizRow.style.display = 'block';
  quizHeader.innerHTML = typeOfQuiz;
  let catNum = quiz.calcCat(typeOfQuiz);
  h5.innerHTML = 'This quiz has '+catNum+' questions and <br> each question is 5 points.'
}
