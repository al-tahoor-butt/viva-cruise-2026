import re

# 1. Update index.html
html_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Replacing Onda with Split
html_content = re.sub(
    r'<li><i class="fa-solid fa-wine-glass"[^>]+>\s*<strong[^>]+>Sun 16 Aug \(18:30\):</strong>\s*Onda by Scarpetta</li>',
    '<li><i class="fa-solid fa-pepper-hot" style="color: var(--sunset-gold); width: 16px;"></i> <strong style="display:inline; color: var(--sunset-gold);">Sun 16 Aug (18:30):</strong> Split: Los Lobos / Nama Sushi</li>',
    html_content
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

# 2. Update app.js
app_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

new_day7 = '''    port: 'Livorno ➔ Pisa',
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
      logisticsSummary: "Dodging the intense heat of Florence, we are doing a quick strike on Pisa. Take the port shuttle and bus/taxi to Livorno Centrale. The Trenitalia Regional train to Pisa Centrale takes only 15-20 minutes. From there, it\\'s a flat 20-minute walk (or quick bus) to the Leaning Tower. Get in, get the iconic photos, grab an early lunch, and escape back to the glorious air-conditioning of the ship by early afternoon.<br><br><b>Google Maps Route Navigator:</b><br><a href=\\"https://www.google.com/maps/dir/?api=1&origin=Livorno+Centrale&destination=Leaning+Tower+of+Pisa&travelmode=transit\\" target=\\"_blank\\" class=\\"btn btn-sm btn-primary\\" style=\\"margin-top: 8px; text-decoration: none;\\"><i class=\\"fa-solid fa-map-location-dot\\"></i> Open Google Maps Route</a>",
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
    }'''

app_content = re.sub(r"port:\s*'Livorno \(Florence/Pisa\), Italy'.*?\}\n  \},", new_day7 + '\n  },', app_content, flags=re.DOTALL)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
