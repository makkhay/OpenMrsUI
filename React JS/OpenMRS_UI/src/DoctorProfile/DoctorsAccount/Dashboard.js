/**
 * This js file helps to display the victory chart. All data are static as of now. 
 * 
 */


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
    VictoryStack, VictoryZoomContainer, VictoryBrushContainer,VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi, VictoryLine, VictoryPolarAxis
} from 'victory';
import '../../styles/MainDoctor.css'
import "../../styles/fontawesome.css"
import Dock from './Dock'
const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 1 },
    { x: 5, y: 5 }
];

const barData = [
    { x: 'Sun', y: 0 },
    { x: 'mon', y: 2 },
    { x: 'tues', y: 1 },
    { x: 'wed', y: 4 },
    { x: 'thur', y: 1 },
    { x: 'Fri', y: 5 },
    {x: 'sat',y : 6}
];

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

    render() {
        return (
            <div className="main-container-b">
                <div className="dashboard-container-b">
                    <div className="row-container-b-left">
                        <Dock active="dashboard" />
                    </div>
                    <div className="row-container-b-right">
                        <div className="column-container-b">
                            <div className="chart-container-b container-2-b">
                            <VictoryChart width={600} height={350} scale={{x: "time"}}
                          containerComponent={
                   <VictoryZoomContainer responsive={false}
                      zoomDimension="x"
                      zoomDomain={this.state.zoomDomain}
                      onZoomDomainChange={this.handleZoom.bind(this)}
                     />
                       }
                   >
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(2018, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />

          </VictoryChart>

          <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={600} height={90} scale={{x: "time"}}
            containerComponent={
              <VictoryBrushContainer responsive={false}
                brushDimension="x"
                brushDomain={this.state.selectedDomain}
                onBrushDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />
          </VictoryChart>
                            </div>
                            <div className="chart-container-b container-3-b">
                                <VictoryChart polar
                                    theme={VictoryTheme.material}
                                    containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 100]}}/>}
                                >
                                    {
                                        ["intelligence", "strength", "speed", "stealth", "charisma"].map((d, i) => {
                                            return (
                                                <VictoryPolarAxis dependentAxis
                                                    key={i}
                                                    label={d}
                                                    labelPlacement="perpendicular"
                                                    style={{ tickLabels: { fill: "none" } }}
                                                    axisValue={i}
                                                />
                                            );
                                        })
                                    }
                                    <VictoryBar
                                        animate={{
                                            duration: 2000,
                                            // easing: "bounce"
                                        }}
                                        style={{ data: { fill: "#5266BC", width: 25 } }}
                                        data={[
                                            { x: 0, y: 40 },
                                            { x: 1, y: 25 },
                                            { x: 2, y: 40 },
                                            { x: 3, y: 50 },
                                            { x: 4, y: 50 }
                                        ]}
                                    />
                                </VictoryChart>
                            </div>
                        </div>
                        <div className="column-container-b">
                            <div className="chart-container-b container-4-b">

                                <VictoryPie
                                    // padAngle={3}
                                    animate={{
                                        duration: 2000
                                    }}
                                    innerRadius={100}
                                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}

                                    data={data}

                                />

                            </div>
                            <div className="chart-container-b container-5-b">

                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    domainPadding={10}
                                    containerComponent={<VictoryZoomContainer zoomDomain={{x: [1, 5], y: [1, 5]}}/>}
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                >
                                    <VictoryBar
                                        style={{ data: { fill: "#5164BE" } }}
                                        data={barData}
                                    />
                                </VictoryChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}