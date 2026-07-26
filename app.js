// Norwegian Viva 2026 Mediterranean Fly-Cruise Data & Logic

const cruiseData = [
  {
    day: 1,
    date: 'Mon 10 Aug 2026',
    port: 'Venice (Ravenna), Italy',
    arrive: '—',
    depart: '5:00 PM',
    lat: 44.4949,
    lng: 12.2818,
    highlight: 'Pre-cruise stay in Bologna, Train to Ravenna, Cruise Embarkation',
    adultsActivities: 'Explore Bologna Quadrilatero food markets, sample fresh tagliatelle & gelato.',
    kidsActivities: 'Climb the Clock Tower (Torre d’Accursio) & hunt for Bologna’s secret canal window.',
    transferInfo: 'Trenitalia train from Bologna Centrale to Ravenna (~53m, €7.88-€11). Transfer to Porto Corsini terminal via Shuttle bus from Viale Farini (€10-15/p) or Radiotaxi Ravenna (+39 0544 338 88).',
    tags: ['Train Transfer', 'Embarkation', 'Bologna', 'Ravenna']
  },
  {
    day: 2,
    date: 'Tue 11 Aug 2026',
    port: 'Dubrovnik, Croatia',
    arrive: '10:00 AM',
    depart: '11:59 PM',
    lat: 42.6507,
    lng: 18.0944,
    highlight: 'Ancient City Walls Walk & Lokrum Island Sea Kayaking',
    adultsActivities: 'Walk the historic ramparts, drink wine overlooking the Adriatic coast.',
    kidsActivities: 'Guided sea kayaking around Lokrum Island and Betina Cave, plus Dubrovnik Cable Car ride for sunset.',
    transferInfo: 'Tender/Port shuttle into Old Town Pile Gate.',
    tags: ['City Walls', 'Sea Kayaking', 'Cable Car', 'Game of Thrones']
  },
  {
    day: 3,
    date: 'Wed 12 Aug 2026',
    port: 'Bar, Montenegro',
    arrive: '8:00 AM',
    depart: '6:00 PM',
    lat: 42.0931,
    lng: 19.0989,
    highlight: 'Stari Bar Fortress Ruins & Lake Skadar Boat Excursion',
    adultsActivities: 'Explore Stari Bar ancient cliffside fortress and 2,000-year-old olive trees.',
    kidsActivities: 'Lake Skadar boat ride through lily pads with freshwater swim stops, or King’s Beach swim.',
    transferInfo: 'Local taxi or pre-booked tour to Stari Bar / Lake Skadar.',
    tags: ['Fortress', 'Lake Skadar', 'Nature', 'Montenegro']
  },
  {
    day: 4,
    date: 'Thu 13 Aug 2026',
    port: 'At Sea (Mediterranean)',
    arrive: '—',
    depart: '—',
    lat: 39.5000,
    lng: 14.0000,
    highlight: 'Viva Speedway, Galaxy Pavilion VR & Ocean Boulevard Pools',
    adultsActivities: 'Indulge Food Hall, Mandara Spa, infinity pool relaxation on Ocean Boulevard.',
    kidsActivities: 'Race on the 3-level Viva Speedway, Galaxy Pavilion VR flight simulators, and The Drop 10-story free-fall dry slide!',
    transferInfo: 'Enjoy full ship amenities onboard Norwegian Viva.',
    tags: ['Viva Speedway', 'Galaxy Pavilion', 'Sea Day', 'Starlink Wi-Fi']
  },
  {
    day: 5,
    date: 'Fri 14 Aug 2026',
    port: 'Amalfi Coast (Salerno), Italy',
    arrive: '7:00 AM',
    depart: '6:00 PM',
    lat: 40.6780,
    lng: 14.7650,
    highlight: 'Coastal Speedboat Excursion to Positano & Amalfi',
    adultsActivities: 'Limoncello tasting, cliffside views, scenic lemon groves of Positano.',
    kidsActivities: 'Speedboat ride along the coastline with cave swim stops & authentic Positano gelato.',
    transferInfo: 'Ferry/Speedboat from Salerno harbor directly to Positano.',
    tags: ['Positano', 'Amalfi Coast', 'Speedboat', 'Cliff Swim']
  },
  {
    day: 6,
    date: 'Sat 15 Aug 2026',
    port: 'Civitavecchia (Rome), Italy',
    arrive: '6:45 AM',
    depart: '6:00 PM',
    lat: 41.8902,
    lng: 12.4922,
    highlight: 'Civitavecchia Express to Rome: Colosseum & Trevi Fountain',
    adultsActivities: 'Roman Forum, Pantheon exploration, authentic Roman carbonara.',
    kidsActivities: 'Skip-the-line Colosseum Gladiator tour & coin toss into Trevi Fountain.',
    transferInfo: 'Civitavecchia Express train (50 mins) into Rome San Pietro/Termini.',
    tags: ['Rome', 'Colosseum', 'Express Train', 'Trevi Fountain']
  },
  {
    day: 7,
    date: 'Sun 16 Aug 2026',
    port: 'Livorno (Florence/Pisa), Italy',
    arrive: '7:00 AM',
    depart: '10:00 PM',
    lat: 43.7228,
    lng: 10.3966,
    highlight: 'Leaning Tower of Pisa Photo-Op & Florence Duomo Walk',
    adultsActivities: 'Uffizi Gallery, Ponte Vecchio stroll, Tuscan wine tasting.',
    kidsActivities: 'Climb Giotto’s Campanile tower, forced-perspective photo holding up Pisa tower, Boboli Gardens.',
    transferInfo: 'Regional train from Livorno Centrale to Pisa (15 mins) and Florence (1 hr).',
    tags: ['Leaning Tower', 'Florence', 'Duomo', 'Tuscany']
  },
  {
    day: 8,
    date: 'Mon 17 Aug 2026',
    port: 'Nice (Villefranche), France',
    arrive: '7:00 AM',
    depart: '4:30 PM',
    lat: 43.7042,
    lng: 7.3117,
    highlight: 'Villefranche Bay Watersports & Nice Promenade Ride',
    adultsActivities: 'Stroll Old Town Nice (Vieux Nice), sample Socca chickpea crepes.',
    kidsActivities: 'Rent paddleboards/snorkels in Villefranche turquoise bay, or ride e-scooters along Promenade des Anglais.',
    transferInfo: 'Tender into Villefranche-sur-Mer harbor. 10-min train into central Nice.',
    tags: ['French Riviera', 'Villefranche', 'Paddleboarding', 'Nice']
  },
  {
    day: 9,
    date: 'Tue 18 Aug 2026',
    port: 'Palma de Majorca, Spain',
    arrive: '1:00 PM',
    depart: '9:00 PM',
    lat: 39.5696,
    lng: 2.6502,
    highlight: 'Katmandu Theme Park or Palma Bay Beach & Kayaking',
    adultsActivities: 'Palma Cathedral (La Seu) visit, tapas & sangria at Mercat de l’Olivar.',
    kidsActivities: 'Upside-down splash park at Katmandu Park or Palma Aquarium deep ocean tunnel.',
    transferInfo: 'Port bus #1 or taxi from Estació Marítima into Old Town.',
    tags: ['Palma', 'Majorca', 'Katmandu Park', 'Cathedral']
  },
  {
    day: 10,
    date: 'Wed 19 Aug 2026',
    port: 'Barcelona, Spain',
    arrive: '6:30 AM',
    depart: 'Disembarkation',
    lat: 41.3851,
    lng: 2.1734,
    highlight: 'Sagrada Família, Park Güell & Gothic Quarter Exploration',
    adultsActivities: 'Gaudí masterpieces, Mercat de la Boquería food market, tapas.',
    kidsActivities: 'Montjuïc Cable Car ride, Park Güell colorful lizard park & beach walk.',
    transferInfo: 'Cruise shuttle/taxi to Barcelona Airport (BCN) or central hotel.',
    tags: ['Disembarkation', 'Barcelona', 'Sagrada Familia', 'Park Güell']
  }
];

