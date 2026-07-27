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
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bologna_Piazza_Maggiore.jpg/800px-Bologna_Piazza_Maggiore.jpg',
    highlight: 'Flight FR2242 & Stay at Hotel Del Borgo, Bologna',
    adultsActivities: 'Land in Bologna Airport (BLQ) at 21:05, 8-min taxi to Hotel Del Borgo (Booking #5007213355), late-night aperitivo.',
    kidsActivities: 'Exciting evening flight & cozy stay at Hotel Del Borgo (2 single + 1 double bed configured).',
    transferInfo: 'Flight FR2242 (PNR: WTUR5S) MAN 17:45 ➔ BLQ 21:05. Hotel Del Borgo: Via Marco Emilio Lepido 195 (Booking #5007213355). 8-min taxi from BLQ airport.',
    tags: ['Hotel Del Borgo', 'Flight FR2242', 'Pre-Cruise', 'Bologna'],
    deepDive: {
      verdict: "100% DIY (Pre-Cruise)",
      verdictBadgeClass: "badge-success",
      costDiy: "€11/pax (Marconi Express)",
      costNcl: "— (Pre-Cruise Stay)",
      nclVsDiySummary: "This is your independent pre-cruise arrival day in Bologna. The Marconi Express monorail gets you from BLQ Airport to Bologna Centrale in 7 minutes.",
      timedItinerary: [
        "2:00 PM — Check into Hotel Del Borgo & freshen up.",
        "3:15 PM — Walk to Piazza Maggiore & Fountain of Neptune.",
        "4:15 PM — Climb Torre degli Asinelli (498 wooden steps for teens).",
        "5:30 PM — Explore Archiginnasio & Anatomical Theatre.",
        "7:00 PM — Authentic Bolognese dinner in Quadrilatero market district."
      ],
      diningSpots: [
        { name: "Osteria dell'Orsa (Via Mentana, 1)", type: "Dinner", note: "Legendary local tavern famous for authentic Tagliatelle al Ragù (true Bolognese) & Tortellini in Brodo." },
        { name: "Cremeria Santo Stefano", type: "Gelato", note: "Artisanal gelato under the porticoes; try Crema di Sette Chiese." }
      ]
    }
  },
  {
    day: 1,
    date: 'Mon 10 Aug 2026',
    port: 'Bologna ➔ Ravenna Cruise Port',
    arrive: '12:30 PM Check-in',
    depart: '5:00 PM Sailing',
    lat: 44.4949,
    lng: 12.2818,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Norwegian_Viva_in_Venice.jpg/800px-Norwegian_Viva_in_Venice.jpg',
    highlight: 'Hotel Del Borgo ➔ Ravenna Port (12:30-13:30 Embarkation Window)',
    adultsActivities: 'Breakfast at Hotel Del Borgo, 10:15 taxi to Bologna Centrale, 11:06 train to Ravenna, check-in & welcome champagne on Norwegian Viva.',
    kidsActivities: 'First glimpse of 143,000-ton Norwegian Viva, explore Speedway racetrack & pool deck!',
    transferInfo: 'Option A (Train): 10:15 Taxi to Bologna Centrale ➔ 11:06 Trenitalia Regional train (53m, arr 11:59 Ravenna) ➔ 12:05 Taxi/Shuttle to Porto Corsini ➔ 12:30 Embarkation. Option B (Direct Transfer): 11:00 Taxi from Hotel Del Borgo directly to Ravenna Terminal (A14 Highway, 1h10m).',
    liveTrainLink: 'https://www.viaggiatreno.it/',
    tags: ['Hotel Del Borgo', '11:06 Train', '12:30 Embarkation', 'Ravenna Port'],
    deepDive: {
      verdict: "DIY Train + Taxi",
      verdictBadgeClass: "badge-success",
      costDiy: "€35 total (4 pax)",
      costNcl: "$300+ (NCL Bus Transfer)",
      nclVsDiySummary: "Do not pay $75+/person for an NCL shuttle from Bologna. Trenitalia regional trains take 53 minutes and cost €8/person. Take a short taxi from Ravenna station to Porto Corsini.",
      timedItinerary: [
        "09:30 AM — Check out of Bologna hotel; take regional train to Ravenna Station (53 mins).",
        "10:45 AM — Store luggage at Ravenna Station depot (€5/bag).",
        "11:00 AM — Visit early Christian mosaics at Basilica di San Vitale & Galla Placidia.",
        "01:30 PM — Romagna Piadina lunch in Ravenna historic center.",
        "02:45 PM — Taxi (~€25 total) from Ravenna to Porto Corsini cruise terminal.",
        "03:30 PM — Check-in, security & board Norwegian Viva!",
        "08:00 PM — Ship sails for the Adriatic Sea."
      ],
      diningSpots: [
        { name: "Ca' de Ven (Via Corrado Ricci, 24)", type: "Lunch", note: "15th-century wine cellar famous for warm Romagna Piadina flatbreads with prosciutto di Parma." },
        { name: "Gelateria Papilla", type: "Gelato", note: "Outstanding artisan fruit sorbets in Ravenna center." }
      ]
    }
  },
  {
    day: 2,
    date: 'Tue 11 Aug 2026',
    port: 'Dubrovnik, Croatia',
    arrive: '10:00 AM',
    depart: '11:59 PM',
    lat: 42.6507,
    lng: 18.0944,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Dubrovnik_Old_Town_from_City_Walls.jpg/800px-Dubrovnik_Old_Town_from_City_Walls.jpg',
    highlight: 'Ancient City Walls Walk & Lokrum Island Sea Kayaking',
    adultsActivities: 'Walk the historic ramparts, drink wine overlooking the Adriatic coast.',
    kidsActivities: 'Guided sea kayaking around Lokrum Island and Betina Cave, plus Dubrovnik Cable Car ride for sunset.',
    transferInfo: 'Tender/Port shuttle into Old Town Pile Gate.',
    tags: ['City Walls', 'Sea Kayaking', 'Cable Car', 'Game of Thrones'],
    deepDive: {
      verdict: "DIY (Highly Recommended)",
      verdictBadgeClass: "badge-success",
      costDiy: "€80–120 total (4 pax)",
      costNcl: "$500–650 (Walking Tour)",
      nclVsDiySummary: "Dubrovnik's Old Town is 10 mins by taxi (€15) from Gruž Port. NCL walking tours move slowly in 40-person crowds. DIY lets you start early, walk the City Walls at your own pace, and book the sea kayaking tour for the kids without stress.",
      timedItinerary: [
        "11:30 AM — Ship docks at Gruž Port.",
        "11:50 AM — Take local bus #1a/1b or taxi (€15) directly to Old Town Pile Gate.",
        "12:15 PM — Walk the Medieval City Walls before afternoon heat (~1.5–2 hours).",
        "02:15 PM — Authentic seafood lunch in Old Town alleyways.",
        "03:30 PM — Guided Family Sea Kayaking tour to Betina Cave OR Dubrovnik Cable Car to Mount Srđ.",
        "05:45 PM — Stroll Stradun promenade & grab craft gelato.",
        "06:30 PM — Take taxi back to Gruž Port.",
        "07:00 PM — All-Aboard onboard Viva (Ship sails 8:00 PM)."
      ],
      diningSpots: [
        { name: "Barba (Boškovićeva ul. 5)", type: "Lunch", note: "Hip seafood street food: famous octopus burgers, fried calamari cones, and shrimp tempura." },
        { name: "Peppino's Gelato Artigianale", type: "Gelato", note: "Premium craft gelato in waffle rolls; must-try Dalmatian Fig & Mozart flavors." }
      ]
    }
  },
  {
    day: 3,
    date: 'Wed 12 Aug 2026',
    port: 'Bar, Montenegro',
    arrive: '8:00 AM',
    depart: '6:00 PM',
    lat: 42.0931,
    lng: 19.0989,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stari_Bar_fortress_2016.jpg/800px-Stari_Bar_fortress_2016.jpg',
    highlight: 'Stari Bar Fortress Ruins & Lake Skadar Boat Excursion',
    adultsActivities: 'Explore Stari Bar ancient cliffside fortress and 2,000-year-old olive trees.',
    kidsActivities: 'Lake Skadar boat ride through lily pads with freshwater swim stops, or King’s Beach swim.',
    transferInfo: 'Local taxi or pre-booked tour to Stari Bar / Lake Skadar.',
    tags: ['Fortress', 'Lake Skadar', 'Nature', 'Montenegro'],
    deepDive: {
      verdict: "DIY Port Taxi / Boat",
      verdictBadgeClass: "badge-success",
      costDiy: "€40–110 total (4 pax)",
      costNcl: "$440–550 (Coach Tour)",
      nclVsDiySummary: "Official port taxis at Bar harbor offer private half-day tours to Stari Bar fortress ruins and Lake Skadar for a fraction of NCL's coach bus prices.",
      timedItinerary: [
        "08:30 AM — Disembark ship; hire an official port taxi driver for half-day tour.",
        "09:00 AM — Explore Stari Bar cliffside fortress ruins & Ottoman cobblestone bazaar.",
        "10:30 AM — Visit Stara Maslina (2,400-year-old Roman olive tree).",
        "11:30 AM — Authentic Balkan lunch in Stari Bar courtyard overlooking ruins.",
        "01:30 PM — Option A: 2-hour wooden boat cruise on Lake Skadar • Option B: Swim at King's Beach.",
        "04:30 PM — Return to Port of Bar terminal.",
        "05:00 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Konoba Bedem (Stari Bar Bazaar)", type: "Lunch", note: "Traditional Balkan grilled meats (Ćevapi), stuffed vine leaves, and Montenegrin cheese pies." },
        { name: "Stari Bar Juice Stands", type: "Refreshment", note: "Freshly squeezed pomegranate juice along the cobblestone bazaar." }
      ]
    }
  },
  {
    day: 4,
    date: 'Thu 13 Aug 2026',
    port: 'At Sea (Mediterranean)',
    arrive: '—',
    depart: '—',
    lat: 38.1000,
    lng: 17.5000,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Norwegian_Viva_in_Venice_Lagoon.jpg/800px-Norwegian_Viva_in_Venice_Lagoon.jpg',
    highlight: 'Viva Speedway, Galaxy Pavilion VR & Ocean Boulevard Pools',
    adultsActivities: 'Indulge Food Hall, Mandara Spa, infinity pool relaxation on Ocean Boulevard.',
    kidsActivities: 'Race on the 3-level Viva Speedway, Galaxy Pavilion VR flight simulators, and The Drop 10-story free-fall dry slide!',
    transferInfo: 'Enjoy full ship amenities onboard Norwegian Viva.',
    tags: ['Viva Speedway', 'Galaxy Pavilion', 'Sea Day', 'Starlink Wi-Fi'],
    deepDive: {
      verdict: "Included Onboard",
      verdictBadgeClass: "badge-info",
      costDiy: "Included",
      costNcl: "Included",
      nclVsDiySummary: "Full day at sea navigating the Ionian Sea and the Strait of Messina between Sicily and Calabria. Make sure to book Viva Speedway go-karts on the NCL app early!",
      timedItinerary: [
        "09:00 AM — Family breakfast on Ocean Boulevard open-air deck.",
        "10:30 AM — Race the 3-level electric Viva Speedway go-kart track!",
        "12:30 PM — Global lunch at Indulge Food Hall (11 mini-restaurants).",
        "02:30 PM — Galaxy Pavilion VR flight simulators & 10-story free-fall dry slide (The Drop).",
        "04:30 PM — Watch ship pass through the Strait of Messina narrows.",
        "07:30 PM — Family dinner & evening theater show."
      ],
      diningSpots: [
        { name: "Indulge Food Hall (Deck 8 Aft)", type: "Lunch", note: "Complimentary 11-station food hall: tandoori, tacos, noodles, Q-Texas BBQ brisket, and Italian." },
        { name: "Coco's / Poolside Soft-Serve", type: "Dessert", note: "Artisanal chocolate sundaes or complimentary poolside vanilla/chocolate swirl cones." }
      ]
    }
  },
  {
    day: 5,
    date: 'Fri 14 Aug 2026',
    port: 'Amalfi Coast (Salerno), Italy',
    arrive: '7:00 AM',
    depart: '6:00 PM',
    lat: 40.6780,
    lng: 14.7650,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Positano_from_the_sea.jpg/800px-Positano_from_the_sea.jpg',
    highlight: 'Coastal Speedboat Excursion to Positano & Amalfi',
    adultsActivities: 'Limoncello tasting, cliffside views, scenic lemon groves of Positano.',
    kidsActivities: 'Speedboat ride along the coastline with cave swim stops & authentic Positano gelato.',
    transferInfo: 'Ferry/Speedboat from Salerno harbor directly to Positano.',
    tags: ['Positano', 'Amalfi Coast', 'Speedboat', 'Cliff Swim'],
    deepDive: {
      verdict: "DIY TravelMar Ferry",
      verdictBadgeClass: "badge-success",
      costDiy: "€120–140 total (4 pax)",
      costNcl: "$750–950 (Coach Bus)",
      nclVsDiySummary: "Never take a bus or car on the Amalfi Coast road in August—coaches get trapped in 3-hour traffic jams! TravelMar high-speed ferries glide from Salerno harbor to Positano in 70 mins with zero traffic.",
      timedItinerary: [
        "07:45 AM — Disembark ship in Salerno; walk 10 mins to Piazza della Concordia ferry dock.",
        "08:40 AM — Board TravelMar high-speed ferry directly to Positano (arrive 9:50 AM).",
        "10:00 AM — Swim at Spiaggia Grande beach in Positano & explore cliffside stairways.",
        "12:30 PM — Beachfront lunch in Positano.",
        "01:30 PM — Board 25-min ferry from Positano to Amalfi Town.",
        "02:00 PM — Visit Amalfi Cathedral (Duomo di Sant'Andrea) & try lemon granita.",
        "03:40 PM — Board ferry from Amalfi back to Salerno (arrive 4:15 PM).",
        "04:45 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Chez Black (Positano Beachfront)", type: "Lunch", note: "Legendary restaurant with wood-fired pizzas, heart-shaped kids pizza & Spaghetti alle Vongole." },
        { name: "Pasticceria Pansa (Piazza Duomo, Amalfi)", type: "Dessert", note: "Try the iconic Delizia al Limone (Amalfi lemon sponge dome) and lemon granita." }
      ]
    }
  },
  {
    day: 6,
    date: 'Sat 15 Aug 2026',
    port: 'Civitavecchia (Rome), Italy',
    arrive: '6:45 AM',
    depart: '6:00 PM',
    lat: 41.8902,
    lng: 12.4922,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg',
    highlight: 'Civitavecchia Express to Rome: Colosseum & Trevi Fountain',
    adultsActivities: 'Roman Forum, Pantheon exploration, authentic Roman carbonara.',
    kidsActivities: 'Skip-the-line Colosseum Gladiator tour & coin toss into Trevi Fountain.',
    transferInfo: 'Civitavecchia Express train (50 mins) into Rome San Pietro/Termini.',
    tags: ['Rome', 'Colosseum', 'Express Train', 'Trevi Fountain'],
    deepDive: {
      verdict: "DIY Express Train",
      verdictBadgeClass: "badge-success",
      costDiy: "€48–70 total (4 pax)",
      costNcl: "$400–1,000+ (Coach / Tour)",
      nclVsDiySummary: "Civitavecchia is 80 km from Rome. NCL coach transfers take nearly 2 hours in highway traffic. The Civitavecchia Express train takes 50–60 mins directly into Roma San Pietro or Termini.",
      timedItinerary: [
        "07:15 AM — Take port shuttle bus from ship to Civitavecchia train station (€6).",
        "08:00 AM — Board Civitavecchia Express or regional train to Rome (50–60 mins).",
        "09:15 AM — Skip-the-line tour of Colosseum & Roman Forum (pre-book 30 days prior!).",
        "12:00 PM — Walk to Trevi Fountain, Pantheon & Piazza Navona.",
        "01:30 PM — Crispy Roman slab pizza lunch near Pantheon.",
        "03:00 PM — Walk to Roma San Pietro / Termini station.",
        "03:15 PM — Board return train to Civitavecchia (CRITICAL: leave by 3:15 PM!).",
        "04:50 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Antico Forno Roscioli (Via dei Chiavari, 34)", type: "Lunch", note: "World-class Roman Pizza al Taglio (crispy slab pizza sold by weight: margherita & mortadella)." },
        { name: "Frigidarium (Via del Governo Vecchio, 112)", type: "Gelato", note: "Artisanal gelato dipped in a free molten white or dark chocolate shell near Piazza Navona!" }
      ]
    }
  },
  {
    day: 7,
    date: 'Sun 16 Aug 2026',
    port: 'Livorno (Florence/Pisa), Italy',
    arrive: '7:00 AM',
    depart: '10:00 PM',
    lat: 43.7228,
    lng: 10.3966,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/800px-The_Leaning_Tower_of_Pisa_SB.jpeg',
    highlight: 'Leaning Tower of Pisa Photo-Op & Florence Duomo Walk',
    adultsActivities: 'Uffizi Gallery, Ponte Vecchio stroll, Tuscan wine tasting.',
    kidsActivities: 'Climb Giotto’s Campanile tower, forced-perspective photo holding up Pisa tower, Boboli Gardens.',
    transferInfo: 'Regional train from Livorno Centrale to Pisa (15 mins) and Florence (1 hr).',
    tags: ['Leaning Tower', 'Florence', 'Duomo', 'Tuscany'],
    deepDive: {
      verdict: "DIY Train (Pisa/Lucca)",
      verdictBadgeClass: "badge-success",
      costDiy: "€60–80 total (4 pax)",
      costNcl: "$800–1,100 (Coach Tour)",
      nclVsDiySummary: "Livorno train station connects to Pisa Centrale in just 15 minutes (€3), and Florence in 1 hr 15 mins. Alternatively, visit Pisa Tower and rent bicycles to ride along the medieval walls of Lucca!",
      timedItinerary: [
        "07:30 AM — Take Livorno port shuttle to Livorno Centrale station (€5).",
        "08:10 AM — Train to Pisa Centrale (15 mins); walk to Leaning Tower.",
        "08:30 AM — Leaning Tower of Pisa photo-op & Cathedral square.",
        "10:30 AM — Train from Pisa to Florence S.M. Novella (50 mins).",
        "11:30 AM — Explore Duomo square, Piazza della Signoria, Ponte Vecchio & Mercato Nuovo.",
        "01:30 PM — Tuscan Schiacciata sandwich lunch.",
        "04:30 PM — Board direct return train from Florence to Livorno Centrale.",
        "05:55 PM — All-Aboard onboard Viva (Ship sails 7:00 PM)."
      ],
      diningSpots: [
        { name: "All'Antico Vinaio (Via dei Neri, 65, Florence)", type: "Lunch", note: "World-famous warm Tuscan Schiacciata flatbread sandwiches stuffed with prosciutto & truffle cream." },
        { name: "Gelateria Edoardo (Piazza del Duomo, Florence)", type: "Gelato", note: "Certified organic artisanal gelato served in handmade cinnamon waffle cones." }
      ]
    }
  },
  {
    day: 8,
    date: 'Mon 17 Aug 2026',
    port: 'Nice (Villefranche), France',
    arrive: '7:00 AM',
    depart: '4:30 PM',
    lat: 43.7042,
    lng: 7.3117,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Cannes_harbour.jpg/800px-Cannes_harbour.jpg',
    highlight: 'Villefranche Bay Watersports & Nice Promenade Ride',
    adultsActivities: 'Stroll Old Town Nice (Vieux Nice), sample Socca chickpea crepes.',
    kidsActivities: 'Rent paddleboards/snorkels in Villefranche turquoise bay, or ride e-scooters along Promenade des Anglais.',
    transferInfo: 'Tender into Villefranche-sur-Mer harbor. 10-min train into central Nice.',
    tags: ['French Riviera', 'Villefranche', 'Paddleboarding', 'Nice'],
    deepDive: {
      verdict: "100% DIY (Tender Port)",
      verdictBadgeClass: "badge-success",
      costDiy: "€64 total (4 pax)",
      costNcl: "$550–750 (Monaco Coach)",
      nclVsDiySummary: "Tender boats drop you right in the center of Villefranche / Cannes harbor. Take the 15-minute public ferry to Île Sainte-Marguerite island to swim in turquoise coves and see Fort Royal.",
      timedItinerary: [
        "08:15 AM — Board early tender boat from Viva to harbor (15 mins).",
        "09:00 AM — Board public ferry to Île Sainte-Marguerite (€16 roundtrip).",
        "09:45 AM — Explore Fort Royal (Man in the Iron Mask prison cell) & scented eucalyptus trails.",
        "11:30 AM — Swim & snorkel in crystal-clear turquoise island coves.",
        "01:30 PM — Ferry back to harbor; walk La Croisette / Promenade.",
        "03:00 PM — Old Town walk & French macarons / gelato.",
        "04:30 PM — All-Aboard onboard Viva."
      ],
      diningSpots: [
        { name: "Marché Forville (Cannes Old Town Market)", type: "Lunch", note: "Covered market: sample Socca chickpea crepes, artisan cheeses & fresh baguettes for a beach picnic." },
        { name: "Amorino Gelato", type: "Dessert", note: "Flower-shaped gelato cones topped with a signature French macaron." }
      ]
    }
  },
  {
    day: 9,
    date: 'Tue 18 Aug 2026',
    port: 'Palma de Majorca, Spain',
    arrive: '1:00 PM',
    depart: '9:00 PM',
    lat: 39.5696,
    lng: 2.6502,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cathedral_of_Palma_de_Mallorca.jpg/800px-Cathedral_of_Palma_de_Mallorca.jpg',
    highlight: 'Katmandu Theme Park or Palma Bay Beach & Kayaking',
    adultsActivities: 'Palma Cathedral (La Seu) visit, tapas & sangria at Mercat de l’Olivar.',
    kidsActivities: 'Upside-down splash park at Katmandu Park or Palma Aquarium deep ocean tunnel.',
    transferInfo: 'Port bus #1 or taxi from Estació Marítima into Old Town.',
    tags: ['Palma', 'Majorca', 'Katmandu Park', 'Cathedral'],
    deepDive: {
      verdict: "DIY Bus / Walk",
      verdictBadgeClass: "badge-success",
      costDiy: "€40–90 total (4 pax)",
      costNcl: "$500–650 (Coach Tour)",
      nclVsDiySummary: "Palma is an extremely walkable Spanish capital. Bus #1 or a 10-minute taxi (€12) takes you from the cruise pier directly to Palma Cathedral and the historic Old Town.",
      timedItinerary: [
        "11:30 AM — Ship docks in Palma. Take taxi (€12) or bus #1 to Old Town.",
        "12:00 PM — Explore Palma Cathedral (La Seu) & Royal Palace of La Almudaina.",
        "01:30 PM — Tapas lunch at Mercat de l'Olivar indoor market.",
        "03:00 PM — Visit Bellver Castle (circular 14th-century castle on pine hill with bay views).",
        "05:00 PM — Sample traditional Mallorcan Ensaimada pastry & hot chocolate.",
        "06:30 PM — Taxi back to cruise terminal.",
        "07:00 PM — All-Aboard onboard Viva (Ship sails 8:00 PM)."
      ],
      diningSpots: [
        { name: "Mercat de l'Olivar (Plaça de l'Olivar)", type: "Lunch", note: "Vibrant indoor market with fresh grilled prawns, Iberian ham (Jamón Ibérico), and Patatas Bravas." },
        { name: "Ca'n Joan de s'Aigo (Carrer de Can Sanç, 10)", type: "Sweet Specialty", note: "300-year-old cafe: must order warm Ensaimada pastry with almond ice cream or thick hot chocolate!" }
      ]
    }
  },
  {
    day: 10,
    date: 'Wed 19 Aug 2026',
    port: 'Barcelona, Spain ➔ Manchester, UK',
    arrive: '6:30 AM',
    depart: '12:35 PM Flight',
    lat: 41.3851,
    lng: 2.1734,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg',
    highlight: 'Cruise Disembarkation & Flight FR6597 to Manchester',
    adultsActivities: 'Disembark Norwegian Viva at 08:30 AM, transfer to Barcelona Airport (BCN).',
    kidsActivities: 'Souvenir shopping at BCN airport before flight home.',
    transferInfo: '08:30 Disembark ➔ 09:30 Taxi/Aerobús to BCN Terminal 2 ➔ 10:35 Check-in ➔ 12:35 Flight FR6597 (PNR: F8YGQR) ➔ 14:10 Arrive Manchester (MAN).',
    tags: ['Disembarkation', 'Barcelona', 'Inbound Flight', 'Ryanair FR6597'],
    deepDive: {
      verdict: "100% DIY (Disembarkation)",
      verdictBadgeClass: "badge-success",
      costDiy: "€40 total (Taxis)",
      costNcl: "— (Inbound Flight)",
      nclVsDiySummary: "Disembark Norwegian Viva at 8:30 AM. Taxis outside the Barcelona cruise terminal take you directly to Barcelona Airport (BCN) Terminal 2 for flight FR6597.",
      timedItinerary: [
        "06:30 AM — Ship docks at Port of Barcelona.",
        "07:30 AM — Family breakfast onboard Norwegian Viva.",
        "08:30 AM — Disembark ship & collect checked luggage in terminal.",
        "09:15 AM — Take official taxi (~€35–40) or Aerobús to BCN Airport Terminal 2.",
        "10:35 AM — Check-in & security for Ryanair flight FR6597.",
        "12:35 PM — Flight FR6597 departs Barcelona for Manchester (MAN).",
        "02:10 PM — Land in Manchester, UK!"
      ],
      diningSpots: [
        { name: "Cervecería Catalana (Carrer de Mallorca, 236)", type: "Tapas", note: "Incredible Spanish tapas: honey-drizzled fried eggplant, garlic prawns & beef tenderloin skewers." },
        { name: "Mercat de la Boqueria (La Rambla, 91)", type: "Market Snacks", note: "Fresh coconut chunks, Iberian ham cones, and warm empanadas before the airport." }
      ]
    }
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
      <img src="${data.heroImage}" alt="${data.port}" class="day-hero-img" onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Norwegian_Viva_in_Venice_Lagoon.jpg/800px-Norwegian_Viva_in_Venice_Lagoon.jpg'; this.style.opacity='0.8';" />
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
          <div style="margin-top: 12px;">
            <button onclick="openPortDeepDive(${index})" class="btn btn-sm btn-outline" style="width: 100%; border-color: var(--primary); color: var(--primary); font-weight: 600; padding: 10px;">
              <i class="fa-solid fa-book-open"></i> Open Port Deep-Dive (DIY vs. NCL & Dining)
            </button>
          </div>
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

// Port Excursion Deep-Dive Modal Logic
function openPortDeepDive(index) {
  const data = cruiseData[index];
  if (!data || !data.deepDive) return;
  const dd = data.deepDive;

  let modalEl = document.getElementById('deep-dive-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'deep-dive-modal';
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-card tech-card" style="max-width: 680px; max-height: 85vh; overflow-y: auto; padding: 24px; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
        <div>
          <span class="badge ${dd.verdictBadgeClass}" style="font-size: 12px; margin-bottom: 6px;">${dd.verdict}</span>
          <h2 style="font-size: 20px; color: var(--sunset-gold); margin: 4px 0 0 0;">
            <i class="fa-solid fa-compass"></i> Day ${data.day}: ${data.port.split(',')[0]} Deep-Dive
          </h2>
        </div>
        <button onclick="closePortDeepDive()" class="btn-close" style="background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0 8px;">&times;</button>
      </div>

      <!-- Cost & Strategy Comparison Card -->
      <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <h4 style="color: #38bdf8; margin-bottom: 10px; font-size: 15px;"><i class="fa-solid fa-scale-balanced"></i> NCL Shore Excursion vs. DIY Independent</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; font-size: 13px;">
          <div style="background: rgba(46, 213, 115, 0.15); padding: 10px 12px; border-radius: 8px; border-left: 4px solid #2ed573;">
            <strong style="color: #fff;">DIY Est. Cost (4 Pax):</strong><br><span style="color: #2ed573; font-weight: 700;">${dd.costDiy}</span>
          </div>
          <div style="background: rgba(255, 71, 87, 0.15); padding: 10px 12px; border-radius: 8px; border-left: 4px solid #ff4757;">
            <strong style="color: #fff;">NCL Excursion Cost:</strong><br><span style="color: #ff4757; font-weight: 700;">${dd.costNcl}</span>
          </div>
        </div>
        <p style="font-size: 13.5px; color: #e2e8f0; line-height: 1.6; margin: 0;">${dd.nclVsDiySummary}</p>
      </div>

      <!-- Timed Family Itinerary -->
      <div style="margin-bottom: 20px;">
        <h4 style="color: #ffb703; margin-bottom: 12px; font-size: 15px;"><i class="fa-solid fa-clock"></i> Timed Family Itinerary (14M & 11F + Adults)</h4>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${dd.timedItinerary.map(item => `
            <li style="position: relative; padding: 8px 12px 8px 30px; margin-bottom: 8px; font-size: 13.5px; color: #e2e8f0; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
              <i class="fa-solid fa-circle-check" style="color: var(--primary); position: absolute; left: 10px; top: 12px; font-size: 13px;"></i>
              ${item}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Curated Dining & Gelato -->
      <div style="margin-bottom: 20px;">
        <h4 style="color: #38bdf8; margin-bottom: 12px; font-size: 15px;"><i class="fa-solid fa-utensils"></i> Curated Family Lunch, Snacks & Gelato</h4>
        <div style="display: grid; gap: 10px;">
          ${dd.diningSpots.map(spot => `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <strong style="color: #fff; font-size: 14px;">${spot.name}</strong>
                <span class="badge badge-info" style="font-size: 11px;">${spot.type}</span>
              </div>
              <p style="margin: 0; font-size: 13px; color: var(--text-muted);">${spot.note}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="text-align: right; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;">
        <button onclick="closePortDeepDive()" class="btn btn-primary" style="padding: 10px 24px; font-weight: 700;">
          Close Guide <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  `;

  modalEl.style.display = 'flex';
}

function closePortDeepDive() {
  const modalEl = document.getElementById('deep-dive-modal');
  if (modalEl) modalEl.style.display = 'none';
}

window.openPortDeepDive = openPortDeepDive;
window.closePortDeepDive = closePortDeepDive;

