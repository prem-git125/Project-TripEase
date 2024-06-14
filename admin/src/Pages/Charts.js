import { useEffect, useState } from 'react';
import { Bar, Doughnut, Line, Pie , Bubble } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import NavbarAdmin from '../Components/NavbarAdmin';
import { RiGridLine } from 'react-icons/ri';

function Charts() {
  const [chartData, setChartData] = useState(null);
  const [pchartData, setPChartData] = useState(null);
  const [vchartData, setVChartData] = useState(null);
  const [gchartData, setGChartData] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [stateCount, setStateCount] = useState(0);
  const [cityCount, setCityCount] = useState(0);
  const [placeCount, setPlaceCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [vlogCount, setVlogCount] = useState(0);
  const [guiderCount, setGudierCount] = useState(0);


//user chart

  useEffect(() => {
    const fetchData = async () => {
     try {
         // Fetch data from API
        const response = await fetch("http://localhost:8080/api/userchart");
        const data = await response.json();

       // Process data for chart
        const labels = data.map((item) => item.user_date);
        const userCount = data.map((item) => item.user_Count);

        // Set chart data
        setChartData({
          labels: labels,
         datasets: [{
            label: "Users",
            backgroundColor: [`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`],
            borderColor: 'black',
            RiGridLine:'none',
            data: userCount,
          }]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
   };

    fetchData();
  }, []);


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
        setPChartData({
          labels: labels,
          datasets: [{
            label: "Posts",
            backgroundColor: [`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`],
            borderColor: '',
            data: postCounts
          }]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch("http://localhost:8080/api/vlogchart");
        const data = await response.json();

        // Process data for chart
        const labels = data.map((item) => item.vlog_date);
        const vlogCounts = data.map((item) => item.vlog_Count);

        // Set chart data
        setVChartData({
          labels: labels,
          datasets: [{
            label: "Vlogs",
            backgroundColor: [`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`],
            borderColor: '',
            data: vlogCounts
          }]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const config = {
    type: 'line',
    data: {
      labels:'post',
      datasets: [{
        label: 'Posts',
        data: [1, 2, 3, 4, 5, 6, 7], // Replace this with your actual post data
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192, 0.2)',
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Number of Posts Over Time',
        }
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch("http://localhost:8080/api/guiderchart");
        const data = await response.json();

        // Process data for chart
        const cityNames = data.map((item) => item.cityname);
        const guiderCount = data.map((item) => item.guider_Count);

        // Set chart data
        setGChartData({
          labels: cityNames,
          datasets: [{
            label: "guiders",
            backgroundColor: [`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`, `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`],
            borderColor: '',
            data: guiderCount
          }]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.6)', // X-axis labels color
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Y-axis grid color
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.6)', // Y-axis labels color
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
  };

  useEffect(() => {
    // Fetch user count from backend API
    fetch("http://localhost:8080/api/usercount")
      .then(response => response.json())
      .then(data => setUserCount(data.totalUsers))
      .catch(error => console.error('Error fetching user count:', error));
  }, []);

  useEffect(() => {
    // Fetch country count from backend API
    fetch("http://localhost:8080/api/countrycount")
      .then(response => response.json())
      .then(data => setCountryCount(data.totalCountry)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching country count:', error));
  }, []);

  useEffect(() => {
    // Fetch state count from backend API
    fetch("http://localhost:8080/api/statecount")
      .then(response => response.json())
      .then(data => setStateCount(data.totalState)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching state count:', error));
  }, []);

  useEffect(() => {
    // Fetch country count from backend API
    fetch("http://localhost:8080/api/citycount")
      .then(response => response.json())
      .then(data => setCityCount(data.totalCity)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching city count:', error));
  }, []);

  useEffect(() => {
    // Fetch place count from backend API
    fetch("http://localhost:8080/api/placecount")
      .then(response => response.json())
      .then(data => setPlaceCount(data.totalPlace)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching place count:', error));
  }, []); 

  useEffect(() => {
    // Fetch country count from backend API
    fetch("http://localhost:8080/api/postcount")
      .then(response => response.json())
      .then(data => setPostCount(data.totalPost)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching place count:', error));
  }, []);

  useEffect(() => {
    // Fetch vlog count from backend API
    fetch("http://localhost:8080/api/vlogcount")
      .then(response => response.json())
      .then(data => setVlogCount(data.totalVlog)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching vlog count:', error));
  }, []);

  useEffect(() => {
    // Fetch country count from backend API
    fetch("http://localhost:8080/api/guidercount")
      .then(response => response.json())
      .then(data => setGudierCount(data.totalGuider)) // Update to match the property name returned by the API
      .catch(error => console.error('Error fetching place count:', error));
  }, []);
  return (
    <>
      <NavbarAdmin />
      <div className='col-md-10 ms-auto py-2'>
      <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Admin Dashboard</h1>
                        <div className="row">
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid dodgerblue"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Users</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{userCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid green"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Guiders</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{guiderCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid olive"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Country</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{countryCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid silver"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total State</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{stateCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid cadetblue"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total cities</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{cityCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid black"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Places</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{placeCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid orange"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Post</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{postCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style={{borderLeft:"5px solid tomato"}}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Vlogs</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{vlogCount}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-xl-5">
                                <div className="card mb-4">
                                <div className="card-body">
                                <i class="fas fa-chart-pie me-1"></i>
                                      User chart
                                   {chartData ? <Pie data={chartData} options={options} /> : <p>Loading...</p>}
                                 </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-pie me-1"></i>
                                        Guider chart
                                        {gchartData ? <Bar data={gchartData} options={options} /> : <p>Loading...</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        <div className="col-xl-5" style={{marginRight:"100px"}}>
                                <div className="card mb-4">
                                <div className="card-body">
                                <i class="fas fa-chart-pie me-1"></i>
                                      Post chart
                                   {pchartData ? <Bar data={pchartData} options={options} /> : <p>Loading...</p>}
                                 </div>
                                </div>
                            </div>
                            <div className="col-xl-5 mx-6" >
                                <div className="card mb-4">
                                <div className="card-body" >
                                <i class="fas fa-chart-pie me-1"></i>
                                      Vlog chart
                                   {vchartData ? <Bar data={vchartData} options={options} /> : <p>Loading...</p>}
                                 </div>
                                </div>
                            </div>
                            </div>
                      </div>
                    </main>
      </div>
    </>
  )
}

export default Charts;