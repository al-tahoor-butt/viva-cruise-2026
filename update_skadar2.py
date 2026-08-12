import re

app_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

new_day3 = '''    highlight: 'Lake Skadar Shaded Boat Trip (Heat Proof)',
    adultsActivities: 'Relaxing air-conditioned taxi ride and a shaded wooden boat cruise on Lake Skadar.',
    kidsActivities: 'Zero walking! Sit under the boat canopy, enjoy the breeze, and jump off to swim in the cool lake.',
    transferInfo: 'Ship docks at Port of Bar. Take a single 25-minute taxi directly to Virpazar. Ship docked 08:00 – 18:00.',
    tags: ['Lake Skadar', 'Zero Walking', 'Shade & Swim', 'Montenegro'],
    deepDive: {
      logisticsTitle: "DIY Master Execution Strategy (Heat Proof)",
      logisticsMode: "Direct AC Taxi",
      badgeClass: "badge-success",
      estCost: "€40-50 total for direct taxi",
      logisticsSummary: "Skip the exposed ruins today! Disembark and take a 25-minute air-conditioned taxi directly to Virpazar. Hire a traditional wooden boat with a canopy for a 2-hour shaded cruise on Lake Skadar. Enjoy the breeze and jump off for a freshwater swim.",
      timedItinerary: [
        "08:00 AM — Ship docks at Port of Bar.",
        "08:30 AM — Disembark ship; grab an AC taxi straight to Virpazar.",
        "09:00 AM — Arrive in Virpazar and hire a shaded wooden boat.",
        "09:30 AM — Relax on the 2-hour shaded boat cruise across Lake Skadar.",
        "10:30 AM — Jump off the boat for a refreshing swim in the lake.",
        "11:30 AM — AC Taxi back to the cruise terminal.",
        "12:15 PM — Back onboard the Viva for lunch, AC, and a relaxing afternoon.",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],
      diningSpots: [
        { name: "Virpazar Lake Cafes", type: "Refreshment", note: "Grab cold drinks or ice cream before getting on the boat." },
        { name: "Indulge Food Hall", type: "Lunch Onboard", note: "Head straight back to the ship for a cool, complimentary lunch in AC." }
      ]
    }'''

pattern = re.compile(r"highlight:\s*'Stari Bar Fortress Ruins & Šušanj Beach Swim \(Heat Adjusted\)'.*?\}\n  \},", re.DOTALL)
res = pattern.sub(new_day3 + '\n  },', app_content)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(res)
print("Done!")
