const speak = (exercise) => {
  console.log(exercise);

  const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14,
  };
  const fruitsToGet = ['apple', 'grape', 'pear'];

  const getSleep = (tDur) => {
    return new Promise((resolve) => setTimeout(resolve, tDur));
  };

  const VoiceAll = (task, vFirst, vSec, tRep, tDur, iV) => {
    if ('speechSynthesis' in window) if (task) var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(task);
    utterThis.rate = 0.8;
    synth.speak(utterThis);
    LoopAwait(vFirst, vSec, tRep, tDur);
  };

  const LoopAwait = async (task, vFirst, vSec, tRep, tDur, index) => {
    if ('speechSynthesis' in window) if (task) var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(task);
    utterThis.rate = 0.8;
    synth.speak(utterThis);

    var elements = document.getElementById('mainSpeak');
    var active = elements.getElementsByClassName('Speak_Blockbody__cMuaF');
    active[index].style.backgroundColor = ' tomato';

    let phrase;

    for (let i = 0; i < tRep * 2; i++) {
      console.log(tDur);
      if (!vSec) {
        phrase = vFirst;
      } else {
        if (i % 2 == 0) {
          phrase = vFirst;
        } else {
          phrase = vSec;
        }
      }
      if ('speechSynthesis' in window) if (phrase) var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance(phrase);
      utterThis.rate = 0.8;
      synth.speak(utterThis);
      const AwaitDur = await getSleep(tDur * 1000);
    }
    active[index].style.backgroundColor = '#a7d175';
  };

  const Voice = async (exercise) => {
    console.log(exercise.length);

    for (let i = 0; i < exercise.length; i++) {
      LoopAwait(
        exercise[i].task,
        exercise[i].valueFirst,
        exercise[i].valueSec,
        exercise[i].timeRep,
        exercise[i].timeDur,
        i,
      );

      const AwaitDur = await getSleep(exercise[i].timeRep * 2 * exercise[i].timeDur * 1000 + 2000);
    }
    /*
    for (let i = 0; i < exercise.length; i++) {
      (function (j) {
        setTimeout(
          VoiceAll,
          5000,
          exercise[i].task,
          exercise[i].valueFirst,
          exercise[i].valueSec,
          exercise[i].timeRep,
          exercise[i].timeDur,
          j,
        );
      })(i);
    }*/
  };

  Voice(exercise);
};

export default speak;
