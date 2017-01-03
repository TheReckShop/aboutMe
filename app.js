'use strict';

var greeting = confirm('Hello, I\'m David C Cole\'s aboutMe Bot! We are going to play a guessing game? All questions have yes or no answers. Are you ready?');

if (greeting) {
  console.log('Woot! You straight prepared holmes!');
} else {
  console.log('OH NO! AHHHHHHHHHHHHH');
}

var user = prompt('What is your name Bruh?');
console.log('This user\'s name is ' + user + '!');

var q1 = prompt('So first question ' + user + ': Does David own two cats?').toUpperCase();
if (q1 === 'Yes' || 'Y' || 'Ya') {
  alert('OMG! You are TOTES RIGHT!');
  console.log('They got q1 right!');
} else {
  alert('WA WA WA WAAAAAAA! You got it wrong. He has two kitties!');
  console.log('They got q1 wrong!');
}

var q2 = prompt('Second question ' + user + ': Does David manage a night club on the weekends?').toUpperCase();
if (q2 === 'Yes' || 'Y' || 'yes') {
  alert('CORRECT! You\'re a smart cookie!');
  console.log('They got q2 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. He does manage a nightclub on the weekends. He hates mondays');
  console.log('They got q2 wrong!');
}

var q3 = prompt('Third question ' + user + ': Is David going to the Seahawks Playoff game this weekend?').toUpperCase();
if (q3 === 'Yes' || 'Y' || 'ya') {
  alert('YUUUUUUUPPPPPP! You\'re a smart cookie!');
  console.log('They got q3 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. GO HAWKS!');
  console.log('They got q3 wrong!');
}

var q4 = prompt('fourth question ' + user + ': Does David love the Portland Timbers?').toUpperCase();
if (q4 === 'No' || 'N' || 'na') {
  alert('SWEEEEEETTTT! You know me so well!');
  console.log('They got q4 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. I thought we went way back bruv!');
  console.log('They got q4 wrong!');
}

var q5 = prompt('Fifth question ' + user + ': Does David think codefellows is stupid?').toUpperCase();
if (q5 === 'No' || 'N' || 'na') {
  alert('GOOD JOB! Now we\'re besties!');
  console.log('They got q5 right!');
} else {
  alert('WA WA WA WAAAAAA! You got it wrong. Codefellows is great!');
  console.log('They got q5 wrong!');
}
