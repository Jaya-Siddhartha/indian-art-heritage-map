# Colours of India: An Interactive Art Heritage Map

**Assignment:** Interactive Art Map (Indian Art History, 10 marks)

An interactive digital atlas that shows **where** Indian art traditions are found. Fifteen locations, from prehistoric rock art at Bhimbetka to the 20th-century Bengal School in Kolkata, are placed on a real map of India. Each location has photographs, history, techniques, patrons and references.

---

## Features

| # | Feature | How it works |
|---|---------|--------------|
| 1 | Clickable map markers | 15 markers on a Leaflet / OpenStreetMap map. Hover or focus a marker to see its name. |
| 2 | Clickable location cards | The "Collection" grid shows one card per location, with a thumbnail. |
| 3 | Search | Searches name, state, region, tradition and keywords (e.g. `buddhist`, `chola`, `Kerala`). |
| 4 | Category filters | Painting, Sculpture, Architecture, Folk art, Crafts. |
| 5 | Selected-location indicator | The selected marker gets bigger and a pulsing ring; its card gets a coloured outline. |
| 6 | Reset / show all | The **Show all** button clears search, filters and selection and zooms back to India. |
| 7 | Closable detail view | × button or the **Esc** key. Previous/next arrows step through all places. |
| 8 | Responsive layout | Laptop: map and detail side by side. Tablet/phone: stacked, with a collapsible menu. |
| 9 | Keyboard access | Every control is a real button or link. Markers are focusable (Tab) and open with Enter/Space. Focus outlines are visible. |
| 10 | Sources & image credits | Generated from the data, including author, licence and a link to each Commons file page. |
| + | Legend | Shapes **and** colours mark categories (not colour alone). |
| + | Deep links | `index.html#ajanta` opens a place directly (useful in a presentation). |
| + | Graceful fallbacks | A missing image is replaced by a labelled placeholder. If the map library can't load, a message appears and the rest still works. |

### The 15 locations

| Region | Location | Tradition | Type |
|---|---|---|---|
| North | Srinagar, J&K | Kashmiri crafts (papier-mâché, shawls, wood carving, manuscripts) | City art centre |
| North | Jaipur, Rajasthan | Rajasthani (Rajput) court painting | City art centre |
| West | Ajanta Caves, Maharashtra | Buddhist mural painting | Monument site |
| West | Ellora Caves, Maharashtra | Buddhist, Hindu and Jain rock-cut art | Monument site |
| West | Warli region, Maharashtra | Warli painting | Regional tradition |
| Central | Khajuraho, MP | Temple sculpture | Monument site |
| Central | Sanchi, MP *(added)* | Buddhist stupas and relief | Monument site |
| Central | Bhimbetka, MP *(added)* | Prehistoric rock painting | Monument site |
| East | Mithila (Madhubani), Bihar | Madhubani painting | Regional tradition |
| East | Puri & Raghurajpur, Odisha | Pattachitra | Regional tradition |
| East | Kolkata, West Bengal | Bengal School and modern art | City art centre |
| South | Thanjavur, Tamil Nadu | Chola bronzes, temple art, Thanjavur painting | City art centre |
| South | Kochi, Kerala | Kerala murals (Mattancherry Palace) | Monument site |
| South | Hyderabad, Telangana | Deccani painting | City art centre |
| South | Mahabalipuram, TN *(added)* | Pallava architecture | Monument site |

**Why these three additions?** Bhimbetka adds *prehistory*, giving the atlas a real time span. Sanchi adds the earliest *Buddhist relief sculpture*, before Ajanta. Mahabalipuram adds *Pallava architecture* and the coastal south-east.

---

## Technology stack

