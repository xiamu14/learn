import React, { useRef, useEffect } from "react";
import { select, scaleLinear, extent, histogram, max } from "d3";
import dataset from '../../data/my_weather_data.json';
import { objHasKey } from "../../util/obj_has_key";

type Dataset = typeof dataset;

interface Dimensions {
  width: number,
  height: number,
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  }
}

const width = 600;

const dimensions = {
  width,
  height: width * 0.6,
  margin: {
    top: 30,
    right: 10,
    bottom: 50,
    left: 50
  }
}

const boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
const boundsHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

/**
 * 在图表父元素中添加 svg 和 g
 */
const drawBounds = (dimensions: Dimensions) => {
  const wrapper = select('#svg-wrapper');
  const svg = wrapper.append("svg")
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)
  const bounds = svg.append('g')
    .attr('width', boundedWidth)
    .attr('height', boundsHeight)
    .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);
  return { wrapper, svg, bounds }
}

// DONE: 设置数据通道函数
const metricAccessor = (d: Dataset) => {
  if (objHasKey(d, 'humidity')) {
    // @ts-ignore
    return d.humidity;
  } return undefined;
}

// NOTE: 新建比例尺
const xScale = scaleLinear()
  .domain(extent(Array.from(dataset as any, metricAccessor) as any) as any)
  .range([0, boundedWidth])
  .nice(); // 最后优化小数点，保留一位小数


// NOTE: 设置生成器
const binsGenerator = histogram()
  .domain(xScale.domain() as any)
  .value(metricAccessor as any)
  .thresholds(12);

const bins = binsGenerator(dataset as any);

const yAccessor = (d: Dataset) => {
  if (objHasKey(d, 'length')) {
    // @ts-ignore
    return d.length;
  } return undefined;
}

const yScale = scaleLinear()
  .domain([0, max(bins as any, yAccessor) as number])
  .range([boundsHeight, 0])
  .nice()

export default function Histogram() {
  const svgWrapRef = useRef(null);
  useEffect(() => {
    if (svgWrapRef.current) {
      // 调用函数绘制图表
      const { bounds } = drawBounds(dimensions);

    }
  }, []);
  return <div id="svg-wrapper" ref={svgWrapRef}>
  </div>
}