// Family Activity Checklist items
const defaultChecklist = [
  { id: 1, text: 'Climb Torre d’Accursio in Bologna', category: '14M & 11F', done: false },
  { id: 2, text: 'Sea Kayaking around Lokrum Island (Dubrovnik)', category: '14M & 11F', done: false },
  { id: 3, text: 'Dubrovnik Cable Car Ride for Sunset', category: 'Family', done: false },
  { id: 4, text: 'Race on the Viva Speedway Racetrack (Sea Day)', category: '14M & 11F', done: false },
  { id: 5, text: 'Try The Drop 10-Story Free-Fall Slide', category: '14M & 11F', done: false },
  { id: 6, text: 'Speedboat & Swim Stop in Positano (Amalfi)', category: 'Family', done: false },
  { id: 7, text: 'Colosseum Skip-the-Line Gladiator Tour (Rome)', category: 'Family', done: false },
  { id: 8, text: 'Trevi Fountain Coin Toss', category: '11F Special', done: false },
  { id: 9, text: 'Take "Holding Up the Tower" photo in Pisa', category: '14M & 11F', done: false },
  { id: 10, text: 'Snorkel in Villefranche Bay (French Riviera)', category: '14M & 11F', done: false },
  { id: 11, text: 'Katmandu Upside-Down Park or Palma Beach', category: '14M & 11F', done: false },
  { id: 12, text: 'Montjuïc Cable Car in Barcelona', category: 'Family', done: false }
];

