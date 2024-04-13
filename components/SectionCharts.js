import { StyleSheet } from "react-native";
import React from "react";
import { VStack } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { PieChart } from "react-native-svg-charts";
import { width } from "../utils/GlobalStyle";
import { Text } from "react-native-svg";

const SectionCharts = () => {
  const data = [
    { day: "0", temperature: 0 },
    { day: "1", temperature: 27 },
    { day: "2", temperature: 30 },
    { day: "3", temperature: 33 },
    { day: "4", temperature: 24 },
    { day: "5", temperature: 36 },
    { day: "6", temperature: 22 },
    { day: "7", temperature: 26 },
  ];
  const dataHorizontal = [
    { day: "0", watering: 0 },
    { day: "1", watering: 27 },
    { day: "2", watering: 30 },
    { day: "3", watering: 33 },
    { day: "4", watering: 24 },
    { day: "5", watering: 36 },
    { day: "6", watering: 22 },
    { day: "7", watering: 26 },
  ];

  const pieData = [
    {
      value: 60,
      svg: { fill: "#c22222" },
      key: `healthy`,
    },
    {
      value: 20,
      svg: { fill: "#549900" },
      key: `Rotten`,
    },
  ];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={"white"}
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={15}
        >
          {data.value}
        </Text>
      );
    });
  };

  return (
    <VStack>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          barWidth={({ index }) => (index == 0 ? 0 : 25)}
          style={{
            data: { fill: "#14b8a6" },
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          data={data}
          x="day"
          y="temperature"
        />
      </VictoryChart>
      <VictoryChart horizontal theme={VictoryTheme.material}>
        <VictoryBar
          horizontal
          barWidth={({ index }) => (index == 0 ? 0 : 20)}
          style={{
            data: { fill: "#1d4ed8" },
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          data={dataHorizontal}
          x="day"
          y="watering"
        />
      </VictoryChart>
      <PieChart
        style={{ height: 250 }}
        outerRadius={"100%"}
        innerRadius={30}
        data={pieData}
      >
        <Labels />
      </PieChart>
    </VStack>
  );
};

export default SectionCharts;

const styles = StyleSheet.create({});
