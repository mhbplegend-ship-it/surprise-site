const correctPassword = "bux";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("intro").classList.remove("hidden");
  } else {
    alert("Try again 🤍");
  }
}

function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  startHearts();
}

function showFinal() {
  document.getElementById("content").style.display = "none";
  document.getElementById("finalScreen").classList.remove("hidden");
}

// HEART GENERATOR
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}