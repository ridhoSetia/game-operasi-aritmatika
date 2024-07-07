function klik() {
  const klik = new Audio("klik.mp3");
  klik.currentTime = 0.03;
  klik.play();
}

let operasiAritmatika = [`+`, `-`];
let randomOperasiAritmatika1 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika2 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika3 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika4 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika5 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika6 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika7 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika8 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let randomOperasiAritmatika9 = Math.floor(
  Math.random() * operasiAritmatika.length
);

let elementAritmatika1 = document.querySelector(".aritmatika1");
let hasilOperasi1 = (elementAritmatika1.textContent =
  operasiAritmatika[randomOperasiAritmatika1]);

let elementAritmatika2 = document.querySelector(".aritmatika2");
let hasilOperasi2 = (elementAritmatika2.textContent =
  operasiAritmatika[randomOperasiAritmatika2]);

let elementAritmatika3 = document.querySelector(".aritmatika3");
let hasilOperasi3 = (elementAritmatika3.textContent =
  operasiAritmatika[randomOperasiAritmatika3]);

let elementAritmatika4 = document.querySelector(".aritmatika4");
let hasilOperasi4 = (elementAritmatika4.textContent =
  operasiAritmatika[randomOperasiAritmatika4]);

let elementAritmatika5 = document.querySelector(".aritmatika5");
let hasilOperasi5 = (elementAritmatika5.textContent =
  operasiAritmatika[randomOperasiAritmatika5]);

let elementAritmatika6 = document.querySelector(".aritmatika6");
let hasilOperasi6 = (elementAritmatika6.textContent =
  operasiAritmatika[randomOperasiAritmatika6]);

let elementAritmatika7 = document.querySelector(".aritmatika7");
let hasilOperasi7 = (elementAritmatika7.textContent =
  operasiAritmatika[randomOperasiAritmatika7]);

let elementAritmatika8 = document.querySelector(".aritmatika8");
let hasilOperasi8 = (elementAritmatika8.textContent =
  operasiAritmatika[randomOperasiAritmatika8]);

let elementAritmatika9 = document.querySelector(".aritmatika9");
let hasilOperasi9 = (elementAritmatika9.textContent =
  operasiAritmatika[randomOperasiAritmatika9]);

let randomAngka1 = Math.floor(Math.random() * 10) + 1;
let randomAngka2 = Math.floor(Math.random() * 10) + 1;
let randomAngka3 = Math.floor(Math.random() * 10) + 1;
let randomAngka4 = Math.floor(Math.random() * 10) + 1;
let randomAngka5 = Math.floor(Math.random() * 10) + 1;
let randomAngka6 = Math.floor(Math.random() * 10) + 1;
let randomAngka7 = Math.floor(Math.random() * 10) + 1;
let randomAngka8 = Math.floor(Math.random() * 10) + 1;
let randomAngka9 = Math.floor(Math.random() * 10) + 1;
let randomAngka10 = Math.floor(Math.random() * 10) + 1;

let angka1 = document.querySelector(".angka1");
let hasil1 = (angka1.textContent = randomAngka1);

let angka2 = document.querySelector(".angka2");
let hasil2 = (angka2.textContent = randomAngka2);

let angka3 = document.querySelector(".angka3");
let hasil3 = (angka3.textContent = randomAngka3);

let angka4 = document.querySelector(".angka4");
let hasil4 = (angka4.textContent = randomAngka4);

let angka5 = document.querySelector(".angka5");
let hasil5 = (angka5.textContent = randomAngka5);

let angka6 = document.querySelector(".angka6");
let hasil6 = (angka6.textContent = randomAngka6);

let angka7 = document.querySelector(".angka7");
let hasil7 = (angka7.textContent = randomAngka7);

let angka8 = document.querySelector(".angka8");
let hasil8 = (angka8.textContent = randomAngka8);

let angka9 = document.querySelector(".angka9");
let hasil9 = (angka9.textContent = randomAngka9);

let angka10 = document.querySelector(".angka10");
let hasil10 = (angka10.textContent = randomAngka10);

let perhitunganAritmatika = eval(
  hasil1 +
  hasilOperasi1 +
  hasil2 +
  hasilOperasi2 +
  hasil3 +
  hasilOperasi3 +
  hasil4 +
  hasilOperasi4 +
  hasil5 +
  hasilOperasi5 +
  hasil6 +
  hasilOperasi6 +
  hasil7 +
  hasilOperasi7 +
  hasil8 +
  hasilOperasi8 +
  hasil9 +
  hasilOperasi9 +
  hasil10
);

