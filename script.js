// ==========================================
// FLOATING HEARTS
// ==========================================

const heartLayer = document.getElementById("hearts");

function makeHeart() {

  const h = document.createElement("div");

  h.className = "fheart";

  h.innerHTML = ["♥", "♡", "✦"][
    Math.floor(Math.random() * 3)
  ];

  h.style.left =
    Math.random() * 100 + "vw";

  h.style.fontSize =
    (10 + Math.random() * 18) + "px";

  h.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  heartLayer.appendChild(h);

  setTimeout(() => {
    h.remove();
  }, 10000);
}


// Keep creating hearts
setInterval(makeHeart, 850);


// Create some hearts immediately
for (let i = 0; i < 7; i++) {

  setTimeout(
    makeHeart,
    i * 250
  );

}


// ==========================================
// REASON CARDS
// ==========================================

function reveal(el) {

  el.classList.toggle("open");

}


// ==========================================
// FINAL SURPRISE
// ==========================================

function surprise() {

  const modal =
    document.getElementById("modal");

  modal.classList.add("show");


  // Extra hearts
  for (let i = 0; i < 20; i++) {

    setTimeout(
      makeHeart,
      i * 80
    );

  }

}


// ==========================================
// CLOSE SURPRISE
// ==========================================

function closeModal() {

  document
    .getElementById("modal")
    .classList.remove("show");

}


// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

document
  .getElementById("modal")
  .addEventListener("click", function (event) {

    if (event.target.id === "modal") {

      closeModal();

    }

  });


// ==========================================
// SPOTIFY MUSIC BUTTON
// ==========================================

const musicBtn =
  document.getElementById("musicBtn");


// When the ♪ button is clicked,
// smoothly scroll to the Spotify player.

musicBtn.addEventListener("click", function () {

  const musicSection =
    document.getElementById("music");

  musicSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});
