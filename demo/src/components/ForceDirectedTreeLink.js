import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 


am4core.useTheme(am4themes_animated);

function ForceDirectedTreeLink (props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("forcechartlinkdiv", am4plugins_forceDirected.ForceDirectedTree);

    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    // series.labels.template.fill = am4core.color("#9F6BA0");
    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {};

    series.data = props.data

    // Linkの太さを設定
    series.links.template.propertyFields.strokeWidth = "linkWidth";

    chart.legend = new am4charts.Legend();

    // Tooltip on links
    series.links.template.tooltipText = "共起の程度: [bold]{linkWidth}[/]";
    series.links.template.interactionsEnabled = true;

    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.id = "name";
    series.dataFields.linkWith = "link";

    series.nodes.template.tooltipText = "出現頻度: [bold]{value}[/]";

    // Add labels
    series.nodes.template.label.text = "{name}";
    series.fontSize = 15;
    series.minRadius = 15;
    series.maxRadius = 45;

    series.centerStrength = 0.5;

    return () => {
      chart.dispose();
    };
  }, [props.data]);

  return <div id="forcechartlinkdiv" style={{ width: "100%", height: "500px" }}></div>;
}

export default ForceDirectedTreeLink;