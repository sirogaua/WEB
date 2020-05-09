  let corectAnswers = 0;
  let wrongAnswers = 0;
onmessage = function(e) {
  console.log(e.data);
  if(e.data) corectAnswers++;
  else wrongAnswers++;
    var workerResult = `<p>${corectAnswers}</p>
    <p>${wrongAnswers}</p>`
    postMessage(workerResult);
  }