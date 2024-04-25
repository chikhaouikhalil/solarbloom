import moment from "moment";
import React from "react";
import { View } from "react-native";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";

const LineChartComponent = ({ data, min, max, sybmol, strokeColor }) => {
  const formattedData = data.map((dataPoint) => ({
    date: moment(dataPoint.date).format("DD-MM-YY HH:mm:ss"),
    value: dataPoint.value,
  }));
  return (
    <View>
      <VictoryChart
        minDomain={{ y: min }}
        maxDomain={{ y: max }}
        theme={VictoryTheme.material}
        height={500}
        padding={{ top: 20, bottom: 120, left: 40, right: 40 }}
      >
        <VictoryAxis
          orientation="bottom"
          style={{
            tickLabels: {
              angle: -90,
              padding: 50,
              dy: -5,
              fontWeight: "bold",
              fontSize: 10,
            }, // Rotate the text vertically
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick}${sybmol}`} // Add Celsius symbol to tick labels
          style={{
            tickLabels: { fontWeight: "bold", fontSize: 10, dx: 5 }, // Rotate the text vertically
          }}
        />
        <VictoryLine
          interpolation="natural"
          data={formattedData}
          animate={{ duration: 3000 }} // Set duration of animation in milliseconds
          x="date"
          y="value"
          style={{
            data: { stroke: strokeColor, strokeWidth: 4 },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default LineChartComponent;
