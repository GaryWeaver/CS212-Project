const form = document.getElementById("reservationForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  form.style.display = "none";
  confirmationMessage.style.display = "block";
});

function resetForm() {
  form.reset();
  form.style.display = "block";
  confirmationMessage.style.display = "none";
}