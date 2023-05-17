const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("disp");
});

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-btn');
const timer = document.getElementById('timer');

// Показуємо модальне вікно після певного часу перебування на сторінці
setTimeout(function() {
  modal.style.display = 'block';
}, 3000);

// Змінюємо текст таймера кожну секунду
let count = 6;
const interval = setInterval(function() {
  count--;
  if (count >= 0) {
    timer.innerHTML = 'Зачекайте ' + count + ' секунд, щоб закрити рекламу';
  } else {
    clearInterval(interval);
    timer.innerHTML = 'Ви можете закрити рекламу';
    closeBtn.classList.add('active');
  }
}, 1000);

// Закриваємо модальне вікно при кліку на кнопку закриття
closeBtn.addEventListener('click', function() {
  if (closeBtn.classList.contains('active')) {
    modal.style.display = 'none';
  }
});

setTimeout(function () {
  if (localStorage.getItem('subscribed') !== 'true') {
    let subModal = document.getElementById("subscribeModal");
    subModal.style.display = "block";
    document.getElementById('subscribeButton').addEventListener("click", function(){
      localStorage.setItem('subscribed', 'true');
      subModal.style.display = "none";
      alert('Дякуємо за підписку!');
    })

    document.getElementById('dismissButton').addEventListener("click", function(){
      subModal.style.display = "none";
    })

  }
}, 10000);