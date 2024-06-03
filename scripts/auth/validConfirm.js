import { addErrorStyle } from "../errors/errors.js";
import {
  USER_DATA,
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
} from "../constants.js";

import { showModal } from "../components/modal.js";

// <아이디&비밀번호 올바르게 입력했을 경우 /items로 이동하고 아닌 경우 확인메시지 출력>
function validAccount(email, password) {
  const accountMatch = USER_DATA.find((account) => account.email === email);

  if (accountMatch) {
    if (accountMatch.password === password) {
      window.location.href = "./items.html";
    } else {
      showModal("존재하지 않는 이메일, 혹은 비밀번호입니다.");
    }
  } else {
    showModal("존재하지 않는 이메일, 혹은 비밀번호입니다.");
  }
}

export { validAccount };
