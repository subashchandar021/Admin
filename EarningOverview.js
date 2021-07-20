import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";

const data = [
  { month: "Jan", Amount: 0 },
  { month: "Feb", Amount: 10000 },
  { month: "Mar", Amount: 5000 },
  { month: "Apr", Amount: 15000 },
  { month: "May", Amount: 10000 },
  { month: "Jun", Amount: 20000 },
  { month: "Jul", Amount: 15000 },
  { month: "Aug", Amount: 25000 },
  { month: "Sep", Amount: 20000 },
  { month: "Oct", Amount: 30000 },
  { month: "Nov", Amount: 25000 },
  { month: "Dec", Amount: 40000 }
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper style={{ height: "500px", width: "1250px" }}>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries valueField="Amount" argumentField="month" />
          <Title text="Earning Overview" />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}