- **HTML5**: semantic structure (`header`, `nav`, `main`, `section`, `aside`, `article`, `footer`)
- **CSS3**: custom layout with Grid and Flexbox; no CSS framework
- **Vanilla JavaScript**: no React, Vue, Angular or build step
- **[Leaflet 1.9.4](https://leafletjs.com/)**: loaded from the unpkg CDN with Subresource Integrity hashes
- **[OpenStreetMap](https://www.openstreetmap.org/copyright)** tiles (default) and an optional **Esri World Topo** terrain layer
- **Google Fonts**: Fraunces (headings) and Inter (body)
- **Wikimedia Commons**: all photographs, hotlinked with attribution

> **Internet needed:** Leaflet, map tiles, fonts and photos load from the web. With no connection the page still opens, but it shows a "map could not load" message and image placeholders.

### Files

```
colours-of-india/
├── index.html        page structure
├── style.css         all styling (theme, layout, responsive rules)
├── script.js         location data + map, search, filters, detail panel
├── README.md         this file
└── PRESENTATION.md   demo script + requirements checklist
```

To edit content, change the `PLACES` array at the top of `script.js`. Every card, marker, credit and source list is generated from it.

---

## Run it locally

**Option A: just open it.** Double-click `index.html`. The site has no build step and loads no local data files, so it should work from `file://`. (It was tested through a local server, as in Option B; if anything looks wrong when you double-click, use Option B.)

**Option B: run a local server** (recommended; it behaves like the real website):

With VS Code, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

Or with Node.js installed, run this from the project folder:

```bash
npx serve .
```

then open the address it prints (usually http://localhost:3000).

---

## Deploy

### GitHub Pages

1. Create a new public repository on GitHub, e.g. `colours-of-india`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root, either with **Add file → Upload files** or with git:
   ```bash
   git init
   ```
   ```bash
   git add index.html style.css script.js README.md PRESENTATION.md
   ```
   ```bash
   git commit -m "Colours of India interactive art map"
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git remote add origin https://github.com/<your-username>/colours-of-india.git
   ```
   ```bash
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose **main** and **/ (root)**, then click **Save**.
5. After a minute or two the site appears at `https://<your-username>.github.io/colours-of-india/`.

### Netlify (drag and drop)

1. Go to https://app.netlify.com/drop (sign in with a free account).
2. Drag the project **folder** onto the page.
3. Netlify gives you a live URL like `https://random-name.netlify.app`. You can rename it under **Site configuration → Change site name**.

No build command or publish settings are needed: it is a static site.

---

## Accuracy notes

- Dates are given as approximate ranges ("c.") and debated points are labelled as such (e.g. Ajanta's chronology, Bhimbetka's earliest paintings, Warli origins).
- Each entry is labelled as a **monument site**, a **regional tradition** or a **city art centre**, and notes explain where a tradition is wider than the marked city.
- Where a photo comes from a different place than the marker (e.g. a museum object, or a Kerala mural from Krishnapuram Palace), the caption and a note say so.
- **Map boundaries:** the base map comes from OpenStreetMap and is not an official depiction of India's borders. The footer points to the Survey of India for official boundaries. Marker positions are approximate.

---

## Sources

### Content

| Location | References |
|---|---|
| Ajanta | [UNESCO WHC 242](https://whc.unesco.org/en/list/242), [Wikipedia](https://en.wikipedia.org/wiki/Ajanta_Caves) |
| Ellora | [UNESCO WHC 243](https://whc.unesco.org/en/list/243), [Wikipedia](https://en.wikipedia.org/wiki/Ellora_Caves) |
| Thanjavur | [UNESCO WHC 250: Great Living Chola Temples](https://whc.unesco.org/en/list/250), [Chola art and architecture](https://en.wikipedia.org/wiki/Chola_art_and_architecture), [Thanjavur painting](https://en.wikipedia.org/wiki/Thanjavur_painting) |
| Khajuraho | [UNESCO WHC 240](https://whc.unesco.org/en/list/240), [Wikipedia](https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments) |
| Mithila | [Madhubani art](https://en.wikipedia.org/wiki/Madhubani_art) |
| Warli | [Warli painting](https://en.wikipedia.org/wiki/Warli_painting), [Jivya Soma Mashe](https://en.wikipedia.org/wiki/Jivya_Soma_Mashe) |
| Puri | [Pattachitra](https://en.wikipedia.org/wiki/Pattachitra), [Raghurajpur](https://en.wikipedia.org/wiki/Raghurajpur) |
| Jaipur | [Rajput painting](https://en.wikipedia.org/wiki/Rajput_painting), [Jaipur](https://en.wikipedia.org/wiki/Jaipur) |
| Srinagar | [Srinagar](https://en.wikipedia.org/wiki/Srinagar), [Khanqah-e-Moula](https://en.wikipedia.org/wiki/Khanqah-e-Moula) |
| Kolkata | [Bengal School of Art](https://en.wikipedia.org/wiki/Bengal_School_of_Art), [Bharat Mata](https://en.wikipedia.org/wiki/Bharat_Mata_(painting)), [Abanindranath Tagore](https://en.wikipedia.org/wiki/Abanindranath_Tagore) |
| Kochi | [Kerala mural painting](https://en.wikipedia.org/wiki/Kerala_mural_painting), [Mattancherry Palace](https://en.wikipedia.org/wiki/Mattancherry_Palace) |
| Hyderabad | [Deccan painting](https://en.wikipedia.org/wiki/Deccan_painting), [Salar Jung Museum](https://en.wikipedia.org/wiki/Salar_Jung_Museum) |
| Sanchi | [UNESCO WHC 524](https://whc.unesco.org/en/list/524), [Wikipedia](https://en.wikipedia.org/wiki/Sanchi) |
| Mahabalipuram | [UNESCO WHC 249](https://whc.unesco.org/en/list/249), [Wikipedia](https://en.wikipedia.org/wiki/Group_of_Monuments_at_Mahabalipuram) |
| Bhimbetka | [UNESCO WHC 925](https://whc.unesco.org/en/list/925), [Wikipedia](https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters) |

### Image credits (all via Wikimedia Commons)

| Image | Author | Licence |
|---|---|---|
| [Bodhisattva Padmapani, Cave 1, Ajanta](https://commons.wikimedia.org/wiki/File:Bodhisattva_Padmapani,_cave_1,_Ajanta,_India.jpg) | Unknown | Public domain |
| [Ajanta gorge](https://commons.wikimedia.org/wiki/File:Ajanta_(63).jpg) | Soman | CC BY 2.5 |
| [Kailasa temple, Ellora](https://commons.wikimedia.org/wiki/File:Ellora_Caves,_India,_Kailasa_Temple.jpg) | Vyacheslav Argenberg | CC BY 4.0 |
| [Kailasa courtyard reliefs](https://commons.wikimedia.org/wiki/File:Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple,_Ellora_01.jpg) | Rohit Sharma | CC BY-SA 4.0 |
| [Brihadisvara temple](https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_(edit).jpg) | Rainer Halama (derivative: UnpetitproleX) | CC BY-SA 4.0 |
| [Shiva Nataraja, LACMA](https://commons.wikimedia.org/wiki/File:Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg) | LACMA | Public domain |
| [Thanjavur painting](https://commons.wikimedia.org/wiki/File:Thanjavur_art_from_south_India.jpg) | Klien rai | CC BY-SA 4.0 |
| [Khajuraho temples](https://commons.wikimedia.org/wiki/File:1_Khajuraho.jpg) | PLBechly | CC BY-SA 4.0 |
| [Kandariya Mahadeva wall](https://commons.wikimedia.org/wiki/File:Kandariya_Mahadeva_Temple,_Khajuraho,_India_10.jpg) | Rohit Sharma | CC BY-SA 4.0 |
| [Madhubani painting, Bihar](https://commons.wikimedia.org/wiki/File:Madhubani_painting,_Bihar.jpg) | Jean-Etienne Minh-Duy Poirrier | CC BY-SA 2.0 |
| [Madhubani station murals](https://commons.wikimedia.org/wiki/File:Madhubani_paintings.jpg) | Sntshkumar750 | CC BY-SA 4.0 |
| [Warli house wall](https://commons.wikimedia.org/wiki/File:Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg) | Blackstardust | CC BY-SA 4.0 |
| [Warli painting](https://commons.wikimedia.org/wiki/File:Warli_painting.jpg) | Omrmankar | CC BY-SA 4.0 |
| [Pattachitra: Radha and Krishna](https://commons.wikimedia.org/wiki/File:Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg) | Satya Narayan Baral | CC BY-SA 4.0 |
| [Pattachitra of Jagannath](https://commons.wikimedia.org/wiki/File:Pattachitra_of_Jagannath.jpg) | Patrick.zip | CC0 |
| [Radha–Krishna, Jaipur c. 1750](https://commons.wikimedia.org/wiki/File:The_Divine_Couple_Radha-Krishna,_circa_1750_CE,_Jaipur_Kalam_of_Rajasthani_School_of_Art,_National_Museum,_New_Delhi.jpg) | SpeakingArch | CC BY-SA 4.0 |
| [Rasalila, Jaipur](https://commons.wikimedia.org/wiki/File:Krishna_and_Radha_dancing_the_Rasalila,_Jaipur,_19th_century.jpg) | Anonymous | Public domain |
| [Papier-mâché, Shah-e-Hamdan](https://commons.wikimedia.org/wiki/File:Papier-m%C3%A2ch%C3%A9_Walls_of_Shah-e-Hamdan_(14594288023).jpg) | Mike Prince | CC BY 2.0 |
| [Kashmiri papier-mâché bowl](https://commons.wikimedia.org/wiki/File:19th-century_papier-m%C3%A2ch%C3%A9_bowl_from_Kashmir_01.jpg) | Joe Mabel | CC BY-SA 4.0 |
| [Bharat Mata](https://commons.wikimedia.org/wiki/File:Bharat_Mata_by_Abanindranath_Tagore.jpg) | Abanindranath Tagore | Public domain |
| [Mattancherry Ramayana murals](https://commons.wikimedia.org/wiki/File:Mattancherry_Palace-16-17th_Century_mural_paintings-Scenes_from_the_Ramayana-WUS09250.jpg) | Rainer Halama | CC BY-SA 4.0 |
| [Gajendra Moksham, Krishnapuram](https://commons.wikimedia.org/wiki/File:Kris_mural7.jpg) | Rajith Mohan | CC BY-SA 3.0 |
| [Finch and poppies, Golconda](https://commons.wikimedia.org/wiki/File:Finch,_Poppies,_Dragonfly,_and_Bee_India_(Deccan,_Golconda).jpg) | Unknown | Public domain |
| [Ibrahim Adil Shah II](https://commons.wikimedia.org/wiki/File:Sultan-Ibrahim-Adil-Shah-II-of-Bijapur._Miniature._Deccan,_Bijapur;_c._1590._The_David_Collection._(cropped).jpg) | Unknown | Public domain |
| [Sanchi East Gateway](https://commons.wikimedia.org/wiki/File:East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG) | Biswarup Ganguly | CC BY 3.0 |
| [Shore Temple](https://commons.wikimedia.org/wiki/File:Shore_Temple_01.jpg) | Bernard Gagnon | CC BY-SA 3.0 |
| [Descent of the Ganges](https://commons.wikimedia.org/wiki/File:Descent_of_the_Ganges_01.jpg) | Bernard Gagnon | CC BY-SA 3.0 |
| [Bhimbetka Shelter 8](https://commons.wikimedia.org/wiki/File:Rock_Shelter_8,_Bhimbetka_02.jpg) | Bernard Gagnon | CC BY-SA 3.0 |
| [Bhimbetka rock painting](https://commons.wikimedia.org/wiki/File:Rock_painting,_Bhimbetka,_Raisen_district,_Madhya_Pradesh,_India.jpg) | Yann | CC BY-SA 4.0 |

### Libraries and data

- Leaflet: BSD-2-Clause, https://leafletjs.com/
- Map data © OpenStreetMap contributors, ODbL: https://www.openstreetmap.org/copyright
- Optional terrain tiles © Esri
