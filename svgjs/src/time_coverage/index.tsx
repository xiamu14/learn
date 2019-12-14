import React, { useRef, useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";


function getSelectorPath(x:number, y:number, r:number, a1:number, a2:number) {
  const cx1 = (Math.cos(a1) * r) + x;
  const cy1 = (-Math.sin(a1) * r) + y;

  const cx2 = (Math.cos(a2) * r) + x;
  const cy2 = (-Math.sin(a2) * r) + y;
  return `M${x} ${y} ${cx1} ${cy1} A${r} ${r} 0 0 1 ${cx2} ${cy2}Z`
}

export default function TimeCoverage() {
  const svgEl = useRef<any>(null);

  useEffect(() => {
    const draw = SVG()
      .addTo(svgEl.current)
      .size(300, 300);
    const circle = draw.circle(100);
    circle.attr({
      cx: 51,
      cy: 51,
      fill: "none",
      stroke: "#8E8E8E",
      "stroke-width": 1
    });
    const dot = draw.circle(4);
    dot.attr({
      fill: "#94C1F6",
      cx: 51,
      cy: 51
    }
    )
    const path = draw.path(getSelectorPath(51, 51, 50, 0, 130));
    path.attr({
      fill: "#F8B1B1"
    })
  }, []);



  return <div className="time_coverage" ref={svgEl} />;
}
