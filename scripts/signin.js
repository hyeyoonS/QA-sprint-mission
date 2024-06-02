import { errorMessageStop, addErrorStyle } from "./errors/errors.js";
import { checkPassword } from "./input/checkPassword.js";
import { toggleImage } from "./toggleImage.js";
import {
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
} from "./constants.js";
import { checkEmailFormat } from "./input/checkEmailFormat.js";
import { validAccount } from "./auth/validConfirm.js";

const eyeImagePasswordEl = document.querySelector("#eyeImage-password");
const eyeImagePassword = eyeImagePasswordEl.children[0];
const submitButton = document.querySelector('button[type="submit"]');
const loginForm = document.querySelector("form");

function validateForm() {
  const emailValid =
    inputEmail.value.trim() !== "" && emailErrorMessage.textContent === "";
  const passwordValid =
    inputPassword.value.trim() !== "" &&
    passwordErrorMessage.textContent === "";
  submitButton.disabled = !(emailValid && passwordValid);
}

//<눈모양 아이콘 적용, 비밀번호 입력타입 변경>
eyeImagePassword.addEventListener("click", () => {
  toggleImage(eyeImagePassword, inputPassword);
  validateForm(); // validate form on toggle
});

//<입력하는 동안에는 에러메시지 안 보이게 하기 >
inputEmail.addEventListener("input", () => {
  errorMessageStop();
  validateForm();
});
inputPassword.addEventListener("input", () => {
  errorMessageStop();
  validateForm();
});

// <이메일 형식검증, 오류메시지 출력>
inputEmail.addEventListener("focusout", () => {
  checkEmailFormat();
  validateForm();
});

//<비밀번호 빈 값일때 오류메시지 출력>
inputPassword.addEventListener("focusout", () => {
  checkPassword();
  validateForm();
});

validateForm();

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  validAccount(email, password);
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  validAccount(email, password);
});

// 자동로그인
// window.addEventListener("load", () => {
//   const storedAccessToken = localStorage.getItem("accessToken");
//   if (storedAccessToken) {
//     window.location.href = "/itmes";
//   }
// });

// 페이지 로드 시 초기 유효성 검사 호출
validateForm();
