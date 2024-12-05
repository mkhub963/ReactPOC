import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Components/Layout'; 
import MainContent from './Components/MainContent';
import { DataProvider } from './Components/DataContext';

function App() {
  return (
    <DataProvider>
      <Layout>
        <MainContent />
       </Layout>
    </DataProvider>
  
  );
}

export default App;
