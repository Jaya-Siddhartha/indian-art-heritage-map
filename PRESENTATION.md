# Presentation Guide: Colours of India

**Team:** Addanki Jaya Siddhartha (RA2411003010774), Nallana Saahithi (RA2411003010772), Aryan Sagar Patike (RA2411003010722), Yogesh Reddy Pelluru (RA2411003010742), Gopalchetty Goutam (RA2411003010767)

**Live site:** https://indian-art-heritage-map-nine.vercel.app

## Before you start (2 minutes before class)

- Open the deployed site (or `index.html`) in a full-screen browser window. **An internet connection is needed** for the map and photos.
- Press **Show all** so nothing is selected.
- Zoom the browser to about 100–110% so the projector shows the map and detail panel side by side.

---

## Demo script (about 4 minutes)

### 1. Introduce the objective (≈ 30 s), at the top of the page
> "Our project is *Colours of India*, an interactive art heritage map. The objective is to show that Indian art isn't from one place: each region developed its own materials, stories and styles. We placed fifteen traditions on a real map of India, from prehistoric rock art to the modern Bengal School."

Click **Start exploring**.

### 2. Show the map (≈ 20 s)
> "This is a real geographical map built with Leaflet and OpenStreetMap, so the markers are at their actual coordinates. Each marker's **shape and colour** shows its main category, as in the legend: circles for painting, squares for sculpture, triangles for architecture, diamonds for folk art and hexagons for crafts."

Hover over a marker to show the name tooltip.

### 3. Select places from different regions (≈ 1 min 45 s)
Pick one per region. Click the marker on the map, or the region buttons in the welcome panel:

| Region | Click | What to say (one or two lines) |
|---|---|---|
| Central | **Bhimbetka** | "The oldest art on our map: rock paintings in red and white, often dated to the Mesolithic." |
| West | **Ajanta Caves** | "Buddhist murals, mostly from the 5th century CE under the Vakatakas. Jataka stories painted on lime plaster." Click the second thumbnail to show the gorge. |
| South | **Thanjavur** | "Chola temple art and lost-wax bronzes like this Nataraja, and later the gold-foil Thanjavur painting." |
| East | **Mithila (Madhubani)** | "A women-led folk tradition. It's a *regional tradition*, not a single monument, which is why the panel labels it that way." |
| North | **Srinagar** | "Crafts: painted papier-mâché, shawls and wood carving, with Persian and Central Asian links." |

Point out in the panel: **period**, **historical background**, **techniques**, **patrons**, **significance**, and the **References** links at the bottom.
Use the **› arrow** to show you can step to the next place, then **×** (or Esc) to close.

### 4. Demonstrate search and filters (≈ 40 s)
- Type **`buddhist`** in search. "Search finds Ajanta, Ellora and Sanchi, all in central and western India."
- Clear the search and click the **Folk art** filter. "Folk traditions cluster in the east and west: Madhubani, Pattachitra and Warli."
- Click **Architecture**. "The map zooms to fit the results."
- Press **Show all** to reset.

### 5. Explain geographical diversity (≈ 30 s)
Scroll to **About → Regional spread**.
> "Our fifteen places cover all five broad regions. The *kind* of art changes with the region: rock-cut caves in the Deccan basalt of Maharashtra, Chola bronzes and Dravidian temples in Tamil Nadu, court miniatures in Rajasthan and the Deccan, folk painting in Bihar, Odisha and Maharashtra, and crafts in Kashmir. Local stone, patrons and religious communities all shaped what was made where."

### 6. Close (≈ 15 s)
Scroll to **Sources & image credits**.
> "All photographs are real, openly licensed images from Wikimedia Commons with credits, and every entry links to UNESCO or other references. The site uses HTML, CSS, vanilla JavaScript and Leaflet, and is hosted as a static website. Thank you."

**Tip:** You can open a place directly with a link like `…/index.html#khajuraho`, which helps if a question comes up.

---

## Requirements checklist

✅ = implemented **and** tested in a browser (Chromium-based built-in browser, at a 1366×860 laptop size and a 375×812 phone size).
⚠️ = implemented with a limitation noted.

| Requirement | Status | Notes |
|---|---|---|
| Separate `index.html`, `style.css`, `script.js` | ✅ | |
| HTML5 / CSS3 / vanilla JS, no framework or backend | ✅ | |
| Geographically accurate map of India (reputable library) | ✅ | Leaflet 1.9.4 + OpenStreetMap; loaded with SRI hashes |
| State/regional boundaries visible | ✅ | Shown by the OSM base map |
| Official border depiction | ⚠️ | OSM boundaries are not an official depiction; footer points to the Survey of India |
| 12–15 locations | ✅ | 12 required + Sanchi, Mahabalipuram, Bhimbetka |
| Markers placed at real coordinates | ✅ | Approximate for regional traditions (noted in the panel) |
| Clickable markers | ✅ | Tested |
| Clickable location cards | ✅ | Tested |
| Name on hover/selection | ✅ | Tooltip on hover/focus; opens on selection |
| Selected-location highlight | ✅ | Enlarged marker, pulsing ring, outlined card |
| Search by place or tradition | ✅ | Tested ("madhubani" → 1 result; no-match message appears) |
| Category filters | ✅ | Tested: Sculpture 6, Crafts 2, Folk art 3 |
| Reset / show all | ✅ | Tested |
| Closable detail view | ✅ | × button and Esc, both tested |
| Detail: name, state, tradition, period | ✅ | |
| Detail: photographs with alt text | ✅ | 29 Commons images; all 29 loaded in testing |
| Detail: intro, history, techniques, people, significance | ✅ | |
| Detail: at least one reliable reference link | ✅ | All 26 Wikipedia/other links and 8 UNESCO pages checked |
| Missing image handling | ✅ | Placeholder replaces a failed image |
| Legend | ✅ | Shape + colour, plus "selected" ring |
| Responsive (laptop / tablet / phone) | ✅ | Tested at 1366 px and 375 px; no horizontal scrolling on mobile |
| Keyboard access + visible focus | ✅ | Markers focusable with role="button"; Enter opens; tested |
| Sources & image-credit section | ✅ | Generated from data |
| Project description + technologies section | ✅ | "About" section |
| No console errors | ✅ | One tooltip-closing bug found in testing and fixed; no errors after the fix |
| README with setup + deployment | ✅ | `README.md` |
| Works offline | ⚠️ | Map, fonts and photos need internet; the page shows a clear message instead of breaking |
| Deployed to GitHub Pages / Netlify | ⬜ | Not done. Follow the steps in `README.md` |
