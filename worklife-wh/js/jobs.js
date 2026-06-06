const jobs = [
  {
    id: 1,
    title: "Kitchen Hand",
    wage: 25,
    city: "Auckland",
  },
  {
    id: 2,
    title: "Farm Worker",
    wage: 27,
    city: "Hamilton",
  },
  {
    id: 3,
    title: "Cafe Staff",
    wage: 26,
    city: "Wellington",
  },
];

const container = document.getElementById("job-list");

function renderJobs(jobArray) {
  container.innerHTML = "";

  jobArray.forEach((job) => {
    container.innerHTML += `
      <div class="card">
        <h3>${job.title}</h3>
        <p>時給: ${job.wage} NZD</p>
        <p>勤務地: ${job.city}</p>
      </div>
    `;
  });
}

renderJobs(jobs);

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  const filtered = jobs.filter((job) =>
    job.city.toLowerCase().includes(keyword)
  );

  renderJobs(filtered);
});
