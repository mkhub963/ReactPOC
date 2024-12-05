import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import {Home }from './Home';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    quickNavigationData: [],
    paymentPendingData: [],
    pendingTasksData: [],
    priorityMessageData: [],
    navBarData: []
  });

  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setData({
          quickNavigationData: response.data.quickNavigation,
          paymentPendingData: response.data.paymentPending,
          pendingTasksData: response.data.pendingTasks,
          priorityMessageData: response.data.priorityMessage,
          navBarData: response.data.navBar
        });
        setServerError(false);
      } catch (error) {
        setServerError(true);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Layout>
        {serverError ? <Home /> : children}
      </Layout>
    </DataContext.Provider>
  );
};
