const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');

function jump() {
  if (mario.classList != 'jump') {
    mario.classList.add('jump');
  }
  setTimeout(function () {
    mario.classList.remove('jump');
  }, 300);
}

function addPipeAnimation() {
  document.addEventListener('keypress', function (e) {
    if (e.code == 'Space') {
      jump();
      pipe.classList.add('animation');
    }
  });
}
addPipeAnimation();

let isAlive = setInterval(function () {
  let marioTop = parseInt(
    window.getComputedStyle(mario).getPropertyValue('top')
  );
  let pipeleft = parseInt(
    window.getComputedStyle(pipe).getPropertyValue('left')
  );

  if (pipeleft < 50 && pipeleft > 0 && marioTop >= 140) {
    alert('GAME OVER');
    pipe.classList.remove('animation');
  }
}, 10);