// Format time to dd:dd:dd format.
// if ms/sec/min is smaller than 10, put 0 infront.
// Get 10ms 1sec, 1min. from 10ms per sec time. sec is divided by 60 at the end to prevent going over 60 and to match num of mins.

function formatTime(time) {
  let ms = time % 100;
  let sec = Number(Math.floor((time / 100)).toFixed());
  let min = Number(Math.floor(sec / 60).toFixed());
  sec = sec % 60;

  function zeroAdded(n) {
    if (n < 10) return `0${n}`;
    return n;
  }

  return `${zeroAdded(min)}:${zeroAdded(sec)}:${zeroAdded(ms)}`;
}

export default formatTime;