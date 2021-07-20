import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";
const data = [
  { Revenue: "Direct", source: 55 },
  { Revenue: "Social", source: 15 },
  { Revenue: "Referal", source: 30 }
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
          <PieSeries valueField="source" argumentField="Revenue" />
          <Title text="Revenue Sources" />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}
