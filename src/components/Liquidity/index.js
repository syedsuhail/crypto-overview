import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { Box } from 'grommet';

const Liqudity = (props) => {
  var margin = {top: 10, right: 130, bottom: 30, left: 160},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom - 100;

    useEffect(() => {
      if(d3.select("svg")) {
        d3.select("svg").remove();
      }
      var svg = d3.select("#my_dataviz")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");

      let minMarketCapValue = Infinity, maxMarketCapValue = -Infinity, minVolume = Infinity, maxVolume= -Infinity;
      let minPercentChange = Infinity, maxPercentChange = -Infinity;
      let data = props.marketData.slice(0,props.limit).map((item) => {
        let marketCapValue = Math.round(item.quote.USD.market_cap*100)/100;
        let volume = Math.round(item.quote.USD.volume_24h*100)/100;
        let percentChange = Math.round(item.quote.USD.percent_change_24h*100)/100;
        minMarketCapValue = Math.min(minMarketCapValue, marketCapValue);
        maxMarketCapValue = Math.max(maxMarketCapValue, marketCapValue);
        minVolume = Math.min(minVolume, volume);
        maxVolume = Math.max(maxVolume, volume);
        minPercentChange = Math.min(minPercentChange, Math.abs(percentChange));
        maxPercentChange = Math.max(maxPercentChange, Math.abs(percentChange));
        return [marketCapValue,volume, percentChange, item.name];
      });

    data.sort((a,b) => a[0]-b[0]);
    let low = data.length *0.25;
    data = data.slice(low, data.length-low);
    data.sort((a,b) => a[1]-b[1]);
    low = data.length *0.25;
    data = data.slice(low, data.length-low);
    console.log(data);
    minMarketCapValue = data[0][0];
    maxMarketCapValue = data[data.length-1][0];
    minVolume = data[0][1];
    maxVolume = data[data.length-1][1];

  var x = d3.scaleLinear()
    .domain([minMarketCapValue, maxMarketCapValue])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  var y = d3.scaleLinear()
    .domain([minVolume, maxVolume])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
    var tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("display", "none")
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("position", "absolute")


  var mouseover = function(d) {
    tooltip
      .style("display", "initial")
  }

  var mousemove = function(d) {
    console.log(d3.mouse(this));
    tooltip
      .html(`Name: ${d[3]}, Market Cap: ${d[0]}, Volume: ${d[1]}, Price Change: ${d[2]}`)
      .style("left", (d3.mouse(this)[0] - 190) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }

  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("display", "none")
  }
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d[0]); } )
      .attr("cy", function (d) { return y(d[1]); } )
      .attr("r", function(d) { return 10 * Math.abs((Math.abs(d[2]) - minPercentChange)/maxPercentChange-minPercentChange)})
      .style("fill", "#69b3a2")
      .style("cursor", "pointer")
      .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )
    });
  return (<Box align="center"
    responsive={true}
    id="my_dataviz"></Box>);
}

export default Liqudity;