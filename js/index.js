function randomInt(size) {
  return Math.floor(Math.random() * size) + 1;
}

function createAnswer(name) {
  var answers = [
    'The word on the street is that no one cares.',
    'No.',
    'Maybe..',
    name.substring(0, 4) + '-who??',
    'I hope so, ' + name + ' still owes me money.',
    'Who cares about ' + name + '? Trump is president.',
    'I wish penguins could fly.',
    'Never liked ' + name + '.',
    'Hopefully.. but what about Trump?',
    'I heard that most penguins are monogamous.',
    'Probably not, she drank too much tea.',
    'Is it Wednesday? Then I don\'t care.'
  ];

  return answers[randomInt(answers.length - 1)];
}

function capitalize(name) {
  return name[0].toUpperCase() + name.substring(1);
}

document.addEventListener("DOMContentLoaded", function(event) {
  var person = document.location.search.substring(1);
      titleElem = Array.from(document.getElementsByClassName('title'))[0],
      answerElem = Array.from(document.getElementsByClassName('answer'))[0];

  if (!person) {
    person = 'the muffin man';
  }

  var title = 'is ' + person + ' still alive?';

  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", title);

  titleElem.innerHTML = title;
  answerElem.innerHTML = createAnswer(capitalize(person));
});
