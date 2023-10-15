import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughChart = (props) => {
  let results = props.props[0]
  let colors = props.props[1]
  const data = {
    datasets: [
      {
        backgroundColor: colors,
        borderColor: "white",
        data: results,
        borderRadius:10,
        cutout: '65%',
        radius: 90,
      },
    ],
  }
  return (
    <Doughnut data={data} />
  );
}

export default DoughChart;