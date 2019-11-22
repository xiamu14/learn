import React, { useRef, useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";
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
    const path = draw.path('M0 0 H50 V20 z');
    path.attr({
      fill: "#F8B1B1"
    })
  }, []);

  return <div className="time_coverage" ref={svgEl} />;
}