let selectedDayIndex = 0;
let gmap = null;
let currentMarker = null;

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  renderDayList();
  selectDay(0);
  renderChecklist();
});

// Countdown Timer to Aug 10, 2026 17:00:00 GMT
function initCountdown() {
  const embarkationDate = new Date('2026-08-10T17:00:00Z').getTime();
  
  function updateTimer() {
    const now = new Date().getTime();
    const diff = embarkationDate - now;

    if (diff <= 0) {
      document.getElementById('countdown-timer').innerHTML = '<strong>Bon Voyage! Sailing Active</strong>';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(d).padStart(2, '0');
    document.getElementById('hours').innerText = String(h).padStart(2, '0');
    document.getElementById('mins').innerText = String(m).padStart(2, '0');
    document.getElementById('secs').innerText = String(s).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Render Left Sidebar Day List
function renderDayList() {
  const container = document.getElementById('day-list');
  container.innerHTML = '';

  cruiseData.forEach((day, index) => {
    const btn = document.createElement('div');
    btn.className = `day-btn ${index === selectedDayIndex ? 'active' : ''}`;
    btn.onclick = () => selectDay(index);
    btn.innerHTML = `
      <div>
        <div class="day-title">Day ${day.day}: ${day.port.split(',')[0]}</div>
        <div class="day-date">${day.date}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="font-size: 11px; opacity: 0.5;"></i>
    `;
    container.appendChild(btn);
  });
}

// Select Day & Update Views
async function selectDay(index) {
  selectedDayIndex = index;
  renderDayList();

  const data = cruiseData[index];
  document.getElementById('current-port-badge').innerText = `Port Focus: ${data.port}`;

  // Update Day Details Card
  const detailsContainer = document.getElementById('day-details-card');
  detailsContainer.innerHTML = `
    <div class="card-header">
      <h2><i class="fa-solid fa-anchor"></i> Day ${data.day}: ${data.port}</h2>
      <span class="badge badge-warning">${data.date}</span>
    </div>
    
    <div class="day-content-grid">
      <div>
        <p style="font-size: 15px; color: #ffffff; margin-bottom: 12px; font-weight: 500;">
          <i class="fa-solid fa-star" style="color: var(--accent);"></i> ${data.highlight}
        </p>

        <div class="activity-section">
          <h4><i class="fa-solid fa-user-tie"></i> Adults Activity Highlights</h4>
          <p style="color: var(--text-muted); font-size: 13px;">${data.adultsActivities}</p>
        </div>

        <div class="activity-section">
          <h4><i class="fa-solid fa-child-reaching"></i> Teen & Kids Activities (14M & 11F)</h4>
          <p style="color: var(--text-muted); font-size: 13px;">${data.kidsActivities}</p>
        </div>

        <div class="activity-section">
          <h4><i class="fa-solid fa-route"></i> Transfer & Timing Details</h4>
          <p style="color: var(--text-muted); font-size: 13px;">
            <strong>Arrive:</strong> ${data.arrive} | <strong>Depart:</strong> ${data.depart}<br>
            ${data.transferInfo}
          </p>
        </div>

        <div class="activity-tags">
          ${data.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
        </div>
      </div>

      <!-- Live Open-Meteo Weather Widget Box -->
      <div class="weather-badge-box">
        <i class="fa-solid fa-cloud-sun" style="font-size: 28px; color: var(--primary);"></i>
        <div class="weather-temp" id="live-temp">--°C</div>
        <small id="weather-desc" style="color: var(--text-muted);">Fetching Open-Meteo...</small>
        <div style="margin-top: 10px; font-size: 11px; color: var(--text-muted);" id="weather-extra">
          Wind: -- km/h | UV: High
        </div>
      </div>
    </div>
  `;

  // Fetch Live Weather via Open-Meteo API
  fetchOpenMeteoWeather(data.lat, data.lng);

  // Update Map Position if loaded
  if (gmap) {
    const pos = { lat: data.lat, lng: data.lng };
    gmap.panTo(pos);
    if (currentMarker) currentMarker.setPosition(pos);
  }
}

// Open-Meteo Live Weather Fetcher
async function fetchOpenMeteoWeather(lat, lng) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`;
    const res = await fetch(url);
    const json = await res.json();
    
    if (json && json.current_weather) {
      const temp = Math.round(json.current_weather.temperature);
      const wind = json.current_weather.windspeed;
      const code = json.current_weather.weathercode;
      const desc = getWeatherDesc(code);

      document.getElementById('live-temp').innerText = `${temp}°C`;
      document.getElementById('weather-desc').innerText = desc;
      document.getElementById('weather-extra').innerText = `Wind: ${wind} km/h | High: ${Math.round(json.daily.temperature_2m_max[0])}°C`;
    }
  } catch (e) {
    document.getElementById('live-temp').innerText = `29°C`;
    document.getElementById('weather-desc').innerText = `Sunny & Mediterranean`;
  }
}

function getWeatherDesc(code) {
  if (code === 0) return 'Clear Sky & Sunny';
  if (code <= 3) return 'Partly Cloudy';
  if (code <= 48) return 'Foggy';
  if (code <= 67) return 'Light Rain';
  return 'Sunny & Warm';
}

// Google Maps Loader
function loadGoogleMaps() {
  const apiKey = document.getElementById('gmaps-api-key').value.trim();
  if (!apiKey) {
    alert('Please enter a valid Google Maps API Key.');
    return;
  }

  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  document.head.appendChild(script);
}

window.initMap = function() {
  document.getElementById('map-placeholder').style.display = 'none';
  const data = cruiseData[selectedDayIndex];
  
  gmap = new google.maps.Map(document.getElementById('map-container'), {
    center: { lat: data.lat, lng: data.lng },
    zoom: 9,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] }
    ]
  });

  currentMarker = new google.maps.Marker({
    position: { lat: data.lat, lng: data.lng },
    map: gmap,
    title: data.port,
    animation: google.maps.Animation.DROP
  });
};

// Family Activity Checklist Persistence
function renderChecklist() {
  const saved = localStorage.getItem('viva_checklist');
  const items = saved ? JSON.parse(saved) : defaultChecklist;

  const container = document.getElementById('checklist-items');
  container.innerHTML = '';

  let completedCount = 0;

  items.forEach(item => {
    if (item.done) completedCount++;

    const div = document.createElement('div');
    div.className = `check-item ${item.done ? 'completed' : ''}`;
    div.onclick = () => toggleCheckitem(item.id);
    div.innerHTML = `
      <input type="checkbox" ${item.done ? 'checked' : ''} readonly />
      <div>
        <div style="font-weight: 600; font-size: 13px; color: #ffffff;">${item.text}</div>
        <small style="color: var(--text-muted); font-size: 11px;">Category: ${item.category}</small>
      </div>
    `;
    container.appendChild(div);
  });

  document.getElementById('checklist-progress').innerText = `${completedCount} of ${items.length} Completed`;
}

function toggleCheckitem(id) {
  const saved = localStorage.getItem('viva_checklist');
  let items = saved ? JSON.parse(saved) : defaultChecklist;

  items = items.map(item => {
    if (item.id === id) item.done = !item.done;
    return item;
  });

  localStorage.setItem('viva_checklist', JSON.stringify(items));
  renderChecklist();
}
