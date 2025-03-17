import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import Filter from '../components/Filter';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([
          { name: 'Jan', value: 400 },
          { name: 'Feb', value: 300 },
          { name: 'Mar', value: 500 },
          { name: 'Apr', value: 250 },
          { name: 'May', value: 600 },
          { name: 'Jun', value: 400 },
          { name: 'Jul', value: 300 },
          { name: 'Aug', value: 100 },
          { name: 'Sep', value: 200 },
          { name: 'Oct', value: 800 },
        ]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filter === 'high') {
      setFilteredData(data.filter(item => item.value >= 400));
    } else if (filter === 'low') {
      setFilteredData(data.filter(item => item.value < 400));
    } else {
      setFilteredData(data);
    }
  }, [data, filter]);

  return (
    <div className="p-6">
      <Filter setFilter={setFilter} />
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Data Visualization</h3>
        <Chart data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
