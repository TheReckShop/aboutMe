'use strict';

var greeting = confirm('Hello, I\'m David C Cole\'s aboutMe Bot! We are going to play a guessing game? All questions have yes or no answers. Are you ready?');

if (greeting) {
  console.log('Woot! You straight prepared holmes!');
} else {
  console.log('OH NO! AHHHHHHHHHHHHH');
}

var user = prompt('What is your name Bruh?');
console.log('This user\'s name is ' + user + '!');
document.write('User name is: ' + user);

var q1 = prompt('So first question ' + user + ': Does David own two cats?').toUpperCase();
document.write('So first question ' + user + ': Does David own two cats?');
if (q1 === 'Yes' || q1 === 'Y' || q1 === 'Ya') {
  alert('OMG! You are TOTES RIGHT!');
  console.log('They got q1 right!');
  document.write('RIGHT!');
} else {
  alert('WA WA WA WAAAAAAA! You got it wrong. He has two kitties!');
  console.log('They got q1 wrong!');
  document.write('WRONG!');
}

var q2 = prompt('Second question ' + user + ': Does David manage a night club on the weekends?').toUpperCase();
document.write('Second question ' + user + ': Does David manage a night club on the weekends?');
if (q2 === 'Yes' || q2 === 'Y' || q2 === 'yes') {
  alert('CORRECT! You\'re a smart cookie!');
  console.log('They got q2 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. He does manage a nightclub on the weekends. He hates mondays');
  console.log('They got q2 wrong!');
}

var q3 = prompt('Third question ' + user + ': Is David going to the Seahawks Playoff game this weekend?').toUpperCase();
if (q3 === 'Yes' || q3 === 'Y' || q3 === 'ya') {
  alert('YUUUUUUUPPPPPP! You\'re a smart cookie!');
  console.log('They got q3 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. GO HAWKS!');
  console.log('They got q3 wrong!');
}

var q4 = prompt('fourth question ' + user + ': Does David love the Portland Timbers?').toUpperCase();
if (q4 === 'No' || q4 === 'N' || q4 === 'na') {
  alert('SWEEEEEETTTT! You know me so well!');
  console.log('They got q4 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. I thought we went way back bruv!');
  console.log('They got q4 wrong!');
}

var q5 = prompt('Fifth question ' + user + ': Does David think codefellows is stupid?').toUpperCase();
if (q5 === 'No' || q5 === 'N' || q5 === 'na') {
  alert('GOOD JOB! Now we\'re besties!');
  console.log('They got q5 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. Codefellows is great!');
  console.log('They got q5 wrong!');
}
