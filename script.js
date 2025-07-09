function fetchAffirmation() {
  fetch('https://www.affirmations.dev/?_=' + new Date().getTime())
    .then(res => res.json())
    .then(data => {
      document.getElementById('affirmation').textContent = data.affirmation;
    })
    .catch(() => {
      document.getElementById('affirmation').textContent = "You're here, and that matters.";
    });
}

fetchAffirmation();
