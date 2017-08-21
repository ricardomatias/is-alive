function randomInt(size) {
  return Math.floor(Math.random() * size) + 1;
}

function createAnswer(name) {
  var answers = [
    'Yes.',
    'No.',
    'Maybe..',
    'Who knows?!',
    name.substring(0, 4) + '-who??',
    'I hope so, ' + name + ' still owes me money.',
    'Who cares about ' + name + '? Trump is the best.',
    'I wish penguins could fly.',
    'Never liked ' + name + '.'
  ];

  return answers[randomInt(answers.length - 1)];
}

function capitalize(name) {
  return name[0].toUpperCase() + name.substring(1);
}

document.addEventListener("DOMContentLoaded", function(event) {
  var person = document.location.search.substring(1);
      nameReplaceElem = Array.from(document.getElementsByClassName('name-replace'))[0],
      answerElem = Array.from(document.getElementsByClassName('answer'))[0];

  if (!person) {
    person = 'Trump';
  }

  person = capitalize(person);

  document.title = 'is ' + person + ' still alive?';

  answerElem.innerHTML = createAnswer(person);
});