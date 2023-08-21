const checkboxKrb = document.getElementById('kawasanRawanBencana');
const checkboxAliranLahar = document.getElementById('aliranLahar');
const checkboxPosPengungsian = document.getElementById('posPengungsian');
const checkboxJalurEvakuasi = document.getElementById('jalurEvakuasi');
const maxBoundArea = L.latLngBounds(L.latLng(-21.41, 153.41), L.latLng(14.3069694978258, 73.65));
const basemap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    minZoom: 5,
});

let map = L.map('map', {
    center: [-2, 118], 
    zoom: 5,
    layers: [basemap],
    maxBounds: maxBoundArea,
    zoomControl: false,
	attributionControl: false,
    }
);

// ==============================
// Run basemap
// ==============================

L.control.centerMap().addTo(map);
L.panelSide('panel').addTo(map);


// ==============================
// Event handler
// ==============================

const markerIcon = L.icon({
    iconUrl: 'placeholder.png',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const pointLayerKrb = [ -0.5, 116 ]; //set point marker
let markerKrb = L.marker(pointLayerKrb, {icon: markerIcon});
checkboxKrb.addEventListener('click', function(event){
    
    if(event.target.checked) {
        map.addLayer(markerKrb);
        return;
    }
    else{
        map.removeLayer(markerKrb);
        return;
    }
})

const pointLayerAliranLahar = [ -2.445, 106 ]; //set point marker
let markerAliranLahar = L.marker(pointLayerAliranLahar, {icon: markerIcon});
checkboxAliranLahar.addEventListener('click', function(event){
    
    if(event.target.checked) {
        map.addLayer(markerAliranLahar);
        return;
    }
    else{
        map.removeLayer(markerAliranLahar);
        return;
    }
});

const pointLayerPosPengungsian = [ -2.245, 100 ]; //set point marker
let markerPosPengungsian = L.marker(pointLayerPosPengungsian, {icon: markerIcon});
checkboxPosPengungsian.addEventListener('click', function(event){
    if(event.target.checked) {
        map.addLayer(markerPosPengungsian);
        return;
    }
    else{
        map.removeLayer(markerPosPengungsian);
        return;
    }
});

const pointLayerJalurEvakuasi = [ -2.455, 129 ]; //set point marker
let markerJalurEvakuasi = L.marker(pointLayerJalurEvakuasi, {icon: markerIcon});
checkboxJalurEvakuasi.addEventListener('click', function(event){
    if(event.target.checked) {
        map.addLayer(markerJalurEvakuasi);
        return;
    }
    else{
        map.removeLayer(markerJalurEvakuasi);
        return;
    }
});
