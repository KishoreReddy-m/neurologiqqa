import React, { useEffect, useRef } from "react";
import { arc, pie, PieArcDatum, select } from "d3";

export type DynamicDonutChartDataPoint = {
  text: string;
  value: number;
  color: string;
  ignore?: boolean;
};

export type DynamicDonutChartProps = {
  data: DynamicDonutChartDataPoint[];
  chartId: string;
  width: number;
  height: number;
  ringWidth: number;
  color: string;
  textColor: string;
  chartTitle: string;
  backgroundCircleColor?: string;
  backgroundCircleStrokeColor?: string;
  outerCircleMargin?: number;
  headFontSize?: number;
  subHeadFontSize?: number;
  displayPositionTop?: number;
  displayPositionBottom?: number;
  displayPositionRight?: number;
  displayPositionLeft?: number;
};

export const DynamicDonutChart = ({
  data,
  chartId,
  width,
  height,
  ringWidth,
  color,
  textColor,
  chartTitle,
  backgroundCircleColor = "#171934",
  backgroundCircleStrokeColor = "#294360",
  outerCircleMargin = -30,
  headFontSize = 40,
  subHeadFontSize = 14,
  displayPositionTop = 0,
  displayPositionBottom = 0,
  displayPositionRight = 0,
  displayPositionLeft = 0,
}: DynamicDonutChartProps) => {
  const ref = useRef<SVGSVGElement>(null);
  const radius = Math.min(width, height) / 2 - 10;
  const outerRadius = radius + outerCircleMargin;
  useEffect(() => {
    const margin = {
      top: displayPositionTop,
      right: displayPositionRight,
      bottom: displayPositionBottom,
      left: displayPositionLeft,
    };
    const chartHeight = height - margin.top - margin.bottom - 5;
    const chartWidth = width - margin.right - margin.left - 5;
    if (ref.current) {
      const svg = select(ref.current)
        .attr("id", chartId)
        .attr("class", "dynamic-donut-chart-" + chartId)
        .attr("width", chartWidth + margin.left + margin.right + 20)
        .attr("height", chartHeight + margin.top + margin.bottom + 20)
        .append("g")
        .attr("class", "dynamic-donut-chart-g-" + chartId)
        .attr("width", chartWidth + margin.left + margin.right)
        .attr("height", chartHeight + margin.top + margin.bottom)
        .attr(
          "transform",
          "translate(" + margin.left + ", " + margin.top + ")"
        );

      svg.selectAll("*").remove();

      svg
        .append("circle")
        .attr("cx", outerRadius)
        .attr("cy", outerRadius)
        .attr("r", outerRadius)
        .attr("stroke", backgroundCircleStrokeColor)
        .attr("fill", backgroundCircleColor);

      const g = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const donut = pie<DynamicDonutChartDataPoint>()
        .sort(null)
        .value((x) => x.value);

      const data_ready = donut(data);

      const holeArc = arc<PieArcDatum<DynamicDonutChartDataPoint>>()
        .innerRadius(radius - ringWidth)
        .outerRadius(radius);

      g.selectAll("allSlices")
        .data(data_ready)
        .enter()
        .append("path")
        .attr("d", holeArc)
        .style("stroke-width", ringWidth)
        .attr("fill", (d) => d.data.color);

      g.append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("font-family", "Volte")
        .attr("fill", textColor)
        .html(htmlCenterdText());

      function htmlCenterdText() {
        const totalSum = data_ready
          .filter((x) => !x.data.ignore)
          .reduce(function (total, currentValue) {
            return total + currentValue.value;
          }, 0);
        const totalNumber = totalSum;
        let tip = "";
        tip +=
          '<tspan x="0" style="font-size: ' +
          headFontSize +
          'px;">' +
          totalNumber +
          "</tspan>";
        tip +=
          '<tspan x="0" dy="2.2em" style="font-size: ' +
          subHeadFontSize +
          'px;">' +
          chartTitle +
          "</tspan>";
        return tip;
      }
    }
    /* eslint-disable-next-line */
  }, [data, chartId, width, height, ringWidth, color, textColor, chartTitle]);

  return (
    <div className="pos-dynamic-donut-chart">
      <svg ref={ref} overflow="visible" />
    </div>
  );
};
