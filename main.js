Array.from(document.getElementsByClassName("numbers")).forEach((e) => {
  e.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  });
  e.addEventListener("keydown", (e) => {
    e = window.event || e;
    let key = e.keyCode;
    key == 32 ? e.preventDefault() : true;
  });
});

const total = (h, v, a) => {
  (h = document.getElementById(h)),
    (v = document.getElementById(v)),
    ((a = document.getElementById(a)).textContent = "0"),
    h.addEventListener("input", () => {
      (a.textContent = 384 - 8 * (Number(h.value) + Number(v.value))),
        "NaN" === a.textContent && (a.textContent = "0");
    }),
    v.addEventListener("input", () => {
      (a.textContent = 384 - 8 * (Number(h.value) + Number(v.value))),
        "NaN" === a.textContent && (a.textContent = "0");
    });
};
total("holidays", "vacationDays", "availability");
const validate = (t) => {
  Array.from(document.getElementsByClassName(t)).forEach((t) => {
    t.addEventListener("blur", function () {
      !1 === t.checkValidity() || "" === t.value
        ? (t.classList.add("error"),
          setTimeout(function () {
            t.classList.remove("error");
          }, 300),
          event.preventDefault())
        : (t.style.backgroundColor = null);
    });
  });
};

validate("numbers");
