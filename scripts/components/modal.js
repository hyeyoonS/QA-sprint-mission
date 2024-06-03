export function showModal(message) {
  console.log("showmodal출력1");
  const modal = document.getElementById("error-modal");
  console.log("showmodal출력2");
  const modalMessage = document.getElementById("modal-message");
  if (modal && modalMessage) {
    modalMessage.textContent = message;
    modal.style.display = "block";
  }
  console.log("showmodal출력3");
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
