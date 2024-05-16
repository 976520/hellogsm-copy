const downCover = document.getElementById('down');
const upCover = document.getElementById('up');

const saYongJa = document.createElement('sa-young-ja');
const needs = document.createElement('needs');
const jeoHei = document.createElement('jeo-hei');

const container = document.getElementById('cover-container');

window.addEventListener('mousemove', up);
window.addEventListener('scroll', up);
window.addEventListener('wheel', up);
window.addEventListener('mousemove', down);
window.addEventListener('scroll', down);
window.addEventListener('wheel', down);

function up(event) {
  let clientY = event.clientY;
  let containerHeight = upCover.parentElement.clientHeight;
  let maxHeight = 700;

  let height =
    ((clientY - upCover.parentElement.getBoundingClientRect().top) /
      containerHeight) *
    maxHeight;
  upCover.style.height = height + 'px';
}

function down(event) {
  let clientY = event.clientY;
  let containerHeight = container.clientHeight;
  let maxHeight = 700;

  let height =
    maxHeight -
    ((clientY - container.getBoundingClientRect().top) / containerHeight) *
      maxHeight;

  downCover.style.height = height + 'px';
  downCover.style.top = 700 - height + 'px';
}
