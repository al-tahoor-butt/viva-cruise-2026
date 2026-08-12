import re

# UPDATE INDEX.HTML
index_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\index.html'
with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract dining
dining_match = re.search(r'(<!-- 5\. Confirmed Specialty Dining Reservations -->.*?</div>\s*</div>)', content, re.DOTALL)
dining_html = dining_match.group(1) if dining_match else ''
if dining_html:
    content = content.replace(dining_html, '')

# Extract FAS+
fas_match = re.search(r'(<!-- 6\. Free at Sea Plus -->.*?</div>\s*</div>)', content, re.DOTALL)
fas_html = fas_match.group(1) if fas_match else ''
if fas_html:
    content = content.replace(fas_html, '')

# Strike through Los Lobos
dining_html = dining_html.replace('<li><i class="fa-solid fa-pepper-hot"', '<li style="opacity: 0.6"><del><i class="fa-solid fa-pepper-hot"')
dining_html = dining_html.replace('Los Lobos</li>', 'Los Lobos</del></li>')

# We want them to look like cards in the right column, so we might need to add class "tech-card" or "card"
dining_html = dining_html.replace('class="travel-box"', 'class="card"')
fas_html = fas_html.replace('class="travel-box"', 'class="card"')
dining_html = dining_html.replace('travel-box-title', 'card-header')
fas_html = fas_html.replace('travel-box-title', 'card-header')
dining_html = dining_html.replace('travel-box-content', 'card-body')
fas_html = fas_html.replace('travel-box-content', 'card-body')
# And make card-header h2
dining_html = dining_html.replace('<div class="card-header">', '<div class="card-header"><h2>')
dining_html = dining_html.replace('</div>\n          <div class="card-body">', '</h2></div>\n          <div class="card-body">')
fas_html = fas_html.replace('<div class="card-header">', '<div class="card-header"><h2>')
fas_html = fas_html.replace('</div>\n          <div class="card-body">', '</h2></div>\n          <div class="card-body">')

# Add them to right column, after Family Photo Memory
right_column_insert = r'(<div class="card gallery-card".*?</a>\s*</div>)'
content = re.sub(right_column_insert, r'\1\n\n      ' + dining_html.replace('\\', '\\\\') + '\n\n      ' + fas_html.replace('\\', '\\\\'), content, flags=re.DOTALL)

# Move travel-master-section below main-container
section_match = re.search(r'(\s*<!-- Front & Center Prominent Travel & Logistics Section -->\s*<section class="travel-master-section">.*?</section>)', content, re.DOTALL)
if section_match:
    section_html = section_match.group(1)
    content = content.replace(section_html, '')
    content = content.replace('</main>', '</main>\n' + section_html)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(content)

# UPDATE APP.JS
app_path = r'C:\Users\altah\Documents\antigravity\busy-lavoisier\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

# 1. Reorder Decks
deck9_15_match = re.search(r'(\{\s*deck:\s*\'Decks 9–15\'.*?\}\n  \},)', app_content, re.DOTALL)
if deck9_15_match:
    deck9_15 = deck9_15_match.group(1)
    app_content = app_content.replace(deck9_15, '')
    
    deck8_match = re.search(r'(\{\s*deck:\s*\'Deck 8\')', app_content)
    if deck8_match:
        idx = deck8_match.start()
        app_content = app_content[:idx] + deck9_15 + '\n  ' + app_content[idx:]

# 2. Update Bar Itinerary for Heat
old_bar_h = "highlight: 'Stari Bar Fortress Ruins & Lake Skadar Boat Excursion',"
new_bar_h = "highlight: 'Stari Bar Fortress Ruins & Šušanj Beach Swim (Heat Adjusted)',"
app_content = app_content.replace(old_bar_h, new_bar_h)

old_bar_a = "adultsActivities: 'Explore Stari Bar ancient cliffside fortress and 2,000-year-old olive trees.',"
new_bar_a = "adultsActivities: 'Early morning taxi to Stari Bar cliffside fortress before peak heat, then shaded stroll at King Nikola\\'s Palace.',"
app_content = app_content.replace(old_bar_a, new_bar_a)

old_bar_k = "kidsActivities: 'Lake Skadar boat ride through lily pads with freshwater swim stops, or King’s Beach swim.',"
new_bar_k = "kidsActivities: 'Cool off with a late morning swim at Šušanj Beach (pine shade available), then head back to ship for afternoon AC.',"
app_content = app_content.replace(old_bar_k, new_bar_k)

