import re

# Update index.html
html_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace(
    'Tue 18 Aug (18:00):</strong> Palomar',
    'Tue 18 Aug (17:30):</strong> Palomar'
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

# Update app.js
app_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

new_day9 = '''    port: 'Palma de Majorca, Spain',
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
    transferInfo: 'Ship docks at Estació Marítima. Take official taxi rank cab (€12 flat rate) or EMT Bus #1 directly to Palma Cathedral (La Seu). Walk Old Town alleys, visit Mercat de l\\'Olivar indoor market. Ship docked 13:00 – 21:00.',
    tags: ['Palma', 'Palomar 17:30', 'Escape Room 18:45', 'Cathedral'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy",
      logisticsMode: "DIY Taxi / Bus #1",
      badgeClass: "badge-success",
      estCost: "€30 total (4 pax)",
      logisticsSummary: "Ship docks at Estació Marítima. Walk out to taxi rank for a 10-min ride (€12 flat rate) or EMT Bus #1 directly to Palma Cathedral (La Seu). Walk Old Town alleys, visit Mercat de l\\'Olivar indoor market. Return early for dinner and Escape Room.",
      timedItinerary: [
        "01:00 PM — Ship docks in Palma (Estació Marítima).",
        "01:20 PM — Disembark & take taxi (€12) or EMT Bus #1 to Old Town.",
        "01:45 PM — Tapas & sangria at Mercat de l\\'Olivar indoor market.",
        "03:00 PM — Escape the heat inside the massive Palma Cathedral (La Seu) & Royal Palace.",
        "04:00 PM — Relax in the air-conditioned Ca\\'n Joan de s\\'Aigo with a cold drink and Mallorcan Ensaimada pastry.",
        "05:00 PM — Quick taxi back to cruise terminal to freshen up before dinner.",
        "05:30 PM — Specialty Dining: Dinner at Palomar (Booked 17:30).",
        "06:45 PM — Family Activity: Escape Room Pearl onboard (Booked 18:45).",
        "08:15 PM — All-Aboard onboard Viva (Ship sails 9:00 PM)."
      ],
      diningSpots: [
        { name: "Palomar (Deck 17 Mid)", type: "Specialty Dining (Booked 17:30)", note: "Exquisite Mediterranean seafood restaurant with panoramic ocean views: salt-crusted sea bass & grilled octopus." },
        { name: "Mercat de l\\'Olivar", type: "Tapas Lunch", note: "Vibrant indoor market with fresh grilled prawns & Jamón Ibérico." }
      ]
    }'''

pattern9 = re.compile(r"port:\s*'Palma de Majorca, Spain'.*?\}\n  \},", re.DOTALL)
app_content = pattern9.sub(new_day9 + '\n  },', app_content)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
