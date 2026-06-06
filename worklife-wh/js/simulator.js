const jobSelect = document.getElementById("jobSelect");

jobs.forEach((job) => {
  jobSelect.innerHTML += `
    <option value="${job.id}">
      ${job.title}
    </option>
  `;
});

const propertySelect = document.getElementById("propertySelect");

properties.forEach((property) => {
  propertySelect.innerHTML += `
    <option value="${property.id}">
      ${property.title}
    </option>
  `;
});

function calculateSimulation() {
  const selectedJob = jobs.find((job) => job.id == jobSelect.value);

  const selectedProperty = properties.find(
    (property) => property.id == propertySelect.value
  );

  if (!selectedJob || !selectedProperty) {
    return;
  }

  const income = selectedJob.wage * 40 * 4;

  const rent = selectedProperty.rent * 4;

  const savings = income - rent;

  document.getElementById("result").innerHTML = `
    <h2>結果</h2>
    <p>月収: ${income} NZD</p>
    <p>家賃: ${rent} NZD</p>
    <p>予想貯金: ${savings} NZD</p>
  `;
}
