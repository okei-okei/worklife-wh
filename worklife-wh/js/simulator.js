const jobs = [
  {
    id: 1,
    title: "Kitchen Hand",
    wage: 25,
  },
  {
    id: 2,
    title: "Farm Worker",
    wage: 27,
  },
  {
    id: 3,
    title: "Cafe Staff",
    wage: 26,
  },
];

const properties = [
  {
    id: 1,
    title: "Private Room",
    rent: 250,
  },
  {
    id: 2,
    title: "Shared House",
    rent: 180,
  },
  {
    id: 3,
    title: "Studio Room",
    rent: 320,
  },
];

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

  const monthlyIncome = selectedJob.wage * 40 * 4;

  const monthlyRent = selectedProperty.rent * 4;

  const savings = monthlyIncome - monthlyRent;

  document.getElementById("result").innerHTML = `
    月収: ${monthlyIncome} NZD<br>
    家賃: ${monthlyRent} NZD<br>
    予想貯金: ${savings} NZD
  `;
}
