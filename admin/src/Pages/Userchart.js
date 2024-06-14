import { useEffect, useState } from 'react';
import { Bar ,Doughnut,Line ,Pie, Radar} from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'
import NavbarAdmin from '../Components/NavbarAdmin';

function Userchart() {

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data from API
          const response = await fetch("http://localhost:8080/api/userchart");
          const data = await response.json();
    
          // Process data for chart
          const labels = data.map((item) => item.user_date);
          const userCounts = data.map((item) => item.user_Count);
    
          // Set chart data
          setChartData({
            labels: labels,
            datasets: [{
              label: "Users",
              backgroundColor: [`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`],
              borderColor: '',
              data: userCounts
            }]
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);

  return (
    <>
    <NavbarAdmin></NavbarAdmin>
    <div style={{width:"90vh"}} className='d-block mx-auto'> {!chartData ? "" : <Bar data={chartData}/>}</div>
   </>
  )
}

export default Userchart;