"use strict";

/* 1. složi varijablu tajniBroj i u tu varijablu spremi random broj između 1 i 21.
2. Postavi broj pokušaja kao varijablu score i početne vrijednosti 20 (let score = 20)
3. Postavi varijablu highscore i postavi početnu vrijednost 0 (let highscore = 0)
4. Složi eventListner na input polje i napravi usporedbe sa tajnimBrojem. Ako je input broj veći
od tajnog broja ispiši poruku da broj manji od vašeg, ako je manji onda da je broj veći od vašeg.
Naravno ako se pogodi broj onda ispiši da je broj pogođen. Uzmite u obzir i da treba ispisati poruku
ako broj nije upisan u input polje a pokrenuo se eventListener. Također prilikom svakog promašaja
treba promijeniti i ispis Broja pokušaja (umanjiti za 1). Ako se ispucaju svi pokušaji a nema pogotka
treba ispisati poruku Izgubili ste.
5. Ako ste pogodili broj, treba promijeniti pozadinu u zelenu, umjesto upitnika ispisati tajniBroj i
trenutni broj pokušaja usporediti sa najboljim rezultatom, ako je veći onda ga zapisati umjesto
trenutno postavljenog najboljeg rezultata. (slika je priložena kako bi trebalo izgledati).
6. Pritiskom na gumb ponovo! treba resetirati sve (uključujući novi tajniBroj) osim najboljeg
rezultata. */

let tajniBroj = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const pokaziPoruku = (poruka) => {
  document.querySelector(".poruka").textContent = poruka;
};

document.querySelector(".provjeri").addEventListener("click", () => {
  const pogodi = Number(document.querySelector(".pogodi").value);
  console.log(pogodi, typeof pogodi);

  if (!pogodi) {
    pokaziPoruku("Nema broja!");
  } else if (pogodi === tajniBroj) {
    pokaziPoruku("Pravi broj!!");
    document.querySelector(".broj").textContent = tajniBroj;

    const blinkanje = setInterval(function () {
      document.body.style.backgroundColor =
        document.body.style.backgroundColor === "rgb(96, 179, 71)"
          ? ""
          : "#60b347";
    }, 300);

    setTimeout(function () {
      clearInterval(blinkanje);
      document.body.style.backgroundColor = "#222";
    }, 5000);

    document.querySelector(".broj").style.width = "50rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (pogodi !== tajniBroj) {
    if (score > 1) {
      pokaziPoruku(pogodi > tajniBroj ? "prevelik" : "premal");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      pokaziPoruku("izgubio si");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".ponovo").addEventListener("click", () => {
  score = 20;
  tajniBroj = Math.trunc(Math.random() * 20) + 1;

  pokaziPoruku("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".broj").textContent = "?";
  document.querySelector(".pogodi").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".broj").style.width = "15rem";
});
