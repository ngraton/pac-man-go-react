import React from 'react'
import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {XYZ, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import './CartoDarkMap.css'

class CartoDarkMap extends React.Component {

  componentDidMount() {
    // eslint-disable-next-line
    var view = new View({
      center: [-9754865.574383441, 5142996.734459279],
      zoom: 15
    });

    var map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({ 
            url:'https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        })
        })
      ],
      target: 'map',
      view: view
    });

    var geolocation = new Geolocation({
      // enableHighAccuracy must be set to true to have the heading value.
      trackingOptions: {
        enableHighAccuracy: true
      },
      projection: view.getProjection()
    });

    function el(id) {
      return document.getElementById(id);
    }

    el('track').addEventListener('change', function() {
      geolocation.setTracking(this.checked);
    });

    // update the HTML page when the position changes.
    geolocation.on('change', function() {
      el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
      el('altitude').innerText = geolocation.getAltitude() + ' [m]';
      el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
      el('heading').innerText = geolocation.getHeading() + ' [rad]';
      el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
    });

    // handle geolocation error.
    geolocation.on('error', function(error) {
      var info = document.getElementById('info');
      info.innerHTML = error.message;
      info.style.display = '';
    });

    var accuracyFeature = new Feature();
    geolocation.on('change:accuracyGeometry', function() {
      accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    var positionFeature = new Feature();
    positionFeature.setStyle(new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    }));

    geolocation.on('change:position', function() {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?
        new Point(coordinates) : null);
      console.log(coordinates)
    });

    new VectorLayer({
      map: map,
      source: new VectorSource({
        features: [accuracyFeature, positionFeature]
      })
    });
  }
  render() {
    return (
    <div>
      <div id="map" className="CartoDarkMap"></div>
      <div id="info" ></div>
      <label htmlFor="track">
        track position
        <input id="track" type="checkbox"/>
      </label>
      <p>
        position accuracy : <code id="accuracy"></code>&nbsp;&nbsp;
        altitude : <code id="altitude"></code>&nbsp;&nbsp;
        altitude accuracy : <code id="altitudeAccuracy"></code>&nbsp;&nbsp;
        heading : <code id="heading"></code>&nbsp;&nbsp;
        speed : <code id="speed"></code>
      </p>
    </div>
    )
  }
}

export default CartoDarkMap;