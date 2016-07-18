import 'isomorphic-fetch';

function getQuestion(id) {
  return function(dispatch) {
    return fetch('/flashcards/' + id).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      return dispatch(showQuestion(data))
    })
  }
}

function showQuestion(question) {
  return {
    type: 'SHOW_QUESTION',
    question: question
  }
}

function checkAnswer(english, german, id) {
  let headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  return function(dispatch) {
    return fetch('/flashcards/check/' + id, {
      method: 'POST',
      body: JSON.stringify({
        english: english,
        german: german
      }),
      headers: headers
    }).then(res => {
      return res.json();
    }).then(check => {
      return dispatch(checked(check));
    })
  }
}

function checked(check) {
  console.log(check);
  return {
    type: 'CHECK',
    check: check
  }
}


exports.getQuestion = getQuestion;
exports.showQuestion = showQuestion;
exports.checkAnswer = checkAnswer;
exports.checked = checked;
