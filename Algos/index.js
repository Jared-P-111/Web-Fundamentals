function d6() {
  var roll = Math.random();
  var floored = Math.floor(roll * 6 + 1);

  //should return 1,2,3,4,5, or 6
  return floored;
}

var playerRoll = d6();
console.log(`The player rolled a ${playerRoll}!!`);

//write a bit of code to randomly print an option from the following array
var lifesAnswers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

function askTheEightBall(lifesAnswers) {
  var roll = Math.random();
  var floored = Math.floor(roll * lifesAnswers.length);

  return lifesAnswers[floored];
}

console.log(askTheEightBall(lifesAnswers));
