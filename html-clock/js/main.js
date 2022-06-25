let hours, minutes, seconds;

let ticker = true;

const initialize = () => {
  hours = document.getElementById('hours').children;
  minutes = document.getElementById('minutes').children;
  seconds = document.getElementById('seconds').children;
}

const convertToBinary = (number) => {
  return (number >>> 0).toString(2);
}

const updateArray = (array, string) => {
  for (let i = 0; i < array.length; i++) {
    if (string[i] === '1') {
      array[i].children[0].classList.add('dot-inner-on')
      if (i !== array.length - 1) {
        array[i].children[0].classList.remove('dot-inner-off-right')
      } else {
        array[i].children[0].classList.remove('dot-inner-off-down')
      }
    } else {
      array[i].children[0].classList.add('dot-inner-off-left')
      array[i].children[0].classList.remove('dot-inner-on')
    }
  }
}

const updateMid = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      if (array[i].children[0].classList.contains('dot-inner-off-left')) {
        array[i].children[0].classList.remove('dot-inner-off-left');
        array[i].children[0].classList.add('dot-inner-off-right');
      }
    } else {
      if (array[i].children[0].classList.contains('dot-inner-off-left')) {
        array[i].children[0].classList.remove('dot-inner-off-left');
        array[i].children[0].classList.add('dot-inner-off-down');
      }
    }
  }

}

const updateClock = () => {
  const date = new Date();
  const hoursString = convertToBinary(date.getHours()).padStart(5, '0');
  const minutesString = convertToBinary(date.getMinutes()).padStart(6, '0');
  const secondsString = convertToBinary(date.getSeconds()).padStart(6, '0');
  if (ticker) {
    updateArray(hours, hoursString)
    updateArray(minutes, minutesString)
    updateArray(seconds, secondsString)
  } else {
    updateMid(hours);
    updateMid(minutes);
    updateMid(seconds);
  }

  ticker = !ticker;
}

window.onload = () => {

  initialize();
  setInterval(updateClock, 250)

}
