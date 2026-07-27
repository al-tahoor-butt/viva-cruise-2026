// Norwegian Viva 2026 Mediterranean Fly-Cruise Data & Logic

const cruiseData = [
  {
    day: 0,
    date: 'Sun 09 Aug 2026',
    port: 'Manchester ➔ Bologna (Hotel Del Borgo)',
    arrive: '9:05 PM (BLQ)',
    depart: '5:45 PM (MAN)',
    lat: 44.5167,
    lng: 11.2721,
    heroImage: 'https://images.unsplash.com/photo-1541370976299-4d24ebbcbe0c?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Flight FR2242 & Stay at Hotel Del Borgo, Bologna',
    adultsActivities: 'Land in Bologna Airport (BLQ) at 21:05, 8-min taxi to Hotel Del Borgo (Booking #5007213355), late-night aperitivo.',
    kidsActivities: 'Exciting evening flight & cozy stay at Hotel Del Borgo (2 single + 1 double bed configured).',
    transferInfo: 'Flight FR2242 (PNR: WTUR5S) MAN 17:45 ➔ BLQ 21:05. Hotel Del Borgo: Via Marco Emilio Lepido 195 (Booking #5007213355). 8-min taxi from BLQ airport.',
    tags: ['Hotel Del Borgo', 'Flight FR2242', 'Pre-Cruise', 'Bologna']
  },
  {
    day: 1,
    date: 'Mon 10 Aug 2026',
    port: 'Bologna ➔ Ravenna Cruise Port',
    arrive: '12:30 PM Check-in',
    depart: '5:00 PM Sailing',
    lat: 44.4949,
    lng: 12.2818,
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Hotel Del Borgo ➔ Ravenna Port (12:30-13:30 Embarkation Window)',
    adultsActivities: 'Breakfast at Hotel Del Borgo, 10:15 taxi to Bologna Centrale, 11:06 train to Ravenna, check-in & welcome champagne on Norwegian Viva.',
    kidsActivities: 'First glimpse of 143,000-ton Norwegian Viva, explore Speedway racetrack & pool deck!',
    transferInfo: 'Option A (Train): 10:15 Taxi to Bologna Centrale ➔ 11:06 Trenitalia Regional train (53m, arr 11:59 Ravenna) ➔ 12:05 Taxi/Shuttle to Porto Corsini ➔ 12:30 Embarkation. Option B (Direct Transfer): 11:00 Taxi from Hotel Del Borgo directly to Ravenna Terminal (A14 Highway, 1h10m).',
    liveTrainLink: 'https://www.viaggiatreno.it/',
    tags: ['Hotel Del Borgo', '11:06 Train', '12:30 Embarkation', 'Ravenna Port']
  },
  {
    day: 2,
    date: 'Tue 11 Aug 2026',
    port: 'Dubrovnik, Croatia',
    arrive: '10:00 AM',
    depart: '11:59 PM',
    lat: 42.6507,
    lng: 18.0944,
    heroImage: 'https://images.unsplash.com/photo-1555990793-da11153b2473?auto=format&fit=crop&w=1200&q=80',
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
    lat: 38.1000,
    lng: 17.5000,
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
    heroImage: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
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
    port: 'Barcelona, Spain ➔ Manchester, UK',
    arrive: '6:30 AM',
    depart: '12:35 PM Flight',
    lat: 41.3851,
    lng: 2.1734,
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Cruise Disembarkation & Flight FR6597 to Manchester',
    adultsActivities: 'Disembark Norwegian Viva at 08:30 AM, transfer to Barcelona Airport (BCN).',
    kidsActivities: 'Souvenir shopping at BCN airport before flight home.',
    transferInfo: '08:30 Disembark ➔ 09:30 Taxi/Aerobús to BCN Terminal 2 ➔ 10:35 Check-in ➔ 12:35 Flight FR6597 (PNR: F8YGQR) ➔ 14:10 Arrive Manchester (MAN).',
    tags: ['Disembarkation', 'Barcelona', 'Inbound Flight', 'Ryanair FR6597']
  }
];

// Port Phrasebook Dictionary
const phrasesData = {
  it: [
    { en: 'Hello / Good day', foreign: 'Buongiorno' },
    { en: 'Thank you very much', foreign: 'Grazie mille' },
    { en: 'Please', foreign: 'Per favore' },
    { en: 'Table for 4, please', foreign: 'Un tavolo per quattro, per favore' },
    { en: 'Where is the port shuttle?', foreign: 'Dov’è la navetta del porto?' },
    { en: 'Delicious gelato!', foreign: 'Gelato delizioso!' }
  ],
  hr: [
    { en: 'Hello', foreign: 'Dobar dan' },
    { en: 'Thank you', foreign: 'Hvala vam' },
    { en: 'Please', foreign: 'Molim' },
    { en: 'Where is the Old Town?', foreign: 'Gdje je Stari Grad?' },
    { en: 'One ice cream, please', foreign: 'Jedan sladoled, molim' },
    { en: 'Goodbye', foreign: 'Doviđenja' }
  ],
  fr: [
    { en: 'Hello / Good morning', foreign: 'Bonjour' },
    { en: 'Thank you very much', foreign: 'Merci beaucoup' },
    { en: 'Please', foreign: 'S’il vous plaît' },
    { en: 'Where is the beach?', foreign: 'Où est la plage?' },
    { en: 'Table for 4', foreign: 'Une table pour quatre' },
    { en: 'Delicious!', foreign: 'Délicieux!' }
  ],
  es: [
    { en: 'Hello', foreign: '¡Hola!' },
    { en: 'Thank you very much', foreign: 'Muchas gracias' },
    { en: 'Please', foreign: 'Por favor' },
    { en: 'Where is the taxi stand?', foreign: '¿Dónde está la parada de taxis?' },
    { en: 'Tapas for 4, please', foreign: 'Tapas para cuatro, por favor' },
    { en: 'Goodbye', foreign: '¡Adiós!' }
  ]
};

