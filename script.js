const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');
const rstDflt = [...links, ...buttons];

rstDflt.forEach((el) =>
  el.addEventListener('click', (e) => e.preventDefault())
);
