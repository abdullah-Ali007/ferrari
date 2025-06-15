
document.getElementById("play-music").addEventListener("click", function () {
  const audio = document.getElementById("bg-music");
  audio.play();
  this.style.display = "none"; // hide button after playing
});

// COUNTDOWN TIMER
const eventDate = new Date("July 28, 2025 14:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    timer.innerHTML = "RACE TIME!";
  }
}, 1000);


// NEWS (mock data)
const newsFeed = document.getElementById("news-feed");
const newsData = [
  "Leclerc secures pole position at Silverstone!",
  "Carlos Sainz signs contract extension!",
  "Ferrari unveils new SF-24 upgrades!",
  "Strategy changes planned for upcoming Monza GP."
];

setTimeout(() => {
  newsFeed.innerHTML = "";
  newsData.forEach(news => {
    const p = document.createElement("p");
    p.textContent = news;
    newsFeed.appendChild(p);
  });
}, 1000);