let hasilOperasiAritmatika = document.querySelector(".hasilOperasiAritmatika");

let jawabHasil = document.querySelector(".jawab");

let inputJawab = document.querySelector(".inputJawab");

const pembungkus = document.querySelector(".wrapper");

hasilOperasiAritmatika.textContent = perhitunganAritmatika;

const mulaiOperasi = document.querySelector(".flex-start");

function mulaiPerhitungan() {
  klik();
  setTimeout(() => {
    klik();
    mulaiOperasi.remove();
    angka1.style.display = "flex";
  }, 1000);
  setTimeout(() => {
    klik();
    angka1.style.display = "none";
    elementAritmatika1.style.display = "flex";
  }, 2000);
  setTimeout(() => {
    klik();
    elementAritmatika1.style.display = "none";
    angka2.style.display = "flex";
  }, 3000);
  setTimeout(() => {
    klik();
    angka2.style.display = "none";
    elementAritmatika2.style.display = "flex";
  }, 4000);
  setTimeout(() => {
    klik();
    elementAritmatika2.style.display = "none";
    angka3.style.display = "flex";
  }, 5000);
  setTimeout(() => {
    klik();
    angka3.style.display = "none";
    elementAritmatika3.style.display = "flex";
  }, 6000);
  setTimeout(() => {
    klik();
    elementAritmatika3.style.display = "none";
    angka4.style.display = "flex";
  }, 7000);
  setTimeout(() => {
    klik();
    angka4.style.display = "none";
    elementAritmatika4.style.display = "flex";
  }, 8000);
  setTimeout(() => {
    klik();
    elementAritmatika4.style.display = "none";
    angka5.style.display = "flex";
  }, 9000);
  setTimeout(() => {
    klik();
    angka5.style.display = "none";
    elementAritmatika5.style.display = "flex";
  }, 10000);
  setTimeout(() => {
    klik();
    elementAritmatika5.style.display = "none";
    angka6.style.display = "flex";
  }, 11000);
  setTimeout(() => {
    klik();
    angka6.style.display = "none";
    elementAritmatika6.style.display = "flex";
  }, 12000);
  setTimeout(() => {
    klik();
    elementAritmatika6.style.display = "none";
    angka7.style.display = "flex";
  }, 13000);
  setTimeout(() => {
    klik();
    angka7.style.display = "none";
    elementAritmatika7.style.display = "flex";
  }, 14000);
  setTimeout(() => {
    klik();
    elementAritmatika7.style.display = "none";
    angka8.style.display = "flex";
  }, 15000);
  setTimeout(() => {
    klik();
    angka8.style.display = "none";
    elementAritmatika8.style.display = "flex";
  }, 16000);
  setTimeout(() => {
    klik();
    elementAritmatika8.style.display = "none";
    angka9.style.display = "flex";
  }, 17000);
  setTimeout(() => {
    klik();
    angka9.style.display = "none";
    elementAritmatika9.style.display = "flex";
  }, 18000);
  setTimeout(() => {
    klik();
    elementAritmatika9.style.display = "none";
    angka10.style.display = "flex";
  }, 19000);
  setTimeout(() => {
    klik();
    angka10.style.display = "none";
    jawabHasil.style.display = "flex";
    pembungkus.remove();
  }, 20000);
}

const boxResult = document.querySelector(".box-result ");

function jawab(event) {
  klik();
  event.preventDefault();
  jawabHasil.remove();
  boxResult.style.display = "flex";
  hasilOperasiAritmatika.style.display = "flex";
  if (parseInt(inputJawab.value) === perhitunganAritmatika) {
    hasilOperasiAritmatika.innerHTML = `Hasil:${perhitunganAritmatika}. <br>Jawaban Kamu:${parseInt(
      inputJawab.value
    )}. Benar!`;
  } else {
    hasilOperasiAritmatika.innerHTML = `Hasil:${perhitunganAritmatika}. <br>Jawaban Kamu:${parseInt(
      inputJawab.value
    )}. Salah!`;
  }
}

document.querySelector(".refresh").onclick = () => {
  window.location.reload();
};

