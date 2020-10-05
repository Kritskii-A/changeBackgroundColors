function changeBackgroundColor(
  selector = "body",
  default = 40,
  defaultEnd = 256,
  interval = 50
) {
  const background = document.querySelector(selector);
  let i = default;
  let n = defaultEnd;
  setInterval(() => {
    if (i < defaultEnd) {
      background.style.backgroundColor = `rgb(${i},${i - default},158)`;
      i++;
      if (i === defaultEnd - 1) {
        n = defaultEnd;
      }
    } else if (n > default) {
      background.style.backgroundColor = `rgb(${n},${n - default},158)`;
      n--;
      if (n === default + 1) {
        i = default;
      }
    }
  }, interval);
}

changeBackgroundColor("body", 40, 256, 50); // передаем селектор, у которого будем менять фон; начало RGB; конец RGB; интервал
