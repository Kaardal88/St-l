// Hent alle checkboxene
const checkboxes = document.querySelectorAll(
  ".exercise-card input[type='checkbox']"
);

// Få nåværende dato
const today = new Date();

// Funksjon for å finne ukenummer (ISO standard)
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
}

// Sjekk om vi er i en ny uke
const currentWeek = getWeekNumber(today);
const savedWeek = localStorage.getItem("savedWeek");

// Hvis det er en ny uke, fjern alle lagrede statusverdier
if (savedWeek === null || parseInt(savedWeek) !== currentWeek) {
  localStorage.clear();
  localStorage.setItem("savedWeek", currentWeek); // Lagre ny uke
}

// Legg til en unik identifikator for siden (f.eks. dag/bruker)
const pageIdentifier = document.title.replace(/\s+/g, "-").toLowerCase(); // Bruk sidetittelen

// Gå gjennom alle checkboxene
checkboxes.forEach((checkbox, index) => {
  const exerciseId = `${pageIdentifier}-exercise-${index + 1}`; // Unik nøkkel basert på side og indeks
  const card = checkbox.closest(".exercise-card");

  // Sett status basert på lagret verdi
  if (localStorage.getItem(exerciseId) === "true") {
    checkbox.checked = true;
    card.classList.add("checked"); // Legg til grønn bakgrunn
  } else {
    checkbox.checked = false;
    card.classList.remove("checked"); // Fjern grønn bakgrunn
  }

  // Legg til eventlistener for å lagre status når checkbox endres
  checkbox.addEventListener("change", function () {
    localStorage.setItem(exerciseId, checkbox.checked);
    if (checkbox.checked) {
      card.classList.add("checked");
    } else {
      card.classList.remove("checked");
    }
  });
});
