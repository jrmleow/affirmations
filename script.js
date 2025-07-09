const affirmations = [
  "You are enough just as you are.",
  "Every breath is a fresh start.",
  "You are capable of amazing things.",
  "You deserve peace.",
  "Your energy is magnetic and healing.",
  "Let go of what you can’t control.",
  "You bring value to this world.",
  "Even small steps move you forward.",
  "You are resilient, not broken.",
  "You have everything you need inside you.",
  "You’re doing better than you think.",
  "It’s okay to rest.",
  "Progress is progress, even if small.",
  "You’re not alone in this.",
  "You bring light to someone’s day.",
  "Peace begins with a breath.",
  "You’ve survived 100% of your worst days.",
  "This moment is yours to own."
];

function showRandomAffirmation() {
  const index = Math.floor(Math.random() * affirmations.length);
  document.getElementById('affirmation').textContent = affirmations[index];
}

showRandomAffirmation();
