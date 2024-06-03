export function showModal(message) {
  const modal = document.getElementById("error-modal");
  const modalMessage = document.getElementById("modal-message");
  if (modal && modalMessage) {
    modalMessage.textContent = message;
    modal.style.display = "block";
  }
}

export function hideModal() {
  const modal = document.getElementById("error-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  hideModal();
  const confirmButton = document.getElementById("confirm-button");

  if (confirmButton) {
    confirmButton.addEventListener("click", hideModal);
  }

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("error-modal");
    if (event.target === modal) {
      hideModal();
    }
  });
});
