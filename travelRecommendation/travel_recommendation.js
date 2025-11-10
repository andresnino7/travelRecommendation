// --- Home Page Logic ---

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const countrySelect = document.getElementById("countrySelect");
const countryResult = document.getElementById("countryResult");

// --- Buscar destinos ---
searchBtn.addEventListener('click', () => {
  const term = searchInput.value.toLowerCase().trim();
  showRecommendations(term);
});

// --- Borrar búsqueda ---
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearResults();
});

// --- Mostrar recomendaciones según búsqueda ---
function showRecommendations(term) {
  const resultsContainer = document.getElementById('results') || document.querySelector('main');
  clearResults();

  if (term.includes('templo')) {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>🛕 Temple Recommendations</h2>
      <div class="images">
        <img src="img/templo1.jpg" alt="Temple 1">
        <img src="img/templo2.jpg" alt="Temple 2">
        <img src="img/templo3.jpg" alt="Temple 3">
        <img src="img/templo4.jpg" alt="Temple 4">
      </div>
      <p>Discover ancient temples filled with history, spirituality, and beautiful architecture.</p>
    `;
    resultsContainer.appendChild(section);
  } 
  else if (term.includes('país') || term.includes('pais')) {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>🌎 Country Recommendations</h2>
      <div class="images">
        <img src="img/mexico.jpg" alt="Mexico">
        <img src="img/japon.jpg" alt="Japan">
      </div>
      <p>Explore amazing countries full of culture, color, and unique destinations.</p>
    `;
    resultsContainer.appendChild(section);
  } 
  else if (term.includes('playa')) {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>🏖️ Beach Recommendations</h2>
      <div class="images">
        <img src="img/playa1.jpg" alt="Beach 1">
        <img src="img/playa2.jpg" alt="Beach 2">
        <img src="img/playa3.jpg" alt="Beach 3">
        <img src="img/playa4.jpg" alt="Beach 4">
      </div>
      <p>Enjoy the most beautiful beaches with turquoise water and golden sands.</p>
    `;
    resultsContainer.appendChild(section);
  } 
  else {
    const message = document.createElement('p');
    message.textContent = 'No results found. Try searching for "templo", "país" or "playa".';
    resultsContainer.appendChild(message);
  }
}

// --- Limpiar resultados dinámicos ---
function clearResults() {
  const main = document.querySelector('main');
  const extraSections = main.querySelectorAll('section:not(.recommendation)');
  extraSections.forEach(section => section.remove());
}

// --- Botón "Explore Now" ---
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  });
}

// --- Country Recommendations (menú desplegable) ---
if (countrySelect) {
  const destinations = {
    mexico: `
      <h3>🇲🇽 Mexico</h3>
      <img src="img/mexico.jpg" alt="Mexico">
      <p>A comer chile</p>
    `,
    japan: `
      <h3>🇯🇵 Japan</h3>
      <img src="img/japon.jpg" alt="Japan">
      <p>otro mundo.</p>
    `,
    colombia: `
      <h3>🇨🇴 Colombia</h3>
      <img src="img/colombia.jpg" alt="Colombia">
      <p>las mejores playas.</p>
    `
  };

  countrySelect.addEventListener("change", e => {
    const value = e.target.value;
    countryResult.innerHTML = destinations[value] || "";
  });
}

// --- Contact Form ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Gracias por contactarnos.");
    contactForm.reset();
  });
}
