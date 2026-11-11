HERITAGE ATLAS — MULTI-PAGE MAP EXPLORER

Preview:
- Open index.html in a browser with an Internet connection.
- Leaflet and OpenStreetMap tiles are loaded online.

User flow:
1. Home page: left side lists countries and cities; right side is an interactive global map.
2. Click a country: opens its country page showing cities and a featured landmark for each city.
3. Click a city: opens a city page with attraction rows; each row has an image thumbnail on the left.
4. Click an attraction: opens a dedicated attraction detail page.

Structure:
- index.html and about.html
- countries/<country-id>.html
- cities/<city-id>.html
- attractions/<attraction-id>.html
- css/home.css, css/about.css, plus one CSS file per country/city/attraction page
- js/map.js contains global map setup and city markers

Notes:
- English is the main interface language.
- Vietnamese and Chinese entries include local-language names. Irish place-name examples are included for Ireland.
- The content is starter/demo material. Please verify descriptions and image relevance.
- Replace demo images with properly licensed images and add image credits/licence details.
- Map tiles attribution is included in the map interface.
