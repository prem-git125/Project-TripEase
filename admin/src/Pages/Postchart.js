import { useEffect, useState } from 'react';
import { Bar ,Line ,Pie} from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'
import NavbarAdmin from '../Components/NavbarAdmin';

function Postchart() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data from API
          const response = await fetch("http://localhost:8080/api/postchart");
          const data = await response.json();
    
          // Process data for chart
          const labels = data.map((item) => item.post_date);
          const postCounts = data.map((item) => item.post_Count);
    
          // Set chart data
          setChartData({
            labels: labels,
            datasets: [{
              label: "Posts",
              backgroundColor:'[rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}), rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})]',
              data: postCounts
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

export default Postchart