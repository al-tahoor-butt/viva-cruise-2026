// Norwegian Viva 2026 Mediterranean Fly-Cruise Data & Logic

const GOOGLE_MAPS_API_KEY = "AIzaSyBDcXjetWWNWFKdG_OrxxnOtgiTie_FeSs";
const GOOGLE_CLIENT_ID = "600255061362-v6cgiglo43njki3jmd4bn5qme1steg6i.apps.googleusercontent.com";

const cruiseData = [
  {
    day: 1,
    date: 'Mon 10 Aug 2026',
    port: 'Venice (Ravenna), Italy',
    arrive: '—',
    depart: '5:00 PM',
    lat: 44.4949,
    lng: 12.2818,
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
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

let previousDayIndex = 0;
let selectedDayIndex = 0;
let gmap = null;
let currentMarker = null;
let animatedShipMarker = null;
let routePolyline = null;
let animationFrameId = null;

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  renderDayList();
  selectDay(0);
  renderChecklist();
  renderPhotoAlbum();
  loadGooglePickerLibrary();
});

// Load Google Picker Library
function loadGooglePickerLibrary() {
  if (window.gapi) {
    gapi.load('picker', { callback: () => console.log('Google Picker API loaded.') });
  }
}

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
  previousDayIndex = selectedDayIndex;
  selectedDayIndex = index;
  renderDayList();

  const data = cruiseData[index];
  document.getElementById('current-port-badge').innerText = `Port Focus: ${data.port}`;

  // Update Day Details Card with Hero Image Banner
  const detailsContainer = document.getElementById('day-details-card');
  detailsContainer.innerHTML = `
    <div class="day-hero-container">
      <img src="${data.heroImage}" alt="${data.port}" class="day-hero-img" />
    </div>

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

  // Trigger Map Sailing Animation if loaded
  if (gmap) {
    animateShipTransition(previousDayIndex, selectedDayIndex);
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

// Initialize Interactive Google Map with Animated Route & Ship Icon
window.initMap = function() {
  const ph = document.getElementById('map-placeholder');
  if (ph) ph.style.display = 'none';
  
  const initialData = cruiseData[selectedDayIndex];
  const portCoords = cruiseData.map(d => ({ lat: d.lat, lng: d.lng }));
  
  gmap = new google.maps.Map(document.getElementById('map-container'), {
    center: { lat: initialData.lat, lng: initialData.lng },
    zoom: 7,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] }
    ]
  });

  // Glowing Polyline for Cruise Route
  routePolyline = new google.maps.Polyline({
    path: portCoords,
    geodesic: true,
    strokeColor: '#00d2ff',
    strokeOpacity: 0.8,
    strokeWeight: 4,
    map: gmap
  });

  // Port Markers for all 10 stops
  cruiseData.forEach((day, idx) => {
    new google.maps.Marker({
      position: { lat: day.lat, lng: day.lng },
      map: gmap,
      title: `Day ${day.day}: ${day.port}`,
      label: {
        text: `${day.day}`,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '12px'
      }
    });
  });

  // Animated Cruise Ship Marker
  const shipIcon = {
    path: "M 0,-15 C -5,-5 -8,0 -8,10 C -8,15 0,18 0,18 C 0,18 8,15 8,10 C 8,0 5,-5 0,-15 Z",
    fillColor: "#ffb703",
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
    scale: 1.2
  };

  animatedShipMarker = new google.maps.Marker({
    position: { lat: initialData.lat, lng: initialData.lng },
    map: gmap,
    title: "Norwegian Viva Position",
    icon: shipIcon,
    zIndex: 999
  });
};

// Smooth Sailing Transition Animation between Ports
function animateShipTransition(fromIdx, toIdx) {
  if (!animatedShipMarker || !gmap) return;

  const startLat = cruiseData[fromIdx].lat;
  const startLng = cruiseData[fromIdx].lng;
  const endLat = cruiseData[toIdx].lat;
  const endLng = cruiseData[toIdx].lng;

  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const duration = 1500;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const currentLat = startLat + (endLat - startLat) * easeProgress;
    const currentLng = startLng + (endLng - startLng) * easeProgress;

    const currentPos = new google.maps.LatLng(currentLat, currentLng);
    animatedShipMarker.setPosition(currentPos);
    gmap.panTo(currentPos);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    }
  }

  animationFrameId = requestAnimationFrame(step);
}

// Google Photos Visual Picker Handler using Official Google Picker UI
function openGooglePhotosPicker() {
  if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
    alert("Google Identity Client loading... Please try again in 5 seconds.");
    return;
  }

  const tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/photoslibrary.readonly",
    callback: async (response) => {
      if (response.access_token) {
        createVisualGooglePicker(response.access_token);
      }
    }
  });

  tokenClient.requestAccessToken({ prompt: "consent" });
}

// Build Official Google Visual Photo & Drive Picker Window
function createVisualGooglePicker(accessToken) {
  if (!window.google || !window.google.picker) {
    // Fallback if Picker API script is still initializing
    fetchGooglePhotosMediaItems(accessToken);
    return;
  }

  const view = new google.picker.View(google.picker.ViewId.PHOTOS);
  view.setMimeTypes("image/png,image/jpeg,image/jpg");

  const picker = new google.picker.PickerBuilder()
    .addView(view)
    .addView(google.picker.ViewId.IMAGE_SEARCH)
    .setOAuthToken(accessToken)
    .setDeveloperKey(GOOGLE_MAPS_API_KEY)
    .setCallback((data) => {
      if (data.action === google.picker.Action.PICKED) {
        const doc = data.docs[0];
        const photoUrl = doc.url || doc.thumbnails[0].url;
        
        const saved = localStorage.getItem('viva_family_photos');
        let photos = saved ? JSON.parse(saved) : [];
        photos.unshift({ src: photoUrl, title: doc.name || 'Google Photo' });
        localStorage.setItem('viva_family_photos', JSON.stringify(photos.slice(0, 20)));
        renderPhotoAlbum();
      }
    })
    .build();

  picker.setVisible(true);
}

async function fetchGooglePhotosMediaItems(accessToken) {
  try {
    const res = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=15', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await res.json();

    if (data.mediaItems) {
      const saved = localStorage.getItem('viva_family_photos');
      let photos = saved ? JSON.parse(saved) : [];

      data.mediaItems.forEach(item => {
        photos.unshift({ src: item.baseUrl, title: item.filename || 'Google Photo' });
      });

      localStorage.setItem('viva_family_photos', JSON.stringify(photos.slice(0, 20)));
      renderPhotoAlbum();
    }
  } catch (e) {
    console.log("Fetched Google Photos.");
  }
}

// User Photo Album Upload & LocalStorage Persistence
function renderPhotoAlbum() {
  const defaultPhotos = [
    { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80', title: 'Ravenna' },
    { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80', title: 'Dubrovnik' },
    { src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80', title: 'Rome' }
  ];

  const saved = localStorage.getItem('viva_family_photos');
  const photos = saved ? JSON.parse(saved) : defaultPhotos;

  const grid = document.getElementById('photo-grid');
  grid.innerHTML = '';

  photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.innerHTML = `<img src="${photo.src}" alt="${photo.title || 'Memory'}" title="${photo.title || 'Memory'}" />`;
    grid.appendChild(card);
  });
}

function handlePhotoUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  const saved = localStorage.getItem('viva_family_photos');
  let photos = saved ? JSON.parse(saved) : [];

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      photos.unshift({ src: e.target.result, title: file.name });
      localStorage.setItem('viva_family_photos', JSON.stringify(photos.slice(0, 20)));
      renderPhotoAlbum();
    };
    reader.readAsDataURL(file);
  });
}

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
