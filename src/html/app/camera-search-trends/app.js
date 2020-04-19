$(function () {
  const data2plot = [
    ["#plot-camera", "data/camera-arimean-global.csv"],
    ["#plot-dslr", "data/dslr-arimean-global.csv"],
    ["#plot-mirrorless", "data/mirrorless-arimean-global.csv"]
  ].forEach(r => {
    d3Plot(r[0], r[1]);
  });

  function d3Plot(placeholder, csvFile) {
    //------------------------1. PREPARATION------------------------//
    //-----------------------------SVG------------------------------//  
    const width = 960;
    const height = 500;
    const margin = 20;
    const padding = 20;
    const adj = 30;

    // Append SVG
    const svg = d3.select(placeholder).append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "-"
        + adj + " -"
        + adj + " "
        + (width + adj * 3) + " "
        + (height + adj * 3))
      .style("padding", padding)
      .style("margin", margin)
      .classed("svg-content", true);

    //-----------------------------DATA-----------------------------//
    const parseDate = d3.utcParse("%Y-%m-%d");
    const dataset = d3.csv(csvFile);
    dataset.then(data => {
      let slices = data.columns.slice(1).map(name => {
        return {
          name: name,
          values: data.map(d => {
            return {
              date: parseDate(d.date),
              val: +d[name]
            };
          })
        };
      });

      // console.log("Column headers", data.columns);
      // console.log("Column headers without date", data.columns.slice(1));
      // // returns the sliced dataset
      // console.log("Slices", slices);
      // // returns the first slice
      // console.log("First slice", slices[0]);
      // // returns the array in the first slice
      // console.log("A array", slices[0].values);
      // // returns the date of the first row in the first slice
      // console.log("Date element", slices[0].values[0].date);
      // // returns the array's length
      // console.log("Array length", (slices[0].values).length);

      //----------------------------SCALES----------------------------//
      const xScale = d3.scaleTime().range([0, width]);
      const yScale = d3.scaleLinear().rangeRound([height, 0]);

      xScale.domain(d3.extent(data, d => {
        return parseDate(d.date)
      }));

      yScale.domain([(0), d3.max(slices, c => {
        return d3.max(c.values, d => {
          let intRound = 2;
          return Math.ceil(d.val / intRound) * intRound;
          // Round to the nearest greater integer intRound
        });
      })
      ]);

      //-----------------------------AXES-----------------------------//
      const yaxis = d3.axisLeft()
        .ticks((slices[0].values).length / 20)
        .scale(yScale);

      const xaxis = d3.axisBottom()
        .ticks(d3.timeYear.every(1))
        .tickFormat(d3.timeFormat('%Y'))
        .scale(xScale);

      //----------------------------LINES-----------------------------//
      const line = d3.line()
        .x(d => {return xScale(d.date);})
        .y(d => {return yScale(d.val);});

      let name = 0;
      const names = () => {return "line-" + name++;};
    
      //-------------------------2. DRAWING---------------------------//
      //-----------------------------AXES-----------------------------//
      svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xaxis);

      svg.append("g")
        .attr("class", "axis")
        .call(yaxis)
        .append("text")
        // .attr("transform", "rotate(0)")
        .attr("y", 0)
        .attr("dy", "-1rem")
        .attr("dx", "8.5rem")
        .style("text-anchor", "end")
        .text("Google search index");

      //----------------------------LINES-----------------------------//
      const lines = svg.selectAll("lines")
        .data(slices)
        .enter()
        .append("g");

      lines.append("path")
        .attr("class", names)
        .attr("d", d => {return line(d.values);});

      lines.append("text")
        .attr("class", "serie_label")
        .datum(d => {
          return {
            name: d.name,
            value: d.values[d.values.length - 1]
          };
        })
        .attr("transform", d => {
          return "translate(" + (xScale(d.value.date) + 10)
            + "," + (yScale(d.value.val) + 5) + ")";
        })
        .attr("x", 2)
        .text(d => {
          let n = d.name.split("_")[1];
          return n.charAt(0).toUpperCase() + n.slice(1);
        });
    }); // d3
  } // function d3Plot
});
