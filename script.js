const quotes = [
  "Success is the sum of small efforts, repeated day in and day out.",
  "Discipline is choosing between what you want now and what you want most.",
  "The future depends on what you do today.",
  "It always seems impossible until it’s done.",
  "Do something today that your future self will thank you for.",
  "Dream big. Start small. Act now.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn’t work hard.",
  "You don’t have to be perfect. You just have to be consistent.",
  "The secret of getting ahead is getting started.",
  "Small progress is still progress.",
  "Your only limit is the one you set for yourself.",
  "Fall seven times, stand up eight.",
  "Great things are done by a series of small things brought together.",
  "A year from now, you may wish you had started today.",
  "What you do every day matters more than what you do once in a while.",
  "Stay focused. Stay humble. Keep moving forward.",
  "Difficult roads often lead to beautiful destinations.",
  "Your future is created by what you do today, not tomorrow.",
  "Work in silence. Let your success make the noise."
];
const quoteElement = document.getElementById("quote");
const quoteButton = document.getElementById("new-quote");

quoteButton.addEventListener("click", () => {
  const index = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[index];
});