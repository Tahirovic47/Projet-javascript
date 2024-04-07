var btn = document.querySelector('.btn');
var body = document.querySelector('body');
var audio = document.querySelector("#audio");


btn.onclick = function() {
  body.classList.toggle('on');
  audio.play();
}