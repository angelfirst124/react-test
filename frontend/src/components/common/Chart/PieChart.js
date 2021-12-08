import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function PizzaChart(props) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (props.google && !chart) {
      // Create the data table.
      const data = new props.google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows(props.data);

      // Set chart options
      var options = {
        'title': props.title,
        'width': props.width,
        'height': props.height,
      };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new props.google.visualization.PieChart(document.getElementById(props.title));
      newChart.draw(data, options);
      setChart(newChart);
    }
  }, [props.google, chart, props.width, props.data]);

  return (
    <>
      {!props.google && <Spinner />}
      <div id={props.title} />
    </>
  )
}

export default PizzaChart;