import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import dataset from '../../data/my_weather_data.json';
import { objHasKey } from '../../util/obj_has_key';

type Dataset = typeof dataset;

// DONE: 设置数据通道函数
const xAccessor = (d: Dataset) => {
  if (objHasKey(d, 'dewPoint')) {
    // @ts-ignore
    return d.dewPoint;
  } return undefined;
}

const yAccessor = (d: Dataset) => {
  if (objHasKey(d, 'humidity')) {
    // @ts-ignore
    return d.humidity;
  } return undefined;
}

// NOTE : 设置图表尺寸
const dimensionRatio = 0.9;

const width = d3.min([window.innerWidth * dimensionRatio, window.innerHeight * dimensionRatio]) as number;

const dimensionsMargin = {
  top: 10,
  right: 10,
  bottom: 50,
  left: 50,
}

const dimensions = {
  width,
  height: width,
  margin: dimensionsMargin,
  boundedWidth: width - dimensionsMargin.left - dimensionsMargin.right,
  boundedHeight: width - dimensionsMargin.top - dimensionsMargin.bottom,
}

/**
 * 在图表父元素中添加 svg 和 g
 */
const drawBounds = () => {
  const wrapper = d3.select('#svg-wrapper');
  const svg = wrapper.append("svg")
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)
  const bounds = svg.append('g')
    .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);
  return { wrapper, svg, bounds }
}

// NOTE: 新建比例尺
const xScale = d3.scaleLinear()
  .domain(d3.extent(Array.from(dataset as any, xAccessor) as any) as any)
  .range([0, dimensions.boundedWidth])
  .nice(); // 最后优化小数点，保留一位小数

const yScale = d3.scaleLinear()
  .domain(d3.extent(Array.from(dataset as any, yAccessor) as any) as any)
  .range([dimensions.boundedHeight, 0,])
  .nice(); // 最后优化小数点，保留一位小数

/**
 * 绘制数据函数
 * @param bounds svg 实例
 */
const drawData = (bounds: d3.Selection<SVGGElement, unknown, HTMLElement, any>, dataset: any[], color: string | [string, string]) => {
  let fillColor;
  if (typeof color === 'string') {
    fillColor = color;
  } else {
    const colorAccess = (d: Dataset) => {
      if (objHasKey(d, 'cloudCover')) {
        // @ts-ignore
        return d.cloudCover;
      } return undefined;
    }
    const colorScale = d3.scaleLinear<string>()
      .domain(d3.extent(Array.from(dataset, colorAccess) as any) as any)
      .range(color as [string, string])
    fillColor = (d:Dataset) => colorScale(colorAccess(d))
  }
  bounds.selectAll("circle")
    .data(dataset)
    .join("circle")
    .attr("cx", d => xScale(xAccessor(d as any)))
    .attr("cy", d => yScale(yAccessor(d as any)))
    .attr("r", 5)
    .attr('fill', fillColor as any);
}

/**
 * 绘制坐标轴
 * @param bounds svg 实例
 */
const drawAxis = (bounds: d3.Selection<SVGGElement, unknown, HTMLElement, any>) => {
  const xAxisGenerator = d3.axisBottom(xScale);
  const xAxis = bounds.append('g')
    .call(xAxisGenerator)
    .style('transform', `translateY(${dimensions.boundedHeight}px)`);

  // 绘制坐标轴名称
  xAxis.append('text')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', dimensions.margin.bottom - 10)
    .attr('fill', 'black')
    .style('font-size', '1.4em')
    .html("Dew point(&deg;F)")

  const yAxisGenerator = d3.axisLeft(yScale).ticks(4);
  const yAxis = bounds.append('g')
    .call(yAxisGenerator);


  // 绘制坐标轴名称
  yAxis.append("text")
    .attr("x", -dimensions.boundedHeight / 2)
    .attr("y", -dimensions.margin.left + 10)
    .attr('fill', 'black')
    .style("font-size", "1.4em")
    .text('Relative humidity')
    .style('transform', 'rotate(-90deg)')
    .style('text-anchor', "middle")
}

export default function ScatterPlot() {
  const svgWrapRef = useRef(null);
  useEffect(() => {
    if (svgWrapRef.current) {
      // 调用函数绘制图表
      const { bounds } = drawBounds();
      drawData(bounds, dataset, ['skyblue', 'darkslategrey']);
      drawAxis(bounds);
    }
  }, []);
  return <div id="svg-wrapper" ref={svgWrapRef}>
  </div>
}