old_bar_t = "transferInfo: 'Ship docks at Port of Bar. Hire an official licensed port taxi driver at pier for a 5-hour private tour (~€60-80 total for family). Route: Stari Bar Fortress -> Stara Maslina -> Virpazar (Lake Skadar). Ship docked 08:00 – 18:00.',"
new_bar_t = "transferInfo: 'Ship docks at Port of Bar. Take a single taxi to Stari Bar early. After exploring, take another short taxi down to King Nikola\\'s Palace & Šušanj Beach. Ship docked 08:00 – 18:00.',"
app_content = app_content.replace(old_bar_t, new_bar_t)

old_bar_sum = "logisticsSummary: \"Disembark at Port of Bar and hire a licensed port taxi driver at the pier for a half-day custom tour (€60–80 total). Driver takes you to Stari Bar Fortress (15 mins), Stara Maslina Olive Tree (5 mins), and Virpazar on Lake Skadar (25 mins) for a private wooden boat cruise.\","
new_bar_sum = "logisticsSummary: \"Disembark early before the extreme heat. Take a taxi directly to Stari Bar Fortress for a shaded morning walk. Head down to King Nikola's Palace (shaded gardens and museum) by taxi, then cool off at Šušanj Beach which has pine trees for shade. Head back to the ship for afternoon AC.\","
app_content = app_content.replace(old_bar_sum, new_bar_sum)

old_bar_timed = r'''      timedItinerary: \[
        "08:00 AM — Ship docks at Port of Bar.",
        "08:30 AM — Disembark ship; hire an official port taxi driver for half-day tour.",
        "09:00 AM — Explore Stari Bar cliffside fortress ruins & Ottoman cobblestone bazaar.",
        "10:30 AM — Visit Stara Maslina \(2,400-year-old Roman olive tree\).",
        "11:30 AM — Authentic Balkan lunch at Konoba Bedem \(ćevapi & Montenegrin cheese pies\).",
        "01:30 PM — Drive 25 mins to Virpazar for 2-hour wooden boat cruise on Lake Skadar \(lily pads & pelicans\) OR swim at King's Beach.",
        "04:30 PM — Return to Port of Bar terminal.",
        "05:15 PM — All-Aboard onboard Viva \(Ship sails 6:00 PM\)."
      \],'''
new_bar_timed = '''      timedItinerary: [
        "08:00 AM — Ship docks at Port of Bar.",
        "08:30 AM — Disembark ship; grab a taxi straight to Stari Bar.",
        "09:00 AM — Explore Stari Bar cliffside fortress ruins before it gets too hot.",
        "10:30 AM — Taxi down to King Nikola's Palace to explore the museum and shaded gardens.",
        "11:30 AM — Walk to nearby Šušanj Beach for a refreshing swim under the pine trees.",
        "01:00 PM — Light lunch nearby or head back to the ship for AC & free food.",
        "02:00 PM — Relax onboard in the shade or pools.",
        "05:15 PM — All-Aboard onboard Viva (Ship sails 6:00 PM)."
      ],'''
app_content = re.sub(old_bar_timed, new_bar_timed, app_content, flags=re.DOTALL)

# 3. Update Other Itineraries for Heat
# Dubrovnik
old_dub_timed = r'''        "10:45 AM — Walk the Medieval City Walls before peak afternoon heat \(1.5–2 hours, panoramic views\).",
        "01:00 PM — Seafood street food lunch at Barba \(octopus burgers & fried calamari cones\).",
        "02:30 PM — Option A: Guided Family Sea Kayaking tour to Lokrum Island & Betina Cave • Option B: Dubrovnik Cable Car \(€27/pax\) to Mount Srđ.",
        "05:30 PM — Stroll Stradun limestone promenade, craft gelato at Peppino's, taxi back to Gruž Port.",'''
new_dub_timed = '''        "10:45 AM — Short walk on the Medieval City Walls (do a half-circuit to avoid heat exhaustion, or use the Cable Car instead).",
        "12:00 PM — Seafood street food lunch at Barba (octopus burgers & fried calamari cones) in the shade.",
        "01:30 PM — Guided Family Sea Kayaking tour (cooling water activity) OR take the air-conditioned Cable Car to Mount Srđ.",
        "03:30 PM — Retreat to the ship for AC and pool time.",'''
