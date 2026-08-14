import re

app_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

new_day5 = '''    port: 'Salerno ➔ Pompeii Ruins',
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
        "02:30 PM — Realized the mistake in Poppiano. Mild panic ensues regarding the ship\\'s 5:15 PM All-Aboard time.",
        "02:45 PM — Stressful scramble to find an available taxi in Poppiano to race back to Salerno.",
        "03:45 PM — Arrived back in Salerno port. Safely onboard the Viva comfortably in time!",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Mercato Pompeiano", type: "Lunch", note: "Grabbed lunch before the transit chaos unfolded." }
      ]
    }'''

pattern5 = re.compile(r"port:\s*'Salerno ➔ Pompeii Ruins'.*?\}\n  \},", re.DOTALL)
app_content = pattern5.sub(new_day5 + '\n  },', app_content)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