// Daily Port Excursion Packing Items
const defaultPackingList = [
  { id: 101, text: 'NCL Cruise Keycards & Passports', category: 'Essential', done: false },
  { id: 102, text: 'Euros (€) / Credit Cards for local markets', category: 'Essential', done: false },
  { id: 103, text: 'Reef-Safe Sunscreen & Sunglasses', category: 'Protection', done: false },
  { id: 104, text: 'Snorkel Masks & Water Shoes (Lokrum / Villefranche)', category: 'Gear', done: false },
  { id: 105, text: 'Fully Charged Phones & Portable Power Bank', category: 'Tech', done: false },
  { id: 106, text: 'Refillable Water Bottles (Stay Hydrated!)', category: 'Health', done: false }
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
let animatedShipMarker = null;
let routePolyline = null;
let animationFrameId = null;
let currentLanguage = 'it';

// Private Family Travel Portal Gatekeeper (Salted SHA-256 Cryptographic Hashes - Zero Plaintext Passcodes in Code)
const PORTAL_SALT = 'viva-mediterranean-fly-cruise-2026-family-portal-salt#';
const VALID_HASHES = [
  'e2378cc178f0a8facb354f5cd0849cb1d7d16f8631ca24f724e01cc58d38a300',
  '1c4a3513c6a7e37376382656524eff5e735a1db84e04bd41d459ee65bcf35418',
  'a29fb4f453469283d0584439e44ddc876bcccdb7d1c07c8058fb43d283fdca2f',
  '1bd29bc38f136a1b268e1dfd8388eecee67539e76e77824ff3143d61ef1a2372',
  'f315211d39e0698d7bf779acc26e64dcc60fe44245917539d13c2d267c7160fa',
  'f05861e0607d1627f8bc6a837623c0c50f6e6627fe6c237b079f7cf885da4734',
  '3f8a531f646f4877b8c473842a62346009d638c28a6712fd6449479e866284c4',
  '6f646303897d428844034e6115d9e4c8cdc76b736e204a1366de6c06a18d59cc',
  '7a3dbcffbadfbab7f8bb564c5fa5d1b647a0bb255ea1245c06ccb3868f60a91b',
  '71016fd469c3b3b2a6f0e5a99ee367f973821097e3d20b4f3061e5303792fdce'
];

async function hashPasscode(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(PORTAL_SALT + str);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function initAuth() {
  const isUnlocked = localStorage.getItem('viva_cruise_unlocked') === 'true';
  const splash = document.getElementById('splash-screen');
  const content = document.getElementById('portal-content');
  if (!splash || !content) return;

  if (isUnlocked) {
    splash.classList.add('hidden');
    content.style.display = 'block';
  } else {
    splash.classList.remove('hidden');
    content.style.display = 'none';
    setTimeout(() => {
      const input = document.getElementById('passcode-input');
      if (input) input.focus();
    }, 100);
  }
}

async function unlockPortal() {
  const inputEl = document.getElementById('passcode-input');
  const errorEl = document.getElementById('splash-error');
  const splash = document.getElementById('splash-screen');
  const content = document.getElementById('portal-content');
  if (!inputEl) return;

  const val = inputEl.value.trim().toLowerCase();
  const hash = await hashPasscode(val);

  if (VALID_HASHES.includes(hash)) {
    if (errorEl) errorEl.style.display = 'none';
    localStorage.setItem('viva_cruise_unlocked', 'true');
    splash.classList.add('hidden');
    content.style.display = 'block';
  } else {
    if (errorEl) {
      errorEl.style.display = 'block';
      errorEl.classList.remove('shake');
      void errorEl.offsetWidth; // trigger DOM reflow for CSS animation restart
      errorEl.classList.add('shake');
    }
    inputEl.value = '';
    inputEl.focus();
  }
}

function lockPortal() {
  localStorage.removeItem('viva_cruise_unlocked');
  const splash = document.getElementById('splash-screen');
  const content = document.getElementById('portal-content');
  const inputEl = document.getElementById('passcode-input');
  const errorEl = document.getElementById('splash-error');
  if (errorEl) errorEl.style.display = 'none';
  if (splash) splash.classList.remove('hidden');
  if (content) content.style.display = 'none';
  if (inputEl) inputEl.value = '';
}

window.unlockPortal = unlockPortal;
window.lockPortal = lockPortal;

document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initCountdown();
  renderDayList();
  selectDay(0);
  renderChecklist();
  renderPackingList();
  renderPhotoAlbum();
  renderPhrasebook('it');
  convertCurrency();
  fetchLiveCurrencyRates();
});

