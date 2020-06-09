import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import "./index.css";

const w = 1616;
const h = 400;
const topPadding = 75;
const sidePadding = 75;
const barHeight = 10;
const gap = barHeight + 8;

interface Task {
  id: string,
  task: string;
  type: "active" | "finished";
  startTime: string;
  endTime: string;
}

const taskArray: Task[] = [

  {
    id: "1",
    task: "优化注册",
    type: "active",
    startTime: "2013-2-1 11:00", // year/month/day hover:minute
    endTime: "2013-2-1 11:10",
  },
  {
    id: "1",
    task: "优化样式",
    type: "active",
    startTime: "2013-2-1 12:00", // year/month/day hover:minute
    endTime: "2013-2-1 12:30",
  },
  {
    id: "1",
    task: "优化",
    type: "active",
    startTime: "2013-2-1 10:00", // year/month/day hover:minute
    endTime: "2013-2-1 11:00",
  },
  {
    id: '2',
    task: "完成时间轴组件",
    type: "active",
    startTime: "2013-2-1 14:00", // year/month/day hover:minute
    endTime: "2013-2-1 14:20",
  },
  {
    id: '2',
    task: "添加时间功能",
    type: "active",
    startTime: "2013-2-2 14:40", // year/month/day hover:minute
    endTime: "2013-2-12 15:20",
  },
];

d3.timeFormatDefaultLocale({
  dateTime: "%a %b %e %X %Y",
  date: "%Y/%-m/%-d",
  time: "%H:%M:%S",
  periods: ["上午", "下午"],
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  shortDays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
});



const dateParser = d3.timeParse("%Y-%m-%d %H:%M");
const xAccessorMin = (d: Task) => dateParser(d.startTime) as Date;
const xAccessorMax = (d: Task) => dateParser(d.endTime) as Date;

// @ts-ignore
console.log((d3.max(taskArray, xAccessorMax) - d3.min(taskArray, xAccessorMin)) / 1000 / 60 / 60 / 24)

const xScale = d3
  .scaleTime()
  .domain([
    d3.min(taskArray, xAccessorMin) as Date,
    d3.max(taskArray, xAccessorMax) as Date,
  ])
  .range([0, w - 150]);


// 绘制 y 轴
const domain = Array.from(taskArray, (task: Task) => task.task);
domain.unshift('');

const rangeData = Array.from(taskArray, (_, index) => (index * gap + topPadding + barHeight / 2));
rangeData.unshift(45);
rangeData.push(h - 40);

const yScale = d3.scaleOrdinal<string, number>()
  .domain(domain)
  .range(rangeData as number[])

function makeGrid(ctx: {
  svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
}) {
  const xAxisGenerator = d3.axisBottom(xScale)
    .ticks(d3.timeHour.every(24))
    .tickFormat(d3.timeFormat("%-m月 %-d日") as any);




  const { svg } = ctx;
  const xAxis = svg
    .append("g")
    .classed('x-axis', true)
    .attr("transform", "translate(" + sidePadding + ", " + (h - 50) + ")");
  xAxisGenerator(xAxis);

  d3.selectAll('g.x-axis g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', -(h - 50))
    .attr('stoke', 'black')

  const yAxisGenerator = d3.axisLeft(yScale);
  svg.append('g')
    .classed('y-axis', true)
    .call(yAxisGenerator)
    .attr("transform", `translate(${sidePadding})`);

  d3.selectAll('g.y-axis g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1',-10)
    .attr('x2', w)
    .attr('y2', -10)
}

function drawRects(ctx: {
  svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
}) {
  const { svg } = ctx;

  svg
    .append("g")
    .selectAll("rect")
    .data(taskArray)
    .enter()
    .append("rect")
    .attr("rx", 5)
    .attr("ry", 5)
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
      ) * 10;
    })
    .attr("height", barHeight)
    .attr("stroke", "#69c0ff")
    .attr("stroke-dasharray", "3,3,3")
    .attr("fill", "rgba(0,0,0,0)");
}

export default function Gantt() {
  const ganttRef = useRef(null);

  useEffect(() => {
    if (ganttRef.current) {
      const svg = d3
        .select(".svg")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append('g');
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
