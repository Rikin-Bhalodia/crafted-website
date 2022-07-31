import React from 'react';
import styled from "styled-components";
import Link from 'next/link';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import dynamic from 'next/dynamic';
//import foo from '../foo.js';
const ReactApexChart = dynamic(import( "react-apexcharts"), { ssr: false });



const HomeStacWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 30px;
    .stac-heading {
        display : flex;
        align-items: center;
        justify-content: space-between;
        div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            h5 {
                font-weight: 700;
                font-size: 20px;
                line-height: 22px;
                color: #333333;
                margin-bottom: 0px;
            }
            p {
                font-weight: 400;
                font-size: 15px;
                line-height: 16px;
                color: #999999;
                margin-bottom: 0px;

            }
        }
        
    }
    .stac-doughnut {
        width: 100%;
        height: 100%;
        display : flex;
        justify-content: center;
        align-items: center;
    }
    `;

const HomeStac = () => {

    const chartData = {
        series: [7000, 3000],
      
        options: {
          chart: { type: "donut" },
          legend: { show: true,position: "bottom",width: 330,fontSize:'20' },
          labels:['Total Sales','Total Returns'],
          colors: ["#5372E7", "#FF9F24" ] ,
          plotOptions: {
            pie: {
              donut: {
                size: "75%",
                labels: {
                  show: true,
                  name: { show: true },
                  style: {
                    colors: ['#5372E7', '#FF9F24']
                  },
                  total: {
                    show: true,
                    label: 'Total Revenue',
                    showAlways: true,
                    fontSize:20,
                    formatter: function (w) {
                      const totals = w.globals.seriesTotals;
      
                      const result = totals.reduce((a, b) => a + b, 0);
      
                      return (result / 1).toFixed(0);
                    }
                  }
                }
              }
            }
          },
          dataLabels:{
            enabled:false,
          }
        }
      };
    return (
        <>
            <HomeStacWrapper>
                <div className='stac-heading'>
                    <div>
                        <h5>Monthly Statistics</h5>
                        <p>Total Sales growth of 25% from last month</p>
                    </div>
                    <Link href='/'><BiDotsHorizontalRounded size={40} style={{color:'#999999'}}/></Link>
                </div>
                <div className='stac-doughnut'>
                <ReactApexChart
                    width={320}
                    height={370}
                    options={chartData.options}
                    series={chartData.series}
                    type="donut"
                />
                </div>
            </HomeStacWrapper>
        </>
    );
};

export default HomeStac;