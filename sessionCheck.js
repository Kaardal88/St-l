// Hent avkrysningsboksen
const checkbox = document.getElementById("myCheckbox");

// Sjekk om statusen er lagret i sessionStorage
if (sessionStorage.getItem("checkboxStatus") === "true") {
    checkbox.checked = true;  // Huk av hvis lagret som true
} else {
    checkbox.checked = false;  // Fjern haken hvis lagret som false
}

// Når avkrysningsboksen endres, lagre statusen
checkbox.addEventListener("change", function() {
    sessionStorage.setItem("checkboxStatus", checkbox.checked);
});
