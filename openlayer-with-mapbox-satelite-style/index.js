import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import MVT from 'ol/format/MVT';
import Tile from 'ol/layer/Tile'
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import XYZ from 'ol/source/XYZ';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style';
import olms from 'ol-mapbox-style';

var map = new Map({
  layers: [
    new Tile({
      source: new XYZ({
        url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmhhbnBoYW5taW5oIiwiYSI6ImNrM2UyMXYzbTE3cDgzbG40NGQzMjcxODEifQ.s5CPbjf24GTvP9iMoFo3fQ'
      })
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

//var key = 'pk.eyJ1IjoibmhhbnBoYW5taW5oIiwiYSI6ImNrM3BrYW1sejAzdWEzZG5qM3VyYWJycG0ifQ.AV8MAfKLlofUrNRIOeWUug';
//olms('map', 'https://api.mapbox.com/styles/v1/nhanphanminh/ck3r2lw9v01xd1clyzd6emwm2' + key);
//olms('map', 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4?access_token=' + key);
//olms('map', 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11?access_token=' + key);
//olms('map', 'https://api.mapbox.com/styles/v1/mapbox/dark-v10?access_token=' + key);
//olms('map', 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9?access_token=' + key);
// var url = 'https://api.mapbox.com/styles/v1/examples/cjikt35x83t1z2rnxpdmjs7y7?access_token=' + key;
// olms('map', url);
// olms('map', 'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=' + key);

// var map = new Map({
//   layers: [
//     new VectorTileLayer({
//       declutter: true,
//       source: new VectorTileSource({
//         attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
//           '© <a href="https://www.openstreetmap.org/copyright">' +
//           'OpenStreetMap contributors</a>',
//         format: new MVT(),
//         // url:'https://api.mapbox.com/styles/v1/examples/cjikt35x83t1z2rnxpdmjs7y7?access_token=pk.eyJ1IjoibmhhbnBoYW5taW5oIiwiYSI6ImNrM2UyMXYzbTE3cDgzbG40NGQzMjcxODEifQ.s5CPbjf24GTvP9iMoFo3fQ'
//         url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v8/' +
//             '{z}/{x}/{y}.vector.pbf?access_token=' + key
//       }),
//       style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
//     })
//   ],
//   target: 'map',
//   view: new View({
//     center: [0, 0],
//     zoom: 2
//   })
// });