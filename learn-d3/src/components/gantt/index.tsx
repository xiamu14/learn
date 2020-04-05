import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import "./index.css";

const w = 800;
const h = 400;
const topPadding = 75;
const sidePadding = 75;
const barHeight = 20;
const gap = barHeight + 4;

interface Task {
  task: string;
  type: "active" | "finished";
  startTime: string;
  endTime: string;
}

const taskArray: Task[] = [
  {
    task: "conceptualize",
    type: "active",
    startTime: "2013-2-1 12:00", // year/month/day hover:minute
    endTime: "2013-2-1 12:30",
  },
  {
    task: "conceptualize",
    type: "active",
    startTime: "2013-2-1 14:00", // year/month/day hover:minute
    endTime: "2013-2-1 14:20",
  },
];

const dateParser = d3.timeParse("%Y-%m-%d %H:%M");
const xAccessorMin = (d: Task) => dateParser(d.startTime) as Date;
const xAccessorMax = (d: Task) => dateParser(d.endTime) as Date;

const xScale = d3
  .scaleTime()
  .domain([
    d3.min(taskArray, xAccessorMin) as Date,
    d3.max(taskArray, xAccessorMax) as Date,
  ])
  .range([0, w - 150]);

function makeGrid(ctx: {
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
}) {
  const xAxisGenerator = d3.axisBottom(xScale).ticks(d3.timeMinute.every(15));
  const { svg } = ctx;
  const xAxis = svg
    .append("g")
    .attr("transform", "translate(" + sidePadding + ", " + (h - 50) + ")");
  xAxisGenerator(xAxis);
}

function drawRects(ctx: {
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
}) {
  const { svg } = ctx;

  svg
    .append("g")
    .selectAll("rect")
    .data(taskArray)
    .enter()
    .append("rect")
    .attr("rx", 3)
    .attr("ry", 3)
    .attr("x", (d: Task) => {
      return xScale(dateParser(d.startTime) as Date) + sidePadding;
    })
    .attr("y", (_: Task, i: number) => {
      return i * gap + topPadding;
    })
    .attr("width", (d: Task) => {
      return (
        xScale(dateParser(d.endTime) as Date) -
        xScale(dateParser(d.startTime) as Date)
      );
    })
    .attr("height", barHeight)
    .attr("stroke", "none")
    .attr("fill", "#69c0ff");
}

export default function Gantt() {
  const ganttRef = useRef(null);

  useEffect(() => {
    if (ganttRef.current) {
      const svg = d3
        .select(".svg")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
      const ctx = { svg };
      makeGrid(ctx);
      drawRects(ctx);
    }
  }, []);

  return (
    <div className="gantt-container" ref={ganttRef}>
      <div className="svg"></div>
    </div>
  );
}
