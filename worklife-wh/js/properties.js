const container = document.getElementById("property-list");

properties.forEach((property) => {
  container.innerHTML += `
    <div class="card">
      <h3>${property.title}</h3>
      <p>家賃: ${property.rent} NZD/week</p>
      <p>地域: ${property.city}</p>
    </div>
  `;
});
