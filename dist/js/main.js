"use strict";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1k0KTH6Tf9K03epb5H2PuOUcinQBQM4KdTg6zfy2TjQ4',
      parsed: function parsed(data) {
        console.log(data);
      }
    },
    plotOptions: {
      series: {
        clip: false,
        groupPadding: 0.1
      }
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginTop: -10
    },
    xAxis: {
      labels: {
        autoRotation: false,
        style: {
          whiteSpace: 'nowrap'
        }
      },
      type: 'category'
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow',
        formatter: function formatter() {
          return (this.value / 1000000).toFixed(1);
        }
      },
      max: 2000000,
      tickAmount: 5
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});