Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
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
            parsed: function(data) {
              console.log(data)
            }
        },
        // series: {
        //   data: [
        //     ['35',101331,6000,],
        //     ['45',288034,101331,6000],
        //     ['55',662963,295688,108985],
        //     ['65',1407634,685149,317875],
        //     ['75',2017352,1004909,488909]
        //   ]
        // },
        plotOptions: {
          series: {
            clip: false,
            groupPadding: 0.1
          }
        },
        legend: {
            align: 'left',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 35,
            itemMarginTop: 10,
            floating: true
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap',
                }
            },
            type: 'category'
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                formatter: function () {
                  return (this.value/1000000).toFixed(1);
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
                    x: -18,
                    floating: false,
                    itemMarginTop: -10
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});
