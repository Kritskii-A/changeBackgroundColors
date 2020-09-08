function changeBackgroundColor(
  selector = "body",
  defaultStart = 40,
  defaultEnd = 256,
  interval = 50
) {
  const background = document.querySelector(selector);
  let i = defaultStart;
  let n = defaultEnd;
  setInterval(() => {
    if (i < defaultEnd) {
      background.style.backgroundColor = `rgb(${i},${i - defaultStart},158)`;
      i++;
      if (i === defaultEnd - 1) {
        n = defaultEnd;
      }
    } else if (n > defaultStart) {
      background.style.backgroundColor = `rgb(${n},${n - defaultStart},158)`;
      n--;
      if (n === defaultStart + 1) {
        i = defaultStart;
      }
    }
  }, interval);
}

changeBackgroundColor("body", 40, 256, 50); // передаем селектор, у которого будем менять фон; начало RGB; конец RGB; интервал