// Live Currency Converter Logic
let currencyRates = {
  EUR: 0.855, // fallback: €1 = ~£0.855
  USD: 0.775  // fallback: $1 = ~£0.775
};

async function fetchLiveCurrencyRates() {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/GBP');
    const data = await res.json();
    if (data && data.rates) {
      currencyRates.EUR = 1 / data.rates.EUR;
      currencyRates.USD = 1 / data.rates.USD;
      convertCurrency();
    }
  } catch (e) {
    // Silent fallback to hardcoded rates
  }
}

function convertCurrency() {
  const amountEl = document.getElementById('currency-amount');
  const fromEl = document.getElementById('currency-from');
  const outputEl = document.getElementById('currency-output');

  if (!amountEl || !fromEl || !outputEl) return;

  const val = parseFloat(amountEl.value) || 0;
  const from = fromEl.value;

  const gbp = (val * (currencyRates[from] || 0.855)).toFixed(2);
  outputEl.innerText = `£${gbp}`;
}

// Phrasebook Switcher Logic
function switchLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('.phrase-tab').forEach(tab => tab.classList.remove('active'));

  const activeBtn = Array.from(document.querySelectorAll('.phrase-tab')).find(b => b.getAttribute('onclick').includes(lang));
  if (activeBtn) activeBtn.classList.add('active');

  renderPhrasebook(lang);
}

function renderPhrasebook(lang) {
  const container = document.getElementById('phrase-grid');
  if (!container) return;

  const items = phrasesData[lang] || phrasesData['it'];
  container.innerHTML = items.map(item => `
    <div class="phrase-item">
      <strong>${item.en}</strong>
      <span>"${item.foreign}"</span>
    </div>
  `).join('');
}



