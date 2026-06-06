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

document.getElementById("addJobBtn").addEventListener("click", () => {
  const title = document.getElementById("jobTitle").value;

  const wage = Number(document.getElementById("jobWage").value);

  const city = document.getElementById("jobCity").value;

  if (!title || !wage || !city) {
    alert("全項目を入力してください");
    return;
  }

  jobs.push({
    id: Date.now(),
    title,
    wage,
    city,
  });

  renderJobs(jobs);

  document.getElementById("jobTitle").value = "";
  document.getElementById("jobWage").value = "";
  document.getElementById("jobCity").value = "";
});
