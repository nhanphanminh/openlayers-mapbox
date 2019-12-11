import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style';


var key = 'pk.eyJ1IjoibmhhbnBoYW5taW5oIiwiYSI6ImNrM3BrYW1sejAzdWEzZG5qM3VyYWJycG0ifQ.AV8MAfKLlofUrNRIOeWUug';

var map = new Map({
  layers: [
    new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
          '© <a href="https://www.openstreetmap.org/copyright">' +
          'OpenStreetMap contributors</a>',
        format: new MVT(),
        url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
            '{z}/{x}/{y}.vector.pbf?access_token=' + key
      }),
      style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});