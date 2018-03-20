

const markerType = {
    activity : "url(http://i.imgur.com/WbMOfMl.png)",
    hotel : "url(http://i.imgur.com/D9574Cu.png)",
    restaurant : "url(http://i.imgur.com/cqR6pUI.png)"
}

mapboxgl.accessToken = "pk.eyJ1IjoiY2hhbmJ1ZW4iLCJhIjoiY2plenRxbGFsMGgyaDMzbzB5OHp6bW9oOCJ9.Rq1jdrn4wcmIZ9A529czSA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker =  function (type, coordinates) {

    let markerDomEl = document.createElement('div');
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = markerType.type
    
    new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map);
        
    }

export default 'marker'