import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    quickNavigationData: [],
    paymentPendingData: [],
    pendingTasksData: [],
    priorityMessageData: []
  });

  useEffect(() => {
    // Replace with your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setData({
          quickNavigationData: response.data.quickNavigation,
          paymentPendingData: response.data.paymentPending,
          pendingTasksData: response.data.pendingTasks,
          priorityMessageData: response.data.priorityMessage
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
