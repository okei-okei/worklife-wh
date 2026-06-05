const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  window.location.href = "jobs.html";
});
function calculate() {
  const wage = Number(document.getElementById("hourlyWage").value);

  const hours = Number(document.getElementById("hours").value);

  const rent = Number(document.getElementById("rent").value);

  const income = wage * hours * 4;

  const savings = income - rent * 4;

  document.getElementById(
    "result"
  ).innerText = `月収:${income}NZD 貯金:${savings}NZD`;
}
