// Options for map
let options = {
  lat: 41.891062,
  lng: -87.621437,
  zoom: 15,
  //style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  //  style: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
  style: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
  // style: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
}

// Create an instance of Leaflet
let mappa = new Mappa('Leaflet');
let myMap;

let canvas;
let personaldata;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Load the data
  personaldata = loadTable('kwondata.csv', 'csv', 'header');

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawPersonaldata);


}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function drawPersonaldata() {
  // Clear the canvas
  clear();

  for (let i = 0; i < personaldata.getRowCount(); i++) {
    // Get the lat/lng of each meteorite
    const latitude = Number(personaldata.getString(i, 'latitude'));
    const longitude = Number(personaldata.getString(i, 'longitude'));

    //Only draw them if the position is inside the current map bounds. We use a
    //Leaflet method to check if the lat and lng are contain inside the current
    //map. This way we draw just what we are going to see and not everything. See
    //getBounds() in http://leafletjs.com/reference-1.1.0.html
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      // Transform lat/lng to pixel position
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
       let size = personaldata.getString(i, 'freq');
       size = map(size, 1, 49, 1, 25)+ myMap.zoom();

       if(keyIsDown(UP_ARROW))
  canvas.scale += 0.05;
if(keyIsDown(DOWN_ARROW))
  canvas.scale -= 0.05;

ellipse(pos.x, pos.y, size, size);
       fill(Number(personaldata.getString(i, 'R')),Number(personaldata.getString(i, 'G')) , Number(personaldata.getString(i, 'B')));

       noStroke();



    }
  }
}
