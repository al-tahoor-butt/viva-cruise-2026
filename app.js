// Norwegian Viva 2026 Mediterranean Fly-Cruise Data & Logic

const cruiseData = [
  {
    day: 0,
    date: 'Sun 09 Aug 2026',
    port: 'Manchester ➔ Bologna (Hotel Del Borgo)',
    arrive: '9:05 PM (BLQ)',
    depart: '5:45 PM (MAN)',
    specialtyDining: null,
    lat: 44.5167,
    lng: 11.2721,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Bologna_Piazza_Maggiore.jpg',
    highlight: 'Flight FR2242 & Stay at Hotel Del Borgo, Bologna',
    adultsActivities: 'Land in Bologna Airport (BLQ) at 21:05, 8-min taxi to Hotel Del Borgo (Booking #5007213355), late-night aperitivo under porticoes.',
    kidsActivities: 'Exciting evening flight & cozy stay at Hotel Del Borgo (2 single + 1 double bed configured).',
    transferInfo: '14:00 Train Greenfield ➔ MAN. Flight FR2242 (PNR: WTUR5S) MAN 17:45 ➔ BLQ 21:05. Hotel Del Borgo: Via Marco Emilio Lepido 195 (Booking #5007213355). 8-min taxi (~€20) from BLQ airport rank.',
    tags: ['Hotel Del Borgo', 'Flight FR2242', 'Pre-Cruise', 'Bologna'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Independent Fly-In & Airport Transfer",
      badgeClass: "badge-success",
      estCost: "€11/pax (Monorail) or ~€20 Taxi",
      logisticsSummary: "Ryanair Flight FR2242 lands at BLQ Airport at 21:05. Exit terminal directly to the official taxi rank for an 8-min cab (~€20) to Hotel Del Borgo (Via Marco Emilio Lepido 195). Alternatively, Marconi Express monorail runs every 7 mins directly to Bologna Centrale (€11/pax).",
      timedItinerary: [
        "02:00 PM — Train from Greenfield to Manchester Airport (MAN).",
        "05:45 PM — Ryanair Flight FR2242 departs Manchester Airport (MAN) Terminal 3 (PNR: WTUR5S).",
        "09:05 PM — Land at Bologna Guglielmo Marconi Airport (BLQ). Collect checked bags.",
        "09:30 PM — Take 8-min official taxi from BLQ rank directly to Hotel Del Borgo.",
        "10:00 PM — Hotel check-in (Booking #5007213355), drop bags, & late-night aperitivo under the porticoes."
      ],
      diningSpots: [
        { name: "Osteria dell'Orsa (Via Mentana, 1)", type: "Dinner", note: "Legendary local tavern famous for authentic Tagliatelle al Ragù (true Bolognese) & Tortellini in Brodo." },
        { name: "Cremeria Santo Stefano", type: "Gelato", note: "Artisanal gelato under the historic porticoes; try Crema di Sette Chiese." }
      ]
    }
  },
  {
    day: 1,
    date: 'Mon 10 Aug 2026',
    port: 'Bologna ➔ Ravenna Cruise Port',
    arrive: '12:30 PM Check-in',
    depart: '5:00 PM Sailing',
    specialtyDining: null,
    lat: 44.4949,
    lng: 12.2818,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Norwegian_Viva_in_Venice.jpg',
    highlight: 'Hotel Del Borgo ➔ Ravenna Port (12:30-13:30 Embarkation Window)',
    adultsActivities: 'Breakfast at Hotel Del Borgo, 10:15 taxi to Bologna Centrale, 11:06 Trenitalia train to Ravenna, check-in & welcome champagne on Norwegian Viva.',
    kidsActivities: 'First glimpse of 143,000-ton Norwegian Viva, explore Speedway go-kart racetrack & pool deck!',
    transferInfo: 'Option A (Train): 10:15 Taxi to Bologna Centrale ➔ 11:06 Trenitalia Regional train #3957 (53m, arr 11:59 Ravenna, €8/pax) ➔ 12:05 Taxi (~€25) to Porto Corsini ➔ 12:30 Embarkation. Option B (Direct Transfer): 11:00 Direct taxi from Hotel Del Borgo to Ravenna Terminal (A14 Highway, 1h10m).',
    liveTrainLink: 'https://www.viaggiatreno.it/',
    tags: ['Hotel Del Borgo', '11:06 Train', '12:30 Embarkation', 'Ravenna Port'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY Train & Port Taxi",
      badgeClass: "badge-success",
      estCost: "€35 total for family of 4",
      logisticsSummary: "Take a 10-min taxi (€10) from Hotel Del Borgo to Bologna Centrale. Board Trenitalia Regional Train #3957 (53 mins, €8/pax, departs 11:06 AM, arrives 11:59 AM in Ravenna). From Ravenna station rank, take a short 15-min taxi (~€25 flat rate) straight to Porto Corsini cruise terminal.",
      timedItinerary: [
        "09:30 AM — Relaxed breakfast at Hotel Del Borgo & check-out.",
        "10:15 AM — Take taxi from hotel to Bologna Centrale station.",
        "11:06 AM — Board Trenitalia Regional Train #3957 directly to Ravenna Station (53 mins, arr 11:59 AM).",
        "12:05 PM — Take 15-min taxi from Ravenna Station rank to Porto Corsini Cruise Terminal.",
        "12:30 PM — Check-in window, security & board Norwegian Viva!",
        "02:00 PM — Welcome lunch at Indulge Food Hall & explore Viva Speedway.",
        "05:00 PM — All-Aboard & Sailaway from Venice (Ravenna) into the Adriatic Sea."
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
    specialtyDining: {
      restaurant: 'Los Lobos',
      time: '7:00 PM (19:00)',
      cuisine: 'Premium Mexican & Tequila Bar',
      icon: 'fa-pepper-hot'
    },
    lat: 42.6507,
    lng: 18.0944,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Dubrovnik_Old_Town_from_City_Walls.jpg',
    highlight: 'Ancient City Walls & Los Lobos Specialty Dining (19:00)',
    adultsActivities: 'Walk historic ramparts, Adriatic sea views, ending with sunset cocktails & dinner at Los Lobos (19:00).',
    kidsActivities: 'Guided sea kayaking around Lokrum Island and Betina Cave, plus Dubrovnik Cable Car ride.',
    transferInfo: 'Ship docks at Gruž Port (3 km from Old Town). Take official taxi rank cab (€15 flat rate, 10 mins) OR local Libertas bus #1A / #1B (€2/pax) directly to Old Town Pile Gate. Ship docked 10:00 AM – 11:59 PM.',
    tags: ['City Walls', 'Los Lobos 19:00', 'Sea Kayaking', 'Cable Car', 'Game of Thrones'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY Taxi / Local Bus #1A",
      badgeClass: "badge-success",
      estCost: "€40–80 total (4 pax)",
      logisticsSummary: "Ship docks at Gruž Port. Walk out of terminal directly to the official taxi rank for a 10-min drive (€15 flat rate) to Old Town Pile Gate, or take Libertas Bus #1A / #1B (€2/pax). Buy Medieval City Walls tickets (€35/adult, €15/teen) right at Pile Gate.",
      timedItinerary: [
        "10:00 AM — Ship docks at Gruž Port.",
        "10:20 AM — Take taxi (€15 flat rate) or Libertas Bus #1A directly to Old Town Pile Gate.",
        "10:45 AM — Short walk on the Medieval City Walls (do a half-circuit to avoid heat exhaustion, or use the Cable Car instead).",
        "12:00 PM — Seafood street food lunch at Barba (octopus burgers & fried calamari cones) in the shade.",
        "01:30 PM — Guided Family Sea Kayaking tour (cooling water activity) OR take the air-conditioned Cable Car to Mount Srđ.",
        "03:30 PM — Retreat to the ship for AC and pool time.",
        "07:00 PM — Specialty Dining: Dinner at Los Lobos onboard Viva (Booked 19:00).",
        "11:30 PM — All-Aboard onboard Viva (Ship sails 11:59 PM)."
      ],
      diningSpots: [
        { name: "Los Lobos (Deck 8 Aft)", type: "Specialty Dining (Booked 19:00)", note: "Premium handcrafted Mexican: table-side fresh guacamole, carne asada, and artisanal margaritas." },
        { name: "Barba (Boškovićeva ul. 5)", type: "Lunch", note: "Hip seafood street food: famous octopus burgers & fried calamari cones." }
      ]
    }
  },
  {
    day: 3,
    date: 'Wed 12 Aug 2026',
    port: 'Bar, Montenegro',
    arrive: '8:00 AM',
    depart: '6:00 PM',
    specialtyDining: null,
    lat: 42.0931,
    lng: 19.0989,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Stari_Bar_fortress_2016.jpg',
            highlight: 'King Nikola\'s Palace & Šušanj Beach',
    adultsActivities: 'Relaxing beachfront stroll and exploring the historic King Nikola\'s Palace.',
    kidsActivities: 'Stayed near the port, swimming at the local beach and enjoying the promenade.',
    transferInfo: 'Ship docks at Port of Bar. Walked to the local beachfront and King Nikola\'s Palace.',
    tags: ['King Nikola Palace', 'Beach', 'Port of Bar', 'Montenegro'],
    deepDive: {
      logisticsTitle: "Historical Record: Stayed Local",
      logisticsMode: "Walking / Local Beach",
      badgeClass: "badge-info",
      estCost: "Minimal",
      logisticsSummary: "Decided to skip Lake Skadar to beat the heat and avoid extra travel. Stayed on the local Bar beachfront, visited the nearby King Nikola's Palace and its shaded gardens, and then returned early to the comfort of the ship.",
      timedItinerary: [
        "08:00 AM — Ship docks at Port of Bar.",
        "09:30 AM — Disembark ship for a relaxed morning.",
        "10:00 AM — Walk along the beachfront promenade.",
        "10:30 AM — Visit King Nikola's Palace and museum.",
        "11:30 AM — Relax on the beach near the port.",
        "01:00 PM — Head back to the ship for AC & free food.",
        "02:00 PM — Relax onboard in the shade or pools.",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Local Beach Cafes", type: "Refreshment", note: "Cold drinks by the waterfront." },
        { name: "Indulge Food Hall", type: "Lunch Onboard", note: "Returned to the ship for a comfortable lunch in AC." }
      ]
    }
  },
  {
    day: 4,
    date: 'Thu 13 Aug 2026',
    port: 'At Sea (Mediterranean)',
    arrive: '—',
    depart: '—',
    specialtyDining: null,
    lat: 38.1000,
    lng: 17.5000,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Norwegian_Viva_in_Venice_Lagoon.jpg',
    highlight: 'Viva Speedway, Galaxy Pavilion VR & Ocean Boulevard Pools',
    adultsActivities: 'Indulge Food Hall, Mandara Spa, infinity pool relaxation on Ocean Boulevard.',
    kidsActivities: 'Race on the 3-level Viva Speedway, Galaxy Pavilion VR flight simulators, and The Drop 10-story free-fall dry slide!',
    transferInfo: 'Full sea day navigating the Ionian Sea and passing through the narrow Strait of Messina between Sicily & Calabria.',
    tags: ['Viva Speedway', 'Galaxy Pavilion', 'Sea Day', 'Starlink Wi-Fi'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Full Ship Day Onboard",
      badgeClass: "badge-info",
      estCost: "Included Onboard",
      logisticsSummary: "Full sea day navigating the Ionian Sea towards Salerno. Make sure to book electric go-kart race slots on the Viva Speedway via the NCL mobile app early in the morning!",
      timedItinerary: [
        "09:00 AM — Family breakfast on Ocean Boulevard open-air deck.",
        "10:30 AM — Race the 3-level electric Viva Speedway go-kart track!",
        "12:30 PM — Global lunch at Indulge Food Hall (11 complimentary mini-restaurants).",
        "02:30 PM — Galaxy Pavilion VR flight simulators & 10-story free-fall dry slide (The Drop).",
        "04:30 PM — Watch ship pass through the narrow Strait of Messina between Sicily and Italian mainland.",
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
                    port: 'Salerno ➔ Pompeii Ruins',
    arrive: '7:00 AM',
    depart: '6:00 PM',
    specialtyDining: null,
    lat: 40.7490,
    lng: 14.4850,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Pompeii_Forum_and_Vesuvius.jpg',
    highlight: 'Ancient Ruins of Pompeii & The Great Taxi Escape',
    adultsActivities: 'Explored Pompeii ruins, followed by an accidental train detour and a stressful taxi dash back to Salerno.',
    kidsActivities: 'Walked the ancient Roman streets, then enjoyed an unexpected adventure getting lost on the Italian transit system.',
    transferInfo: 'Outbound: Taxi to Salerno Centrale, then Trenitalia to Pompei. Return: Accidental tram to Poppiano followed by a frantic taxi ride back to Salerno port.',
    tags: ['Pompeii', 'Transit Mishap', 'History', 'Adventure'],
    deepDive: {
      logisticsTitle: "Historical Record: The Pompeii Detour",
      logisticsMode: "Train, Wrong Tram & Panic Taxi",
      badgeClass: "badge-warning",
      estCost: "Train + Pompeii Entry + Unplanned Taxi Fare",
      logisticsSummary: "The day started perfectly: a quick taxi to Salerno Centrale and a smooth train ride to Pompei. Explored the incredible ruins. However, the return journey went sideways! Boarded the wrong tram from the Scavi station, heading in the wrong direction to Poppiano. A stressful scramble to find an emergency taxi from Poppiano all the way back to Salerno ensued. Thankfully, made it back with time to spare!",
      timedItinerary: [
        "08:30 AM — Disembarked ship. Grabbed a quick taxi to Salerno Centrale.",
        "09:00 AM — Boarded Trenitalia train to Pompei.",
        "09:40 AM — Arrived at Pompei station. Walked 15 mins to the Pompeii ruins entrance.",
        "10:00 AM — Explored the incredible ancient ruins of Pompeii.",
        "12:30 PM — Quick lunch in modern Pompei town.",
        "01:30 PM — Headed to the Scavi train station for the return journey.",
        "01:45 PM — MISHAP: Boarded the wrong tram and ended up traveling south towards Poppiano!",
        "02:30 PM — Realized the mistake in Poppiano. Mild panic ensues regarding the ship\'s 5:15 PM All-Aboard time.",
        "02:45 PM — Stressful scramble to find an available taxi in Poppiano to race back to Salerno.",
        "03:45 PM — Arrived back in Salerno port. Safely onboard the Viva comfortably in time!",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Mercato Pompeiano", type: "Lunch", note: "Grabbed lunch before the transit chaos unfolded." }
      ]
    }
  },
  {
    day: 6,
    date: 'Sat 15 Aug 2026',
    port: 'Civitavecchia (Rome), Italy',
    arrive: '6:45 AM',
    depart: '6:00 PM',
    specialtyDining: {
      restaurant: 'Hasuki',
      time: '5:00 PM (17:00)',
      cuisine: 'Japanese Teppanyaki Grill Show',
      icon: 'fa-utensils'
    },
    lat: 41.8902,
    lng: 12.4922,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg',
    highlight: 'Ship Day Onboard Norwegian Viva & Hasuki Teppanyaki (17:00)',
    adultsActivities: 'Staying onboard! Enjoy peaceful Ocean Boulevard, Mandara Spa, infinity pools with zero crowds, ending with Teppanyaki dinner at Hasuki (17:00).',
    kidsActivities: 'Uncrowded Viva Speedway go-karts, Galaxy Pavilion VR flight simulators, dry slides & interactive chef tricks at Hasuki!',
    transferInfo: 'Staying Onboard! Ship docked in Civitavecchia (06:45 – 18:00). Enjoy maximum ship amenities with zero traffic or long 2-hour transfers into Rome.',
    tags: ['Ship Day', 'Hasuki 17:00', 'Viva Speedway', 'Galaxy Pavilion', 'Onboard Relax'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "100% Onboard Ship Day",
      badgeClass: "badge-warning",
      estCost: "Included + Hasuki",
      logisticsSummary: "Civitavecchia is 80 km from Rome (nearly 2 hours each way in highway traffic or train). Staying onboard allows full uncrowded access to Norwegian Viva's Speedway, pool deck, and Mandara Spa, ending with Teppanyaki at Hasuki (17:00).",
      timedItinerary: [
        "06:45 AM — Ship docks in Civitavecchia.",
        "08:30 AM — Relaxed breakfast at Indulge Food Hall / Ocean Boulevard.",
        "10:00 AM — Electric go-kart racing on the 3-level Viva Speedway with zero queues!",
        "12:00 PM — Pool deck & infinity pool relaxation while 80% of passengers are off ship in Rome.",
        "02:30 PM — VR Flight Simulators & dry slides at Galaxy Pavilion.",
        "05:00 PM — Specialty Dining: Teppanyaki Dinner at Hasuki (Booked 17:00).",
        "07:30 PM — Live evening entertainment & deck party."
      ],
      diningSpots: [
        { name: "Hasuki (Deck 7 Aft)", type: "Specialty Dining (Booked 17:00)", note: "Interactive Japanese Teppanyaki grill show: flying egg tricks, flaming grills, hibachi steak & seafood." },
        { name: "Indulge Food Hall", type: "Lunch Onboard", note: "Quiet uncrowded lunch while the ship is in port." }
      ]
    }
  },
  {
    day: 7,
    date: 'Sun 16 Aug 2026',
            port: 'Livorno ➔ Pisa',
    arrive: '7:00 AM',
    depart: '10:00 PM',
    specialtyDining: {
      restaurant: 'Split: Los Lobos & Nama Sushi',
      time: '6:30 PM (18:30)',
      cuisine: 'Mexican & Japanese',
      icon: 'fa-pepper-hot'
    },
    lat: 43.7228,
    lng: 10.3966,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg',
    highlight: 'Quick Hit to Pisa Leaning Tower & Early Retreat',
    adultsActivities: 'Morning excursion to Pisa, followed by relaxing on the empty ship away from the extreme heat.',
    kidsActivities: 'Iconic Leaning Tower photos, early return for afternoon waterslides on the ship.',
    transferInfo: 'Port shuttle/taxi to Livorno Centrale. Board Trenitalia Regional to Pisa Centrale (approx 15-20 mins).',
    tags: ['Pisa', 'Leaning Tower', 'Beat The Heat', 'Los Lobos / Nama'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Trenitalia Regional Train (15 mins)",
      badgeClass: "badge-success",
      estCost: "€6 total (return train per pax)",
      logisticsSummary: "Dodging the intense heat of Florence, we are doing a quick strike on Pisa. Take the port shuttle and bus/taxi to Livorno Centrale. The Trenitalia Regional train to Pisa Centrale takes only 15-20 minutes. From there, it\'s a flat 20-minute walk (or quick bus) to the Leaning Tower. Get in, get the iconic photos, grab an early lunch, and escape back to the glorious air-conditioning of the ship by early afternoon.<br><br><b>Google Maps Route Navigator:</b><br><a href=\"https://www.google.com/maps/dir/?api=1&origin=Livorno+Centrale&destination=Leaning+Tower+of+Pisa&travelmode=transit\" target=\"_blank\" class=\"btn btn-sm btn-primary\" style=\"margin-top: 8px; text-decoration: none;\"><i class=\"fa-solid fa-map-location-dot\"></i> Open Google Maps Route</a>",
      timedItinerary: [
        "09:30 AM — Relaxed disembarkation. Taxi/shuttle to Livorno Centrale.",
        "10:15 AM — Board Trenitalia Regional train to Pisa Centrale.",
        "10:35 AM — Arrive in Pisa. Walk or take the LAM Rossa bus to Piazza dei Miracoli.",
        "11:00 AM — Explore the Leaning Tower and Cathedral complex before the midday sun hits its peak.",
        "12:15 PM — Grab a quick, shaded lunch in Pisa.",
        "01:30 PM — Train back to Livorno Centrale to escape the heat.",
        "02:15 PM — Arrive back onboard the Norwegian Viva.",
        "02:30 PM — Enjoy the empty pools, waterslides, and AC while everyone else is sweltering in Florence!",
        "06:30 PM — Specialty Dining: Split Dinner! One pair to Los Lobos, the other to Nama Sushi.",
        "09:15 PM — All-Aboard onboard Viva (Late departure ship sails 10:00 PM)."
      ],
      diningSpots: [
        { name: "Los Lobos / Nama Sushi (Deck 8)", type: "Specialty Dining (18:30)", note: "Ditching Onda so the kids can eat! Split dinner strategy in place." }
      ]
    }
  },
  {
    day: 8,
    date: 'Mon 17 Aug 2026',
        port: 'Nice (Villefranche), France',
    arrive: '7:00 AM',
    depart: '4:30 PM',
    specialtyDining: null,
    lat: 43.7042,
    lng: 7.3117,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Villefranche_sur_Mer_Bay.jpg',
    highlight: 'French Riviera Coastal Train & Vieux Nice',
    adultsActivities: 'Stroll the Promenade des Anglais, shop at Cours Saleya market.',
    kidsActivities: 'Paddleboard in Villefranche bay, flower gelato at Amorino.',
    transferInfo: 'Tender boat to Villefranche pier. Walk 5 mins up to Gare de Villefranche. Board SNCF TER train (Direction Nice/Cannes) to Nice Ville (6 mins).',
    tags: ['Nice', 'Villefranche', 'SNCF Train', 'Beach'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "SNCF TER Train (6 Mins)",
      badgeClass: "badge-success",
      estCost: "€2/pax Train",
      logisticsSummary: "Take an early tender boat to the Villefranche pier. Walk 5 minutes up the hill to the Gare de Villefranche-sur-Mer. Buy tickets on the SNCF Connect app or at the red SNCF machines. Take any Westbound train (Platform usually labelled 'Direction Nice/Cannes'). It's only a 6-minute scenic ride to Nice Ville.<br><br><b>Google Maps Route Navigator:</b><br><a href=\"https://www.google.com/maps/dir/?api=1&origin=Gare+de+Villefranche-sur-Mer&destination=Vieux+Nice&travelmode=transit\" target=\"_blank\" class=\"btn btn-sm btn-primary\" style=\"margin-top: 8px; text-decoration: none;\"><i class=\"fa-solid fa-map-location-dot\"></i> Open Google Maps Route</a><br><br><b>Train Return Options (Direction Monaco/Menton):</b><br>• Trains run every 15 to 30 minutes all afternoon. Just jump on any Eastbound TER train from Nice Ville back to Villefranche-sur-Mer.",
      timedItinerary: [
        "07:00 AM — Ship anchors in Villefranche bay.",
        "08:15 AM — Board early tender boat from Viva to Villefranche harbor (15 mins).",
        "08:45 AM — Walk 5 mins to Gare de Villefranche station; board 6-min TER train to Nice Ville.",
        "09:15 AM — Walk the shaded narrow streets of Vieux Nice (Old Town) & Cours Saleya market.",
        "10:45 AM — Take train back to Villefranche. Cool off swimming & paddleboarding in turquoise Villefranche bay.",
        "12:30 PM — Authentic Socca chickpea crepe lunch at Chez Pipo in the shade.",
        "02:00 PM — Flower gelato at Amorino, then catch an early tender back to the air-conditioned ship.",
        "03:45 PM — Last Tender / All-Aboard onboard Viva (Ship sails 4:30 PM)."
      ],
      diningSpots: [
        { name: "Chez Pipo (Nice Port)", type: "Lunch", note: "The absolute best place to try traditional Niçoise Socca (chickpea crepe) baked in a wood oven." },
        { name: "Amorino (Vieux Nice)", type: "Dessert", note: "Iconic artisanal gelato shaped into beautiful roses." }
      ]
    }
  },
  {
    day: 9,
    date: 'Tue 18 Aug 2026',
            port: 'Palma de Majorca, Spain',
    arrive: '1:00 PM',
    depart: '9:00 PM',
    specialtyDining: {
      restaurant: 'Palomar',
      time: '5:30 PM (17:30)',
      cuisine: 'Mediterranean Seafood Specialty',
      icon: 'fa-fish'
    },
    lat: 39.5696,
    lng: 2.6502,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Cathedral_of_Palma_de_Mallorca.jpg',
    highlight: 'Palma Old Town Exploration, Palomar (17:30) & Escape Room Pearl (18:45)',
    adultsActivities: 'Palma Cathedral (La Seu) visit, Old Town strolling, returning for dinner at Palomar.',
    kidsActivities: 'Bellver Castle circular fortress or Palma Bay beach swim before dinner.',
    transferInfo: 'Ship docks at Estació Marítima. EMT Bus #1 departs right outside terminal to Old Town. Alternatively, €12 fixed-rate taxi.',
    tags: ['Palma', 'Palomar 17:30', 'Escape Room 18:45', 'Cathedral'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "EMT Bus #1 / Taxi",
      badgeClass: "badge-success",
      estCost: "€2/pax Bus or €12 Taxi",
      logisticsSummary: "The ship docks at Estació Marítima. Walk right outside the terminal and board EMT Bus #1. You can pay with exact cash or tap your contactless card directly on the bus. Take it to the Cathedral or Plaça d'Espanya. Alternatively, the official taxi rank is right there with a ~€12 flat rate to the center.<br><br><b>Google Maps Route Navigator:</b><br><a href=\"https://www.google.com/maps/dir/?api=1&origin=Estacio+Maritima+Palma&destination=Catedral+de+Mallorca&travelmode=transit\" target=\"_blank\" class=\"btn btn-sm btn-primary\" style=\"margin-top: 8px; text-decoration: none;\"><i class=\"fa-solid fa-map-location-dot\"></i> Open Google Maps Route</a><br><br><b>Return Options:</b><br>• The EMT Bus #1 runs continuous loops. For a quick return, grab a taxi from any major rank (like Passeig d'es Born) directly back to Estació Marítima.",
      timedItinerary: [
        "01:00 PM — Ship docks in Palma (Estació Marítima).",
        "01:20 PM — Disembark & take taxi (€12) or EMT Bus #1 to Old Town.",
        "01:45 PM — Tapas & sangria at Mercat de l'Olivar indoor market.",
        "03:00 PM — Escape the heat inside the massive Palma Cathedral (La Seu) & Royal Palace.",
        "04:00 PM — Relax in the air-conditioned Ca'n Joan de s'Aigo with a cold drink and Mallorcan Ensaimada pastry.",
        "05:00 PM — Quick taxi back to cruise terminal to freshen up before dinner.",
        "05:30 PM — Specialty Dining: Dinner at Palomar (Booked 17:30).",
        "06:45 PM — Family Activity: Escape Room Pearl onboard (Booked 18:45).",
        "08:15 PM — All-Aboard onboard Viva (Ship sails 9:00 PM)."
      ],
      diningSpots: [
        { name: "Palomar (Deck 17 Mid)", type: "Specialty Dining (Booked 17:30)", note: "Exquisite Mediterranean seafood restaurant with panoramic ocean views: salt-crusted sea bass & grilled octopus." },
        { name: "Mercat de l'Olivar", type: "Tapas Lunch", note: "Vibrant indoor market with fresh grilled prawns & Jamón Ibérico." }
      ]
    }
  },
  {
    day: 10,
    date: 'Wed 19 Aug 2026',
        port: 'Barcelona, Spain ➔ Manchester, UK',
    arrive: '6:30 AM',
    depart: '12:35 PM Flight',
    specialtyDining: null,
    lat: 41.3851,
    lng: 2.1734,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Familia_01.jpg',
    highlight: 'Cruise Disembarkation & Flight FR6597 to Manchester',
    adultsActivities: 'Disembark Norwegian Viva early and execute airport transfer to BCN.',
    kidsActivities: 'Navigate Barcelona El Prat airport and fly home.',
    transferInfo: 'Ship docks at Moll Adossat. Grab an official taxi straight to BCN Airport (El Prat). Fixed rate/meter is ~€39. Takes 25 mins.',
    tags: ['Barcelona', 'Disembarkation', 'Airport Transfer', 'Ryanair'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Official Port Taxi",
      badgeClass: "badge-success",
      estCost: "~€39 total per taxi",
      logisticsSummary: "With a 12:35 PM flight out of BCN El Prat, do not risk the T3 Portbus to Columbus Monument followed by the Aerobus. With 4 people and luggage, the absolute most efficient method is to join the official taxi rank right outside your Moll Adossat terminal. The ride to BCN Airport takes about 25 minutes and usually costs a flat/metered rate of €39. Target arriving at the airport by 10:00 AM.<br><br><b>Google Maps Route Navigator:</b><br><a href=\"https://www.google.com/maps/dir/?api=1&origin=Moll+Adossat+Barcelona&destination=Barcelona+El+Prat+Airport&travelmode=driving\" target=\"_blank\" class=\"btn btn-sm btn-primary\" style=\"margin-top: 8px; text-decoration: none;\"><i class=\"fa-solid fa-map-location-dot\"></i> Open Google Maps Route</a>",
      timedItinerary: [
        "06:30 AM — Norwegian Viva docks at Barcelona (Moll Adossat).",
        "08:00 AM — Enjoy final buffet breakfast onboard.",
        "09:00 AM — Disembark ship with luggage.",
        "09:15 AM — Join the official taxi rank at the cruise terminal.",
        "09:40 AM — Arrive at Barcelona El Prat Airport (BCN).",
        "10:00 AM — Drop bags at Ryanair check-in desk and clear security.",
        "11:50 AM — Head to departure gate for FR6597.",
        "12:35 PM — Flight departs for Manchester (MAN)!"
      ],
      diningSpots: [
        { name: "Surfside Café (Deck 17)", type: "Breakfast", note: "Final ship breakfast before disembarking." }
      ]
    }
  }
];

// Helper Functions for Day Expiration & Auto-Selection of Current Vacation Day
function getDayDate(dayObject) {
  const monthMap = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 };
  const parts = dayObject.date.split(' '); // e.g. ['Sun', '09', 'Aug', '2026']
  const dayNum = parseInt(parts[1], 10);
  const monthStr = parts[2];
  const yearNum = parseInt(parts[3], 10);
  return new Date(yearNum, monthMap[monthStr] !== undefined ? monthMap[monthStr] : 7, dayNum);
}

function getDayStatus(dayObject) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayDate = getDayDate(dayObject);

  if (dayDate.getTime() === today.getTime()) return 'today';
  if (dayDate < today) return 'past';
  return 'future';
}

function getInitialDayIndex() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Automatically default to TODAY during the holiday (09 Aug - 19 Aug 2026)!
  for (let i = 0; i < cruiseData.length; i++) {
    const dayDate = getDayDate(cruiseData[i]);
    if (dayDate.getTime() === today.getTime()) {
      return i;
    }
  }

  // If today is after the cruise ends, select the last day
  const lastDayDate = getDayDate(cruiseData[cruiseData.length - 1]);
  if (today > lastDayDate) {
    return cruiseData.length - 1;
  }

  // Pre-cruise planning phase: default to Day 0 (Sun 09 Aug)
  return 0;
}

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
let selectedDayIndex = getInitialDayIndex();
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
  // 9th August 2026 at 14:00 BST = 13:00 UTC
  const flightOutboundDate = Date.UTC(2026, 7, 9, 13, 0, 0);
  // 10th August 2026 at 12:30 CEST = 10:30 UTC
  const embarkationDate = Date.UTC(2026, 7, 10, 10, 30, 0);
  // 19th August 2026 at 14:10 BST = 13:10 UTC
  const disembarkationDate = Date.UTC(2026, 7, 19, 13, 10, 0);
  
  function updateTimer() {
    const now = new Date().getTime();
    const labelEl = document.getElementById('countdown-label');
    const timerEl = document.getElementById('countdown-timer');
    if (!labelEl || !timerEl) return;

    // Phase 1: Pre-Trip Countdown to Outbound Travel
    if (now < flightOutboundDate) {
      labelEl.innerHTML = `<i class="fa-solid fa-train-subway"></i> Outbound Travel Countdown`;
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
  if (!container) return;
  container.innerHTML = '';

  let todayBtn = null;

  cruiseData.forEach((day, index) => {
    const status = getDayStatus(day); // 'past', 'today', 'future'
    const isSelected = index === selectedDayIndex;

    const btn = document.createElement('div');
    let statusClass = '';
    if (status === 'past') statusClass = 'expired';
    if (status === 'today') statusClass = 'today-highlight';

    btn.className = `day-btn ${statusClass} ${isSelected ? 'active' : ''}`;
    btn.onclick = () => selectDay(index);

    let statusBadge = '';
    if (status === 'past') {
      statusBadge = `<span class="badge-past"><i class="fa-solid fa-check"></i> Past</span>`;
    } else if (status === 'today') {
      statusBadge = `<span class="badge-today"><i class="fa-solid fa-location-dot"></i> TODAY</span>`;
    }

    const diningBadge = day.specialtyDining ? `
      <span title="Specialty Dining Booked: ${day.specialtyDining.restaurant} @ ${day.specialtyDining.time}" style="font-size: 10px; background: rgba(255, 183, 3, 0.2); color: var(--sunset-gold); padding: 2px 6px; border-radius: 4px; font-weight: 700; margin-left: 4px; display: inline-block;">
        <i class="fa-solid ${day.specialtyDining.icon}"></i> ${day.specialtyDining.restaurant}
      </span>
    ` : '';

    btn.innerHTML = `
      <div>
        <div class="day-title">
          <span class="${status === 'past' ? 'day-title-text' : ''}">
            ${day.day === 0 ? 'Fly-In' : 'Day ' + day.day}: ${day.port.split(',')[0]}
          </span>
          ${statusBadge}
          ${diningBadge}
        </div>
        <div class="day-date">${day.date}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="font-size: 11px; opacity: 0.5;"></i>
    `;

    if (status === 'today') {
      todayBtn = btn;
    }

    container.appendChild(btn);
  });

  // Auto-scroll sidebar to TODAY if active during holiday
  if (todayBtn && container) {
    setTimeout(() => {
      container.scrollTop = todayBtn.offsetTop - container.offsetTop - 20;
    }, 100);
  }
}

// Select Day & Update Views + Dynamic Master Travel Command Box
async function selectDay(index) {
  previousDayIndex = selectedDayIndex;
  selectedDayIndex = index;
  renderDayList();

  const data = cruiseData[index];
  document.getElementById('current-port-badge').innerText = `Focus: ${data.port}`;

  // Specialty Dining Banner if booked
  const diningBanner = data.specialtyDining ? `
    <div style="background: rgba(255, 183, 3, 0.12); border: 1.5px solid var(--sunset-gold); border-radius: 10px; padding: 10px 14px; margin-top: 6px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
      <div>
        <span style="color: var(--sunset-gold); font-weight: 700; font-size: 12.5px;">
          <i class="fa-solid ${data.specialtyDining.icon}"></i> Specialty Dining Booked: ${data.specialtyDining.restaurant} (${data.specialtyDining.time})
        </span>
        <span style="display: block; color: var(--text-muted); font-size: 11.5px;">${data.specialtyDining.cuisine}</span>
      </div>
      <span class="badge badge-warning" style="font-size: 10px;">Reserved</span>
    </div>
  ` : '';

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
        ${diningBanner}
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

  // Update Day Details Card with Hero Image Banner & Prominent Travel Logistics Front & Center!
  const detailsContainer = document.getElementById('day-details-card');
  const dd = data.deepDive;

  detailsContainer.innerHTML = `
    <div class="day-hero-container">
      <img src="${data.heroImage}" alt="${data.port}" class="day-hero-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'; this.style.opacity='0.8';" />
    </div>

    <div class="card-header" style="margin-bottom: 16px;">
      <div>
        <span class="badge ${dd ? (dd.badgeClass || 'badge-success') : 'badge-success'}" style="font-size: 11px; margin-bottom: 6px;">${dd ? (dd.logisticsMode || 'DIY Strategy') : 'DIY Travel Plan'}</span>
        <h2 style="font-size: 22px; margin: 4px 0 0 0;"><i class="fa-solid ${data.day === 0 ? 'fa-hotel' : 'fa-anchor'}"></i> ${data.day === 0 ? 'Pre-Cruise Stay' : 'Day ' + data.day}: ${data.port}</h2>
      </div>
      <span class="badge badge-warning" style="font-size: 13px;">${data.date}</span>
    </div>

    <!-- Highlights & Specialty Dining Banners -->
    <div style="margin-bottom: 20px;">
      <p style="font-size: 14.5px; color: #ffffff; margin-bottom: 12px; font-weight: 500;">
        <i class="fa-solid fa-star" style="color: var(--accent);"></i> <strong>Focus:</strong> ${data.highlight}
      </p>

      ${data.specialtyDining ? `
        <div style="background: rgba(255, 183, 3, 0.12); border-left: 4px solid var(--sunset-gold); border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div>
            <strong style="color: var(--sunset-gold); font-size: 14px;"><i class="fa-solid ${data.specialtyDining.icon}"></i> Confirmed Specialty Dining: ${data.specialtyDining.restaurant}</strong>
            <p style="color: #ffffff; font-size: 12.5px; margin: 3px 0 0 0;">Reserved for <strong>${data.specialtyDining.time}</strong> • ${data.specialtyDining.cuisine}</p>
          </div>
          <span class="badge badge-warning" style="font-size: 11px;">RESERVED</span>
        </div>
      ` : ''}
    </div>

    <!-- PRIMARY PROMINENT SECTION: Master DIY Transport & Route Execution Guide -->
    ${dd ? `
      <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid var(--sunset-gold); border-radius: 12px; padding: 18px; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <h3 style="color: var(--sunset-gold); margin: 0; font-size: 16px; font-weight: 700;">
            <i class="fa-solid fa-route"></i> Primary Travel Logistics & Route Execution Guide
          </h3>
          ${data.liveTrainLink ? `
            <a href="${data.liveTrainLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="text-decoration: none; font-size: 11.5px; padding: 6px 12px;">
              <i class="fa-solid fa-train"></i> Track Live Train
            </a>
          ` : ''}
        </div>
        <p style="font-size: 14px; color: #e2e8f0; line-height: 1.65; margin: 0; font-weight: 400;">
          ${dd.logisticsSummary}
        </p>
      </div>

      <!-- PROMINENT STEP-BY-STEP TIMED ITINERARY -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 24px;">
        <h3 style="color: #ffb703; margin: 0 0 14px 0; font-size: 16px; font-weight: 700;">
          <i class="fa-solid fa-clock"></i> Timed Master Schedule & Family Itinerary
        </h3>
        <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 8px;">
          ${dd.timedItinerary.map(item => `
            <li style="position: relative; padding: 10px 14px 10px 34px; font-size: 13.5px; color: #f1f5f9; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--primary); position: absolute; left: 12px; top: 13px; font-size: 14px;"></i>
              ${item}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- CURATED LOCAL DINING & GELATO -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 24px;">
        <h3 style="color: #38bdf8; margin: 0 0 14px 0; font-size: 16px; font-weight: 700;">
          <i class="fa-solid fa-utensils"></i> Curated Local Family Dining & Gelato Spots
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
          ${dd.diningSpots.map(spot => `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <strong style="color: #ffffff; font-size: 14px;">${spot.name}</strong>
                <span class="badge badge-info" style="font-size: 10.5px;">${spot.type}</span>
              </div>
              <p style="margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.4;">${spot.note}</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Secondary Activities & Weather Grid -->
    <div class="day-content-grid" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
      <div style="flex: 1 1 280px;">
        <div class="activity-section" style="margin-bottom: 14px;">
          <h4 style="font-size: 14px; color: var(--sunset-gold);"><i class="fa-solid fa-user-tie"></i> Adults Activity Highlights</h4>
          <p style="color: var(--text-muted); font-size: 13px; line-height: 1.5; margin-top: 4px;">${data.adultsActivities}</p>
        </div>

        <div class="activity-section" style="margin-bottom: 14px;">
          <h4 style="font-size: 14px; color: var(--sunset-gold);"><i class="fa-solid fa-child-reaching"></i> Teen & Kids Activities (14M & 11F)</h4>
          <p style="color: var(--text-muted); font-size: 13px; line-height: 1.5; margin-top: 4px;">${data.kidsActivities}</p>
        </div>

        <div class="activity-tags" style="margin-top: 14px;">
          ${data.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
        </div>
      </div>

      <!-- Live Weather Box -->
      <div class="weather-badge-box" style="flex: 0 0 220px; position: relative;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--sunset-gold); margin-bottom: 8px; font-weight: 800; display: flex; align-items: center; gap: 4px; border-bottom: 1px solid rgba(255,183,3,0.3); padding-bottom: 4px; width: 100%; justify-content: center;">
          <i class="fa-solid fa-tower-broadcast" style="animation: pulse 2s infinite;"></i> LIVE WEATHER: ${data.port.split(',')[0]}
        </div>
        <i class="fa-solid fa-cloud-sun" style="font-size: 28px; color: var(--primary); margin-top: 4px;"></i>
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
    zoom: 6,
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
          <span class="badge ${dd.badgeClass || 'badge-success'}" style="font-size: 12px; margin-bottom: 6px;">${dd.logisticsMode || 'DIY Strategy'}</span>
          <h2 style="font-size: 20px; color: var(--sunset-gold); margin: 4px 0 0 0;">
            <i class="fa-solid fa-compass"></i> Day ${data.day}: ${data.port.split(',')[0]} Master Logistics
          </h2>
        </div>
        <button onclick="closePortDeepDive()" class="btn-close" style="background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0 8px;">&times;</button>
      </div>

      <!-- Master DIY Transport & Route Guide Card -->
      <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid var(--sunset-gold); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
          <h4 style="color: var(--sunset-gold); margin: 0; font-size: 15.5px;"><i class="fa-solid fa-route"></i> Master Transport & Navigation Guide</h4>
          <span class="badge ${dd.badgeClass || 'badge-success'}">${dd.logisticsMode || 'DIY Mode'}</span>
        </div>
        <p style="font-size: 13.5px; color: #e2e8f0; line-height: 1.6; margin: 0;">${dd.logisticsSummary}</p>
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

// Free at Sea Plus Strategy Modal
function showFASModal() {
  let modalEl = document.getElementById('fas-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'fas-modal';
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-card tech-card" style="max-width: 720px; max-height: 85vh; overflow-y: auto; padding: 24px; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
        <div>
          <span class="badge badge-warning" style="font-size: 11px; margin-bottom: 4px;">NCL Upgrade Strategy</span>
          <h2 style="font-size: 20px; color: var(--sunset-gold); margin: 4px 0 0 0;">
            <i class="fa-solid fa-wine-glass"></i> Free at Sea Plus Package Details
          </h2>
        </div>
        <button onclick="closeFASModal()" class="btn-close" style="background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0 8px;">&times;</button>
      </div>

      <!-- Section 1: Free at Sea Plus Package Evaluation -->
      <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--sunset-gold); border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <h3 style="color: var(--sunset-gold); font-size: 16px; margin: 0 0 10px 0;">
          <i class="fa-solid fa-calculator"></i> 1. Free at Sea Plus Package Evaluation (£359.91 / person)
        </h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; font-size: 12.5px;">
          <div style="background: rgba(255, 183, 3, 0.1); padding: 10px; border-radius: 8px; border-left: 3px solid var(--sunset-gold);">
            <strong>Upgrading Adults (Guests 1 & 2):</strong><br>
            Cost: <strong>£719.82 Total</strong> (2 pax)
          </div>
          <div style="background: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 8px; border-left: 3px solid #10b981;">
            <strong>Offsetting Value:</strong><br>
            Wi-Fi (£423.66) + Gratuities (~£310) = <strong>£733.66</strong>
          </div>
        </div>

        <p style="font-size: 13px; color: #e2e8f0; line-height: 1.5; margin: 0 0 10px 0;">
          <strong>Financial Verdict:</strong> Upgrading Guests 1 & 2 to Free at Sea Plus actually <em>saves money</em> compared to paying for standalone adult Streaming Wi-Fi (£423.66) plus Guest 1 & 2 daily service charges (~£310 offset from your £558 total pre-pay). Plus you get unlimited Starbucks, bottled water & top-shelf liquors included!
        </p>

        <div style="background: rgba(239, 68, 68, 0.12); border-left: 4px solid #ef4444; border-radius: 6px; padding: 10px 12px; font-size: 12.5px; color: #fca5a5;">
          <strong>Why NOT swap kids to Guests 1 & 2?</strong> NCL fine print states: <em>"Additional guests 21+ receive Premium Plus Beverage Package ONLY."</em> If adults become Guests 3 & 4, you lose adult Streaming Wi-Fi and adult gratuity coverage, forcing you to pay for Wi-Fi separately!
        </div>
      </div>

      <div style="text-align: right; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;">
        <button onclick="closeFASModal()" class="btn btn-primary" style="padding: 10px 24px; font-weight: 700;">
          Close <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  `;

  modalEl.style.display = 'flex';
}

function closeFASModal() {
  const modalEl = document.getElementById('fas-modal');
  if (modalEl) modalEl.style.display = 'none';
}

window.showFASModal = showFASModal;
window.closeFASModal = closeFASModal;

// Norwegian Viva Prima-Class Deck Plan Data & Interactive Navigator (Complete 20-Deck Coverage)
const vivaDeckData = [
  {
    deck: 'Decks 18–20',
    title: 'Viva Speedway & Thrill Complex (Top Decks)',
    highlight: '3-Level Go-Kart Racetrack, 10-Story Dry Slides, VR Galaxy Pavilion & Sports Stadium',
    venues: [
      { name: 'Viva Speedway (Decks 18, 19 & 20)', location: 'Decks 18–20 Aft', type: 'Go-Kart Racetrack', status: 'Thrill Attraction', reserved: null, icon: 'fa-flag-checkered', desc: 'The largest 3-level electric go-kart racetrack at sea! 1,400 feet of track with 15 turns extending over the ocean (speeds up to 30 mph).' },
      { name: 'The Drop', location: 'Deck 18 Port Aft', type: '10-Story Dry Slide', status: 'Thrill Attraction', reserved: null, icon: 'fa-bolt', desc: 'World’s first 10-story free-fall dry slide delivering 1.5G acceleration down the side of the ship to Deck 8.' },
      { name: 'The Rush', location: 'Deck 18 Starboard Aft', type: 'Dueling Dry Slides', status: 'Thrill Attraction', reserved: null, icon: 'fa-arrows-split-up-and-left', desc: 'Dueling 10-story spiral dry slides for racing family members down to Ocean Boulevard.' },
      { name: 'Galaxy Pavilion VR', location: 'Deck 18 Forward', type: 'VR Arcade & Simulators', status: 'VR Arcade ($)', reserved: null, icon: 'fa-vr-cardboard', desc: 'High-tech Virtual Reality arcade: VR flight simulators, VR rollercoasters, Top-Golf swing suite & escape room.' },
      { name: 'Tee Time', location: 'Deck 18 Mid', type: 'Interactive Mini-Golf', status: 'Sports', reserved: null, icon: 'fa-golf-ball-tee', desc: 'Tech-enhanced 9-hole mini-golf course with automated scoring and obstacle effects.' },
      { name: 'Bull’s Eye', location: 'Deck 18 Mid', type: 'Tech Dart Suites', status: 'Sports ($)', reserved: null, icon: 'fa-bullseye', desc: 'Private upscale dart suites with automated scoring and interactive game modes.' },
      { name: 'The Wave Water Slide', location: 'Deck 19 Mid', type: 'Tidal Water Slide', status: 'Water Slide', reserved: null, icon: 'fa-water', desc: 'Thrilling tidal tube water slide extending over the ocean edge.' },
      { name: 'The Stadium', location: 'Deck 19 Mid', type: 'Sports & Games', status: 'Complimentary', reserved: null, icon: 'fa-table-tennis-paddle-ball', desc: 'Outdoor sports arena: pickleball court, table tennis, foosball, and shuffleboard.' },
      { name: 'Kids Aqua Park & Splash Academy', location: 'Deck 18 Mid', type: 'Youth & Splash Zone', status: 'Youth Program', reserved: null, icon: 'fa-child-reaching', desc: 'Splash pad, water cannons, buckets & NCL Splash Academy youth clubrooms for kids & teens.' }
    ]
  },
  {
    deck: 'Deck 17',
    title: 'Palomar Seafood, Buffet & Pool Deck',
    highlight: 'Palomar Mediterranean Seafood, Main Buffet & Observation Lounge',
    venues: [
      { name: 'Palomar', location: 'Deck 17 Mid', type: 'Mediterranean Seafood', status: 'Specialty ($)', reserved: 'Booked: Tue 18 Aug @ 18:00', icon: 'fa-fish', desc: 'Upscale Mediterranean seafood restaurant: salt-crusted whole sea bass, grilled octopus, and fine wines.' },
      { name: 'Surfside Cafe & Grill', location: 'Deck 17 Mid', type: 'Main Buffet', status: 'Complimentary', reserved: null, icon: 'fa-plate-wheat', desc: 'Full-service main buffet with live cooking stations, carving stations, salads, pizza, and dessert bar.' },
      { name: 'Food Republic', location: 'Deck 17 Mid', type: 'Pan-Asian Fusion', status: 'Specialty ($)', reserved: null, icon: 'fa-utensils', desc: 'Global fusion sharing plates: sushi rolls, pork belly bao buns, and Asian street noodles ordered via iPad.' },
      { name: 'Observation Lounge', location: 'Deck 17 Forward', type: '270° Panoramic Lounge', status: 'Complimentary', reserved: null, icon: 'fa-eye', desc: '270-degree floor-to-ceiling glass lounge with panoramic ocean views, light bites, and quiet bar service.' },
      { name: 'Waves Pool & Pool Bar', location: 'Deck 17 Mid', type: 'Main Pool Deck', status: 'Pool Deck', reserved: null, icon: 'fa-person-swimming', desc: 'Central outdoor swimming pool, sun loungers, and main pool bar service.' },
      { name: 'Vibe Beach Club', location: 'Deck 17 Aft', type: 'Adults Private Retreat', status: 'Adults Only ($)', reserved: null, icon: 'fa-umbrella-beach', desc: 'Private 18+ sanctuary with dedicated hot tubs, plush sun loungers, and private bar service.' },
      { name: 'Infinity Beach Deck 17', location: 'Deck 17 Aft', type: 'Plunge Pools', status: 'Pool Deck', reserved: null, icon: 'fa-water', desc: 'Upper deck infinity plunge pools and luxury daybeds overlooking the ocean.' }
    ]
  },
  {
    deck: 'Deck 16',
    title: 'Mandara Spa Thermal Suite & Fitness Center',
    highlight: 'Hydrotherapy Pools, Ice Room, Salt Room & Technogym Fitness Center',
    venues: [
      { name: 'Mandara Spa & Thermal Suite', location: 'Deck 16/17 Forward', type: 'Spa & Wellness', status: 'Relaxation ($)', reserved: null, icon: 'fa-spa', desc: 'World-class thermal suite featuring hydrotherapy pool, salt room, ice room, charcoal sauna, and ocean loungers.' },
      { name: 'Pulse Fitness Center', location: 'Deck 16 Forward', type: 'Gym & Fitness', status: 'Complimentary', reserved: null, icon: 'fa-dumbbell', desc: 'State-of-the-art Technogym cardio equipment, free weights, and spin studio with ocean views.' },
      { name: 'Salon at Mandara Spa', location: 'Deck 16 Forward', type: 'Beauty Salon', status: 'Salon ($)', reserved: null, icon: 'fa-scissors', desc: 'Full hair salon, barber shop, manicures, and pedicures.' }
    ]
  },
  {
    deck: 'Deck 8',
    title: 'Ocean Boulevard & Specialty Dining',
    highlight: '360° Waterfront Promenade, Infinity Pools & Key Specialty Dining',
    venues: [
      { name: 'Los Lobos', location: 'Deck 8 Aft', type: 'Specialty Mexican', status: 'Specialty ($)', reserved: 'Booked: Tue 11 Aug @ 19:00', icon: 'fa-pepper-hot', desc: 'Premium handcrafted Mexican: table-side fresh guacamole, carne asada, and artisanal margaritas.' },
      { name: 'Onda by Scarpetta', location: 'Deck 8 Mid', type: 'Specialty Italian', status: 'Specialty ($)', reserved: 'Booked: Sun 16 Aug @ 18:30', icon: 'fa-wine-glass', desc: 'High-end Italian seafood: signature Scarpetta spaghetti with tomato & basil, yellowtail crudo, braised short rib.' },
      { name: 'Indulge Food Hall', location: 'Deck 8 Aft', type: 'Global Food Hall', status: 'Complimentary', reserved: null, icon: 'fa-utensils', desc: 'Complimentary 11-station food hall: Seabode (seafood), Tamara (Indian tandoori), Noodle Shack, Q Texas BBQ, Tapas, Latin Grill & Coco’s desserts.' },
      { name: 'The Local Bar & Grill', location: 'Deck 8 Mid', type: '24/7 Pub Dining', status: 'Complimentary', reserved: null, icon: 'fa-beer-mug-empty', desc: '24/7 pub comfort food: classic fish & chips, burgers, buffalo wings, and draft beers.' },
      { name: 'Oceanwalk', location: 'Deck 8 Port/Starboard', type: 'Glass Bridge', status: 'Highlight', reserved: null, icon: 'fa-shoe-prints', desc: 'Glass-bottomed walkway suspended directly over the ocean for thrilling sea views.' },
      { name: 'Infinity Beach Pools', location: 'Deck 8 Aft', type: 'Infinity Pools', status: 'Highlight', reserved: null, icon: 'fa-water', desc: 'Twin infinity plunge pools positioned right at the ocean edge.' },
      { name: 'The Concourse', location: 'Deck 8 Starboard', type: 'Sculpture Garden', status: 'Highlight', reserved: null, icon: 'fa-palette', desc: 'Outdoor artwork walkway featuring multi-million-dollar interactive light & metal sculptures.' },
      { name: 'Soleil Bar', location: 'Deck 8 Aft', type: 'Sunset Lounge Bar', status: 'Bar', reserved: null, icon: 'fa-glass-cheers', desc: 'Outdoor aft bar with panoramic views over the ship’s wake.' }
    ]
  },
  {
    deck: 'Deck 7',
    title: 'Teppanyaki, Nightlife & Atrium',
    highlight: 'Hasuki Teppanyaki, Syd Norman’s Rock Club & Viva Theatre',
    venues: [
      { name: 'Hasuki', location: 'Deck 7 Aft', type: 'Japanese Teppanyaki', status: 'Specialty ($)', reserved: 'Booked: Sat 15 Aug @ 17:00', icon: 'fa-fire-burner', desc: 'Interactive Japanese hibachi grill show: flying egg tricks, chef spatula acrobatics, steak & teppan seafood.' },
      { name: 'Cagney’s Steakhouse', location: 'Deck 7 Aft', type: 'American Steakhouse', status: 'Specialty ($)', reserved: null, icon: 'fa-drumstick-bite', desc: 'NCL’s flagship American steakhouse: premium Angus beef cuts, jumbo lump crab cakes, and truffle fries.' },
      { name: 'Metropolitan Bar', location: 'Deck 7 Mid', type: 'Sustainable Eco-Bar', status: 'Bar', reserved: null, icon: 'fa-leaf', desc: 'NCL’s first eco-friendly bar serving sustainable zero-waste cocktails and bio-dynamic wines.' },
      { name: 'Belvedere Bar', location: 'Deck 7 Mid', type: 'Craft Cocktail Bar', status: 'Bar', reserved: null, icon: 'fa-martini-glass-citrus', desc: 'Sophisticated cocktail lounge featuring handcrafted spirits and modern mixology.' },
      { name: 'Syd Norman’s Pour House', location: 'Deck 7 Forward', type: 'Live Rock Club', status: 'Entertainment', reserved: null, icon: 'fa-guitar', desc: 'High-energy 1970s/80s rock club with a live house band performing classic rock hits.' },
      { name: 'Viva Theatre & Club', location: 'Decks 6, 7 & 8', type: 'Transformation Theater', status: 'Entertainment', reserved: null, icon: 'fa-masks-theater', desc: '3-story theater featuring Beetlejuice the Musical, converting into a multi-level Vegas nightclub!' },
      { name: 'Penrose Atrium', location: 'Decks 6, 7 & 8', type: '3-Story Atrium', status: 'Highlight', reserved: null, icon: 'fa-building', desc: 'Futuristic glass-walled atrium designed by Studio Dado with Starbucks coffee lounge.' },
      { name: 'Viva Casino', location: 'Deck 7 Mid', type: 'Casino', status: 'Entertainment', reserved: null, icon: 'fa-dice', desc: 'Full-service casino with slot machines, blackjack, roulette, and poker tables.' }
    ]
  },
  {
    deck: 'Deck 6',
    title: 'Main Dining Rooms & Penrose Atrium',
    highlight: 'Hudson’s & Commodore Room Main Dining Rooms, Starbucks & Guest Services',
    venues: [
      { name: 'Hudson’s Main Dining Room', location: 'Deck 6 Aft', type: 'Main Dining Room', status: 'Complimentary', reserved: null, icon: 'fa-utensils', desc: 'Elegant 270-degree floor-to-ceiling glass wall dining room with panoramic ocean views.' },
      { name: 'Commodore Room', location: 'Deck 6 Aft', type: 'Main Dining Room', status: 'Complimentary', reserved: null, icon: 'fa-wine-bottle', desc: 'Classic upscale main dining room serving multi-course rotational dinners.' },
      { name: 'Starbucks Atrium Coffee', location: 'Deck 6 Mid', type: 'Coffee Lounge', status: 'Starbucks ($ / FAS+ Included)', reserved: null, icon: 'fa-mug-hot', desc: 'Full-service Starbucks espresso bar in the heart of Penrose Atrium (included with Free at Sea Plus!).' },
      { name: 'Guest Services & Shore Excursions', location: 'Deck 6 Mid', type: 'Guest Desk', status: 'Services', reserved: null, icon: 'fa-headset', desc: '24/7 Guest Services reception desk, shore excursion booking desk & port info.' }
    ]
  },
  {
    deck: 'Decks 9–15',
    title: 'Guest Staterooms & Accommodations',
    highlight: 'Staterooms, Balconies & Suites (Cabin #64139255 Area)',
    venues: [
      { name: 'Family Balcony & Club Suites', location: 'Decks 9–15', type: 'Guest Cabins', status: 'Cabins', reserved: 'NCL Reservation #64139255', icon: 'fa-bed', desc: 'Spacious staterooms with private glass balconies, USB charging stations & modern bathrooms.' }
    ]
  },
  {
    deck: 'Deck 4 & 5',
    title: 'Gangway, Tender Boarding & Medical Center',
    highlight: 'Ship Disembarkation Gangway, Tender Pier & Medical Desk',
    venues: [
      { name: 'Ship Gangway & Tender Pier', location: 'Deck 4 Port / Starboard', type: 'Port Disembarkation', status: 'Gangway', reserved: null, icon: 'fa-door-open', desc: 'Primary gangway for stepping off the ship into European ports & boarding tender boats (Villefranche).' },
      { name: 'Medical Center', location: 'Deck 4 Mid', type: 'Medical Clinic', status: 'Services', reserved: null, icon: 'fa-kit-medical', desc: 'Fully equipped medical facility staffed by maritime doctors and nurses.' }
    ]
  }
];

let currentSelectedDeck = 'Deck 8';

function openDeckPlanModal(defaultDeck = 'Deck 8') {
  currentSelectedDeck = defaultDeck;

  let modalEl = document.getElementById('deck-plan-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'deck-plan-modal';
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-card tech-card" style="max-width: 840px; max-height: 88vh; overflow-y: auto; padding: 24px; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div>
          <span class="badge badge-warning" style="font-size: 11px; margin-bottom: 4px;">143,000 GT Prima Class Flagship</span>
          <h2 style="font-size: 22px; color: var(--sunset-gold); margin: 4px 0 0 0;">
            <i class="fa-solid fa-ship"></i> Norwegian Viva Interactive Deck Navigator
          </h2>
        </div>
        <button onclick="closeDeckPlanModal()" class="btn-close" style="background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0 8px;">&times;</button>
      </div>

      <!-- Sticky Cross-Deck Venue Search Bar -->
      <div style="margin-bottom: 16px; position: relative;">
        <div style="display: flex; align-items: center; background: rgba(15, 23, 42, 0.95); border: 1.5px solid var(--sunset-gold); border-radius: 10px; padding: 4px 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.4);">
          <i class="fa-solid fa-magnifying-glass" style="color: var(--sunset-gold); font-size: 15px; margin-right: 10px;"></i>
          <input type="text" id="deck-venue-search" oninput="filterDeckVenues(this.value)" placeholder="Search any ship venue (e.g. 'Los Lobos', 'Tapas', 'Go-Kart', 'Starbucks', 'Spa', '5700')..." style="background: none; border: none; color: #ffffff; width: 100%; padding: 10px 0; font-size: 13.5px; outline: none;" />
          <button onclick="clearVenueSearch()" id="clear-venue-search-btn" style="display: none; background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 18px; padding: 0 6px;">&times;</button>
        </div>
      </div>

      <!-- Deck Selector Tabs Bar -->
      <div id="deck-tabs-bar" style="background: rgba(15, 23, 42, 0.9); border: 1px solid var(--sunset-gold); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
        <div style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          Select Ship Deck to Inspect Layout & Reserved Dining Locations:
        </div>
        <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
          ${vivaDeckData.map(d => `
            <button onclick="switchDeck('${d.deck}')" id="deck-tab-${d.deck.replace(/[^a-zA-Z0-9]/g, '')}" class="btn btn-sm ${d.deck === currentSelectedDeck ? 'btn-primary' : 'btn-outline'}" style="font-weight: 700; padding: 8px 14px;">
              <i class="fa-solid fa-layer-group"></i> ${d.deck}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Dynamic Deck Content Container -->
      <div id="deck-content-container">
        <!-- Rendered by switchDeck() or filterDeckVenues() -->
      </div>

      <div style="text-align: right; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; margin-top: 20px;">
        <button onclick="closeDeckPlanModal()" class="btn btn-primary" style="padding: 10px 24px; font-weight: 700;">
          Close Deck Navigator <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  `;

  modalEl.style.display = 'flex';
  switchDeck(currentSelectedDeck);
}

function closeDeckPlanModal() {
  const modalEl = document.getElementById('deck-plan-modal');
  if (modalEl) modalEl.style.display = 'none';
}

function filterDeckVenues(query) {
  const q = query.trim().toLowerCase();
  const clearBtn = document.getElementById('clear-venue-search-btn');
  const tabsBar = document.getElementById('deck-tabs-bar');
  const container = document.getElementById('deck-content-container');

  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

  if (!q) {
    if (tabsBar) tabsBar.style.display = 'block';
    switchDeck(currentSelectedDeck);
    return;
  }

  // Hide tab buttons during active search
  if (tabsBar) tabsBar.style.display = 'none';

  const matches = [];

  // Check stateroom cabin match
  if ('5700'.includes(q) || '64139255'.includes(q) || 'cabin'.includes(q) || 'room'.includes(q) || 'stateroom'.includes(q)) {
    matches.push({
      deck: 'Deck 4 & 5',
      name: 'Stateroom Cabin #5700',
      location: 'Deck 5',
      type: 'Your Family Accommodation',
      status: 'Booked',
      reserved: 'NCL Res #64139255',
      icon: 'fa-door-closed',
      desc: 'Your family home base at sea! Comfortable stateroom on Deck 5 with convenient access to the gangway and lower deck venues.'
    });
  }

  // Search all decks and venues
  vivaDeckData.forEach(deckObj => {
    deckObj.venues.forEach(v => {
      const matchName = v.name.toLowerCase().includes(q);
      const matchLoc = v.location.toLowerCase().includes(q);
      const matchType = v.type.toLowerCase().includes(q);
      const matchDesc = v.desc.toLowerCase().includes(q);
      const matchStatus = v.status.toLowerCase().includes(q);
      const matchReserved = v.reserved && v.reserved.toLowerCase().includes(q);

      if (matchName || matchLoc || matchType || matchDesc || matchStatus || matchReserved) {
        matches.push({ ...v, deck: deckObj.deck });
      }
    });
  });

  if (!container) return;

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; background: rgba(15, 23, 42, 0.6); border: 1px dashed rgba(255,255,255,0.15); border-radius: 12px;">
        <i class="fa-solid fa-compass" style="font-size: 36px; color: var(--sunset-gold); margin-bottom: 12px;"></i>
        <h4 style="color: #ffffff; margin: 0 0 6px 0;">No Venues Found Matching "${query}"</h4>
        <p style="color: #94a3b8; font-size: 13px; margin: 0 0 14px 0;">Try searching for terms like "Mexican", "Go-Kart", "Spa", "Starbucks", "Pool", or "Deck 8".</p>
        <button onclick="clearVenueSearch()" class="btn btn-sm btn-outline">Clear Search Filter</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="background: rgba(255, 183, 3, 0.1); border: 1px solid var(--sunset-gold); border-radius: 10px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
      <span style="color: var(--sunset-gold); font-weight: 700; font-size: 14px;">
        <i class="fa-solid fa-magnifying-glass"></i> Found ${matches.length} matching venue${matches.length > 1 ? 's' : ''} across Norwegian Viva
      </span>
      <button onclick="clearVenueSearch()" class="btn btn-sm btn-outline" style="font-size: 11px;">Clear Search</button>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px;">
      ${matches.map(v => `
        <div style="background: ${v.reserved ? 'rgba(255, 183, 3, 0.1)' : 'rgba(15, 23, 42, 0.85)'}; border: 1.5px solid ${v.reserved ? 'var(--sunset-gold)' : 'rgba(255,255,255,0.12)'}; border-radius: 12px; padding: 14px; position: relative;">
          ${v.reserved ? `
            <div style="background: var(--sunset-gold); color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px 0 8px 0; position: absolute; top: 0; left: 0; text-transform: uppercase;">
              <i class="fa-solid fa-star"></i> ${v.reserved}
            </div>
            <div style="height: 12px;"></div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; gap: 8px;">
            <div>
              <strong style="color: #ffffff; font-size: 15px; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid ${v.icon}" style="color: ${v.reserved ? 'var(--sunset-gold)' : 'var(--primary)'};"></i> ${v.name}
              </strong>
              <small style="color: var(--sunset-gold); font-size: 11.5px; font-weight: 700;">
                <i class="fa-solid fa-layer-group"></i> ${v.deck} • <i class="fa-solid fa-location-dot"></i> ${v.location}
              </small>
            </div>
            <span class="badge ${v.status.includes('Specialty') || v.status.includes('Booked') ? 'badge-warning' : v.status.includes('Complimentary') ? 'badge-success' : 'badge-primary'}" style="font-size: 10px;">
              ${v.status}
            </span>
          </div>
          <p style="margin: 6px 0 10px 0; font-size: 12.5px; color: #e2e8f0; line-height: 1.45;">
            ${v.desc}
          </p>
          <button onclick="clearVenueSearch(); switchDeck('${v.deck}');" class="btn btn-sm btn-outline" style="width: 100%; font-size: 11px;">
            <i class="fa-solid fa-map-location-dot"></i> View Full ${v.deck} Plan Schematic
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function clearVenueSearch() {
  const searchInput = document.getElementById('deck-venue-search');
  if (searchInput) searchInput.value = '';
  filterDeckVenues('');
}

window.filterDeckVenues = filterDeckVenues;
window.clearVenueSearch = clearVenueSearch;

function switchDeck(deckName) {
  currentSelectedDeck = deckName;
  const deckObj = vivaDeckData.find(d => d.deck === deckName) || vivaDeckData[0];

  // Update tab highlights
  vivaDeckData.forEach(d => {
    const tabEl = document.getElementById(`deck-tab-${d.deck.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (tabEl) {
      tabEl.className = d.deck === deckName ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
    }
  });

  const container = document.getElementById('deck-content-container');
  if (!container) return;

  // Filter venues by Forward, Midship, and Aft sectors for the schematic map
  const forwardVenues = deckObj.venues.filter(v => v.location.toLowerCase().includes('forward') || v.location.toLowerCase().includes('bow'));
  const midVenues = deckObj.venues.filter(v => v.location.toLowerCase().includes('mid'));
  const aftVenues = deckObj.venues.filter(v => v.location.toLowerCase().includes('aft') || v.location.toLowerCase().includes('stern'));

  const unclassified = deckObj.venues.filter(v => !forwardVenues.includes(v) && !midVenues.includes(v) && !aftVenues.includes(v));
  if (unclassified.length > 0) {
    unclassified.forEach(v => midVenues.push(v));
  }

  const isCabinDeck = deckName === 'Deck 4 & 5';

  container.innerHTML = `
    <!-- Visual Diagrammatic Ship Deck Schematic -->
    <div class="deck-schematic-wrapper">
      <div class="deck-schematic-header">
        <span><i class="fa-solid fa-anchor"></i> Bow (Forward / Front)</span>
        <span>Norwegian Viva — ${deckObj.deck} Profile Schematic Diagram</span>
        <span>Stern (Aft / Rear) <i class="fa-solid fa-flag"></i></span>
      </div>

      <div class="deck-schematic-ship">
        <!-- FORWARD SECTOR -->
        <div class="deck-sector">
          <div class="sector-label"><i class="fa-solid fa-compass"></i> Forward (Bow)</div>
          ${forwardVenues.length > 0 ? forwardVenues.map(v => `
            <div class="schematic-venue-chip ${v.reserved ? 'reserved-chip' : ''}">
              <span><i class="fa-solid ${v.icon}"></i> ${v.name}</span>
              ${v.reserved ? '<i class="fa-solid fa-star" style="color:var(--sunset-gold);" title="Reserved"></i>' : ''}
            </div>
          `).join('') : '<div style="font-size:11px; color:#64748b; font-style:italic;">Stateroom Accommodation Area</div>'}
        </div>

        <!-- MIDSHIP SECTOR -->
        <div class="deck-sector">
          <div class="sector-label"><i class="fa-solid fa-arrows-left-right"></i> Midship</div>
          ${midVenues.length > 0 ? midVenues.map(v => `
            <div class="schematic-venue-chip ${v.reserved ? 'reserved-chip' : ''}">
              <span><i class="fa-solid ${v.icon}"></i> ${v.name}</span>
              ${v.reserved ? '<i class="fa-solid fa-star" style="color:var(--sunset-gold);" title="Reserved"></i>' : ''}
            </div>
          `).join('') : '<div style="font-size:11px; color:#64748b; font-style:italic;">Midship Elevators & Atrium</div>'}
        </div>

        <!-- AFT SECTOR & CABIN HIGHLIGHT -->
        <div class="deck-sector">
          <div class="sector-label"><i class="fa-solid fa-water"></i> Aft (Stern)</div>
          ${isCabinDeck ? `
            <div class="schematic-cabin-chip">
              <div style="font-weight: 800; font-size: 13px; color: #ffffff; display: flex; align-items: center; justify-content: space-between;">
                <span><i class="fa-solid fa-star" style="color: var(--sunset-gold);"></i> YOUR CABIN #5700</span>
                <span class="badge badge-warning" style="font-size: 9px; padding: 2px 6px;">BOOKED</span>
              </div>
              <div style="font-size: 11px; color: #f1f5f9; margin-top: 4px;">
                <strong>Deck 5</strong> • Stateroom
              </div>
              <div style="font-size: 10px; color: var(--sunset-gold); margin-top: 2px;">
                NCL Reservation #64139255
              </div>
            </div>
          ` : ''}

          ${aftVenues.length > 0 ? aftVenues.map(v => `
            <div class="schematic-venue-chip ${v.reserved ? 'reserved-chip' : ''}">
              <span><i class="fa-solid ${v.icon}"></i> ${v.name}</span>
              ${v.reserved ? '<i class="fa-solid fa-star" style="color:var(--sunset-gold);" title="Reserved"></i>' : ''}
            </div>
          `).join('') : (isCabinDeck ? '' : '<div style="font-size:11px; color:#64748b; font-style:italic;">Aft Staterooms & Ocean Views</div>')}
        </div>
      </div>
    </div>

    <!-- Deck Title Header Card -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
        <h3 style="color: var(--sunset-gold); margin: 0; font-size: 17px;"><i class="fa-solid fa-layer-group"></i> ${deckObj.deck}: ${deckObj.title}</h3>
        <span class="badge badge-info" style="font-size: 11px;">${deckObj.venues.length} Key Venues</span>
      </div>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1; line-height: 1.5;">${deckObj.highlight}</p>
    </div>

    <!-- Detailed Venue Cards Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px;">
      ${isCabinDeck ? `
        <div style="background: linear-gradient(135deg, rgba(255, 183, 3, 0.15), rgba(255, 107, 107, 0.15)); border: 2px solid var(--sunset-gold); border-radius: 12px; padding: 16px; position: relative;">
          <div style="background: var(--sunset-gold); color: #000; font-size: 10px; font-weight: 800; padding: 3px 10px; border-radius: 4px 0 8px 0; position: absolute; top: 0; left: 0; text-transform: uppercase;">
            <i class="fa-solid fa-star"></i> YOUR CONFIRMED ACCOMMODATION
          </div>
          <div style="height: 14px;"></div>
          <strong style="color: #ffffff; font-size: 17px; display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-door-closed" style="color: var(--sunset-gold);"></i> Stateroom Cabin #5700 (Deck 5)
          </strong>
          <div style="font-size: 12px; color: var(--sunset-gold); margin: 4px 0 8px 0; font-weight: 600;">
            <i class="fa-solid fa-location-dot"></i> Deck 5 • Stateroom (NCL Res #64139255)
          </div>
          <p style="margin: 0; font-size: 13px; color: #f8fafc; line-height: 1.5;">
            Your family home base at sea! Features a comfortable stateroom with convenient access to the gangway and lower deck venues.
          </p>
        </div>
      ` : ''}

      ${deckObj.venues.map(v => `
        <div style="background: ${v.reserved ? 'rgba(255, 183, 3, 0.08)' : 'rgba(15, 23, 42, 0.65)'}; border: 1.5px solid ${v.reserved ? 'var(--sunset-gold)' : 'rgba(255,255,255,0.08)'}; border-radius: 12px; padding: 14px; position: relative;">
          ${v.reserved ? `
            <div style="background: var(--sunset-gold); color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 4px 0 8px 0; position: absolute; top: 0; left: 0; text-transform: uppercase;">
              <i class="fa-solid fa-star"></i> ${v.reserved}
            </div>
            <div style="height: 12px;"></div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; gap: 8px;">
            <div>
              <strong style="color: #ffffff; font-size: 15px; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid ${v.icon}" style="color: ${v.reserved ? 'var(--sunset-gold)' : 'var(--primary)'};"></i> ${v.name}
              </strong>
              <small style="color: #94a3b8; font-size: 11.5px;"><i class="fa-solid fa-location-dot"></i> ${v.location}</small>
            </div>
            <span class="badge ${v.status.includes('Specialty') ? 'badge-warning' : v.status.includes('Complimentary') ? 'badge-success' : 'badge-primary'}" style="font-size: 10px;">
              ${v.status}
            </span>
          </div>
          <p style="margin: 6px 0 0 0; font-size: 12.5px; color: #e2e8f0; line-height: 1.45;">
            ${v.desc}
          </p>
        </div>
      `).join('')}
    </div>
  `;
}

window.openDeckPlanModal = openDeckPlanModal;
window.closeDeckPlanModal = closeDeckPlanModal;
window.switchDeck = switchDeck;


