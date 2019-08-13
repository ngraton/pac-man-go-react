import React from 'react'
import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {XYZ, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import './PlayMap.css'
import PacManLogo from "../images/XOsf.gif";


class PlayMap extends React.Component {

  componentDidMount() {
    // eslint-disable-next-line
    
    if(this.props.center_lon && this.props.center_lat && this.props.zoom){
      var view = new View({
        center: [this.props.center_lon, this.props.center_lat],
        zoom: this.props.zoom
      });
    } else {
      var view = new View({
        center: [-9754817.328516133, 5146707.653789921],
        zoom: 16,
      });
    }

    var map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({ 
            url:'https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
          })
        }),
        new TileLayer({
          source: new XYZ({
            url: 'https://api.mapbox.com/styles/v1/ngraton/cjyxrgjdq34up1cmrjh30jevl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmdyYXRvbiIsImEiOiJjanl3anZtYWIwZHJ5M2hudjBxZTcyMWZwIn0.PKmSXMTZpQg5WTX6a9hUGA'
          })
        }),
      ],
      target: 'map',
      view: view,
      controls: [],
      // interactions: []
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

    el('start-btn').addEventListener("click", pressStart);
    el('quit-btn').addEventListener("click", pressQuit);



    function pressStart() {
      geolocation.setTracking(true);
      el('start-btn').disabled = true;
      el('quit-btn').disabled = false;
    };
    
    function pressQuit() {
      geolocation.setTracking(false);
      el('quit-btn').disabled = true;
      el('start-btn').disabled = false;
    };
    
    // update the HTML page when the position changes.
    geolocation.on('change', function() {
      // el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
      // el('altitude').innerText = geolocation.getAltitude() + ' [m]';
      // el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
      // el('heading').innerText = geolocation.getHeading() + ' [rad]';
      // el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
    });
    
    // handle geolocation error.
    geolocation.on('error', function(error) {
      var info = document.getElementById('info');
      info.innerHTML = error.message;
      info.style.display = '';
    });
    
    // var accuracyFeature = new Feature();
    // geolocation.on('change:accuracyGeometry', function() {
      //   accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
      // });
    
    var positionFeature = new Feature();
    positionFeature.setStyle(new Style({
      image: 
      new CircleStyle({
        radius: 5,
        fill: new Fill({
          color: '#FFEE00'
        }),
        stroke: new Stroke({
          color: '#FFEE00',
          width: 2
        })
      })
    }));
      
    geolocation.on('change:position', function() {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
      map.getView().setCenter(coordinates);
    });

    new VectorLayer({
      map: map,
      source: new VectorSource({
        features: [ positionFeature ]
      })
    });
  }

  render() {
    return (
    <div>
      <div role="toolbar" class="btn-toolbar">
        <div class="container">
          <div class="row">
            <div class="col">
              <p class="text-center">Guest</p>
              <p class="text-center">00000</p>
            </div>
            <div class="col"/>
            <div class="col">
              <p class="text-center">High Score</p>
              <p class="text-center">00000</p>
            </div>
          </div>
        </div>
      </div>
      <div id="map" className="PlayMapMap"></div>
      <div id="info" ></div>
      {/* <label htmlFor="track">
        Start Run:
        <input id="track" type="checkbox"/>
      </label> */}
      <div role="toolbar" class="btn-toolbar">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="text-center">
                <button type="button" class="btn btn-light" id="start-btn" >
                  Start
                </button>
              </div>
            </div>
            <div class="col"/>
            <div class="col">
              <div class="text-center">
                <button type="button" class="btn btn-danger" id="quit-btn" disabled>
                  Quit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
  }
}

export default PlayMap;