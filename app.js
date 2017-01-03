'use strict';

var greeting = confirm('Hello, I\'m David C Cole\'s aboutMe Bot! We are going to play a guessing game? All questions have yes or no answers. Are you ready?');

if (greeting) {
  console.log('Woot! You straight prepared holmes!');
} else {
  console.log('OH NO! AHHHHHHHHHHHHH');
}

var user = prompt('What is your name Bruh?');
console.log('This user\'s name is ' + user + '!');

var q1 = prompt('So first question: Does David own two cats?').toUpperCase();
if (q1 === 'Yes' || 'Y' || 'Ya') {
  alert('OMG! You are TOTES RIGHT!');
  console.log('They got q1 right!');
} else {
  alert('WA WA WA WAAAAAAA! You got it wrong. He has two kitties!');
  console.log('They got q1 wrong!');
}
