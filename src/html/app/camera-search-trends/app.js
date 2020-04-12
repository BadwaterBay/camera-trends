export default function define(runtime, observer) {

  const main = runtime.module();

  const fileAttachments = new Map([["global-arimean-camera.csv", new URL("./data/global-arimean-camera.csv", import.meta.url)]]);

  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));

  // main.variable(observer())
  //  .define(["md"], function(md){return(``)});

  main
    .variable(observer("chart"))
    .define("chart", 
      ["d3", "width", "height", "xAxis", "yAxis", "data", "line"], 
      function(d3, width, height, xAxis, yAxis, data, line) {
        const svg = d3.create("svg")
          .attr("viewBox", [0, 0, width, height]);
        
        svg
          .append("g")
          .call(xAxis);

        svg
          .append("g")
          .call(yAxis);

        svg
          .append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", line);

        return svg.node();
      }
    );

  main
    .variable(observer("data"))
    .define("data",["d3", "FileAttachment"],
      async function(d3, FileAttachment){
        const data = d3.csvParse(await FileAttachment("global-arimean-camera.csv").text());
        const columns = data.columns.slice(1);
        return {
          y: "Google search trend index",
          date: data.map(d => d.Year_month),
          series: data.map(d => ({
            values: columns.map(k => +d[k])
          })),
        }
      }
    );
  
  main
    .variable(observer("line"))
    .define("line", ["d3", "x", "data", "y"], 
      function(d3, x, data, y){
        return(
          d3.line()
            .defined(d => !isNaN(d))
            .x(d => x(d.date))
            .y((d, i) => y(data.series.values[i]))
            // .y(d => y(d.value))
        )
      }
    );
  
  main
    .variable(observer("x"))
    .define("x", ["d3", "data", "margin", "width"], 
      function(d3, data, margin, width){
        return(
          d3
            .scaleUtc()
            .domain(d3.extent(data, d => d.date))
            .range([margin.left, width - margin.right])
        )
      }
    );
  
  main
    .variable(observer("y"))
    .define("y", ["d3", "data", "height", "margin"], 
      function(d3, data, height, margin){
        return(
          d3
            .scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top])
        )
      }
    );
  
  main
    .variable(observer("xAxis"))
    .define("xAxis", ["height", "margin", "d3", "x", "width"], 
      function(height, margin, d3, x, width){
        return(
          g => g
          .attr("transform", `translate(0, ${height - margin.bottom})`)
          .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
        )
      }
    );

  main
    .variable(observer("yAxis"))
    .define("yAxis", ["margin", "d3", "y", "data"], 
      function(margin, d3, y, data){
        return(
          g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())
            .call(g => g.select(".tick:last-of-type text").clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text(data.y))
        )
      }
    );

  main
    .variable(observer("margin"))
    .define("margin", 
      function(){
        return(
          {top: 20, right: 30, bottom: 30, left: 40}
        )
      }
    );
  
  main
    .variable(observer("height"))
    .define("height", 
      function(){
        return(500)
      }
    );
  
  main
    .variable(observer("d3"))
    .define("d3", ["require"], 
      function(require){
        return(require("d3@5"))
      }
    );
  
  return main;
}
