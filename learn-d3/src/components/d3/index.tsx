import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import dataset from '../../data/my_weather_data.json';

const dateParser = d3.timeParse('%Y-%m-%d');
const xAccessor = (d: { date: string }) => dateParser(d.date) as Date;
const yAccessor = (d: { temperatureMax: number }) => d.temperatureMax;

let dimensions: Record<string, any> = {
  width: window.innerWidth * 0.9,
  height: 400,
  margin: {
    top: 15,
    right: 15,
    bottom: 40,
    left: 60
  }
}

dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

const yScale = d3.scaleLinear().domain([10, 100]).range([dimensions.boundedHeight, 0]);
const xScale = d3.scaleLinear().domain(d3.extent(Array.from(dataset, xAccessor) as any) as any).range([0, dimensions.boundedWidth]);

const lineGenerator = d3.line().x((d: any) => xScale(xAccessor(d))).y((d: any) => yScale(yAccessor(d))) as any;

const yAxisGenerator = d3.axisLeft(yScale);
const xAxisGenerator = d3.axisBottom(xScale);

export default function D3() {
  const svgWrapRef = useRef(null);
  useEffect(() => {
    if (svgWrapRef.current) {
      const wrapper = d3.select('#svg-wrapper');
      const svg = wrapper.append("svg").attr('width', dimensions.width).attr('height', dimensions.height)
      const bounds = svg.append('g').style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.right}px)`)

      const freezingTemperaturePlacement = yScale(32);
      const freezingTemperatures = bounds.append("rect").attr('x', 0).attr("width", dimensions.boundedWidth).attr('y', freezingTemperaturePlacement).attr("height", dimensions.boundedHeight - freezingTemperaturePlacement).attr("fill", "#e0f3f3");

      const line = bounds.append("path").attr("d", lineGenerator(dataset)).attr("fill", "none").attr("stroke", "#af9358").attr("stroke-width", 2);

      const yAxis = bounds.append('g');
      const xAxis = bounds.append('g');

      yAxisGenerator(yAxis);
      xAxisGenerator(xAxis);
    }
    console.table(dataset[0]);
    console.log(xAccessor(dataset[0]));
    console.log(yScale(32));
  }, [])
  return <div id="svg-wrapper" ref={svgWrapRef}>
  </div>
}
