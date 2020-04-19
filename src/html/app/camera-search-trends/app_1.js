

var width = window.innerWidth,
height = window.innerHeight,
centered,
clicked_point;

var projection = d3.geoMercator()
.translate([width / 2.2, height / 1.5]);

var plane_path = d3.geoPath()
  .projection(projection);

var svg = d3.select("#plot-map").append("svg")
.attr("width", width)
.attr("height", height)
.attr("class", "map");

var g = svg.append("g");
var path = d3.geoPath()
.projection(projection);

// load and display the World
d3.json("https://unpkg.com/world-atlas@1/world/110m.json", function(error, topology) {
g.selectAll("path")
  .data(topojson.feature(topology, topology.objects.countries)
      .features)
  .enter()
  .append("path")
  .attr("d", path)
  ;
});