app_content = re.sub(old_dub_timed, new_dub_timed, app_content, flags=re.DOTALL)

# Amalfi
old_ama_timed = r'''        "10:00 AM — Swim at Spiaggia Grande beach in Positano & explore cliffside stairways.",
        "12:30 PM — Beachfront lunch at Chez Black.",
        "01:30 PM — Board 25-min TravelMar ferry from Positano to Amalfi Town.",
        "02:00 PM — Visit Amalfi Cathedral \(Duomo di Sant'Andrea\) & try lemon granita at Pasticceria Pansa.",
        "03:40 PM — Board ferry from Amalfi back to Salerno \(arrive 04:15 PM\).",'''
new_ama_timed = '''        "10:00 AM — Quick swim at Spiaggia Grande beach in Positano & avoid steep cliffside stairways in the heat.",
        "11:30 AM — Shaded beachfront lunch at Chez Black.",
        "12:30 PM — Board 25-min TravelMar ferry from Positano to Amalfi Town (breeze on the water!).",
        "01:00 PM — Visit Amalfi Cathedral (cool interior) & get refreshing lemon granita at Pasticceria Pansa.",
        "02:00 PM — Early ferry from Amalfi back to Salerno to escape the afternoon heat.",'''
app_content = re.sub(old_ama_timed, new_ama_timed, app_content, flags=re.DOTALL)

# Florence
old_flo_timed = r'''        "11:30 AM — Explore Duomo square, Piazza della Signoria, Ponte Vecchio & Mercato Nuovo.",
        "01:30 PM — Tuscan Schiacciata sandwiches at All'Antico Vinaio \(Via dei Neri 65\).",
        "04:00 PM — Board direct return train from Florence S.M.N. to Livorno Centrale \(1 hr 15 mins\).",'''
new_flo_timed = '''        "11:30 AM — Explore Duomo square and Ponte Vecchio, sticking to the shaded sides of the streets.",
        "01:00 PM — Grab Tuscan Schiacciata sandwiches at All'Antico Vinaio and eat in a shaded piazza.",
        "02:30 PM — Board direct return train from Florence S.M.N. to Livorno Centrale early to beat the heat exhaustion.",'''
app_content = re.sub(old_flo_timed, new_flo_timed, app_content, flags=re.DOTALL)

# Nice
old_nice_timed = r'''        "09:15 AM — Walk Vieux Nice \(Old Town\), Cours Saleya market & Promenade des Anglais.",
        "11:30 AM — Take train back to Villefranche. Swim & paddleboard in turquoise Villefranche bay.",
        "01:30 PM — Authentic Socca chickpea crepe lunch at Chez Pipo.",
        "03:30 PM — Flower gelato at Amorino, walk to tender pier.",'''
new_nice_timed = '''        "09:15 AM — Walk the shaded narrow streets of Vieux Nice (Old Town) & Cours Saleya market.",
        "10:45 AM — Take train back to Villefranche. Cool off swimming & paddleboarding in turquoise Villefranche bay.",
        "12:30 PM — Authentic Socca chickpea crepe lunch at Chez Pipo in the shade.",
        "02:00 PM — Flower gelato at Amorino, then catch an early tender back to the air-conditioned ship.",'''
app_content = re.sub(old_nice_timed, new_nice_timed, app_content, flags=re.DOTALL)

# Palma
old_palma_timed = r'''        "03:00 PM — Explore Palma Cathedral \(La Seu\) & Royal Palace of La Almudaina.",
        "04:30 PM — Sample traditional Mallorcan Ensaimada pastry at Ca'n Joan de s'Aigo.",
        "05:30 PM — Taxi back to cruise terminal.",'''
new_palma_timed = '''        "03:00 PM — Escape the heat inside the massive Palma Cathedral (La Seu) & Royal Palace.",
        "04:30 PM — Relax in the air-conditioned Ca'n Joan de s'Aigo with a cold drink and Mallorcan Ensaimada pastry.",
        "05:30 PM — Quick taxi back to cruise terminal to freshen up before dinner.",'''
app_content = re.sub(old_palma_timed, new_palma_timed, app_content, flags=re.DOTALL)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
