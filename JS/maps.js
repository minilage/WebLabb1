async function initMap() {
    // Importera rätt bibliotek från Google Maps
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Koordinater för Stora Berga 110, Åmål
    const berga110 = { lat: 59.075667309040284, lng: 12.701170469318145 };

    // Skapa kartan
    const map = new Map(document.getElementById("map"), {
        center: berga110,
        zoom: 14,
        mapId: "4504f8b37365c3d0", // Valfri, men behövs för vissa funktioner
    });

    // Lägg till markören
    const marker = new AdvancedMarkerElement({
        map,
        position: berga110,
        title: "Kattas Hembakat",
    });
}

// Initiera kartan
initMap();