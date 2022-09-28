const chalk = require('chalk');
var score = 0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("hii!!! my name is Tehkum. \nCan i have your name? ");
console.log(chalk.cyanBright("So " + userName + "!!! This quiz is about Doremon.\nPlay the quiz and enjoyyyyy"))
console.log("---------------------------------")
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.blueBright(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("yay!!! you are correct"))
    score++;
  }
  else {
    console.log(chalk.redBright("nah!!! wrong answer"))
  }
}
var questions = [
  {
    question: "Who is Jian's sister?\nA-Jackio\tB-Mi Chan\nYour answer: ",
    answer: "a",
  },
  {
    question: "What does Doremon love to eat?\nA-Doracake\tB-Bean jam Bun\nYour answer: ",
    answer: "a",
  },
  {
    question: "In which two channels, you can watch Doraemon?\nA-Disney channel& Pogo\tB-Disney channel & Hungama\nC-Pogo & Hungama\nYour answer: ",
    answer: "b",
  },
  {
    question: "Who is Doremi?\nA-Nobita's sister\tB-Doremon's sister\nYour answer: ",
    answer: "b",
  },
  {
    question: "Who is Doraemon's best friend?\nA-Nobita\tB-Shizuka\nC-gian\nYour answer: ",
    answer: "a",
  },
  {
    question: "Who likes to sing?\nA-Nobita\tB-Shizuka\nC-Gian\nYour answer: ",
    answer: "c",
  },
  {
    question: "Who is the most intelligent?\A-Shizuka\tB-Suneo\nC-Dekisugi\nYour answer: ",
    answer: "c",
  },
  {
    question: "From which century, Doraemon came from?\nA-22nd\tB-21st\nC-23rd\nYour answer: ",
    answer: "b",
  },
  {
    question: "Which gadget helps us to go anywhere?\nA-Bamboocopter\tB-Anywheredoor\nC-Small torch\nYour answer: ",
    answer: "b",
  },
  {
    question: "Who is Nobita's love?\nA-Shizuka\tB-Yumiko\nYour answer: ",
    answer: "a",
  },
];
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
  console.log(chalk.cyan("-------------------------------"))
}
console.log(chalk.black.bgWhite("your score is " + score))
if (score >= 6) {
  console.log("Congrats!!! you scored well")
}
else {
  console.log("Maybe you can score well in next turn")
}
console.log("if you have a nice score, click the screenshot and send to me")
console.log(chalk.blue.bgYellowBright("current winners are:"))
var winner = [
  {
    wName: "Tehkum",
    wScore: 10,
  },
  {
    wName: "Brad pitt",
    wScore: 9,
  },
  {
    wName: "Tom hardy",
    wScore: 8,
  }
];
for (var j = 0; j < winner.length; j++) {
  console.log(chalk.magenta(j + 1 + ")." + winner[j].wName + "-->" + winner[j].wScore))
}