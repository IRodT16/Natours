/* eslint-disable import-export */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

// eslint-disable-next-line no-undef

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaXJvZCIsImEiOiJjbDhhbTdpbHMwMnBkM3Zxbnp4YjJrcXJmIn0.7ZUyq6BZdq1cLVoIglyFKQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/irod/cl8amehzq004f15lpwu7ydaq7',
    scrollZoom: false,
    //   center: [-118.113456, 34.111745],
    //   zoom: 5,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    //   new mapboxgl.Popup({
    //     offset: 30,
    //   })
    //     .setLngLat(loc.coordinates)
    //     .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    //     .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
