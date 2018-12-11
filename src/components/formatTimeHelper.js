function formatTime(time) {
  let ms = time % 100;
  let sec = Number((time / 100).toFixed());
  let min = Number(Math.floor(sec / 60).toFixed());
  sec = sec % 60;

  function zeroAdded(n) {
    if (n < 10) return `0${n}`;
    return n;
  }

  return `${zeroAdded(min)}:${zeroAdded(sec)}:${zeroAdded(ms)}`;
}

export default formatTime;