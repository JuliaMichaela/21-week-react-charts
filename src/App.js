import { Chart } from "react-google-charts";
import './style/App.css';

function App() {

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 8],
    ["Eat", 2],
    ["Training", 1],
    ["Stady", 2],
    ["Housework", 4],
    ["Sleep", 7],
  ];
  
  const options = {
    title: "My Daily Activities",
    is3D: true,
  };
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

    </div>
  );
}

export default App;

