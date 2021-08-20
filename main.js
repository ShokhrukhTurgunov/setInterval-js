const btn1 = document.querySelector('.right');
const btn2 = document.querySelector('.left');

function btnAnimation1 () {
  const box = document.querySelector('.mini-box');
  let pos = 0;
  const id = setInterval(animFunc, 50)

  function animFunc() {
    if (pos === 200) {
      clearInterval(id);
    }else {
      pos++;
      box.style.left = pos + "px";
      box.style.top = pos + "px";
    }
  }
};

function btnAnimation2 () {

    const box = document.querySelector('.mini-box');
    box.classList.toggle('class')

};

btn1.addEventListener("click", btnAnimation1);
btn2.addEventListener("click", btnAnimation2);
