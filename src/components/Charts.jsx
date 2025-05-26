import React from 'react';
import Chart from "react-apexcharts";
import { AutoGraph, ThreeDRotation } from '@mui/icons-material';

import SsidChartIcon from '@mui/icons-material/SsidChart';
const Charts = () => {
    const [state, setState] = React.useState({
          
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      
      
    });
    const [shade, setShade] = React.useState({
          
        series: [{
          name: 'XYZ MOTORS',
          data: [28, 29, 33, 36, 32, 32, 33]
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: 'Stock Price Movement',
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
            title: {
              text: 'Price'
            },
          },
          xaxis: {
            type: 'datetime',
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        },
      
      
    });
    const [bars, setBars] = React.useState({
          
        series: [{
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
          title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      
      
    });
    const [hor, setHor] = React.useState({
          
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              borderRadiusApplication: 'end',
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      
      
    });
    const [mix, setMix] = React.useState({
          
        series: [{
          name: 'Income',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: 'XYZ - Stock Analysis (2009 - 2016)',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              seriesName: 'Income',
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                }
              },
              title: {
                text: "Income (thousand crores)",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Cashflow',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396'
              },
              labels: {
                style: {
                  colors: '#00E396',
                }
              },
              title: {
                text: "Operating Cashflow (thousand crores)",
                style: {
                  color: '#00E396',
                }
              },
            },
            {
              seriesName: 'Revenue',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                text: "Revenue (thousand crores)",
                style: {
                  color: '#FEB019',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
    });
    const [radar, setRadar] = React.useState({
          
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
          title: {
            text: 'Basic Radar Chart'
          },
          yaxis: {
            stepSize: 20
          },
          xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
          }
        },
      
      
    });

  return (
    <>
        <div className="charts py-6">
            <h2 className="heading font-bold text-[#171717] text-[20px]">Charts</h2>
            <p className="charts-p text-[16px] text-[#A7A7A7]">Charts on this page use Chart.js - Simple yet flexible JavaScript charting for designers & developers.</p>
            <div className="charts-grid grid grid-cols-2 gap-6 pt-6 gap-y-12">
                <div className="line-chart bg-white border-[#D2D6DA] border-solid border-[1px] rounded-[12px] p-4">
                    <div className="type-chart flex pt-2">
                        <div className="type-logo w-16 h-16 mt-[-40px] mr-[16px] rounded-xl bg-gradient-to-br from-[#42424a] to-[#191919] custom-shadow flex items-center justify-center">
                            <AutoGraph className='text-white'/>
                        </div>
                        <div className="chart-type-text mt-[-16px] ">
                            <h4 className="chart-type font-bold text-[#171717]">Line Chart</h4>
                            <p className="chart-p text-[#A7A7A7]">Product insights</p>
                        </div>
                    </div>
                <Chart options={state.options} series={state.series} type="line" height={350} />
                </div>
                <div className="area-chart  bg-white border-[#D2D6DA] border-solid border-[1px] rounded-[12px] p-4">
                    <div className="type-chart flex pt-2">
                        <div className="type-logo w-16 h-16 mt-[-40px] mr-[16px] rounded-xl bg-gradient-to-br from-[#42424a] to-[#191919] custom-shadow flex items-center justify-center">
                            <AutoGraph className='text-white'/>
                        </div>
                        <div className="chart-type-text mt-[-16px]">
                            <h4 className="chart-type font-bold text-[#171717]">Line Chart</h4>
                            <p className="chart-p text-[#A7A7A7]">Product insights</p>
                        </div>
                    </div>
                <Chart options={state.options} series={state.series} type="area" height={350} />
                </div>
                <div className="bar-chart  bg-white border-[#D2D6DA] border-solid border-[1px] rounded-[12px] p-4">
                    <div className="type-chart flex pt-2">
                        <div className="type-logo w-16 h-16 mt-[-40px] mr-[16px] rounded-xl bg-gradient-to-br from-[#42424a] to-[#191919] custom-shadow flex items-center justify-center">
                            <AutoGraph className='text-white'/>
                        </div>
                        <div className="chart-type-text mt-[-16px] ">
                            <h4 className="chart-type font-bold text-[#171717]">Line Chart</h4>
                            <p className="chart-p text-[#A7A7A7]">Product insights</p>
                        </div>
                    </div>
                <Chart options={bars.options} series={bars.series} type="bar" height={350} />
                </div>
                <div className="hor-chart  bg-white border-[#D2D6DA] border-solid border-[1px] rounded-[12px] p-4">
                    <div className="type-chart flex pt-2">
                        <div className="type-logo w-16 h-16 mt-[-40px] mr-[16px] rounded-xl bg-gradient-to-br from-[#42424a] to-[#191919] custom-shadow flex items-center justify-center">
                            <AutoGraph className='text-white'/>
                        </div>
                        <div className="chart-type-text mt-[-16px] ">
                            <h4 className="chart-type font-bold text-[#171717]">Line Chart</h4>
                            <p className="chart-p text-[#A7A7A7]">Product insights</p>
                        </div>
                    </div>
                <Chart options={hor.options} series={hor.series} type="bar" height={350} />
                </div>
                <div className="mix-chart  bg-white border-[#D2D6DA] border-solid border-[1px] rounded-[12px] p-4">
                    <div className="type-chart flex pt-2">
                        <div className="type-logo w-16 h-16 mt-[-40px] mr-[16px] rounded-xl bg-gradient-to-br from-[#42424a] to-[#191919] custom-shadow flex items-center justify-center">
                            <AutoGraph className='text-white'/>
                        </div>
                        <div className="chart-type-text mt-[-16px] ">
                            <h4 className="chart-type font-bold text-[#171717]">Line Chart</h4>
                            <p className="chart-p text-[#A7A7A7]">Product insights</p>
                        </div>
                    </div>
                <Chart options={mix.options} series={mix.series} type="line" height={350} />
                </div>
                <div className="radar-chart  bg-white border-[#D2D6DA] border-solid border-[1px] rounded-[12px] p-4">
                    <div className="type-chart flex pt-2">
                        <div className="type-logo w-16 h-16 mt-[-40px] mr-[16px] rounded-xl bg-gradient-to-br from-[#42424a] to-[#191919] custom-shadow flex items-center justify-center">
                            <AutoGraph className='text-white'/>
                        </div>
                        <div className="chart-type-text mt-[-16px] ">
                            <h4 className="chart-type font-bold text-[#171717]">Line Chart</h4>
                            <p className="chart-p text-[#A7A7A7]">Product insights</p>
                        </div>
                    </div>
                <Chart options={radar.options} series={radar.series} type="radar" height={350} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Charts