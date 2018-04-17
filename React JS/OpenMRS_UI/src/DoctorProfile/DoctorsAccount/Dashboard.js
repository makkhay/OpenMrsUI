/**
 * This js file helps to display the victory chart. All data are static as of now. 
 * 
 */


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
    VictoryStack, VictoryArea, VictoryLabel, VictoryPie, VictoryVoronoi, VictoryLine, VictoryPolarAxis
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

export default class Dashboard extends Component {
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
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                    width={600}
                                >
                                    <VictoryLine
                                        interpolation="natural"
                                        data={data}

                                        animate={{
                                            duration: 2000,
                                            onLoad: { duration: 2000 }
                                        }}
                                        style={{
                                            data: {
                                                stroke: "#5164BE", strokeWidth: 5
                                            },
                                        }}
                                        labels={(datum) => datum.name}
                                        labelComponent={<VictoryLabel renderInPortal dy={0} />}
                                    />
                                </VictoryChart>
                            </div>
                            <div className="chart-container-b container-3-b">
                                <VictoryChart polar
                                    theme={VictoryTheme.material}
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
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                >
                                    <VictoryBar
                                        style={{ data: { fill: "#5164BE" } }}
                                        data={data}
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