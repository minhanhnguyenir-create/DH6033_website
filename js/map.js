// 1. Dữ liệu danh sách các thành phố (Tọa độ, URL, Quốc gia,...)
const cityMarkers = [
    { name: "Hanoi", native: "Hà Nội", country: "Vietnam", flag: "🇻🇳", lat: 21.0285, lon: 105.8542, url: "cities/hanoi.html" },
    { name: "Hue", native: "Huế", country: "Vietnam", flag: "🇻🇳", lat: 16.4637, lon: 107.5909, url: "cities/hue.html" },
    { name: "Hoi An", native: "Hội An", country: "Vietnam", flag: "🇻🇳", lat: 15.8801, lon: 108.338, url: "cities/hoi-an.html" },
    { name: "Beijing", native: "北京", country: "China", flag: "🇨🇳", lat: 39.9042, lon: 116.4074, url: "cities/beijing.html" },
    { name: "Xi’an", native: "西安", country: "China", flag: "🇨🇳", lat: 34.3416, lon: 108.9398, url: "cities/xian.html" },
    { name: "Shanghai", native: "上海", country: "China", flag: "🇨🇳", lat: 31.2304, lon: 121.4737, url: "cities/shanghai.html" },
    { name: "London", native: "London", country: "United Kingdom", flag: "🇬🇧", lat: 51.5072, lon: -0.1276, url: "cities/london.html" },
    { name: "Edinburgh", native: "Edinburgh", country: "United Kingdom", flag: "🇬🇧", lat: 55.9533, lon: -3.1883, url: "cities/edinburgh.html" },
    { name: "Dublin", native: "Baile Átha Cliath", country: "Ireland", flag: "🇮🇪", lat: 53.3498, lon: -6.2603, url: "cities/dublin.html" },
    { name: "Cork", native: "Corcaigh", country: "Ireland", flag: "🇮🇪", lat: 51.8985, lon: -8.4756, url: "cities/cork.html" }
];

// 2. Khởi tạo bản đồ Leaflet
const map = L.map('globalMap', { scrollWheelZoom: true }).setView([25, 15], 2);

// 3. Thêm lớp bản đồ nền CARTO

L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 19
    }
).addTo(map);



// 4. Duyệt qua từng thành phố để thêm Marker (Điểm đánh dấu)
cityMarkers.forEach(city => {
    // Tạo marker tại tọa độ tương ứng
    const marker = L.marker([city.lat, city.lon]).addTo(map);

    // Gắn nội dung Popup khi click vào marker
    marker.bindPopup(`
        <strong>${city.flag} ${city.name}</strong> 
        ${city.native ? ` <span>${city.native}</span>` : ''}
        <br>${city.country}
        <br><a href="${city.url}">Open city page →</a>
    `);

    // Xử lý sự kiện khi click vào marker
    marker.on('click', () => {
        // Tự động zoom và căn giữa bản đồ vào thành phố vừa click
        // Math.max đảm bảo bản đồ không bị zoom out nhỏ hơn mức hiện tại
        map.setView([city.lat, city.lon], Math.max(map.getZoom(), 7));
    });
});
