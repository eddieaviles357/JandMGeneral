let textarea = document.querySelector(".form__textarea");
let log = document.querySelector("#log");
const maxChar = 140;

let maxCharCount = (e) => {
  if(e.target.value.length > 140) {
    alert("Don't go over character count!");
    textarea.removeEventListener('input', maxCharCount, false);
  } else {
    log.textContent = 
      `Max characters limit ${maxChar - e.target.value.length}`;
  }
}

textarea.addEventListener("input", maxCharCount, false);
