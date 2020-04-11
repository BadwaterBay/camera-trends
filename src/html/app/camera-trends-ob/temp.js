export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["unemployment.tsv",new URL("./files/data_unemployment.csv",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  
  main.variable(observer()).define(["md"], function(md){return(
md`# Multi-Line Chart`
)});

  main.variable(observer("chart")).define("chart", ["d3","width","height","xAxis","yAxis","data","line","hover"], function(d3,width,height,xAxis,yAxis,data,line,hover)
{
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("overflow", "visible");
  
  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

  const path = svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .selectAll("path")
    .data(data.series)
    .join("path")
    .style("mix-blend-mode", "multiply")
    .attr("d", d => line(d.values));

  svg.call(hover, path);

  return svg.node();
});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment)
{
  const data = d3.tsvParse(await FileAttachment("unemployment.tsv").text());
  const columns = data.columns.slice(1);
  return {
    y: "% Unemployment",
    series: data.map(d => ({
      name: d.name.replace(/, ([\w-]+).*/, " $1"),
      values: columns.map(k => +d[k])
    })),
    dates: columns.map(d3.utcParse("%Y-%m"))
  };
}
);
  main.variable(observer("hover")).define("hover", ["d3","y","x","data"], function(d3,y,x,data){return(
    function hover(svg, path) {
      if ("ontouchstart" in document) svg
        .style("-webkit-tap-highlight-color", "transparent")
        .on("touchmove", moved)
        .on("touchstart", entered)
        .on("touchend", left)
      else svg
        .on("mousemove", moved)
        .on("mouseenter", entered)
        .on("mouseleave", left);

      const dot = svg.append("g")
        .attr("display", "none");

      dot.append("circle")
        .attr("r", 2.5);

      dot.append("text")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .attr("y", 0);

      function moved() {
        d3.event.preventDefault();
        const ym = y.invert(d3.event.layerY);
        const xm = x.invert(d3.event.layerX);
        const i1 = d3.bisectLeft(data.dates, xm, 1);
        const i0 = i1 - 1;
        const i = xm - data.dates[i0] > data.dates[i1] - xm ? i1 : i0;
        const s = d3.least(data.series, d => Math.abs(d.values[i] - ym));
        path.attr("stroke", d => d === s ? null : "#ddd").filter(d => d === s).raise();
        dot.attr("transform", `translate(${x(data.dates[i])},${y(s.values[i])})`);
        dot.select("text").text(s.name);
      }

      function entered() {
        path.style("mix-blend-mode", null).attr("stroke", "#ddd");
        dot.attr("display", null);
      }

      function left() {
        path.style("mix-blend-mode", "multiply").attr("stroke", null);
        dot.attr("display", "none");
      }
    }
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 20, bottom: 30, left: 30}
)});
  main.variable(observer("x")).define("x", ["d3","data","margin","width"], function(d3,data,margin,width){return(
d3.scaleUtc()
    .domain(d3.extent(data.dates))
    .range([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","data","height","margin"], function(d3,data,height,margin){return(
d3.scaleLinear()
    .domain([0, d3.max(data.series, d => d3.max(d.values))]).nice()
    .range([height - margin.bottom, margin.top])
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x","width"], function(height,margin,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","data"], function(margin,d3,y,data){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
    .attr("x", 3)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text(data.y))
)});
  main.variable(observer("line")).define("line", ["d3","x","data","y"], function(d3,x,data,y){return(
d3.line()
    .defined(d => !isNaN(d))
    .x((d, i) => x(data.dates[i]))
    .y(d => y(d))
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5", "d3-array@2")
)});
  return main;
}

