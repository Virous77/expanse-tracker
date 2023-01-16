import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
  return (
    <PieChart
      style={{ fontSize: "4px", color: "white" }}
      data={[
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 85, color: "#C13C37" },
        { title: "Three", value: 2, color: "#6A2135" },
        { title: "four", value: 7, color: "green" },
      ]}
      lineWidth={50}
      animate={true}
      animationDuration={1000}
      // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
      labelPosition={80}
      label={({ dataEntry }) => dataEntry.title}
    />
  );
};

export default Chart;
