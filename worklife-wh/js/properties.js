const properties = [
  {
    id: 1,
    title: "Private Room",
    rent: 250,
    city: "Auckland",
  },
  {
    id: 2,
    title: "Shared House",
    rent: 180,
    city: "Hamilton",
  },
  {
    id: 3,
    title: "Studio Room",
    rent: 320,
    city: "Wellington",
  },
];

const container = document.getElementById("property-list");

function renderProperties(propertiesArray) {
  container.innerHTML = "";

  propertiesArray.forEach((property) => {
    container.innerHTML += `
      <div class="card">
        <h3>${properties.title}</h3>
        <p>家賃: ${properties.rent} NZD/week</p>
        <p>地域: ${properties.city}</p>
      </div>
    `;
  });
}

renderProperties(properties);

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();

  const filtered = properties.filter((property) =>
    property.city.toLowerCase().includes(keyword)
  );

  renderProperties(filtered);
});
