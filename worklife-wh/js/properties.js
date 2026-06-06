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

function renderProperties(propertyArray) {
  container.innerHTML = "";

  propertyArray.forEach((property) => {
    container.innerHTML += `
      <div class="card">
        <h3>${property.title}</h3>

        <p>
          家賃: ${property.rent} NZD/week
        </p>

        <p>
          地域: ${property.city}
        </p>
      </div>
    `;
  });
}

renderProperties(properties);

document.getElementById("addPropertyBtn").addEventListener("click", () => {
  const title = document.getElementById("propertyTitle").value;

  const rent = Number(document.getElementById("propertyRent").value);

  const city = document.getElementById("propertyCity").value;

  if (!title || !rent || !city) {
    alert("全項目を入力してください");

    return;
  }

  properties.push({
    id: Date.now(),
    title,
    rent,
    city,
  });

  renderProperties(properties);

  document.getElementById("propertyTitle").value = "";

  document.getElementById("propertyRent").value = "";

  document.getElementById("propertyCity").value = "";
});