// Multi-Stage Dynamic Vacation Ticker
function initCountdown() {
  // 9th August 2026 at 17:45 BST = 16:45 UTC
  const flightOutboundDate = Date.UTC(2026, 7, 9, 16, 45, 0);
  // 10th August 2026 at 12:30 CEST = 10:30 UTC
  const embarkationDate = Date.UTC(2026, 7, 10, 10, 30, 0);
  // 19th August 2026 at 14:10 BST = 13:10 UTC
  const disembarkationDate = Date.UTC(2026, 7, 19, 13, 10, 0);
  
  function updateTimer() {
    const now = new Date().getTime();
    const labelEl = document.getElementById('countdown-label');
    const timerEl = document.getElementById('countdown-timer');
    if (!labelEl || !timerEl) return;

    // Phase 1: Pre-Trip Countdown to Outbound Flight
    if (now < flightOutboundDate) {
      labelEl.innerHTML = `<i class="fa-solid fa-plane-departure"></i> Outbound Flight Countdown`;
      formatTimer(flightOutboundDate - now, timerEl);
    }
    // Phase 2: Pre-Cruise Stay in Bologna -> Countdown to Cruise Embarkation
    else if (now < embarkationDate) {
      labelEl.innerHTML = `<i class="fa-solid fa-anchor"></i> Cruise Embarkation Countdown`;
      formatTimer(embarkationDate - now, timerEl);
    }
    // Phase 3: Active Vacation (Sailing Live on Norwegian Viva!)
    else if (now < disembarkationDate) {
      const elapsedDays = Math.min(10, Math.floor((now - embarkationDate) / (1000 * 60 * 60 * 24)) + 1);
      labelEl.innerHTML = `<i class="fa-solid fa-circle" style="color: #10b981; font-size: 8px;"></i> Sailing Live: Day ${elapsedDays} of 10`;
      timerEl.innerHTML = `<div style="font-size: 14px; font-weight: 700; color: #ffffff; padding: 4px 0;"><i class="fa-solid fa-ship"></i> Bon Voyage! Mediterranean Sea</div>`;
    }
    // Phase 4: Post-Vacation (Minimize gracefully to give full space to photo album)
    else {
      labelEl.innerHTML = `<i class="fa-solid fa-heart" style="color: var(--sunset-coral);"></i> Welcome Home! Family Album Active`;
      timerEl.innerHTML = `<div style="font-size: 12px; color: var(--text-muted);">Trips Memories Saved</div>`;
    }
  }

  function formatTimer(diff, container) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    container.innerHTML = `
      <div class="unit"><span>${String(d).padStart(2, '0')}</span><small>Days</small></div>
      <div class="unit"><span>${String(h).padStart(2, '0')}</span><small>Hrs</small></div>
      <div class="unit"><span>${String(m).padStart(2, '0')}</span><small>Mins</small></div>
      <div class="unit"><span>${String(s).padStart(2, '0')}</span><small>Secs</small></div>
    `;
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
        <div class="day-title">${day.day === 0 ? 'Fly-In' : 'Day ' + day.day}: ${day.port.split(',')[0]}</div>
        <div class="day-date">${day.date}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="font-size: 11px; opacity: 0.5;"></i>
    `;
    container.appendChild(btn);
  });
}

// Select Day & Update Views + Dynamic Master Travel Command Box
async function selectDay(index) {
  previousDayIndex = selectedDayIndex;
  selectedDayIndex = index;
  renderDayList();

  const data = cruiseData[index];
  document.getElementById('current-port-badge').innerText = `Focus: ${data.port}`;

  // Update Dynamic Master Travel Command Center at the Top!
  const masterFocusBox = document.getElementById('dynamic-day-travel-box');
  if (masterFocusBox) {
    masterFocusBox.innerHTML = `
      <div class="travel-box-title">
        <i class="fa-solid fa-location-crosshairs"></i> Day ${data.day} Travel Focus: ${data.port.split(',')[0]} (${data.date})
      </div>
      <div class="travel-box-content">
        <strong>Arrive: ${data.arrive} | Depart: ${data.depart}</strong>
        <p style="margin-top: 4px; color: #ffffff; font-size: 13px;">${data.transferInfo}</p>
        ${data.liveTrainLink ? `<a href="${data.liveTrainLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="margin-top: 8px; text-decoration: none;"><i class="fa-solid fa-train"></i> Track 11:06 Train Live</a>` : ''}
      </div>
    `;
  }

  const liveTrainBtn = data.liveTrainLink ? `
    <div style="margin-top: 10px;">
      <a href="${data.liveTrainLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="text-decoration: none;">
        <i class="fa-solid fa-train"></i> Track 11:06 Trenitalia Live (ViaggiaTreno)
      </a>
    </div>
  ` : '';

  // Update Day Details Card with Hero Image Banner
  const detailsContainer = document.getElementById('day-details-card');
  detailsContainer.innerHTML = `
    <div class="day-hero-container">
      <img src="${data.heroImage}" alt="${data.port}" class="day-hero-img" />
    </div>

    <div class="card-header">
      <h2><i class="fa-solid ${data.day === 0 ? 'fa-hotel' : 'fa-anchor'}"></i> ${data.day === 0 ? 'Pre-Cruise Stay' : 'Day ' + data.day}: ${data.port}</h2>
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
          <h4><i class="fa-solid fa-route"></i> Transfer & Schedule Timeline</h4>
          <p style="color: var(--text-muted); font-size: 13px;">
            <strong>Timing:</strong> Arrive ${data.arrive} | Depart ${data.depart}<br>
            ${data.transferInfo}
          </p>
          ${liveTrainBtn}
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

// Flight Paths (Manchester MAN <-> Bologna BLQ & Barcelona BCN <-> Manchester MAN)
const flightInboundCoordinates = [
  { lat: 53.3650, lng: -2.2728, day: -1 }, // Manchester Airport (MAN)
  { lat: 48.8566, lng: 2.3522 },
  { lat: 44.4949, lng: 11.3426, day: 0 }   // Bologna (BLQ)
];

const flightOutboundCoordinates = [
  { lat: 41.3851, lng: 2.1734, day: 10 },  // Barcelona Airport (BCN)
  { lat: 47.0000, lng: 0.5000 },
  { lat: 53.3650, lng: -2.2728, day: 11 }  // Manchester Airport (MAN)
];

// Realistic Overland Train Route (Bologna Centrale -> Imola -> Faenza -> Lugo -> Ravenna Port)
const trainRouteCoordinates = [
  { lat: 44.4949, lng: 11.3426, day: 0 }, // Bologna
  { lat: 44.3585, lng: 11.7161 }, // Imola
  { lat: 44.2922, lng: 11.8845 }, // Faenza
  { lat: 44.4239, lng: 11.9161 }, // Lugo
  { lat: 44.4187, lng: 12.2093 }, // Ravenna Station
  { lat: 44.4949, lng: 12.2818, day: 1 }  // Porto Corsini (Ravenna Cruise Port)
];

// Realistic AIS Maritime Sea Lanes (Navigating around Italian Peninsula, Straits, and Islands)
const seaRouteCoordinates = [
  { lat: 44.4949, lng: 12.2818, day: 1 }, // Ravenna Port
  { lat: 44.1000, lng: 13.5000 },
  { lat: 43.3000, lng: 15.5000 },
  { lat: 42.6507, lng: 18.0944, day: 2 }, // Dubrovnik
  { lat: 42.3500, lng: 18.6000 },
  { lat: 42.0931, lng: 19.0989, day: 3 }, // Bar, Montenegro
  { lat: 40.5000, lng: 19.1000 }, // Strait of Otranto (between Italy & Albania)
  { lat: 39.7500, lng: 18.5500 }, // Rounding Heel of Italy (Santa Maria di Leuca)
  { lat: 38.1000, lng: 17.5000, day: 4 }, // At Sea (Ionian Sea off south coast of Italy)
  { lat: 37.9500, lng: 15.6800 }, // Southern entrance to Strait of Messina
  { lat: 38.2250, lng: 15.6150 }, // Exact shipping lane between Messina and Villa San Giovanni
  { lat: 38.3000, lng: 15.5800 }, // Northern exit of Strait of Messina (Capo Peloro / Scilla)
  { lat: 38.8000, lng: 15.1500 }, // Tyrrhenian Sea (passing Stromboli)
  { lat: 40.3000, lng: 14.6500 }, // Approaching Gulf of Salerno
  { lat: 40.6780, lng: 14.7650, day: 5 }, // Salerno / Amalfi Coast
  { lat: 40.5500, lng: 14.2500 }, // West of Capri
  { lat: 41.2000, lng: 12.8000 }, // Off Gaeta coast
  { lat: 41.8902, lng: 12.4922, day: 6 }, // Civitavecchia / Rome
  { lat: 42.4500, lng: 11.0000 }, // West of Monte Argentario
  { lat: 43.0000, lng: 9.8000 },  // West of Elba Island
  { lat: 43.5485, lng: 10.3106, day: 7 }, // Livorno / Florence
  { lat: 43.6500, lng: 9.3000 },  // Ligurian Sea crossing
  { lat: 43.5528, lng: 7.0174, day: 8 },  // Cannes
  { lat: 42.2000, lng: 5.5000 },  // Gulf of Lion / Balearic Sea
  { lat: 40.5000, lng: 3.8000 },  // North of Menorca/Mallorca
  { lat: 39.5000, lng: 2.3500 },  // Rounding Mallorca southwest cape
  { lat: 39.5696, lng: 2.6502, day: 9 },  // Palma de Mallorca
  { lat: 40.5000, lng: 2.4000 },  // Balearic Sea channel
  { lat: 41.3851, lng: 2.1734, day: 10 }  // Barcelona
];

// Initialize Interactive Google Map with Modern Ultra-Sleek Mediterranean Theme
let portMarkers = [];
let activeInfoWindow = null;

window.initMap = function() {
  const ph = document.getElementById('map-placeholder');
  if (ph) ph.style.display = 'none';
  
  const initialData = cruiseData[selectedDayIndex];
  
  // Custom Midnight Mediterranean Map Styling
  gmap = new google.maps.Map(document.getElementById('map-container'), {
    center: { lat: initialData.lat, lng: initialData.lng },
    zoom: 7,
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#0f172a" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#94a3b8" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
      { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#1e293b" }] },
      { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#cbd5e1" }] },
      { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
      { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#334155" }] },
      { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#64748b" }] },
      { featureType: "transit", elementType: "geometry", stylers: [{ color: "#1e293b" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0b1329" }] },
      { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#38bdf8" }] }
    ]
  });

  // Dashed Sky-Blue Inbound Flight Path (Manchester -> Bologna)
  const flightInPolyline = new google.maps.Polyline({
    path: flightInboundCoordinates,
    geodesic: true,
    strokeColor: '#38bdf8',
    strokeOpacity: 0,
    strokeWeight: 3,
    icons: [{
      icon: {
        path: 'M 0,-1 0,1',
        strokeOpacity: 0.85,
        scale: 3
      },
      offset: '0',
      repeat: '16px'
    }],
    map: gmap
  });

  // Dashed Golden Overland Railway (Bologna -> Imola -> Faenza -> Lugo -> Ravenna)
  const trainPolyline = new google.maps.Polyline({
    path: trainRouteCoordinates,
    geodesic: true,
    strokeColor: '#ffb703',
    strokeOpacity: 0,
    strokeWeight: 3.5,
    icons: [{
      icon: {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 3
      },
      offset: '0',
      repeat: '14px'
    }],
    map: gmap
  });

  // Glowing Neon Cruise Sea Lanes (Curving around Italian Peninsula & Croatian Islands)
  routePolyline = new google.maps.Polyline({
    path: seaRouteCoordinates,
    geodesic: true,
    strokeColor: '#00f2fe',
    strokeOpacity: 0.85,
    strokeWeight: 4,
    map: gmap
  });

  // Dashed Sky-Blue Outbound Flight Path (Barcelona -> Manchester)
  const flightOutPolyline = new google.maps.Polyline({
    path: flightOutboundCoordinates,
    geodesic: true,
    strokeColor: '#38bdf8',
    strokeOpacity: 0,
    strokeWeight: 3,
    icons: [{
      icon: {
        path: 'M 0,-1 0,1',
        strokeOpacity: 0.85,
        scale: 3
      },
      offset: '0',
      repeat: '16px'
    }],
    map: gmap
  });

  // Create Custom SVG Port Pins
  portMarkers = cruiseData.map((day, idx) => {
    const isSelected = idx === selectedDayIndex;
    const marker = new google.maps.Marker({
      position: { lat: day.lat, lng: day.lng },
      map: gmap,
      title: `${day.day === 0 ? 'Fly-In' : 'Day ' + day.day}: ${day.port}`,
      icon: createCustomPinIcon(day.day, isSelected),
      zIndex: isSelected ? 100 : 10
    });

    // Custom Glassmorphism InfoWindow on Marker Click
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div class="map-infowindow">
          <div class="map-info-badge">${day.day === 0 ? 'FLIGHT' : 'DAY ' + day.day}</div>
          <h3>${day.port}</h3>
          <p><strong><i class="fa-solid fa-clock"></i></strong> ${day.arrive === 'Base' ? 'Fly-In Day' : day.arrive + ' – ' + day.depart}</p>
          <div class="map-info-highlight"><i class="fa-solid fa-compass"></i> ${day.highlight}</div>
          <button onclick="selectDay(${idx})" class="btn btn-sm btn-primary" style="margin-top: 8px; width: 100%;">
            View Port Itinerary <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      `
    });

    marker.addListener('click', () => {
      if (activeInfoWindow) activeInfoWindow.close();
      infoWindow.open(gmap, marker);
      activeInfoWindow = infoWindow;
      selectDay(idx);
    });

    return marker;
  });

  // High-Detail Norwegian Viva Cruise Ship Marker SVG
  const shipSvgPath = "M 0,-18 L 6,-10 L 6,10 C 6,15 0,20 0,20 C 0,20 -6,15 -6,10 L -6,-10 Z";
  
  const nextIdx = Math.min(selectedDayIndex + 1, cruiseData.length - 1);
  const initialHeading = (initialData.lat !== cruiseData[nextIdx].lat || initialData.lng !== cruiseData[nextIdx].lng)
    ? calculateBearing(initialData.lat, initialData.lng, cruiseData[nextIdx].lat, cruiseData[nextIdx].lng)
    : 135;
  
  animatedShipMarker = new google.maps.Marker({
    position: { lat: initialData.lat, lng: initialData.lng },
    map: gmap,
    title: "Norwegian Viva Location",
    icon: {
      path: shipSvgPath,
      fillColor: "#ffb703",
      fillOpacity: 1,
      strokeColor: "#ffffff",
      strokeWeight: 2.5,
      scale: 1.2,
      anchor: new google.maps.Point(0, 0),
      rotation: initialHeading
    },
    zIndex: 999
  });

  updateMarkerStyles();
};

// Helper: Generate Custom SVG Pin Data URIs for Port Markers
function createCustomPinIcon(dayNum, isSelected) {
  const size = isSelected ? 48 : 36;
  const radius = isSelected ? 19 : 15;
  const center = size / 2;

  const bgGradStart = isSelected ? "#ff6b6b" : "#0f172a";
  const bgGradEnd = isSelected ? "#ee5253" : "#1e293b";
  const strokeColor = isSelected ? "#ffb703" : "#00f2fe";
  const textColor = isSelected ? "#ffffff" : "#00f2fe";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <linearGradient id="grad-${dayNum}-${isSelected}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bgGradStart}" />
          <stop offset="100%" stop-color="${bgGradEnd}" />
        </linearGradient>
        <filter id="shadow-${dayNum}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="${center}" cy="${center}" r="${radius}" fill="url(#grad-${dayNum}-${isSelected})" stroke="${strokeColor}" stroke-width="2.5" filter="url(#shadow-${dayNum})"/>
      <text x="${center}" y="${center + 5}" text-anchor="middle" fill="${textColor}" font-family="Segoe UI, Roboto, sans-serif" font-weight="bold" font-size="${dayNum > 9 ? '13px' : '15px'}">${dayNum}</text>
    </svg>
  `.trim();
  return {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize: new google.maps.Size(size, size),
    anchor: new google.maps.Point(center, center)
  };
}

// Toggle Squeak Photo between squeak1.jpg and squeak2.jpg
let currentSqueakPhoto = 1;
function toggleSqueakPhoto() {
  currentSqueakPhoto = currentSqueakPhoto === 1 ? 2 : 1;
  const squeakImg = document.querySelector('.squeak-avatar');
  if (squeakImg) {
    squeakImg.src = `images/squeak${currentSqueakPhoto}.jpg`;
  }
}
window.toggleSqueakPhoto = toggleSqueakPhoto;

// Update Marker States on Day Change
function updateMarkerStyles() {
  if (!portMarkers || !portMarkers.length) return;
  portMarkers.forEach((marker, idx) => {
    const isSelected = idx === selectedDayIndex;
    marker.setIcon(createCustomPinIcon(cruiseData[idx].day, isSelected));
    marker.setZIndex(isSelected ? 100 : 10);
  });
}

// Calculate Bearing Angle between Two Coordinates for Realistic Ship Rotation
function calculateBearing(startLat, startLng, destLat, destLng) {
  const startLatRad = (startLat * Math.PI) / 180;
  const startLngRad = (startLng * Math.PI) / 180;
  const destLatRad = (destLat * Math.PI) / 180;
  const destLngRad = (destLng * Math.PI) / 180;

  const y = Math.sin(destLngRad - startLngRad) * Math.cos(destLatRad);
  const x =
    Math.cos(startLatRad) * Math.sin(destLatRad) -
    Math.sin(startLatRad) * Math.cos(destLatRad) * Math.cos(destLngRad - startLngRad);

  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

// Transport Mode SVG Paths
const PLANE_SVG_PATH = "M 0,-18 L 3,-8 L 16,1 L 16,4 L 3,-2 L 3,10 L 8,14 L 8,17 L 0,14 L -8,17 L -8,14 L -3,10 L -3,-2 L -16,4 L -16,1 L -3,-8 Z";
const TRAIN_SVG_PATH = "M -6,-16 L 6,-16 L 8,-10 L 8,12 L 6,16 L -6,16 L -8,12 L -8,-10 Z M -5,-12 L 5,-12 L 5,-4 L -5,-4 Z M -5,10 L -2,10 L -2,13 L -5,13 Z M 2,10 L 5,10 L 5,13 L 2,13 Z";
const SHIP_SVG_PATH = "M 0,-18 L 6,-10 L 6,10 C 6,15 0,20 0,20 C 0,20 -6,15 -6,10 L -6,-10 Z";

// Helper: Determine transport mode, SVG icon, and curved path between two day indices
function getTransportConfig(fromDay, toDay) {
  // Flight: Manchester (MAN) <-> Bologna (BLQ)
  if ((fromDay === 0 && toDay === 0) || (fromDay === -1 && toDay === 0) || (toDay === 0 && fromDay !== 1)) {
    return {
      mode: 'PLANE',
      svgPath: PLANE_SVG_PATH,
      fillColor: '#38bdf8',
      path: flightInboundCoordinates
    };
  }
  // Flight: Barcelona (BCN) <-> Manchester (MAN)
  if (fromDay === 10 && toDay === 10) {
    return {
      mode: 'PLANE',
      svgPath: PLANE_SVG_PATH,
      fillColor: '#38bdf8',
      path: flightOutboundCoordinates
    };
  }
  // Train: Bologna Centrale <-> Ravenna Port
  if (fromDay === 0 && toDay === 1) {
    return {
      mode: 'TRAIN',
      svgPath: TRAIN_SVG_PATH,
      fillColor: '#ffb703',
      path: trainRouteCoordinates
    };
  }
  if (fromDay === 1 && toDay === 0) {
    return {
      mode: 'TRAIN',
      svgPath: TRAIN_SVG_PATH,
      fillColor: '#ffb703',
      path: [...trainRouteCoordinates].reverse()
    };
  }

  // Ship: Cruise sea lanes (Days 1 to 10)
  const idxA = seaRouteCoordinates.findIndex(p => p.day === fromDay);
  const idxB = seaRouteCoordinates.findIndex(p => p.day === toDay);

  let seaPath;
  if (idxA !== -1 && idxB !== -1) {
    seaPath = idxA < idxB
      ? seaRouteCoordinates.slice(idxA, idxB + 1)
      : [...seaRouteCoordinates.slice(idxB, idxA + 1)].reverse();
  } else {
    seaPath = [
      { lat: cruiseData[fromDay]?.lat || 44.4949, lng: cruiseData[fromDay]?.lng || 12.2818 },
      { lat: cruiseData[toDay]?.lat || 44.4949, lng: cruiseData[toDay]?.lng || 12.2818 }
    ];
  }

  return {
    mode: 'SHIP',
    svgPath: SHIP_SVG_PATH,
    fillColor: '#ffb703',
    path: seaPath
  };
}

// Helper: Interpolate coordinate and bearing along a multi-waypoint path
function interpolatePath(path, progress) {
  if (path.length <= 1) return { ...path[0], heading: 0 };
  if (progress <= 0) {
    const heading = calculateBearing(path[0].lat, path[0].lng, path[1].lat, path[1].lng);
    return { ...path[0], heading };
  }
  if (progress >= 1) {
    const len = path.length;
    const heading = calculateBearing(path[len - 2].lat, path[len - 2].lng, path[len - 1].lat, path[len - 1].lng);
    return { ...path[len - 1], heading };
  }

  let totalLen = 0;
  const segLens = [];
  for (let i = 0; i < path.length - 1; i++) {
    const dLat = path[i + 1].lat - path[i].lat;
    const dLng = path[i + 1].lng - path[i].lng;
    const len = Math.sqrt(dLat * dLat + dLng * dLng);
    segLens.push(len);
    totalLen += len;
  }

  const targetLen = totalLen * progress;
  let accum = 0;
  for (let i = 0; i < segLens.length; i++) {
    if (accum + segLens[i] >= targetLen || i === segLens.length - 1) {
      const segProgress = segLens[i] === 0 ? 0 : (targetLen - accum) / segLens[i];
      const p1 = path[i];
      const p2 = path[i + 1];
      return {
        lat: p1.lat + (p2.lat - p1.lat) * segProgress,
        lng: p1.lng + (p2.lng - p1.lng) * segProgress,
        heading: calculateBearing(p1.lat, p1.lng, p2.lat, p2.lng)
      };
    }
    accum += segLens[i];
  }
  return { ...path[path.length - 1], heading: 0 };
}

// Smooth Multi-Transport Transition Animation (Plane, Train, Ship) with Curved Waypoints
function animateShipTransition(fromIdx, toIdx) {
  if (!animatedShipMarker || !gmap) return;

  updateMarkerStyles();

  const fromDay = cruiseData[fromIdx].day;
  const toDay = cruiseData[toIdx].day;

  // Don't re-animate the same sea day, unless it's Day 0 (Fly-In) or Day 10 (Fly-Home)
  if (fromDay === toDay && toDay !== 0 && toDay !== 10) return;

  const config = getTransportConfig(fromDay, toDay);

  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const duration = 1600;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const currentPosData = interpolatePath(config.path, easeProgress);
    const currentPos = new google.maps.LatLng(currentPosData.lat, currentPosData.lng);
    
    animatedShipMarker.setPosition(currentPos);
    animatedShipMarker.setIcon({
      path: config.svgPath,
      fillColor: config.fillColor,
      fillOpacity: 1,
      strokeColor: "#ffffff",
      strokeWeight: 2.5,
      scale: config.mode === 'PLANE' ? 1.4 : 1.25,
      anchor: new google.maps.Point(0, 0),
      rotation: currentPosData.heading
    });
    animatedShipMarker.setTitle(
      config.mode === 'PLANE' ? "Flight Mode (✈️)" : config.mode === 'TRAIN' ? "Train Mode (🚆)" : "Norwegian Viva (🚢)"
    );

    gmap.panTo(currentPos);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    }
  }

  animationFrameId = requestAnimationFrame(step);
}



function clearPhotoAlbum() {
  localStorage.removeItem('viva_family_photos');
  renderPhotoAlbum();
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

  photos.forEach((photo, idx) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.title || 'Memory'}" title="${photo.title || 'Memory'}" />
      <button style="position: absolute; top: 4px; right: 4px; background: rgba(0,0,0,0.6); color: #fff; border: none; border-radius: 50%; width: 22px; height: 22px; cursor: pointer; font-size: 10px;" onclick="removePhoto(${idx})">✕</button>
    `;
    grid.appendChild(card);
  });
}

function removePhoto(index) {
  const saved = localStorage.getItem('viva_family_photos');
  let photos = saved ? JSON.parse(saved) : [];
  photos.splice(index, 1);
  localStorage.setItem('viva_family_photos', JSON.stringify(photos));
  renderPhotoAlbum();
}

function handlePhotoUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  const saved = localStorage.getItem('viva_family_photos');
  let photos = saved ? JSON.parse(saved) : [];

  const uploadBtn = document.getElementById('upload-btn-label');
  if (uploadBtn) uploadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

  let readCount = 0;

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Compress image via canvas to prevent localStorage overflow
      compressImage(e.target.result, 800, 0.7, (compressedSrc) => {
        photos.unshift({ src: compressedSrc, title: file.name });
        readCount++;

        if (readCount === files.length) {
          const finalPhotos = photos.slice(0, 20);
          try {
            localStorage.setItem('viva_family_photos', JSON.stringify(finalPhotos));
          } catch (storageErr) {
            // localStorage quota exceeded — trim older photos until it fits
            while (finalPhotos.length > 1) {
              finalPhotos.pop();
              try { localStorage.setItem('viva_family_photos', JSON.stringify(finalPhotos)); break; }
              catch (e2) { /* keep trimming */ }
            }
          }
          renderPhotoAlbum();
          if (uploadBtn) uploadBtn.innerHTML = '<i class="fa-solid fa-check"></i> Saved!';
          setTimeout(() => {
            if (uploadBtn) uploadBtn.innerHTML = '<i class="fa-solid fa-upload"></i> Upload';
          }, 2000);
        }
      });
    };
    reader.readAsDataURL(file);
  });
}

// Daily Port Excursion Packing List Persistence
function renderPackingList() {
  const saved = localStorage.getItem('viva_packing_list');
  const items = saved ? JSON.parse(saved) : defaultPackingList;

  const container = document.getElementById('packing-items');
  if (!container) return;

  container.innerHTML = '';
  let readyCount = 0;

  items.forEach(item => {
    if (item.done) readyCount++;

    const div = document.createElement('div');
    div.className = `check-item ${item.done ? 'completed' : ''}`;
    div.onclick = () => togglePackingItem(item.id);
    div.innerHTML = `
      <input type="checkbox" ${item.done ? 'checked' : ''} readonly />
      <div>
        <div style="font-weight: 600; font-size: 13px; color: #ffffff;">${item.text}</div>
        <small style="color: var(--sunset-gold); font-size: 11px;">#${item.category}</small>
      </div>
    `;
    container.appendChild(div);
  });

  const progress = document.getElementById('packing-progress');
  if (progress) progress.innerText = `${readyCount} of ${items.length} Ready`;
}

function togglePackingItem(id) {
  const saved = localStorage.getItem('viva_packing_list');
  let items = saved ? JSON.parse(saved) : defaultPackingList;

  items = items.map(item => {
    if (item.id === id) item.done = !item.done;
    return item;
  });

  localStorage.setItem('viva_packing_list', JSON.stringify(items));
  renderPackingList();
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

// Image compression utility — prevents localStorage overflow from raw phone camera base64
function compressImage(dataUrl, maxWidth, quality, callback) {
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;

    if (width > maxWidth) {
      height = Math.round(height * (maxWidth / width));
      width = maxWidth;
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', quality));
  };
  img.onerror = function() {
    callback(dataUrl); // fallback to original if compression fails
  };
  img.src = dataUrl;
}
