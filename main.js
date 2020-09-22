Array.from(document.getElementsByClassName("numbers")).forEach((e) => {
  e.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  }),
    e.addEventListener("keydown", (e) => {
      32 != (e = window.event || e).keyCode || e.preventDefault();
    });
});
const total = (e, t, n) => {
  (e = document.getElementById(e)),
    (t = document.getElementById(t)),
    ((n = document.getElementById(n)).textContent = "0"),
    e.addEventListener("input", () => {
      (n.textContent = 384 - 8 * (Number(e.value) + Number(t.value))),
        "NaN" === n.textContent && (n.textContent = "0");
    }),
    t.addEventListener("input", () => {
      (n.textContent = 384 - 8 * (Number(e.value) + Number(t.value))),
        "NaN" === n.textContent && (n.textContent = "0");
    });
};
total("holidays", "vacationDays", "availability");
const validate = (e) => {
  Array.from(document.getElementsByClassName(e)).forEach((e) => {
    e.addEventListener("blur", function () {
      !1 === e.checkValidity() || "" === e.value
        ? (e.classList.add("error"),
          setTimeout(function () {
            e.classList.remove("error");
          }, 300),
          event.preventDefault())
        : (e.style.backgroundColor = null);
    });
  });
};
validate("numbers");
