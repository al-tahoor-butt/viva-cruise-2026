import re

app_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix Layout Clipping (grid to flexbox)
content = content.replace(
    '<div class="day-content-grid" style="grid-template-columns: 1fr 220px; gap: 20px;">',
    '<div class="day-content-grid" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">'
)
content = content.replace(
    '<div>\n        <div class="activity-section"',
    '<div style="flex: 1 1 280px;">\n        <div class="activity-section"'
)
content = content.replace(
    '<div class="weather-badge-box" style="position: relative;">',
    '<div class="weather-badge-box" style="flex: 0 0 220px; position: relative;">'
)

# 2. Update Day 7
day7 = '''    port: 'Livorno (Florence/Pisa), Italy',
    arrive: '7:00 AM',
    depart: '10:00 PM',
    specialtyDining: {
      restaurant: 'Onda by Scarpetta',
      time: '6:30 PM (18:30)',
      cuisine: 'Modern Italian Seafood',
      icon: 'fa-wine-glass'
    },
    lat: 43.5485,
    lng: 10.3229,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Florence_View_from_Piazzale_Michelangelo.jpg',
    highlight: 'Florence DIY Train Trip & Onda by Scarpetta (18:30)',
    adultsActivities: 'Walk Florence Duomo square, Ponte Vecchio, return for 18:30 dinner at Onda.',
    kidsActivities: 'Pisa Leaning Tower photo-op or authentic Tuscan gelato hunt in Florence.',
    transferInfo: 'Take port shuttle/taxi to Livorno Centrale. Board Trenitalia Regional to Firenze S.M. Novella (Platforms 4/5, ~1hr 20m).',
    tags: ['Florence', 'Pisa', 'Trenitalia', 'Onda 18:30'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "Trenitalia Regional Train",
      badgeClass: "badge-success",
      estCost: "€20 total (return train per pax)",
      logisticsSummary: "Get off the ship early. Take the port shuttle to Piazza Municipio, then a quick bus/taxi to Livorno Centrale. Buy tickets on the Trenitalia App or at the green kiosks. Trains to Firenze S.M. Novella usually depart from Platform 4 or 5 and take 1h 20m.<br><br><b>Google Maps Route Navigator:</b><br><a href=\\"https://www.google.com/maps/dir/?api=1&origin=Livorno+Centrale&destination=Firenze+S.M.+Novella&travelmode=transit\\" target=\\"_blank\\" class=\\"btn btn-sm btn-primary\\" style=\\"margin-top: 8px; text-decoration: none;\\"><i class=\\"fa-solid fa-map-location-dot\\"></i> Open Google Maps Route</a><br><br><b>Train Return Options (Beat the Heat):</b><br>• 14:00 (Arr Livorno 15:20)<br>• 14:28 (Arr Livorno 15:52)<br>• 15:00 (Arr Livorno 16:20)<br>• 15:28 (Arr Livorno 16:52)",
      timedItinerary: [
        "07:00 AM — Ship docks in Livorno.",
        "07:45 AM — Disembark, take port shuttle to Piazza Municipio & taxi/bus to Livorno Centrale.",
        "08:30 AM — Board Trenitalia Regional train to Florence S.M. Novella (or stop at Pisa Centrale first).",
        "10:00 AM — Arrive in Florence. Explore Duomo square and Ponte Vecchio in the shade.",
        "01:00 PM — Grab Tuscan Schiacciata sandwiches at All'Antico Vinaio and eat in a shaded piazza.",
        "02:30 PM — Board direct return train from Florence S.M.N. to Livorno Centrale early to beat the heat exhaustion.",
        "04:00 PM — Taxi/shuttle back to ship.",
        "06:30 PM — Specialty Dining: Dinner at Onda by Scarpetta (Booked 18:30).",
        "09:15 PM — All-Aboard onboard Viva (Late departure ship sails 10:00 PM)."
      ],
      diningSpots: [
        { name: "All'Antico Vinaio (Florence)", type: "Lunch", note: "Legendary massive Tuscan Schiacciata sandwiches. Worth the hype." },
        { name: "Onda by Scarpetta (Deck 8 Aft)", type: "Specialty Dining (Booked 18:30)", note: "Modern Italian with outdoor Ocean Boulevard seating. Yellowtail crudo & short rib ravioli." }
      ]
    }'''
