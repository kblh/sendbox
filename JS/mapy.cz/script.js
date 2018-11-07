// var center = SMap.Coords.fromWGS84(14.41790, 50.12655);
// var m = new SMap(JAK.gel("m"), center, 16);
// m.addDefaultLayer(SMap.DEF_BASE).enable();


window.load = function () {
  Loader.async = true;
  Loader.load(null, null, createMap);
}

window.createMap = function () {
  let center = SMap.Coords.fromWGS84(14.4542156, 50.1075022);
  let m = new SMap(JAK.gel("m"), center, 15);



  m.addDefaultLayer(SMap.DEF_OPHOTO);
  m.addDefaultLayer(SMap.DEF_OPHOTO0203);
  m.addDefaultLayer(SMap.DEF_OPHOTO0406);
  m.addDefaultLayer(SMap.DEF_TURIST);
  m.addDefaultLayer(SMap.DEF_HISTORIC);
  m.addDefaultLayer(SMap.DEF_BASE).enable();

  /**
   * Přepínání mapových podkladů
   */

  let layerSwitch = new SMap.Control.Layer();

  layerSwitch.addDefaultLayer(SMap.DEF_BASE);
  layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO);
  layerSwitch.addDefaultLayer(SMap.DEF_TURIST);
  layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO0406);
  layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO0203);
  layerSwitch.addDefaultLayer(SMap.DEF_HISTORIC);
  m.addControl(layerSwitch, {left:"8px", top:"80px"});


  /**
   * controls
   */

  let controlCompassTitle = {
    title: "Posun mapy"
  };
  let controlCompass = new SMap.Control.Compass(controlCompassTitle);
  m.addControl(controlCompass, {
    left: "8px",
    top: "9px"
  });

  let controlMinimap = new SMap.Control.Minimap(200, 100);
  m.addControl(controlMinimap, {
    right: "8px",
    bottom: "9px"
  });

  let controlRosette = new SMap.Control.Rosette();
  m.addControl(controlRosette, {
    left: "80px",
    top: "20px"
  })

  const zoomLevels = {
    3: "svět",
    5: "světadíl",
    8: "stát",
    10: "kraj",
    12: "město",
    14: "čtvrť",
    17: "ulice",
  }

  let controlZoom = new SMap.Control.Zoom(zoomLevels);
  m.addControl(controlZoom, {
    right: "8px",
    top: "9px"
  })

  /**
   * Ovládání myší
   */
  let controlMouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM);
  m.addControl(controlMouse);


  /**
   * dynamická velikost mapy
   * roztahuje se na výšku okna
   */

  // let sync = new SMap.Control.Sync({bottomSpace:30});
  // m.addControl(sync);



  /**
   * Odečítání souřadnic  
   */

  function click(e, elm) { /* Došlo ke kliknutí, spočítáme kde */
    let coords = SMap.Coords.fromEvent(e.data.event, m);
    coords.getAltitude().then(altitudeResponse);
    console.log("Kliknuto na " + coords + " ::: " + coords.toWGS84(2).reverse().join(" "));
  }
  m.getSignals().addListener(window, "map-click", click); /* Při signálu kliknutí volat tuto funkci */

  /* nadmořská výška */
  function altitudeResponse(a) {
    console.log("Nadmořská výška je " + a + "m");
  }


  /**
   * Markers
   */

  // let markerLayer = new SMap.Layer.Marker();
  // m.addLayer(markerLayer);
  // markerLayer.enable();

  // let card = new SMap.Card();
  // card.getHeader().innerHTML = "<strong>Nadpis</strong>";
  // card.getBody().innerHTML = "Ahoj, já jsem <em>obsah vizitky</em>!";

  // let options = { 
  //     title: "Dobré ráno"
  // };

  // const myMarkers = {
  //   marker1: {
  //     title: "my marker 1",
  //     gps: {
  //       x: 14.4542156,
  //       y: 50.1075022
  //     }
  //   }
  // };

  // const marker1gps = {
  //   x: 14.421213700280731,
  //   y: 50.106975805950455,
  // };

  // let marker01 = new SMap.Marker(center, "myMarker", options);
  // console.log(center);
  // console.log(marker1gps);
  // marker01.decorate(SMap.Marker.Feature.Card, card);


  var obrazek = "marker.png";

  var data = {
    "Etnetera": "50°6'27.008\"N,14°27'15.176\"E",
    "Avion": "50°6'21.239\"N, 14°27'0.719\"E",
    "Banh-Mi-Ba": "50°6'19.532\"N, 14°27'22.567\"E",
    "Karlštejn": "49°56'21.57\"N,14°11'17.96\"E",
    "Křivoklát": "50°2'16.36\"N,13°52'18.59\"E",
    "Kost": "50°29'24.83\"N,15°8'6.38\"E",
    "Lípa v Jistebsku": "50°41'19.525\"N, 15°13'19.168\"E",
  };

  var znacky = [];
  var souradnice = [];
  var karticky = [];

  for (var name in data) { /* Vyrobit značky */
    var c = SMap.Coords.fromWGS84(data[name]); /* Souřadnice značky, z textového formátu souřadnic */

    var options = {
      url: obrazek,
      title: name,
      anchor: {
        left: 15,
        bottom: 1,
      } /* Ukotvení značky za bod uprostřed dole */
    }

    var znacka = new SMap.Marker(c, null, options);

    let card = new SMap.Card();
    card.getHeader().innerHTML = "<strong>" + name + "</strong>";
    card.getBody().innerHTML = "Bydlím zde:<br>" + data[name];

    souradnice.push(c);
    znacky.push(znacka);
    karticky.push(card);
  }

  var vrstva = new SMap.Layer.Marker(); /* Vrstva se značkami */
  var clusterer = new SMap.Marker.Clusterer(m); /* Nový shlukovač */
  vrstva.setClusterer(clusterer); /* Přidání shlukovače do vrstvy značek */
  m.addLayer(vrstva); /* Přidat ji do mapy */
  vrstva.enable(); /* A povolit */

  for (var i = 0; i < znacky.length; i++) {
    znacky[i].decorate(SMap.Marker.Feature.Card, karticky[i]);
    vrstva.addMarker(znacky[i]);
  }

  var cz = m.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
  m.setCenterZoom(cz[0], cz[1]);


}

load();
