// Fall back to local if API fails or repeats
const localBackup = [
  "You’re doing better than you think.",
  "It’s okay to rest.",
  "Progress is progress, even if small.",
  "You’re not alone in this.",
  "You bring light to someone’s day."
];

function getBackup() {
  return localBackup[Math.floor(Math.random() * localBackup.length)];
}

fetch('https://www.affirmations.dev/?_=' + new Date().getTime())
  .then(res => res.json())
  .then(data => {
    // Mix: flip a coin to either use API or local
    const useAPI = Math.random() < 0.5;
    document.getElementById('affirmation').textContent = useAPI ? data.affirmation : getBackup();
  })
  .catch(() => {
    document.getElementById('affirmation').textContent = getBackup();
  });
