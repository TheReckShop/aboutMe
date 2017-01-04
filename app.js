'use strict';

var greeting = confirm('Hello, I\'m David C Cole\'s aboutMe Bot! We are going to play a guessing game! All questions have yes or no answers. Are you ready?');

if (greeting) {
  console.log('Woot! You straight prepared holmes!');
} else {
  console.log('OH NO! AHHHHHHHHHHHHH');
}

var user = prompt('What is your name Bruh?');
console.log('This user\'s name is ' + user + '!');
document.write('User name is: ' + user);

var rightAnswer = 0;

var q1 = prompt('So first question ' + user + ': Does David own two cats?').toUpperCase();
document.write('So first question ' + user + ': Does David own two cats?');

if (q1 === 'YES' || q1 === 'Y' || q1 === 'YA') {
  alert('OMG! You are TOTES RIGHT!');
  console.log('They got q1 right!');
  document.write('q1 RIGHT!');
  rightAnswer ++;
  console.log('Answers correct = ' + rightAnswer);
} else {
  alert('WA WA WA WAAAAAAA! You got it wrong. He has two kitties!');
  console.log('They got q1 wrong!');
  document.write('q1 WRONG!');
}

var q2 = prompt('Second question ' + user + ': Does David manage a night club on the weekends?').toUpperCase();
document.write('Second question ' + user + ': Does David manage a night club on the weekends?');

if (q2 === 'YES' || q2 === 'Y' || q2 === 'YA') {
  alert('CORRECT! You\'re a smart cookie!');
  console.log('They got q2 right!');
  document.write('You got q2 right!');
  rightAnswer++;
  console.log('Answers correct = ' + rightAnswer);
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. He does manage a nightclub on the weekends. He hates mondays');
  console.log('They got q2 wrong!');
  document.write('You got q2 wrong!');
}

var q3 = prompt('Third question ' + user + ': Is David going to the Seahawks Playoff game this weekend?').toUpperCase();
document.write('Third question ' + user + ': Is David going to the Seahawks Playoff game this weekend?');

if (q3 === 'YES' || q3 === 'Y' || q3 === 'YA') {
  alert('YUUUUUUUPPPPPP! You\'re a smart cookie!');
  console.log('They got q3 right!');
  document.write('q3 RIGHT!');
  rightAnswer++;
  console.log('Answers correct = ' + rightAnswer);
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. GO HAWKS!');
  console.log('They got q3 wrong!');
  document.write('q3 WRONG!');
}

var q4 = prompt('fourth question ' + user + ': Does David love the Portland Timbers?').toUpperCase();
document.write('fourth question ' + user + ': Does David love the Portland Timbers?');

if (q4 === 'NO' || q4 === 'N' || q4 === 'NA') {
  alert('SWEEEEEETTTT! You know me so well!');
  console.log('They got q4 right!');
  document.write('q4 RIGHT1');
  rightAnswer++;
  console.log('Answers correct = ' + rightAnswer);
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. I thought we went way back bruv!');
  console.log('They got q4 wrong!');
  document.write('q4 WRONG');
}

var q5 = prompt('Fifth question ' + user + ': Does David think codefellows is stupid?').toUpperCase();
document.write('Fifth question ' + user + ': Does David think codefellows is stupid?');

if (q5 === 'NO' || q5 === 'N' || q5 === 'NA') {
  alert('GOOD JOB! Now we\'re besties!');
  console.log('They got q5 right!');
  document.write('q5 RIGHT!');
  rightAnswer++;
  console.log('Answers right = ' + rightAnswer);
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. Codefellows is great!');
  console.log('They got q5 wrong!');
  document.write('q5 WRONG!');
}

document.write('Sixth question ' + user + ': What is David\'s favorite number? You have exactly 4 guesses.');

var q6Guesses = 0;
while (q6Guesses < 4) {
  var q6Answer = parseInt(prompt('Sixth question ' + user + ': What is David\'s favorite number?'));
  if (q6Answer === 7) {
    alert('Well done! My favorite number is ' + q6Answer + '!');
    q6Guesses++;
    console.log('q6 RIGHT!');
    document.write('q6 RIGHT!');
    rightAnswer++;
    break;
  } else if (q6Answer < 7) {
    alert('Sorry ' + q6Answer + ' is too low...');
    q6Guesses++;
    document.write('q6 WRONG!');
  } else if (q6Answer > 7) {
    alert('Sorry ' + q6Answer + ' is to high... (just like TOWWWLLEEEE!)');
    q6Guesses++;
    document.write('q6 WRONG!');
    console.log('q6 WRONG!');
  } else {
    alert('Please enter a number!');
    q6Guesses++;
    document.write('q6 WRONG!');
    console.log('q6 WRONG!');
  }
}

document.write('Seventh Question ' + user + ': What other states besides Washington has David WORKED IN? You have six guesses. Please answer with a 2 letter state name...');

var q7Guesses = 0;
while (q7Guesses < 6) {
  var q7Answer = prompt('Seventh Question ' + user + ': What other states besides Washington has David WORKED IN? You have six guesses. Please answer with a 2 letter state name...').toUpperCase();
  if (q7Answer === 'NY' || q7Answer === 'UT' || q7Answer === 'LA') {
    alert('Oh man! You must be mad psychic yo, because that is the correct answer!');
    q7Guesses++;
    console.log('q7 RIGHT!');
    document.write('q7 RIGHT!');
    rightAnswer++;
    break;
  } else {
    alert('Sorry that is incorrect! Please make sure you\'re answer is in the for of two letters!');
    q7Guesses++;
    console.log('q7 WRONG!');
    document.write('q7 WRONG!');
  }
}

if (rightAnswer === 7) {
  alert('WELL DONE SON! YOUR SCORE WAS ' + rightAnswer + ' OUT OF 7!!! YOU GOT EVERY ANSWER CORRECT!');
} else {
  alert('Sorry, ' + user + ' you only got ' + rightAnswer + ' out of 7 correct. TRY AGAIN!');
}
