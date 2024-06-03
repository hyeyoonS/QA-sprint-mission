// modal.js
export function showModal(message) {
  const modal = document.getElementById("error-modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modal.style.display = "block";
}

export function hideModal() {
  const modal = document.getElementById("error-modal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const confirmButton = document.getElementById("confirm-button");

  confirmButton.addEventListener("click", hideModal);

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("error-modal");
    if (event.target === modal) {
      hideModal();
    }
  });
});

// close modal when clicked outside modal content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("error-modal");
  if (event.target == modal) {
    hideModal();
  }
});
