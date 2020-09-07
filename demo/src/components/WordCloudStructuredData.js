import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

am4core.useTheme(am4themes_animated);

function WordCloudStructuredData (props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv2", am4plugins_wordCloud.WordCloud);

    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.data = [{
      "tag": "Breaking News",
      "weight": 60,
      "color": am4core.color("#4A2040")
    }, {
      "tag": "Environment",
      "weight": 80,
      "color": am4core.color("#9F6BA0")
    }, {
      "tag": "Politics",
      "weight": 90,
      "color": am4core.color("#C880B7")
    }, {
      "tag": "Business",
      "weight": 25,
      "color": am4core.color("#EC9DED")
    }, {
      "tag": "Lifestyle",
      "weight": 30,
      "color": am4core.color("#DFBAD3")
    }, {
      "tag": "World",
      "weight": 45,
      "color": am4core.color("#C880B7")
    }, {
      "tag": "Sports",
      "weight": 160,
      "color": am4core.color("#4A2040")
    }, {
      "tag": "Fashion",
      "weight": 20,
      "color": am4core.color("#C880B7")
    }, {
      "tag": "Education",
      "weight": 78,
      "color": am4core.color("#9F6BA0")
    }];

    series.dataFields.word = "tag";
    series.dataFields.value = "weight"; 

    series.labels.template.tooltipText = "{word}:\n[bold]{value}[/]";

    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {};
    series.labels.template.propertyFields.fill = "color";

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>;
}

export default WordCloudStructuredData;