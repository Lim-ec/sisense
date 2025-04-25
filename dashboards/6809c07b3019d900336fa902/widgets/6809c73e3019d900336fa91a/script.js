/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

$.getScript("/plugins/geoJson/geoJsonDongOverlay.js", function() {
  initGeoJsonOverlay(widget, args, {
    layers: [
      {
        geoJsonUrl: "/plugins/geoJson/dobong.json",
        fillColor: "#dddddd",
        strokeColor: "#666666",
        strokeWidth: 1.5,
        fillOpacity: 0,
        zIndex: -2,
        fontSize: "15px",
        labelFill: "white",
        labelStroke: "black",
        labelStrokeWidth: "1px",
        layerName: "dobong",
        maskEnabled: true
      },
      {
        geoJsonUrl: "/plugins/geoJson/bikeMove.json",
        strokeColor: "#FF0000",
        strokeWidth: 0.5,
        fillOpacity: 0,
        zIndex: -1,
        fontSize: "12px",
        layerName: "bikeMove",
        maskEnabled: false,
      filterEnabled : false
      }
    ],
    maskZIndex: 10
  });
});
