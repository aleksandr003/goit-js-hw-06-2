const emailEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector("[type='password']");
const submitEl = document.querySelector('[type="submit"]');
let obj = {};
submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (passwordEl.value == "" || emailEl.value == "") {
    return alert("Заполните поля");
  }
  obj.email = emailEl.value;
  obj.password = passwordEl.value;
  console.log(obj);
  reset();
});

const reset = function () {
  emailEl.value = "";
  passwordEl.value = "";
  obj = {};
};