content = re.sub(r"port:\s*'Livorno \(Florence/Pisa\), Italy'.*?\}\n  \},", day7 + '\n  },', content, flags=re.DOTALL)

# 3. Update Day 8
day8 = '''    port: 'Nice (Villefranche), France',
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
      logisticsSummary: "Take an early tender boat to the Villefranche pier. Walk 5 minutes up the hill to the Gare de Villefranche-sur-Mer. Buy tickets on the SNCF Connect app or at the red SNCF machines. Take any Westbound train (Platform usually labelled 'Direction Nice/Cannes'). It's only a 6-minute scenic ride to Nice Ville.<br><br><b>Google Maps Route Navigator:</b><br><a href=\\"https://www.google.com/maps/dir/?api=1&origin=Gare+de+Villefranche-sur-Mer&destination=Vieux+Nice&travelmode=transit\\" target=\\"_blank\\" class=\\"btn btn-sm btn-primary\\" style=\\"margin-top: 8px; text-decoration: none;\\"><i class=\\"fa-solid fa-map-location-dot\\"></i> Open Google Maps Route</a><br><br><b>Train Return Options (Direction Monaco/Menton):</b><br>• Trains run every 15 to 30 minutes all afternoon. Just jump on any Eastbound TER train from Nice Ville back to Villefranche-sur-Mer.",
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
    }'''
content = re.sub(r"port:\s*'Nice \(Villefranche\), France'.*?\}\n  \},", day8 + '\n  },', content, flags=re.DOTALL)

# 4. Update Day 9
day9 = '''    port: 'Palma de Majorca, Spain',
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
      logisticsSummary: "The ship docks at Estació Marítima. Walk right outside the terminal and board EMT Bus #1. You can pay with exact cash or tap your contactless card directly on the bus. Take it to the Cathedral or Plaça d'Espanya. Alternatively, the official taxi rank is right there with a ~€12 flat rate to the center.<br><br><b>Google Maps Route Navigator:</b><br><a href=\\"https://www.google.com/maps/dir/?api=1&origin=Estacio+Maritima+Palma&destination=Catedral+de+Mallorca&travelmode=transit\\" target=\\"_blank\\" class=\\"btn btn-sm btn-primary\\" style=\\"margin-top: 8px; text-decoration: none;\\"><i class=\\"fa-solid fa-map-location-dot\\"></i> Open Google Maps Route</a><br><br><b>Return Options:</b><br>• The EMT Bus #1 runs continuous loops. For a quick return, grab a taxi from any major rank (like Passeig d'es Born) directly back to Estació Marítima.",
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
    }'''
content = re.sub(r"port:\s*'Palma de Majorca, Spain'.*?\}\n  \},", day9 + '\n  },', content, flags=re.DOTALL)

# 5. Update Day 10
day10 = '''    port: 'Barcelona, Spain ➔ Manchester, UK',
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
      logisticsSummary: "With a 12:35 PM flight out of BCN El Prat, do not risk the T3 Portbus to Columbus Monument followed by the Aerobus. With 4 people and luggage, the absolute most efficient method is to join the official taxi rank right outside your Moll Adossat terminal. The ride to BCN Airport takes about 25 minutes and usually costs a flat/metered rate of €39. Target arriving at the airport by 10:00 AM.<br><br><b>Google Maps Route Navigator:</b><br><a href=\\"https://www.google.com/maps/dir/?api=1&origin=Moll+Adossat+Barcelona&destination=Barcelona+El+Prat+Airport&travelmode=driving\\" target=\\"_blank\\" class=\\"btn btn-sm btn-primary\\" style=\\"margin-top: 8px; text-decoration: none;\\"><i class=\\"fa-solid fa-map-location-dot\\"></i> Open Google Maps Route</a>",
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
    }'''
content = re.sub(r"port:\s*'Barcelona.*?\];", day10 + '\n  }\n];', content, flags=re.DOTALL)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(content)
