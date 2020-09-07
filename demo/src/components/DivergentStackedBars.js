import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

am4core.useTheme(am4themes_animated);

function WordCloudTextData (props) {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create("chartdivstacked", am4charts.XYChart);
    
    // Title
    let title = chart.titles.push(new am4core.Label());
    title.text = "名詞";
    title.fontSize = 25;
    title.marginBottom = 15;

    // Add data
    chart.data = [{
      "category": "お客さま",
      "negative1": -73.9,
      "positive1": 18
    }, {
      "category": "大事",
      "negative1": -2.22,
      "positive1": 17,
    }, {
      "category": "証券",
      "negative1": -64.47,
      "positive1": 14,
    }, {
      "category": "XXXXXX",
      "negative1": -147.48,
      "positive1": 13,
    }, {
      "category": "ビジネス",
      "negative1": -17.97,
      "positive1": 13,
    }, {
      "category": "経営",
      "negative1": -16.10,
      "positive1": 12,
    }, {
      "category": "投資",
      "negative1": -8.16,
      "positive1": 12,
    }, {
      "category": "提供",
      "negative1": -7.89,
      "positive1": 12,
    }, {
      "category": "価値",
      "negative1": -5.11,
      "positive1": 11,
    }, {
      "category": "社会",
      "negative1": -4.91,
      "positive1": 11,
    }, {
      "category": "成長",
      "negative1": -3.59,
      "positive1": 11
    }, {
      "category": "多様性",
      "negative1": -27.09,
      "positive1": 34,
    }, {
      "category": "業界",
      "negative1": -8.06,
      "positive1": 10,
    }, {
      "category": "商品",
      "negative1": -3.14,
      "positive1": 10,
    }, {
      "category": "役割",
      "negative1": -9.62,
      "positive1": 9,
    }];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;
    
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -147.5;
    valueAxis.max = 147.5;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text;
    })

    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";

    // Create series
    function createSeries(field, name, color) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "category";
      series.stacked = true;
      series.name = name;
      series.stroke = color;
      series.fill = color;
      
      let label = series.bullets.push(new am4charts.LabelBullet);
      if (series.dataFields.valueX == 'negative1') {
        label.label.text = "{valueX}";
      } else {
        label.label.text = "{valueX}";
      }
      
      label.label.fill = am4core.color("#fff");
      label.label.strokeWidth = 0;
      label.label.truncate = false;
      label.label.hideOversized = true;
      label.locationX = 0.5;
      return series;
    }

    let interfaceColors = new am4core.InterfaceColorSet();
    let positiveColor = interfaceColors.getFor("positive");
    let negativeColor = interfaceColors.getFor("negative");

    // createSeries("negative2", "Unlikely", negativeColor.lighten(0.5));
    createSeries("negative1", "スコア", negativeColor);
    // createSeries("positive1", "Sometimes", positiveColor.lighten(0.5));
    createSeries("positive1", "出現頻度", positiveColor);

    chart.legend.events.on("layoutvalidated", function(event){
      chart.legend.itemContainers.each((container)=>{
        if(container.dataItem.dataContext.name == "Never"){
          container.toBack();
        }
      })
    })


    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdivstacked" style={{ width: "100%", height: "500px" }}></div>;
}

export default WordCloudTextData;