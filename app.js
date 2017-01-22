'use-strict';

var start;
var counter = 0;
function start() {var intro = confirm('Hello what\'s your name?');
  console.log(start);
  while (start = true) {
    alert('Welcome ' + name + ', glad you\'re here!');
    break;

  }
  while (start = false){
    alert('Please enter a name!');
  }
};
start();
name(); 
      
       
function q1 () {var answer1 = prompt('Was I born in Kirkland, WA?').toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Right! Well done.');
    console.log('q1 Right!');
    counter++;
  } else {
    alert('Wrong! Try again...');
  
  }
  console.log('q1 wrong');       
    break; 
  }  

q1();

function q2() { var answer2 = prompt('Have I been playing guitar since I was 15?').toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Correct! Well done!');
    counter++;
    console.log('q2 right!');
  } else {
    alert('WRONG! How could you not know?');
    console.log('q2 wrong!');
  }
}

q2();

function q3() {var answer3 = prompt('Do I have 2 cats?').toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Correct! Well done!');
    counter++;
    console.log('q3 right!');
  } else {
    alert('WRONG!');
    console.log('q3 wrong!');
  }
}

q3();

function q4() {var answer4 = prompt('Do I hate the Sounders?').toLowerCase();
  if (answer4 === 'no' || answer4 === 'n') {
    alert('Correct! GO SOUNDERS!');
    console.log('q4 right!');
    counter++;
  } else {
    alert('WRONG!');
    console.log('q4 wrong!');
  }
}
q4();

function q5() {var answer5 = prompt('Do I manage a night club?').toLowerCase();
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Correct! I manage the Underground!');
    console.log('q5 right!');
    counter++;
  } else {
    alert('WRONG!');
    console.log('q5 wrong!');
  }
}

q5();

function q6() {

  var numberGameGuesses = 0;
  while(numberGameGuesses < 4) {
    var answer6 = parseInt(prompt('What is my favorite number?'));
    if (answer6 === 7) {
      alert('Correct! You are obviously strong with the force young padawan...');
      console.log('q6 right!');
      break;
      counter++;
    } else if(answer6 > 7) {
      alert('Wrong! You\'re answer is too high!');
      numberGameGuesses++;
    } else if(answer6 < 7) {
      alert('You\'re answer is too low!');
      numberGameGuesses++;
    } else {
      alert('Please enter a number!');
      numberGameGuesses++;
    }
    console.log('q6 wrong!');
  }
}
q6();

function q7() {
  var statesLivedIn = ['AZ', 'LA', 'NY'];
  var statesGuesses = 0;
  while(statesGuesses < 6) {
    var answer7 = prompt('What states have I lived in besides Washington? Please use state abbreviations for you\'re answer.').toUpperCase();
    if(answer7 === statesLivedIn[0] || answer7 === statesLivedIn[1] || answer7 === statesLivedIn[2]) {
      alert('Correct! I have lived in that state!');
      console.log('q7 right!');
      counter++;
      break;
    } else {
      alert('Sorry, you are incorrect!');
      console.log('q7 wrong!');
      statesGuesses++;
    }
  }
}
q7();

alert('You got' + counter + ' out of 7 correct!');
