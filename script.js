/* =========================================================
   Colours of India — An Interactive Art Heritage Map
   Vanilla JavaScript. Data first, then UI logic.
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   1. CATEGORIES (marker colour + shape, used in legend/filters)
   --------------------------------------------------------- */
const CATEGORIES = {
  painting:     { label: "Painting",     color: "#b4532f", shape: "circle" },
  sculpture:    { label: "Sculpture",    color: "#2f5d50", shape: "square" },
  architecture: { label: "Architecture", color: "#9a7425", shape: "triangle" },
  folk:         { label: "Folk art",     color: "#4b4f8c", shape: "diamond" },
  crafts:       { label: "Crafts",       color: "#8a3e66", shape: "hexagon" }
};

const PLACE_TYPES = {
  monument: "Monument site",
  regional: "Regional tradition",
  city: "City art centre"
};

/* Commons licence shortcuts */
const LIC = {
  "PD":        { name: "Public domain", url: "" },
  "CC0":       { name: "CC0 1.0", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
  "BY 2.0":    { name: "CC BY 2.0", url: "https://creativecommons.org/licenses/by/2.0" },
  "BY 2.5":    { name: "CC BY 2.5", url: "https://creativecommons.org/licenses/by/2.5" },
  "BY 3.0":    { name: "CC BY 3.0", url: "https://creativecommons.org/licenses/by/3.0" },
  "BY 4.0":    { name: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0" },
  "BY-SA 2.0": { name: "CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0" },
  "BY-SA 3.0": { name: "CC BY-SA 3.0", url: "https://creativecommons.org/licenses/by-sa/3.0" },
  "BY-SA 4.0": { name: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0" }
};

const COMMONS = "https://commons.wikimedia.org/wiki/File:";
const THUMB = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";
const UPLOAD = "https://upload.wikimedia.org/wikipedia/commons/";

/* ---------------------------------------------------------
   2. LOCATIONS (15 entries)
   Each image: src, file (Commons page), alt, caption, author, lic
   --------------------------------------------------------- */
const PLACES = [
  {
    id: "ajanta",
    name: "Ajanta Caves",
    state: "Maharashtra",
    region: "West",
    lat: 20.5519, lng: 75.7033,
    type: "monument",
    tradition: "Buddhist mural painting and rock-cut monasteries",
    period: "c. 2nd century BCE – late 5th century CE (two main phases)",
    categories: ["painting", "architecture", "sculpture"],
    keywords: "buddhist jataka fresco mural cave vakataka padmapani unesco",
    images: [
      { src: THUMB + "c/cd/Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg/960px-Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg",
        file: "Bodhisattva_Padmapani,_cave_1,_Ajanta,_India.jpg",
        alt: "Wall painting of the Bodhisattva Padmapani holding a lotus, with a tall jewelled crown, Cave 1, Ajanta",
        caption: "Bodhisattva Padmapani, wall painting in Cave 1 (c. 5th century CE)",
        author: "Unknown author", lic: "PD" },
      { src: THUMB + "c/c3/Ajanta_%2863%29.jpg/960px-Ajanta_%2863%29.jpg",
        file: "Ajanta_(63).jpg",
        alt: "The horseshoe-shaped cliff at Ajanta with a row of cave entrances above the river valley",
        caption: "The horseshoe-shaped gorge with the cave façades",
        author: "Soman", lic: "BY 2.5" }
    ],
    intro: "About thirty Buddhist caves cut into a horseshoe-shaped cliff above the Waghur river. Their wall paintings are among the finest surviving examples of early Indian painting.",
    history: "Work took place in two broad phases. The earliest caves date to roughly the 2nd–1st centuries BCE. A second, larger phase followed in the 5th century CE, when the region was ruled by the Vakataka dynasty; the exact chronology is still debated by scholars. The site was later abandoned and came to wide attention after a British officer, John Smith, reached it in 1819.",
    features: [
      "Paintings made on a dried lime-plaster surface laid over a clay-and-fibre ground",
      "Jataka tales (stories of the Buddha's previous lives) flow across walls as continuous narratives",
      "Graceful figures with shading, expressive hands and lowered eyes",
      "Chaitya halls (for worship) and viharas (monasteries) with carved pillars and Buddha images"
    ],
    people: "Vakataka-period patrons, including Varahadeva, a minister of King Harishena, named in an inscription in Cave 16; Buddhist monastic communities.",
    significance: "Ajanta is a key reference point for classical Indian painting. Besides religious stories, the murals record costume, music, architecture and daily life. It became a UNESCO World Heritage Site in 1983.",
    sources: [
      { label: "UNESCO World Heritage Centre: Ajanta Caves", url: "https://whc.unesco.org/en/list/242" },
      { label: "Wikipedia: Ajanta Caves", url: "https://en.wikipedia.org/wiki/Ajanta_Caves" }
    ]
  },
  {
    id: "ellora",
    name: "Ellora Caves",
    state: "Maharashtra",
    region: "West",
    lat: 20.0268, lng: 75.1771,
    type: "monument",
    tradition: "Rock-cut Buddhist, Hindu and Jain art",
    period: "c. 6th – 10th century CE",
    categories: ["architecture", "sculpture"],
    keywords: "kailasa rashtrakuta rock-cut monolith jain hindu buddhist unesco",
    images: [
      { src: THUMB + "5/5f/Ellora_Caves%2C_India%2C_Kailasa_Temple.jpg/960px-Ellora_Caves%2C_India%2C_Kailasa_Temple.jpg",
        file: "Ellora_Caves,_India,_Kailasa_Temple.jpg",
        alt: "The Kailasa temple at Ellora, a multi-storey temple carved out of a single basalt hillside",
        caption: "Kailasa temple (Cave 16), carved from a single rock mass",
        author: "Vyacheslav Argenberg", lic: "BY 4.0" },
      { src: THUMB + "8/8a/Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple%2C_Ellora_01.jpg/960px-Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple%2C_Ellora_01.jpg",
        file: "Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple,_Ellora_01.jpg",
        alt: "Courtyard of the Kailasa temple with long horizontal bands of carved Mahabharata scenes",
        caption: "Courtyard with relief panels showing scenes from the Mahabharata",
        author: "Rohit Sharma", lic: "BY-SA 4.0" }
    ],
    intro: "A two-kilometre stretch of 34 caves in the basalt cliffs of the Charanandri hills, where Buddhist, Hindu and Jain monuments stand side by side.",
    history: "The Buddhist caves are generally the earliest, followed by the Hindu and then the Jain caves, though the phases overlap. The great Kailasa temple (Cave 16) is usually attributed to the Rashtrakuta king Krishna I in the 8th century CE.",
    features: [
      "Kailasa was carved from the top down: sculptors removed rock rather than building with blocks",
      "Large relief panels from the Ramayana and Mahabharata",
      "Multi-storey Buddhist monastery caves (Caves 11 and 12)",
      "Finely detailed Jain caves such as the Indra Sabha"
    ],
    people: "The Rashtrakuta dynasty (Kailasa temple); Buddhist, Hindu (Shaiva) and Jain communities who used the site.",
    significance: "Ellora shows three religious traditions sharing one site over several centuries. Kailasa is often described as one of the largest monolithic rock-cut structures in the world. UNESCO World Heritage Site since 1983.",
    sources: [
      { label: "UNESCO World Heritage Centre: Ellora Caves", url: "https://whc.unesco.org/en/list/243" },
      { label: "Wikipedia: Ellora Caves", url: "https://en.wikipedia.org/wiki/Ellora_Caves" }
    ]
  },
  {
    id: "thanjavur",
    name: "Thanjavur",
    state: "Tamil Nadu",
    region: "South",
    lat: 10.7828, lng: 79.1318,
    type: "city",
    tradition: "Chola temple art, bronze casting and Thanjavur painting",
    period: "Chola: c. 9th – 13th century CE · Thanjavur painting: c. 17th – 19th century",
    categories: ["sculpture", "architecture", "painting", "crafts"],
    keywords: "chola bronze nataraja brihadisvara brihadeeswarar tanjore painting gold foil lost-wax rajaraja",
    images: [
      { src: THUMB + "d/dd/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg/960px-Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg",
        file: "Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_(edit).jpg",
        alt: "The tall pyramidal tower of the Brihadisvara temple in Thanjavur against the sky",
        caption: "Brihadisvara temple, completed c. 1010 CE under Rajaraja I",
        author: "Rainer Halama (derivative: UnpetitproleX)", lic: "BY-SA 4.0" },
      { src: THUMB + "b/bf/Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg/960px-Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg",
        file: "Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg",
        alt: "Bronze sculpture of Shiva as Nataraja dancing inside a ring of flames",
        caption: "Shiva as Nataraja, Chola-period bronze (Los Angeles County Museum of Art)",
        author: "Los Angeles County Museum of Art", lic: "PD" },
      { src: THUMB + "f/fb/Thanjavur_art_from_south_India.jpg/960px-Thanjavur_art_from_south_India.jpg",
        file: "Thanjavur_art_from_south_India.jpg",
        alt: "A Thanjavur-style painting with a deity figure framed by raised gold-covered decoration",
        caption: "A modern painting in the Thanjavur style, with raised gold-foil work",
        author: "Klien rai", lic: "BY-SA 4.0" }
    ],
    intro: "Capital of the imperial Chola dynasty, Thanjavur is home to the Brihadisvara temple and gives its name to a later, gold-decorated style of devotional painting.",
    history: "Rajaraja I completed the Brihadisvara temple around 1010 CE. During the Chola period, workshops in the Kaveri delta cast bronze images of deities for temple processions using the lost-wax method. Much later, under the Thanjavur Nayakas and especially the Maratha court of Thanjavur (1676–1855), the painting style now called Thanjavur (Tanjore) painting took shape.",
    features: [
      "The temple's tall vimana (tower above the sanctum) built of granite",
      "Chola bronzes cast by the lost-wax method; Shiva as Nataraja is the best-known form",
      "Thanjavur paintings use raised gesso work, gold foil and inset glass beads or stones",
      "Bright reds, greens and blues around a large central deity"
    ],
    people: "Rajaraja I (Chola king, builder of the temple); the Nayaka and Maratha rulers of Thanjavur (patrons of painting); hereditary bronze-casting families of the region.",
    significance: "The Brihadisvara temple is part of the UNESCO site 'Great Living Chola Temples'. Chola bronzes are among the most celebrated metal sculptures of India and are held in museums around the world.",
    note: "Chola bronzes were made at many places in the Kaveri region, not only in Thanjavur city. The bronze shown is in a museum collection, not in Thanjavur.",
    sources: [
      { label: "UNESCO World Heritage Centre: Great Living Chola Temples", url: "https://whc.unesco.org/en/list/250" },
      { label: "Wikipedia: Chola art and architecture", url: "https://en.wikipedia.org/wiki/Chola_art_and_architecture" },
      { label: "Wikipedia: Thanjavur painting", url: "https://en.wikipedia.org/wiki/Thanjavur_painting" }
    ]
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    state: "Madhya Pradesh",
    region: "Central",
    lat: 24.8520, lng: 79.9216,
    type: "monument",
    tradition: "Temple architecture and sculpture (Nagara style)",
    period: "c. 950 – 1050 CE",
    categories: ["sculpture", "architecture"],
    keywords: "chandela temple kandariya mahadeva nagara shikhara sandstone unesco",
    images: [
      { src: THUMB + "e/e7/1_Khajuraho.jpg/960px-1_Khajuraho.jpg",
        file: "1_Khajuraho.jpg",
        alt: "A sandstone temple at Khajuraho with stacked, rising towers on a high platform",
        caption: "Temples of the Khajuraho group",
        author: "PLBechly", lic: "BY-SA 4.0" },
      { src: THUMB + "5/58/Kandariya_Mahadeva_Temple%2C_Khajuraho%2C_India_10.jpg/960px-Kandariya_Mahadeva_Temple%2C_Khajuraho%2C_India_10.jpg",
        file: "Kandariya_Mahadeva_Temple,_Khajuraho,_India_10.jpg",
        alt: "Close view of rows of carved figures on the outer wall of the Kandariya Mahadeva temple",
        caption: "Sculpted wall bands, Kandariya Mahadeva temple",
        author: "Rohit Sharma", lic: "BY-SA 4.0" }
    ],
    intro: "A group of Hindu and Jain temples built under the Chandela dynasty, famous for exterior walls covered with finely carved figures.",
    history: "Most of the temples were built roughly between 950 and 1050 CE. Sources suggest there were once many more temples; about twenty to twenty-five survive today. The site declined after the Chandela period and attracted wide international attention in the 19th century.",
    features: [
      "Nagara style: curved towers (shikharas) that rise like a mountain range",
      "Sandstone walls carved with deities, celestial women (apsaras), musicians, warriors and daily life",
      "Erotic sculptures form a small part of a much larger sculptural programme",
      "The Kandariya Mahadeva temple (c. 1030 CE) is often seen as the most developed example"
    ],
    people: "Chandela rulers, including kings such as Yashovarman and Dhanga, under whom major temples were built.",
    significance: "Khajuraho is a high point of medieval north Indian temple sculpture and shows Hindu and Jain temples built side by side. UNESCO World Heritage Site since 1986.",
    sources: [
      { label: "UNESCO World Heritage Centre: Khajuraho Group of Monuments", url: "https://whc.unesco.org/en/list/240" },
      { label: "Wikipedia: Khajuraho Group of Monuments", url: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments" }
    ]
  },
  {
    id: "mithila",
    name: "Mithila region (Madhubani)",
    state: "Bihar",
    region: "East",
    lat: 26.3483, lng: 86.0712,
    type: "regional",
    tradition: "Madhubani (Mithila) painting",
    period: "Long-standing household tradition; painted on paper since the 1960s",
    categories: ["folk", "painting"],
    keywords: "madhubani mithila women wall painting kohbar bharni kachni godna tantrik",
    images: [
      { src: THUMB + "e/ef/Madhubani_painting%2C_Bihar.jpg/960px-Madhubani_painting%2C_Bihar.jpg",
        file: "Madhubani_painting,_Bihar.jpg",
        alt: "Madhubani painting with figures and animals drawn in bold double outlines filled with bright patterns",
        caption: "Madhubani painting from Bihar",
        author: "Jean-Etienne Minh-Duy Poirrier", lic: "BY-SA 2.0" },
      { src: THUMB + "3/37/Madhubani_paintings.jpg/960px-Madhubani_paintings.jpg",
        file: "Madhubani_paintings.jpg",
        alt: "Colourful Madhubani murals painted on the walls of Madhubani railway station",
        caption: "Madhubani murals on the walls of Madhubani railway station",
        author: "Sntshkumar750", lic: "BY-SA 4.0" }
    ],
    intro: "Women in the Mithila region of north Bihar (and neighbouring Nepal) have long painted walls and floors for festivals and weddings. The style is named after Madhubani district.",
    history: "The paintings traditionally decorated homes, especially the room prepared for a wedding (kohbar). Skills were passed down mostly from mother to daughter. In the 1960s, at a time of economic hardship, artists began painting on paper and cloth to earn an income, and the art reached national and international audiences.",
    features: [
      "Bold double outlines filled with pattern, leaving little empty space",
      "Natural pigments applied with twigs, nib pens and fingers (now also commercial colours)",
      "Recognised styles include Bharni, Kachni, Tantrik, Godna and Kohbar",
      "Motifs such as fish, peacocks, lotuses, the sun and moon, gods and goddesses"
    ],
    people: "Women artists of Mithila, including Padma Shri awardees Jagdamba Devi (1975), Sita Devi (1981) and Ganga Devi (1984).",
    significance: "A women-led tradition that turned household ritual painting into an internationally recognised art form and a source of livelihood.",
    note: "Mithila is a cultural region, not a single site. The marker shows Madhubani town.",
    sources: [
      { label: "Wikipedia: Madhubani art", url: "https://en.wikipedia.org/wiki/Madhubani_art" }
    ]
  },
  {
    id: "warli",
    name: "Warli region (Palghar)",
    state: "Maharashtra",
    region: "West",
    lat: 19.9690, lng: 72.7300,
    type: "regional",
    tradition: "Warli painting",
    period: "Origins undocumented; widely known since the 1970s",
    categories: ["folk", "painting"],
    keywords: "warli tribal adivasi dahanu palghar thane tarpa rice paste geometric",
    images: [
      { src: THUMB + "b/b9/Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg/960px-Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg",
        file: "Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg",
        alt: "White Warli figures and scenes painted on the reddish-brown wall of a house",
        caption: "Warli painting on a house wall",
        author: "Blackstardust", lic: "BY-SA 4.0" },
      { src: THUMB + "a/a3/Warli_painting.jpg/960px-Warli_painting.jpg",
        file: "Warli_painting.jpg",
        alt: "Warli painting with stick-like human figures dancing in a circle and scenes of village life",
        caption: "Warli painting with dance and village scenes",
        author: "Omrmankar", lic: "BY-SA 4.0" }
    ],
    intro: "The Warli, an Adivasi (tribal) community of the north Konkan region, paint scenes of everyday and ritual life using simple white shapes.",
    history: "Warli painting was traditionally made on the mud walls of homes for occasions such as weddings and harvests. In the 1970s, artists including Jivya Soma Mashe and his son Balu Mashe began painting on paper and cloth, bringing the art to a much wider audience. Claims about the exact age of the tradition are hard to verify.",
    features: [
      "Basic shapes: circles (sun and moon), triangles (mountains and trees) and squares",
      "Human figures made from two triangles joined at the tip",
      "White pigment of rice paste on red-brown walls, applied with a chewed bamboo stick",
      "Circular dance scenes, farming, animals and festivals"
    ],
    people: "Warli artists, notably Jivya Soma Mashe, who helped make the form widely known.",
    significance: "Warli painting shows how a community records its environment, farming and rituals in a distinctive visual language. It has been registered as a Geographical Indication.",
    note: "Warli communities live across several districts. The marker is placed near Dahanu in Palghar district.",
    sources: [
      { label: "Wikipedia: Warli painting", url: "https://en.wikipedia.org/wiki/Warli_painting" },
      { label: "Wikipedia: Jivya Soma Mashe", url: "https://en.wikipedia.org/wiki/Jivya_Soma_Mashe" }
    ]
  },
  {
    id: "puri",
    name: "Puri & Raghurajpur",
    state: "Odisha",
    region: "East",
    lat: 19.8135, lng: 85.8312,
    type: "regional",
    tradition: "Odisha Pattachitra (painting on cloth)",
    period: "Long-standing tradition linked to the Jagannath temple",
    categories: ["painting", "folk"],
    keywords: "pattachitra patachitra jagannath raghurajpur cloth scroll chitrakar",
    images: [
      { src: UPLOAD + "7/7d/Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg",
        file: "Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg",
        alt: "Odisha Pattachitra painting of Radha and Krishna with fine outlines and a decorative border",
        caption: "Pattachitra showing Radha and Krishna",
        author: "Satya Narayan Baral", lic: "BY-SA 4.0" },
      { src: THUMB + "a/a2/Pattachitra_of_Jagannath.jpg/960px-Pattachitra_of_Jagannath.jpg",
        file: "Pattachitra_of_Jagannath.jpg",
        alt: "Pattachitra painting of Jagannath with his siblings Balabhadra and Subhadra",
        caption: "Pattachitra of Jagannath, from Raghurajpur",
        author: "Patrick.zip", lic: "CC0" }
    ],
    intro: "Pattachitra ('cloth picture') painters in and around Puri, especially in the crafts village of Raghurajpur, create finely detailed paintings closely linked to the Jagannath temple.",
    history: "The tradition grew alongside temple worship in Puri, producing ritual images and souvenirs for pilgrims. Painter families (chitrakars) pass on the skills through generations. Painted images are traditionally used in the Jagannath temple during the period when the main deities are withdrawn from public view after their ritual bath.",
    features: [
      "Cotton cloth primed with chalk and a gum made from tamarind seeds (or guar)",
      "Natural colours, for example white made from powdered conch shell",
      "Fine outlines, decorative borders and stylised figures with large eyes",
      "Themes from Jagannath worship, Krishna stories, the Ramayana and the Mahabharata"
    ],
    people: "Chitrakar (painter) families of Raghurajpur, Puri and other centres in Odisha.",
    significance: "A living link between temple ritual, pilgrimage and craft. Raghurajpur is known as a heritage crafts village where many households practise the art.",
    note: "Related 'pata' painting traditions also exist in Bengal; the Odisha style is distinct.",
    sources: [
      { label: "Wikipedia: Pattachitra", url: "https://en.wikipedia.org/wiki/Pattachitra" },
      { label: "Wikipedia: Raghurajpur", url: "https://en.wikipedia.org/wiki/Raghurajpur" }
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    lat: 26.9124, lng: 75.7873,
    type: "city",
    tradition: "Rajasthani (Rajput) court painting",
    period: "Rajput painting c. late 16th – mid 19th century; Jaipur school mainly 18th – 19th century",
    categories: ["painting"],
    keywords: "rajput rajasthani miniature court painting jaipur kalam radha krishna ragamala",
    images: [
      { src: THUMB + "9/98/The_Divine_Couple_Radha-Krishna%2C_circa_1750_CE%2C_Jaipur_Kalam_of_Rajasthani_School_of_Art%2C_National_Museum%2C_New_Delhi.jpg/960px-The_Divine_Couple_Radha-Krishna%2C_circa_1750_CE%2C_Jaipur_Kalam_of_Rajasthani_School_of_Art%2C_National_Museum%2C_New_Delhi.jpg",
        file: "The_Divine_Couple_Radha-Krishna,_circa_1750_CE,_Jaipur_Kalam_of_Rajasthani_School_of_Art,_National_Museum,_New_Delhi.jpg",
        alt: "Jaipur school miniature painting of Radha and Krishna seated together",
        caption: "The Divine Couple, Radha–Krishna, Jaipur school, c. 1750 (National Museum, New Delhi)",
        author: "SpeakingArch", lic: "BY-SA 4.0" },
      { src: UPLOAD + "d/d9/Krishna_and_Radha_dancing_the_Rasalila%2C_Jaipur%2C_19th_century.jpg",
        file: "Krishna_and_Radha_dancing_the_Rasalila,_Jaipur,_19th_century.jpg",
        alt: "Painting of Krishna and Radha dancing the Rasalila surrounded by a circle of dancers",
        caption: "Krishna and Radha dancing the Rasalila, Jaipur, 19th century",
        author: "Anonymous painter", lic: "PD" }
    ],
    intro: "Rajput courts across Rajasthan ran painting workshops. Jaipur, founded in 1727 by Sawai Jai Singh II, developed its own court style, often called the Jaipur kalam.",
    history: "Rajput painting grew out of earlier Hindu painting traditions and changed through contact with Mughal court painting. Regional schools emerged at courts such as Mewar, Bundi, Kota, Kishangarh, Marwar and Amber–Jaipur. In Jaipur, painting flourished in the 18th century, with many devotional Radha–Krishna subjects.",
    features: [
      "Opaque watercolour on paper, often with mineral pigments and gold",
      "Flat areas of bright colour, decorative borders and figures in profile",
      "Subjects: Krishna legends, ragamala (musical modes), court scenes and portraits",
      "Mughal influence visible in portraiture and natural detail"
    ],
    people: "Sawai Jai Singh II (founder of Jaipur); later rulers such as Sawai Pratap Singh (r. 1778–1803), a devotee of Krishna and patron of the arts; court painters of the workshop (suratkhana).",
    significance: "Jaipur represents the wider Rajasthani tradition, one of the richest bodies of Indian miniature painting.",
    note: "Jaipur stands for a regional tradition: many other Rajasthani courts had their own schools.",
    sources: [
      { label: "Wikipedia: Rajput painting", url: "https://en.wikipedia.org/wiki/Rajput_painting" },
      { label: "Wikipedia: Jaipur", url: "https://en.wikipedia.org/wiki/Jaipur" }
    ]
  },
  {
    id: "srinagar",
    name: "Srinagar",
    state: "Jammu and Kashmir",
    region: "North",
    lat: 34.0837, lng: 74.7973,
    type: "city",
    tradition: "Kashmiri crafts: papier-mâché, shawls, wood carving and manuscript art",
    period: "Craft tradition from c. 15th century; manuscript art notably 18th – 19th century",
    categories: ["crafts", "painting"],
    keywords: "kashmir papier mache pashmina shawl kani walnut wood carving khatamband manuscript zain-ul-abidin",
    images: [
      { src: THUMB + "f/f3/Papier-m%C3%A2ch%C3%A9_Walls_of_Shah-e-Hamdan_%2814594288023%29.jpg/960px-Papier-m%C3%A2ch%C3%A9_Walls_of_Shah-e-Hamdan_%2814594288023%29.jpg",
        file: "Papier-mâché_Walls_of_Shah-e-Hamdan_(14594288023).jpg",
        alt: "Interior walls of the Shah-e-Hamdan shrine in Srinagar covered in painted floral papier-mâché panels",
        caption: "Painted papier-mâché interior of the Khanqah of Shah-e-Hamdan, Srinagar",
        author: "Mike Prince", lic: "BY 2.0" },
      { src: THUMB + "9/98/19th-century_papier-m%C3%A2ch%C3%A9_bowl_from_Kashmir_01.jpg/960px-19th-century_papier-m%C3%A2ch%C3%A9_bowl_from_Kashmir_01.jpg",
        file: "19th-century_papier-mâché_bowl_from_Kashmir_01.jpg",
        alt: "A 19th-century Kashmiri papier-mâché bowl painted with dense floral patterns",
        caption: "19th-century papier-mâché bowl from Kashmir (Museum of Art Collections, Bucharest)",
        author: "Joe Mabel", lic: "BY-SA 4.0" }
    ],
    intro: "Srinagar is a historic centre of Kashmiri craft, known for painted papier-mâché, fine shawls, walnut-wood carving and decorated manuscripts.",
    history: "Kashmiri tradition credits Sultan Zain-ul-Abidin (15th century) with encouraging crafts such as shawl and carpet weaving, papier-mâché and wood carving, many with links to Persian and Central Asian practice. Kashmir also produced finely illuminated manuscripts, notably in the 18th and 19th centuries.",
    features: [
      "Papier-mâché: paper pulp shaped, layered and painted with flowers and birds, often with gold detail",
      "Pashmina and kani shawls woven with intricate paisley (buta) designs",
      "Walnut-wood carving and khatamband (geometric wooden) ceilings",
      "Floral borders and illumination in manuscripts"
    ],
    people: "Sultan Zain-ul-Abidin (traditionally credited as a patron of crafts); hereditary artisan families of painters, weavers and carvers.",
    significance: "Kashmiri crafts show Persianate design blended with local materials and skills. The Khanqah-e-Moula (Shah-e-Hamdan) shrine in Srinagar displays papier-mâché decoration on an architectural scale.",
    note: "The bowl shown is in a museum in Romania; it is an example of the Kashmiri style rather than an object from Srinagar today.",
    sources: [
      { label: "Wikipedia: Srinagar (culture and crafts)", url: "https://en.wikipedia.org/wiki/Srinagar" },
      { label: "Wikipedia: Khanqah-e-Moula", url: "https://en.wikipedia.org/wiki/Khanqah-e-Moula" }
    ]
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    lat: 22.5726, lng: 88.3639,
    type: "city",
    tradition: "Bengal School and modern Indian art",
    period: "Early 20th century onwards",
    categories: ["painting"],
    keywords: "bengal school abanindranath tagore havell nandalal bose wash technique modern bharat mata calcutta",
    images: [
      { src: THUMB + "3/3a/Bharat_Mata_by_Abanindranath_Tagore.jpg/960px-Bharat_Mata_by_Abanindranath_Tagore.jpg",
        file: "Bharat_Mata_by_Abanindranath_Tagore.jpg",
        alt: "Painting of a saffron-robed woman with four arms holding a book, sheaf of rice, cloth and prayer beads",
        caption: "Bharat Mata by Abanindranath Tagore (1905)",
        author: "Abanindranath Tagore", lic: "PD" }
    ],
    intro: "In the early 20th century, Kolkata (then Calcutta) was the birthplace of the Bengal School, a movement that looked for a modern Indian style rooted in Asian traditions.",
    history: "Abanindranath Tagore and E. B. Havell, principal of the Government School of Art in Calcutta, encouraged artists to learn from Mughal, Rajput and Ajanta painting rather than European academic art. The movement grew during the Swadeshi period, and Abanindranath's Bharat Mata (1905) became one of its best-known images.",
    features: [
      "Soft 'wash' technique: thin layers of watercolour, partly influenced by contact with Japanese artists",
      "Muted, atmospheric colours and lyrical lines",
      "Subjects from Indian history, mythology and literature",
      "Small formats inspired by miniature painting"
    ],
    people: "Abanindranath Tagore, E. B. Havell, Nandalal Bose and Asit Kumar Haldar.",
    significance: "The Bengal School was an important step towards modern Indian art. Kolkata remained a major art centre, later linked with artists such as Jamini Roy and groups such as the Calcutta Group.",
    sources: [
      { label: "Wikipedia: Bengal School of Art", url: "https://en.wikipedia.org/wiki/Bengal_School_of_Art" },
      { label: "Wikipedia: Bharat Mata (painting)", url: "https://en.wikipedia.org/wiki/Bharat_Mata_(painting)" },
      { label: "Wikipedia: Abanindranath Tagore", url: "https://en.wikipedia.org/wiki/Abanindranath_Tagore" }
    ]
  },
  {
    id: "kochi",
    name: "Kochi (Mattancherry Palace)",
    state: "Kerala",
    region: "South",
    lat: 9.9583, lng: 76.2594,
    type: "monument",
    tradition: "Kerala mural painting",
    period: "Mattancherry murals c. 16th – 17th century and later",
    categories: ["painting"],
    keywords: "kerala mural mattancherry dutch palace ramayana panchavarna temple fresco",
    images: [
      { src: THUMB + "d/dd/Mattancherry_Palace-16-17th_Century_mural_paintings-Scenes_from_the_Ramayana-WUS09250.jpg/960px-Mattancherry_Palace-16-17th_Century_mural_paintings-Scenes_from_the_Ramayana-WUS09250.jpg",
        file: "Mattancherry_Palace-16-17th_Century_mural_paintings-Scenes_from_the_Ramayana-WUS09250.jpg",
        alt: "Densely painted mural with Ramayana figures in red, yellow, green and black, Mattancherry Palace",
        caption: "Ramayana murals, Mattancherry Palace (c. 16th–17th century)",
        author: "Rainer Halama", lic: "BY-SA 4.0" },
      { src: UPLOAD + "2/2d/Kris_mural7.jpg",
        file: "Kris_mural7.jpg",
        alt: "Kerala mural of Gajendra Moksham showing Vishnu rescuing an elephant from a crocodile",
        caption: "Gajendra Moksham mural, Krishnapuram Palace (Kayamkulam, Kerala)",
        author: "Rajith Mohan", lic: "BY-SA 3.0" }
    ],
    intro: "The Mattancherry Palace in Kochi preserves some of Kerala's finest murals, including large panels illustrating the Ramayana.",
    history: "Kerala murals decorated temples and palaces across the region. The Mattancherry Palace was built in the mid-16th century and later renovated by the Dutch, which is why it is also called the 'Dutch Palace'. Its murals are generally dated from the 16th–17th centuries onwards, with later additions.",
    features: [
      "A traditional five-colour palette (panchavarna) from mineral and plant sources",
      "Flowing outlines and densely filled compositions",
      "Figures with elaborate crowns, jewellery and stylised faces",
      "Themes from the Ramayana, the Puranas and Krishna stories"
    ],
    people: "The rajas of Kochi (patrons of the palace); temple painters working from traditional manuals.",
    significance: "Kerala murals are a major regional wall-painting tradition. Other celebrated examples are at the Ettumanoor Shiva temple and the Vadakkumnathan temple, and the art is still taught today.",
    note: "The second image is from Krishnapuram Palace, Kayamkulam, showing the same Kerala mural tradition.",
    sources: [
      { label: "Wikipedia: Kerala mural painting", url: "https://en.wikipedia.org/wiki/Kerala_mural_painting" },
      { label: "Wikipedia: Mattancherry Palace", url: "https://en.wikipedia.org/wiki/Mattancherry_Palace" }
    ]
  },
  {
    id: "hyderabad",
    name: "Hyderabad (Golconda)",
    state: "Telangana",
    region: "South",
    lat: 17.3850, lng: 78.4867,
    type: "city",
    tradition: "Deccani miniature painting",
    period: "c. late 16th – mid 17th century; revival in the 18th century",
    categories: ["painting"],
    keywords: "deccan deccani golconda qutb shahi bijapur miniature salar jung nizam",
    images: [
      { src: UPLOAD + "0/0f/Finch%2C_Poppies%2C_Dragonfly%2C_and_Bee_India_%28Deccan%2C_Golconda%29.jpg",
        file: "Finch,_Poppies,_Dragonfly,_and_Bee_India_(Deccan,_Golconda).jpg",
        alt: "Golconda painting of a finch among poppies with a dragonfly and bee in fanciful colours",
        caption: "Finch, poppies, dragonfly and bee, Golconda (Deccan)",
        author: "Unknown Deccani painter", lic: "PD" },
      { src: THUMB + "3/34/Sultan-Ibrahim-Adil-Shah-II-of-Bijapur._Miniature._Deccan%2C_Bijapur%3B_c._1590._The_David_Collection._%28cropped%29.jpg/960px-Sultan-Ibrahim-Adil-Shah-II-of-Bijapur._Miniature._Deccan%2C_Bijapur%3B_c._1590._The_David_Collection._%28cropped%29.jpg",
        file: "Sultan-Ibrahim-Adil-Shah-II-of-Bijapur._Miniature._Deccan,_Bijapur;_c._1590._The_David_Collection._(cropped).jpg",
        alt: "Deccani miniature portrait of Sultan Ibrahim Adil Shah II of Bijapur in rich colours",
        caption: "Sultan Ibrahim Adil Shah II, Bijapur, c. 1590 (The David Collection)",
        author: "Unknown Deccani painter", lic: "PD" }
    ],
    intro: "The Deccan Sultanates of Bijapur, Golconda and Ahmadnagar developed a distinctive miniature painting style. Golconda lies on the western edge of present-day Hyderabad.",
    history: "Hyderabad was founded in 1591 by Muhammad Quli Qutb Shah of Golconda. Deccani painting flourished from the late 16th to the mid-17th century, combining Persian, Ottoman, Mughal and local south Indian influences. After the Mughal conquest, painting revived in the 18th century, by then centred on Hyderabad.",
    features: [
      "Rich colours, generous use of gold and tall, elegant figures",
      "Dreamlike landscapes and fanciful plants and animals",
      "Portraits of sultans and nobles",
      "Illustrated poetry manuscripts"
    ],
    people: "The Qutb Shahi sultans of Golconda; Ibrahim Adil Shah II of Bijapur, a famous patron; the later Asaf Jahi (Nizam) court.",
    significance: "Deccani painting shows the Deccan as a meeting point of Persianate and Indian cultures. The Salar Jung Museum in Hyderabad holds an illustrated collection of Muhammad Quli Qutb Shah's poetry (Kulliyat).",
    note: "Deccani painting was made at several courts. The second image comes from Bijapur (Karnataka) and shows the wider style.",
    sources: [
      { label: "Wikipedia: Deccan painting", url: "https://en.wikipedia.org/wiki/Deccan_painting" },
      { label: "Wikipedia: Salar Jung Museum", url: "https://en.wikipedia.org/wiki/Salar_Jung_Museum" }
    ]
  },
  {
    id: "sanchi",
    name: "Sanchi",
    state: "Madhya Pradesh",
    region: "Central",
    lat: 23.4794, lng: 77.7399,
    type: "monument",
    tradition: "Buddhist stupas and relief sculpture",
    period: "3rd century BCE onwards; gateways c. 1st century BCE",
    categories: ["architecture", "sculpture"],
    keywords: "stupa ashoka torana gateway buddhist relief aniconic satavahana shunga unesco",
    images: [
      { src: THUMB + "1/12/East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG/960px-East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG",
        file: "East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG",
        alt: "The carved stone East Gateway (torana) in front of the dome of the Great Stupa at Sanchi",
        caption: "East Gateway of the Great Stupa (Stupa 1)",
        author: "Biswarup Ganguly", lic: "BY 3.0" }
    ],
    intro: "A hilltop group of Buddhist monuments whose Great Stupa and carved stone gateways are among the oldest stone structures in India.",
    history: "The Great Stupa was first commissioned by the Mauryan emperor Ashoka in the 3rd century BCE. It was enlarged and cased in stone in the following centuries, and in the 1st century BCE four elaborately carved gateways (toranas) were added, associated with the Satavahana period.",
    features: [
      "Hemispherical dome (anda) with a railing and a stone umbrella (chhatra)",
      "Four gateways covered with relief carvings of the Buddha's life and Jataka tales",
      "The Buddha is shown through symbols such as footprints, an empty throne, a wheel or the Bodhi tree",
      "An inscription states that ivory carvers of nearby Vidisha made one of the reliefs"
    ],
    people: "Emperor Ashoka (Maurya); later Shunga- and Satavahana-period patrons; the guild of ivory carvers of Vidisha.",
    significance: "Sanchi is an early masterpiece of Buddhist narrative relief and shows how stories were told before the Buddha was commonly shown in human form. UNESCO World Heritage Site since 1989.",
    sources: [
      { label: "UNESCO World Heritage Centre: Buddhist Monuments at Sanchi", url: "https://whc.unesco.org/en/list/524" },
      { label: "Wikipedia: Sanchi Stupa", url: "https://en.wikipedia.org/wiki/Sanchi" }
    ]
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    region: "South",
    lat: 12.6169, lng: 80.1993,
    type: "monument",
    tradition: "Pallava rock-cut and structural architecture",
    period: "c. 7th – 8th century CE",
    categories: ["architecture", "sculpture"],
    keywords: "pallava shore temple rathas arjuna penance descent of the ganges mamallapuram unesco",
    images: [
      { src: THUMB + "6/6a/Shore_Temple_01.jpg/960px-Shore_Temple_01.jpg",
        file: "Shore_Temple_01.jpg",
        alt: "The granite Shore Temple at Mahabalipuram with two pyramidal towers by the sea",
        caption: "The Shore Temple (c. early 8th century)",
        author: "Bernard Gagnon", lic: "BY-SA 3.0" },
      { src: THUMB + "6/69/Descent_of_the_Ganges_01.jpg/960px-Descent_of_the_Ganges_01.jpg",
        file: "Descent_of_the_Ganges_01.jpg",
        alt: "Huge open-air rock relief crowded with gods, people and elephants, known as the Descent of the Ganges",
        caption: "'Descent of the Ganges' or 'Arjuna's Penance', open-air relief",
        author: "Bernard Gagnon", lic: "BY-SA 3.0" }
    ],
    intro: "A port town of the Pallava dynasty with cave temples, monolithic 'rathas', a giant open-air relief and the Shore Temple.",
    history: "Much of the site is linked with Narasimhavarman I (also called Mamalla) in the 7th century, after whom the town is named. The Shore Temple was built around the early 8th century under Narasimhavarman II (Rajasimha).",
    features: [
      "Pancha Rathas: five temple forms each carved from a single rock",
      "The 'Descent of the Ganges' / 'Arjuna's Penance': a huge relief carved across two boulders",
      "The Shore Temple: an early structural stone temple in the Dravidian style",
      "Mandapas (cave halls) with sculpted mythological panels"
    ],
    people: "Pallava kings Mahendravarman I, Narasimhavarman I (Mamalla) and Narasimhavarman II (Rajasimha).",
    significance: "Mahabalipuram shows the shift from rock-cut to built stone temples and marks an important stage in the development of Dravidian temple architecture. UNESCO World Heritage Site since 1984.",
    sources: [
      { label: "UNESCO World Heritage Centre: Group of Monuments at Mahabalipuram", url: "https://whc.unesco.org/en/list/249" },
      { label: "Wikipedia: Group of Monuments at Mahabalipuram", url: "https://en.wikipedia.org/wiki/Group_of_Monuments_at_Mahabalipuram" }
    ]
  },
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    state: "Madhya Pradesh",
    region: "Central",
    lat: 22.9387, lng: 77.6122,
    type: "monument",
    tradition: "Prehistoric rock painting",
    period: "Earliest paintings often dated to the Mesolithic; later layers into historic times",
    categories: ["painting"],
    keywords: "prehistoric rock art mesolithic palaeolithic shelters wakankar hunting unesco",
    images: [
      { src: THUMB + "9/91/Rock_Shelter_8%2C_Bhimbetka_02.jpg/960px-Rock_Shelter_8%2C_Bhimbetka_02.jpg",
        file: "Rock_Shelter_8,_Bhimbetka_02.jpg",
        alt: "Red and white figures of animals and people painted on the rock ceiling of Shelter 8 at Bhimbetka",
        caption: "Paintings in Rock Shelter 8",
        author: "Bernard Gagnon", lic: "BY-SA 3.0" },
      { src: THUMB + "4/47/Rock_painting%2C_Bhimbetka%2C_Raisen_district%2C_Madhya_Pradesh%2C_India.jpg/960px-Rock_painting%2C_Bhimbetka%2C_Raisen_district%2C_Madhya_Pradesh%2C_India.jpg",
        file: "Rock_painting,_Bhimbetka,_Raisen_district,_Madhya_Pradesh,_India.jpg",
        alt: "Close view of a prehistoric rock painting in red pigment at Bhimbetka",
        caption: "Rock painting, Bhimbetka",
        author: "Yann", lic: "BY-SA 4.0" }
    ],
    intro: "Hundreds of natural rock shelters in the Vindhya hills preserve some of the oldest known paintings in India.",
    history: "Archaeologist V. S. Wakankar reported the shelters in 1957. More than 700 shelters have since been identified, and around 400 contain paintings. People used the area over a very long period. The earliest paintings are often dated to the Mesolithic, though exact dates are debated, and painting continued into historic times.",
    features: [
      "Paintings in red and white made from natural mineral pigments",
      "Scenes of hunting, dancing, horse riding and animals such as bison and deer",
      "Stick-like and geometric human figures",
      "Several layers of paintings from different periods on the same rock"
    ],
    people: "Prehistoric hunter-gatherer communities; archaeologist V. S. Wakankar, who brought the site to scholarly attention.",
    significance: "Bhimbetka shows that painting in India goes back thousands of years before temples and manuscripts. UNESCO World Heritage Site since 2003.",
    sources: [
      { label: "UNESCO World Heritage Centre: Rock Shelters of Bhimbetka", url: "https://whc.unesco.org/en/list/925" },
      { label: "Wikipedia: Bhimbetka rock shelters", url: "https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters" }
    ]
  }
];

/* General references shown in the Sources section */
const GENERAL_SOURCES = [
  { label: "UNESCO World Heritage Centre: India", url: "https://whc.unesco.org/en/statesparties/in" },
  { label: "Wikimedia Commons: source of all photographs", url: "https://commons.wikimedia.org/" },
  { label: "Leaflet: open-source JavaScript map library", url: "https://leafletjs.com/" },
  { label: "OpenStreetMap: map data", url: "https://www.openstreetmap.org/copyright" }
];

/* ---------------------------------------------------------
   3. HELPERS
   --------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const num = (i) => String(i + 1).padStart(2, "0");

/** SVG shape for a category (used for markers, legend, chips, tags). */
function shapeSVG(catKey, { size = 14, label = "" } = {}) {
  const c = CATEGORIES[catKey];
  const s = `fill="${c.color}" stroke="#fff" stroke-width="2"`;
  const shapes = {
    circle:   `<circle cx="12" cy="12" r="10" ${s}/>`,
    square:   `<rect x="2.5" y="2.5" width="19" height="19" rx="3" ${s}/>`,
    triangle: `<path d="M12 1.5 L23 21.5 H1 Z" ${s} stroke-linejoin="round"/>`,
    diamond:  `<path d="M12 1 L23 12 L12 23 L1 12 Z" ${s} stroke-linejoin="round"/>`,
    hexagon:  `<path d="M6.5 2.5 H17.5 L23 12 L17.5 21.5 H6.5 L1 12 Z" ${s} stroke-linejoin="round"/>`
  };
  return `<svg class="shape" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${shapes[c.shape]}</svg>${label}`;
}

const primaryCat = (p) => p.categories[0];
const licenceOf = (img) => LIC[img.lic];
const commonsUrl = (img) => COMMONS + encodeURI(img.file).replace(/,/g, "%2C").replace(/;/g, "%3B");

/** Make an <img> that swaps in a styled fallback if it fails to load. */
function imgHTML(img, cls, { lazy = true } = {}) {
  return `<img class="${cls}" src="${esc(img.src)}" alt="${esc(img.alt)}" ${lazy ? 'loading="lazy"' : ""} decoding="async" referrerpolicy="no-referrer" data-fallback="1">`;
}
function attachFallbacks(root) {
  root.querySelectorAll('img[data-fallback]').forEach((el) => {
    el.addEventListener("error", () => {
      const div = document.createElement("div");
      div.className = el.className + " img-fallback";
      div.setAttribute("role", "img");
      div.setAttribute("aria-label", el.alt);
      div.textContent = "Image unavailable. See the credits below for the original file.";
      el.replaceWith(div);
    }, { once: true });
  });
}

/* ---------------------------------------------------------
   4. STATE
   --------------------------------------------------------- */
const state = {
  query: "",
  category: "all",
  selected: null,      // place id
  imageIndex: 0
};

let map = null;
const markers = {};    // id -> Leaflet marker
const INDIA_BOUNDS = [[6.5, 68.0], [35.8, 97.5]];

/* ---------------------------------------------------------
   5. FILTERING
   --------------------------------------------------------- */
function matches(p) {
  const okCat = state.category === "all" || p.categories.includes(state.category);
  if (!okCat) return false;
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  const hay = [p.name, p.state, p.region, p.tradition, p.keywords, PLACE_TYPES[p.type],
    ...p.categories.map((c) => CATEGORIES[c].label)].join(" ").toLowerCase();
  return q.split(/\s+/).every((word) => hay.includes(word));
}
const visiblePlaces = () => PLACES.filter(matches);

/* ---------------------------------------------------------
   6. MAP
   --------------------------------------------------------- */
function initMap() {
  const el = $("#map");
  if (typeof L === "undefined") {
    el.innerHTML = '<div class="map-error"><p><strong>The map could not load.</strong><br>An internet connection is needed for the map tiles and the Leaflet library. The collection and details below still work.</p></div>';
    return;
  }

  map = L.map(el, {
    zoomSnap: 0.25,
    minZoom: 4,
    maxZoom: 12,
    maxBounds: [[0, 55], [42, 110]],
    maxBoundsViscosity: 0.8,
    scrollWheelZoom: false   // avoid hijacking page scroll; enabled on map click
  });

  // Two free, key-less base maps. OpenStreetMap is the default.
  const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });
  const topo = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: 'Tiles &copy; Esri and contributors',
    maxZoom: 19
  });
  osm.addTo(map);
  L.control.layers({ "OpenStreetMap": osm, "Terrain (Esri World Topo)": topo }, null, { position: "topright" }).addTo(map);
  L.control.scale({ imperial: false, position: "bottomright" }).addTo(map);

  map.fitBounds(INDIA_BOUNDS, { padding: [10, 10] });
  map.on("click", () => map.scrollWheelZoom.enable());
  map.on("mouseout", () => map.scrollWheelZoom.disable());

  PLACES.forEach((p, i) => {
    const cat = primaryCat(p);
    const icon = L.divIcon({
      className: "art-marker",
      html: `<span class="pin">${shapeSVG(cat, { size: 26 })}<span class="num">${i + 1}</span></span>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      tooltipAnchor: [0, -14]
    });
    const m = L.marker([p.lat, p.lng], {
      icon,
      keyboard: true,
      title: "",
      alt: `${p.name}: ${p.tradition}`,
      riseOnHover: true
    }).addTo(map);

    m.bindTooltip(`${esc(p.name)}<small>${esc(p.tradition)}</small>`, {
      direction: "top", className: "art-tip", opacity: 1
    });
    m.on("click", () => selectPlace(p.id, { from: "map" }));
    m.on("add", () => decorateMarker(m, p));
    decorateMarker(m, p);
    markers[p.id] = m;
  });
}

/** Give each marker element proper button semantics + keyboard support. */
function decorateMarker(m, p) {
  const el = m.getElement();
  if (!el || el.dataset.ready) return;
  el.dataset.ready = "1";
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", `${p.name}, ${p.state}: ${p.tradition}`);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectPlace(p.id, { from: "map" });
    }
  });
  if (state.selected === p.id) el.classList.add("is-selected");
}

function updateMarkers() {
  if (!map) return;
  const vis = new Set(visiblePlaces().map((p) => p.id));
  PLACES.forEach((p) => {
    const m = markers[p.id];
    const show = vis.has(p.id);
    if (show && !map.hasLayer(m)) m.addTo(map);
    if (!show && map.hasLayer(m)) m.remove();
    const el = m.getElement();
    if (el) el.classList.toggle("is-selected", state.selected === p.id);
  });
}

function fitToVisible() {
  if (!map) return;
  const vis = visiblePlaces();
  if (vis.length === 0 || vis.length === PLACES.length) {
    map.flyToBounds(INDIA_BOUNDS, { padding: [10, 10], duration: 0.6 });
  } else if (vis.length === 1) {
    map.flyTo([vis[0].lat, vis[0].lng], 7, { duration: 0.6 });
  } else {
    map.flyToBounds(L.latLngBounds(vis.map((p) => [p.lat, p.lng])), { padding: [60, 60], maxZoom: 7, duration: 0.6 });
  }
}

/* ---------------------------------------------------------
   7. FILTER CHIPS + LEGEND
   --------------------------------------------------------- */
function renderFilters() {
  const wrap = $("#filters");
  const chips = [`<button type="button" class="chip" data-cat="all" aria-pressed="true">All</button>`];
  Object.entries(CATEGORIES).forEach(([key, c]) => {
    chips.push(`<button type="button" class="chip" data-cat="${key}" aria-pressed="false">${shapeSVG(key, { size: 12 })}${c.label}</button>`);
  });
  wrap.innerHTML = chips.join("");
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.category = btn.dataset.cat;
    wrap.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    applyFilters(true);
  });
}

function renderLegend() {
  const items = Object.entries(CATEGORIES).map(([key, c]) =>
    `<li>${shapeSVG(key, { size: 14 })}<span class="legend-label">${c.label}</span></li>`);
  items.push(`<li class="legend-selected"><span class="ring" aria-hidden="true"></span><span class="legend-label">Selected place</span></li>`);
  $("#legend-list").innerHTML = items.join("");
}

/* ---------------------------------------------------------
   8. COLLECTION CARDS
   --------------------------------------------------------- */
function renderCards() {
  const list = $("#cards");
  list.innerHTML = PLACES.map((p, i) => {
    const cat = primaryCat(p);
    return `<li data-id="${p.id}">
      <button type="button" class="card" data-id="${p.id}" aria-label="${esc(p.name)}, ${esc(p.state)}: ${esc(p.tradition)}">
        ${imgHTML(p.images[0], "thumb")}
        <span class="card-body">
          <span class="card-num">${shapeSVG(cat, { size: 12 })} ${num(i)} · ${CATEGORIES[cat].label}</span>
          <h3>${esc(p.name)}</h3>
          <span class="card-state">${esc(p.state)} · ${PLACE_TYPES[p.type]}</span>
          <span class="card-art">${esc(p.tradition)}</span>
        </span>
      </button>
    </li>`;
  }).join("");
  attachFallbacks(list);
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".card");
    if (btn) selectPlace(btn.dataset.id, { from: "card" });
  });
}

function updateCards() {
  const vis = new Set(visiblePlaces().map((p) => p.id));
  document.querySelectorAll("#cards > li").forEach((li) => {
    li.hidden = !vis.has(li.dataset.id);
    li.querySelector(".card").setAttribute("aria-current", String(li.dataset.id === state.selected));
  });
  $("#empty").hidden = vis.size !== 0;
  const n = vis.size;
  const catLabel = state.category === "all" ? "" : ` in ${CATEGORIES[state.category].label}`;
  const qLabel = state.query.trim() ? ` matching “${state.query.trim()}”` : "";
  $("#result-count").textContent = n === PLACES.length
    ? `Showing all ${n} locations.`
    : `Showing ${n} of ${PLACES.length} locations${catLabel}${qLabel}.`;
}

/* ---------------------------------------------------------
   9. DETAIL PANEL
   --------------------------------------------------------- */
function renderWelcome() {
  const picks = ["ajanta", "srinagar", "mithila", "thanjavur", "kolkata"];
  $("#detail").innerHTML = `
    <div class="welcome">
      <p class="eyebrow">Getting started</p>
      <h3>Choose a place to explore</h3>
      <p>Each marker shows an art tradition. Its shape and colour show the main category (see the legend on the map).</p>
      <ol>
        <li>Click a marker or a card in the collection.</li>
        <li>Read the tradition, period, history and techniques.</li>
        <li>Use <strong>search</strong> or the <strong>category filters</strong> to compare regions.</li>
        <li>Press <strong>Show all</strong> to reset the map.</li>
      </ol>
      <p class="eyebrow">Try one from each region</p>
      <div class="quick-picks">
        ${picks.map((id) => {
          const p = PLACES.find((x) => x.id === id);
          return `<button type="button" data-id="${id}">${esc(p.name.split(" (")[0])} · ${p.region}</button>`;
        }).join("")}
      </div>
    </div>`;
}

function renderDetail() {
  const p = PLACES.find((x) => x.id === state.selected);
  if (!p) { renderWelcome(); return; }
  const idx = PLACES.indexOf(p);
  const img = p.images[state.imageIndex] || p.images[0];
  const lic = licenceOf(img);

  $("#detail").innerHTML = `
    <div class="detail-top">
      <div class="group">
        <button type="button" class="icon-btn" data-nav="-1" aria-label="Previous location">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <span class="count">${num(idx)} / ${PLACES.length}</span>
        <button type="button" class="icon-btn" data-nav="1" aria-label="Next location">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <button type="button" class="icon-btn" data-close aria-label="Close details">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>

    <div class="gallery">
      <figure>
        ${imgHTML(img, "main-img", { lazy: false })}
        ${p.images.length > 1 ? `<div class="thumbs" role="group" aria-label="Choose image">
          ${p.images.map((im, k) => `<button type="button" data-img="${k}" aria-label="Show image ${k + 1}: ${esc(im.caption)}" aria-current="${k === state.imageIndex}">${imgHTML(im, "")}</button>`).join("")}
        </div>` : ""}
        <figcaption>
          <span class="cap">${esc(img.caption)}</span>
          ${esc(img.author)} · ${lic.url ? `<a href="${lic.url}" target="_blank" rel="noopener">${lic.name}</a>` : lic.name}
          · <a href="${commonsUrl(img)}" target="_blank" rel="noopener">Wikimedia Commons</a>
        </figcaption>
      </figure>
    </div>

    <div class="detail-body">
      <h3 class="place" id="detail-title">${esc(p.name)}</h3>
      <p class="state">${esc(p.state)} · ${p.region} India</p>
      <div class="tags">
        ${p.categories.map((c) => `<span class="tag">${shapeSVG(c, { size: 10 })}${CATEGORIES[c].label}</span>`).join("")}
        <span class="tag type">${PLACE_TYPES[p.type]}</span>
      </div>
      <dl class="meta">
        <dt>Tradition</dt><dd>${esc(p.tradition)}</dd>
        <dt>Period</dt><dd>${esc(p.period)}</dd>
      </dl>

      <p class="intro">${esc(p.intro)}</p>

      <h4>Historical background</h4>
      <p>${esc(p.history)}</p>

      <h4>Visual characteristics &amp; techniques</h4>
      <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>

      <h4>Artists, patrons &amp; dynasties</h4>
      <p>${esc(p.people)}</p>

      <h4>Cultural significance</h4>
      <p>${esc(p.significance)}</p>

      ${p.note ? `<p class="note"><strong>Note:</strong> ${esc(p.note)}</p>` : ""}

      <h4>References</h4>
      <ul class="refs">${p.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}</ul>
    </div>`;
  attachFallbacks($("#detail"));
}

/* ---------------------------------------------------------
   10. ACTIONS
   --------------------------------------------------------- */
function selectPlace(id, { from = "" } = {}) {
  const p = PLACES.find((x) => x.id === id);
  if (!p) return;
  // if the place is hidden by the current filter, clear the filter so it is visible
  if (!matches(p)) resetFilters(false);
  state.selected = id;
  state.imageIndex = 0;
  renderDetail();
  updateMarkers();
  updateCards();
  history.replaceState(null, "", "#" + id);

  if (map) {
    const m = markers[id];
    map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 6), { duration: 0.6 });
    m.openTooltip();
  }

  const detail = $("#detail");
  detail.scrollTop = 0;
  // on narrow screens the detail panel sits below the map: bring it into view
  if (window.matchMedia("(max-width: 900px)").matches) {
    detail.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (from === "card") {
    $("#explore").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (from !== "map") detail.focus({ preventScroll: true });
}

function closeDetail() {
  const prev = state.selected;
  state.selected = null;
  renderWelcome();
  updateMarkers();
  updateCards();
  history.replaceState(null, "", location.pathname + location.search);
  if (map) {
    if (prev && markers[prev]) markers[prev].closeTooltip();
    fitToVisible();
  }
  // return focus to the marker that was selected, if any
  const el = prev && markers[prev] && markers[prev].getElement();
  if (el) el.focus({ preventScroll: true });
}

function stepPlace(dir) {
  const idx = PLACES.findIndex((x) => x.id === state.selected);
  const next = PLACES[(idx + dir + PLACES.length) % PLACES.length];
  selectPlace(next.id, { from: "nav" });
}

function applyFilters(refit) {
  updateMarkers();
  updateCards();
  // close the detail if its place is filtered out
  if (state.selected && !visiblePlaces().some((p) => p.id === state.selected)) {
    state.selected = null;
    renderWelcome();
    updateMarkers();
    updateCards();
    history.replaceState(null, "", location.pathname + location.search);
  }
  if (refit) fitToVisible();
}

function resetFilters(refit = true) {
  state.query = "";
  state.category = "all";
  $("#search").value = "";
  document.querySelectorAll("#filters .chip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === "all")));
  applyFilters(refit);
}

function resetAll() {
  resetFilters(false);
  closeDetail();
}

/* ---------------------------------------------------------
   11. ABOUT + SOURCES (generated from data)
   --------------------------------------------------------- */
function renderRegions() {
  const order = ["North", "West", "Central", "East", "South"];
  const max = Math.max(...order.map((r) => PLACES.filter((p) => p.region === r).length));
  $("#region-bars").innerHTML = order.map((r) => {
    const ps = PLACES.filter((p) => p.region === r);
    return `<div class="region-row">
      <span>${r}</span>
      <span class="track"><span class="fill" style="width:${(ps.length / max) * 100}%"></span></span>
      <span class="n">${ps.length}</span>
      <span class="names">${ps.map((p) => esc(p.name.split(" (")[0])).join(", ")}</span>
    </div>`;
  }).join("");
}

function renderSources() {
  const blocks = PLACES.map((p) =>
    `<li><span class="grp">${esc(p.name)}:</span> ${p.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.label.replace(/^.*?: /, ""))}</a> <span class="small">(${esc(s.label.split(":")[0])})</span>`).join("; ")}</li>`);
  blocks.push(...GENERAL_SOURCES.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`));
  $("#source-list").innerHTML = blocks.join("");

  const credits = [];
  PLACES.forEach((p) => p.images.forEach((img) => {
    const l = licenceOf(img);
    credits.push(`<li><a href="${commonsUrl(img)}" target="_blank" rel="noopener">${esc(img.caption)}</a>: ${esc(img.author)}, ${l.url ? `<a href="${l.url}" target="_blank" rel="noopener">${l.name}</a>` : l.name}, via Wikimedia Commons.</li>`);
  }));
  $("#credit-list").innerHTML = credits.join("");
}

/* ---------------------------------------------------------
   12. EVENTS + INIT
   --------------------------------------------------------- */
function bindEvents() {
  let t;
  $("#search").addEventListener("input", (e) => {
    state.query = e.target.value;
    clearTimeout(t);
    t = setTimeout(() => applyFilters(true), 180);
  });
  $("#search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const vis = visiblePlaces();
      if (vis.length === 1) selectPlace(vis[0].id, { from: "search" });
    }
  });
  $("#reset").addEventListener("click", resetAll);
  $("#empty-reset").addEventListener("click", () => resetFilters(true));

  $("#detail").addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav) return stepPlace(Number(nav.dataset.nav));
    if (e.target.closest("[data-close]")) return closeDetail();
    const pick = e.target.closest(".quick-picks button");
    if (pick) return selectPlace(pick.dataset.id, { from: "pick" });
    const th = e.target.closest("[data-img]");
    if (th) {
      state.imageIndex = Number(th.dataset.img);
      const scroll = $("#detail").scrollTop;
      renderDetail();
      $("#detail").scrollTop = scroll;
      $(`#detail [data-img="${state.imageIndex}"]`).focus();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.selected) closeDetail();
  });

  // mobile nav
  const toggle = $(".nav-toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  // deep links: changing the URL hash (e.g. #ajanta) selects that place
  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (PLACES.some((p) => p.id === id) && id !== state.selected) selectPlace(id, { from: "hash" });
  });

  // keep the map sized correctly when the layout changes
  window.addEventListener("resize", () => map && map.invalidateSize());
}

function init() {
  $("#stat-places").textContent = PLACES.length;
  renderFilters();
  renderLegend();
  renderCards();
  renderRegions();
  renderSources();
  renderWelcome();
  initMap();
  bindEvents();
  updateCards();

  // deep link: index.html#ajanta opens that place
  const hashId = location.hash.slice(1);
  if (PLACES.some((p) => p.id === hashId)) selectPlace(hashId, { from: "hash" });
}

document.addEventListener("DOMContentLoaded", init);
