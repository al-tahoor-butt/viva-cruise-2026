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
    transferInfo: 'Flight FR2242 (PNR: WTUR5S) MAN 17:45 ➔ BLQ 21:05. Hotel Del Borgo: Via Marco Emilio Lepido 195 (Booking #5007213355). 8-min taxi (~€20) from BLQ airport rank.',
    tags: ['Hotel Del Borgo', 'Flight FR2242', 'Pre-Cruise', 'Bologna'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Independent Fly-In & Airport Transfer",
      badgeClass: "badge-success",
      estCost: "€11/pax (Monorail) or ~€20 Taxi",
      logisticsSummary: "Ryanair Flight FR2242 lands at BLQ Airport at 21:05. Exit terminal directly to the official taxi rank for an 8-min cab (~€20) to Hotel Del Borgo (Via Marco Emilio Lepido 195). Alternatively, Marconi Express monorail runs every 7 mins directly to Bologna Centrale (€11/pax).",
      timedItinerary: [
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
        "10:45 AM — Walk the Medieval City Walls before peak afternoon heat (1.5–2 hours, panoramic views).",
        "01:00 PM — Seafood street food lunch at Barba (octopus burgers & fried calamari cones).",
        "02:30 PM — Option A: Guided Family Sea Kayaking tour to Lokrum Island & Betina Cave • Option B: Dubrovnik Cable Car (€27/pax) to Mount Srđ.",
        "05:30 PM — Stroll Stradun limestone promenade, craft gelato at Peppino's, taxi back to Gruž Port.",
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
    highlight: 'Stari Bar Fortress Ruins & Lake Skadar Boat Excursion',
    adultsActivities: 'Explore Stari Bar ancient cliffside fortress and 2,000-year-old olive trees.',
    kidsActivities: 'Lake Skadar boat ride through lily pads with freshwater swim stops, or King’s Beach swim.',
    transferInfo: 'Ship docks at Port of Bar. Hire an official licensed port taxi driver at pier for a 5-hour private tour (~€60-80 total for family). Route: Stari Bar Fortress -> Stara Maslina -> Virpazar (Lake Skadar). Ship docked 08:00 – 18:00.',
    tags: ['Fortress', 'Lake Skadar', 'Nature', 'Montenegro'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Private Licensed Port Taxi Driver",
      badgeClass: "badge-success",
      estCost: "€60–80 total half-day hire",
      logisticsSummary: "Disembark at Port of Bar and hire a licensed port taxi driver at the pier for a half-day custom tour (€60–80 total). Driver takes you to Stari Bar Fortress (15 mins), Stara Maslina Olive Tree (5 mins), and Virpazar on Lake Skadar (25 mins) for a private wooden boat cruise.",
      timedItinerary: [
        "08:00 AM — Ship docks at Port of Bar.",
        "08:30 AM — Disembark ship; hire an official port taxi driver for half-day tour.",
        "09:00 AM — Explore Stari Bar cliffside fortress ruins & Ottoman cobblestone bazaar.",
        "10:30 AM — Visit Stara Maslina (2,400-year-old Roman olive tree).",
        "11:30 AM — Authentic Balkan lunch at Konoba Bedem (ćevapi & Montenegrin cheese pies).",
        "01:30 PM — Drive 25 mins to Virpazar for 2-hour wooden boat cruise on Lake Skadar (lily pads & pelicans) OR swim at King's Beach.",
        "04:30 PM — Return to Port of Bar terminal.",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
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
    port: 'Amalfi Coast (Salerno), Italy',
    arrive: '7:00 AM',
    depart: '6:00 PM',
    specialtyDining: null,
    lat: 40.6780,
    lng: 14.7650,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Positano_from_the_sea.jpg',
    highlight: 'Coastal Speedboat Excursion to Positano & Amalfi',
    adultsActivities: 'Limoncello tasting, cliffside views, scenic lemon groves of Positano.',
    kidsActivities: 'Speedboat ride along the coastline with cave swim stops & authentic Positano gelato.',
    transferInfo: 'Ship docks in Salerno (Molo Manfredi). Walk 10 mins along seaside promenade to TravelMar Ferry Dock (Piazza della Concordia). Board TravelMar High-Speed Ferry (€15/pax, 70 mins) directly to Positano. Ship docked 07:00 – 18:00.',
    tags: ['Positano', 'Amalfi Coast', 'Speedboat', 'Cliff Swim'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY TravelMar High-Speed Ferry",
      badgeClass: "badge-success",
      estCost: "€120 total (4 pax)",
      logisticsSummary: "Never take a road bus or car on the Amalfi Coast road in August (3-hour traffic jams!). Walk 10 mins from Salerno Molo Manfredi pier to Piazza della Concordia ferry dock. Board TravelMar High-Speed Ferry (€15/pax, 70 mins, departs 08:40 AM) directly to Positano. Return via 25-min ferry to Amalfi Town.",
      timedItinerary: [
        "07:00 AM — Ship docks in Salerno (Molo Manfredi).",
        "07:45 AM — Disembark ship; walk 10 mins along seaside promenade to Piazza della Concordia ferry dock.",
        "08:40 AM — Board TravelMar high-speed ferry directly to Positano (arrive 09:50 AM, zero traffic!).",
        "10:00 AM — Swim at Spiaggia Grande beach in Positano & explore cliffside stairways.",
        "12:30 PM — Beachfront lunch at Chez Black.",
        "01:30 PM — Board 25-min TravelMar ferry from Positano to Amalfi Town.",
        "02:00 PM — Visit Amalfi Cathedral (Duomo di Sant'Andrea) & try lemon granita at Pasticceria Pansa.",
        "03:40 PM — Board ferry from Amalfi back to Salerno (arrive 04:15 PM).",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
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
    port: 'Livorno (Florence/Pisa), Italy',
    arrive: '7:00 AM',
    depart: '10:00 PM',
    specialtyDining: {
      restaurant: 'Onda by Scarpetta',
      time: '6:30 PM (18:30)',
      cuisine: 'Upscale Italian Seafood & Signature Pasta',
      icon: 'fa-wine-glass'
    },
    lat: 43.7228,
    lng: 10.3966,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg',
    highlight: 'Pisa & Florence Day Excursion & Onda by Scarpetta (18:30)',
    adultsActivities: 'Pisa photo-op, Florence Duomo stroll, returning for gourmet dinner at Onda by Scarpetta (18:30).',
    kidsActivities: 'Climb Giotto’s Campanile tower, forced-perspective photo holding up Pisa tower, Boboli Gardens.',
    transferInfo: 'Take Livorno Port Shuttle Bus (€5/pax) to Piazza Grande + Bus #1 to Livorno Centrale. Board Trenitalia train to Pisa Centrale (15 mins, €3/pax). Train from Pisa to Florence S.M. Novella (50 mins). Direct return train to Livorno Centrale (1h15m). Ship docked 07:00 – 22:00 (Late Departure).',
    tags: ['Leaning Tower', 'Onda Scarpetta 18:30', 'Florence', 'Duomo', 'Tuscany'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY Trenitalia Train",
      badgeClass: "badge-success",
      estCost: "€60 total (4 pax)",
      logisticsSummary: "Take Livorno Port Shuttle Bus (€5/pax) to Piazza Grande + Bus #1 to Livorno Centrale. Board Trenitalia train to Pisa Centrale (15 mins, €3/pax). After Pisa Tower photo-op, board train to Florence S.M. Novella (50 mins). Direct return train to Livorno Centrale (1h15m). Late 10:00 PM departure gives plenty of cushion to return for Onda by Scarpetta (18:30).",
      timedItinerary: [
        "07:00 AM — Ship docks at Livorno Porto Mediceo.",
        "07:30 AM — Take Livorno port shuttle bus (€5/pax) to Livorno Centrale station.",
        "08:12 AM — Regional train to Pisa Centrale (15 mins); walk 15 mins to Leaning Tower.",
        "08:30 AM — Leaning Tower of Pisa photo-op & Cathedral square.",
        "10:30 AM — Regional train from Pisa to Florence S.M. Novella (50 mins).",
        "11:30 AM — Explore Duomo square, Piazza della Signoria, Ponte Vecchio & Mercato Nuovo.",
        "01:30 PM — Tuscan Schiacciata sandwiches at All'Antico Vinaio (Via dei Neri 65).",
        "04:00 PM — Board direct return train from Florence S.M.N. to Livorno Centrale (1 hr 15 mins).",
        "05:30 PM — Taxi/shuttle back to ship.",
        "06:30 PM — Specialty Dining: Dinner at Onda by Scarpetta (Booked 18:30).",
        "09:15 PM — All-Aboard onboard Viva (Late departure ship sails 10:00 PM)."
      ],
      diningSpots: [
        { name: "Onda by Scarpetta (Deck 8 Mid)", type: "Specialty Dining (Booked 18:30)", note: "High-end Italian seafood specialty restaurant: iconic Scarpetta spaghetti, yellowtail crudo & braised short rib." },
        { name: "All'Antico Vinaio (Florence)", type: "Lunch", note: "World-famous warm Tuscan Schiacciata flatbread sandwiches." }
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
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Cannes_harbour.jpg',
    highlight: 'Villefranche Bay Watersports & Nice Promenade Ride',
    adultsActivities: 'Stroll Old Town Nice (Vieux Nice), sample Socca chickpea crepes.',
    kidsActivities: 'Rent paddleboards/snorkels in Villefranche turquoise bay, or ride e-scooters along Promenade des Anglais.',
    transferInfo: 'Ship anchors in Villefranche-sur-Mer bay (Tender Port). Take early tender boat to Villefranche pier (15 mins). Walk 5 mins up to Gare de Villefranche-sur-Mer station and board TER regional train to Nice Ville (10 mins, €2.50/pax). Ship anchored 07:00 – 16:30.',
    tags: ['French Riviera', 'Villefranche', 'Paddleboarding', 'Nice'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY TER Train & Tender",
      badgeClass: "badge-success",
      estCost: "€30 total (4 pax)",
      logisticsSummary: "Ship anchors in Villefranche-sur-Mer bay (Tender Port). Take early tender boat to Villefranche pier (15 mins). Walk 5 mins up to Gare de Villefranche-sur-Mer station and board TER regional train to Nice Ville (10 mins, €2.50/pax). Return to Villefranche for afternoon bay swimming.",
      timedItinerary: [
        "07:00 AM — Ship anchors in Villefranche bay.",
        "08:15 AM — Board early tender boat from Viva to Villefranche harbor (15 mins).",
        "08:45 AM — Walk 5 mins to Gare de Villefranche station; board 10-min TER train to Nice Ville.",
        "09:15 AM — Walk Vieux Nice (Old Town), Cours Saleya market & Promenade des Anglais.",
        "11:30 AM — Take train back to Villefranche. Swim & paddleboard in turquoise Villefranche bay.",
        "01:30 PM — Authentic Socca chickpea crepe lunch at Chez Pipo.",
        "03:30 PM — Flower gelato at Amorino, walk to tender pier.",
        "03:45 PM — Last Tender / All-Aboard onboard Viva (Ship sails 4:30 PM)."
      ],
      diningSpots: [
        { name: "Chez Pipo (Nice Old Town)", type: "Lunch", note: "Authentic wood-fired Socca (crispy chickpea crepes) & Niçoise salad." },
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
    specialtyDining: {
      restaurant: 'Palomar',
      time: '6:00 PM (18:00)',
      cuisine: 'Mediterranean Seafood Specialty',
      icon: 'fa-fish'
    },
    lat: 39.5696,
    lng: 2.6502,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Cathedral_of_Palma_de_Mallorca.jpg',
    highlight: 'Palma Old Town Exploration & Palomar Specialty Dining (18:00)',
    adultsActivities: 'Palma Cathedral (La Seu) visit, Old Town strolling, returning for dinner at Palomar (18:00).',
    kidsActivities: 'Bellver Castle circular fortress or Palma Bay beach swim before dinner.',
    transferInfo: 'Ship docks at Estació Marítima. Take official taxi rank cab (€12 flat rate) or EMT Bus #1 directly to Palma Cathedral (La Seu). Walk Old Town alleys, visit Mercat de l\'Olivar indoor market. Ship docked 13:00 – 21:00.',
    tags: ['Palma', 'Palomar 18:00', 'Majorca', 'Cathedral', 'La Seu'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY Taxi / Bus #1",
      badgeClass: "badge-success",
      estCost: "€30 total (4 pax)",
      logisticsSummary: "Ship docks at Estació Marítima. Walk out to taxi rank for a 10-min ride (€12 flat rate) or EMT Bus #1 directly to Palma Cathedral (La Seu). Walk Old Town alleys, visit Mercat de l'Olivar indoor market.",
      timedItinerary: [
        "01:00 PM — Ship docks in Palma (Estació Marítima).",
        "01:20 PM — Disembark & take taxi (€12) or EMT Bus #1 to Old Town.",
        "01:45 PM — Tapas & sangria at Mercat de l'Olivar indoor market.",
        "03:00 PM — Explore Palma Cathedral (La Seu) & Royal Palace of La Almudaina.",
        "04:30 PM — Sample traditional Mallorcan Ensaimada pastry at Ca'n Joan de s'Aigo.",
        "05:30 PM — Taxi back to cruise terminal.",
        "06:00 PM — Specialty Dining: Dinner at Palomar (Booked 18:00).",
        "08:15 PM — All-Aboard onboard Viva (Ship sails 9:00 PM)."
      ],
      diningSpots: [
        { name: "Palomar (Deck 17 Mid)", type: "Specialty Dining (Booked 18:00)", note: "Exquisite Mediterranean seafood restaurant with panoramic ocean views: salt-crusted sea bass & grilled octopus." },
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
    adultsActivities: 'Disembark Norwegian Viva at 08:30 AM, transfer to Barcelona Airport (BCN).',
    kidsActivities: 'Souvenir shopping at BCN airport before flight home.',
    transferInfo: '08:30 Disembark ➔ 09:15 Official Taxi rank (~€35-40, 25 mins) to BCN Airport Terminal 2 ➔ 10:35 Check-in ➔ 12:35 Flight FR6597 (PNR: F8YGQR) ➔ 14:10 Arrive Manchester (MAN).',
    tags: ['Disembarkation', 'Barcelona', 'Inbound Flight', 'Ryanair FR6597'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY Airport Taxi / Aerobús",
      badgeClass: "badge-success",
      estCost: "€40 total (Taxi)",
      logisticsSummary: "Disembark Norwegian Viva at 08:30 AM at Port of Barcelona (Moll Adossat). Take official taxi rank cab directly to Barcelona Airport (BCN) Terminal 2 (~€35-40, 25 mins) for Ryanair Flight FR6597.",
      timedItinerary: [
        "06:30 AM — Ship docks at Port of Barcelona.",
        "07:30 AM — Family breakfast onboard Norwegian Viva.",
        "08:30 AM — Disembark ship & collect checked luggage in terminal.",
        "09:15 AM — Take official taxi (~€35–40) or Aerobús to BCN Airport Terminal 2.",
        "10:35 AM — Check-in & security for Ryanair flight FR6597.",
        "12:35 PM — Flight FR6597 departs Barcelona for Manchester (MAN) (PNR: F8YGQR).",
        "02:10 PM — Land at Manchester Airport (MAN) Terminal 3!"
      ],
      diningSpots: [
        { name: "Cervecería Catalana (Carrer de Mallorca, 236)", type: "Tapas", note: "Incredible Spanish tapas: honey-drizzled fried eggplant, garlic prawns & beef tenderloin skewers." },
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
    <div class="day-content-grid" style="grid-template-columns: 1fr 220px; gap: 20px;">
      <div>
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

// Onboard Wi-Fi Router & Free at Sea Plus Strategy Modal
function openWifiTechModal() {
  let modalEl = document.getElementById('wifi-tech-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'wifi-tech-modal';
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-card tech-card" style="max-width: 720px; max-height: 85vh; overflow-y: auto; padding: 24px; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
        <div>
          <span class="badge badge-warning" style="font-size: 11px; margin-bottom: 4px;">NCL Technical Strategy</span>
          <h2 style="font-size: 20px; color: var(--sunset-gold); margin: 4px 0 0 0;">
            <i class="fa-solid fa-wifi"></i> Free at Sea Plus & GL.iNet Router Guide
          </h2>
        </div>
        <button onclick="closeWifiTechModal()" class="btn-close" style="background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0 8px;">&times;</button>
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

      <!-- Section 2: GL.iNet Router Stealth Mode Guide -->
      <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid #38bdf8; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <h3 style="color: #38bdf8; font-size: 16px; margin: 0 0 10px 0;">
          <i class="fa-solid fa-user-ninja"></i> 2. GL.iNet Travel Router "Stealth Mode" Technical Setup
        </h3>

        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #e2e8f0;">
          <li style="background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
            <strong style="color: #38bdf8;"><i class="fa-solid fa-clone"></i> Step 1: MAC Address Cloning (Essential)</strong><br>
            Log your phone into NCL Wi-Fi portal. Go to GL.iNet Admin (<code>192.168.8.1</code>) ➔ <em>Network</em> ➔ <em>MAC Clone</em> ➔ Clone your phone's MAC. Disconnect phone Wi-Fi, then connect GL.iNet to NCL in <strong>Repeater Mode</strong>.
          </li>
          <li style="background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
            <strong style="color: #38bdf8;"><i class="fa-solid fa-shield-halved"></i> Step 2: Fix IP TTL = 64 (Bypass DPI Router Detection)</strong><br>
            By default, routers decrease packet TTL by 1, exposing downstream devices. In GL.iNet admin (v4+ firmware), go to <em>Firewall</em> ➔ <em>Custom Rules / TTL Override</em> and set outgoing TTL to fixed <strong>64</strong> (or run <code>iptables -t mangle -A POSTROUTING -j TTL --ttl-set 64</code>).
          </li>
          <li style="background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
            <strong style="color: #38bdf8;"><i class="fa-solid fa-eye-slash"></i> Step 3: Hostname Masking & Cabin Discretion</strong><br>
            Rename router hostname from <code>GL-AXT1800</code> to <code>iPhone</code> or <code>Android-Device</code>. Set Wi-Fi TX Power to <em>Medium/Low</em> so the signal stays inside Cabin #64139255.
          </li>
          <li style="background: rgba(255,255,255,0.03); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
            <strong style="color: #38bdf8;"><i class="fa-solid fa-gauge-high"></i> Step 4: Rate Limiting & Performance Realities</strong><br>
            NCL Starlink rate-limits per MAC address (~5–10 Mbps). All connected family devices will share this bandwidth pipe, which is ample for messaging, browsing, emails, and social media.
          </li>
        </ul>
      </div>

      <div style="text-align: right; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;">
        <button onclick="closeWifiTechModal()" class="btn btn-primary" style="padding: 10px 24px; font-weight: 700;">
          Close Technical Guide <i class="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  `;

  modalEl.style.display = 'flex';
}

function closeWifiTechModal() {
  const modalEl = document.getElementById('wifi-tech-modal');
  if (modalEl) modalEl.style.display = 'none';
}

window.openWifiTechModal = openWifiTechModal;
window.closeWifiTechModal = closeWifiTechModal;

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
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div>
          <span class="badge badge-warning" style="font-size: 11px; margin-bottom: 4px;">143,000 GT Prima Class Flagship</span>
          <h2 style="font-size: 22px; color: var(--sunset-gold); margin: 4px 0 0 0;">
            <i class="fa-solid fa-ship"></i> Norwegian Viva Interactive Deck Navigator
          </h2>
        </div>
        <button onclick="closeDeckPlanModal()" class="btn-close" style="background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; padding: 0 8px;">&times;</button>
      </div>

      <!-- Deck Selector Tabs Bar -->
      <div style="background: rgba(15, 23, 42, 0.9); border: 1px solid var(--sunset-gold); border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
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
        <!-- Rendered by switchDeck() -->
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

function switchDeck(deckName) {
  currentSelectedDeck = deckName;
  const deckObj = vivaDeckData.find(d => d.deck === deckName) || vivaDeckData[0];

  // Update tab highlights
  vivaDeckData.forEach(d => {
    const tabEl = document.getElementById(`deck-tab-${d.deck.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (tabEl) {
      if (d.deck === deckName) {
        tabEl.className = 'btn btn-sm btn-primary';
      } else {
        tabEl.className = 'btn btn-sm btn-outline';
      }
    }
  });

  const container = document.getElementById('deck-content-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
        <h3 style="color: var(--sunset-gold); margin: 0; font-size: 17px;"><i class="fa-solid fa-layer-group"></i> ${deckObj.deck}: ${deckObj.title}</h3>
        <span class="badge badge-info" style="font-size: 11px;">${deckObj.venues.length} Key Venues</span>
      </div>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1; line-height: 1.5;">${deckObj.highlight}</p>
    </div>

    <!-- Venue Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px;">
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


