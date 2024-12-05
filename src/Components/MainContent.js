import React from 'react';
import Paymentpending from './Paymentpending';
import Pendingtasks from './Pendingtasks';
import PriorityMessage from './PriorityMessage';
import Quicknavigation from './Quicknavigation';

const MainContent = () => {
  return (
    <>
      <button className="bg-blue-800 px-4 py-1 text-white hover:bg-gray-400">HOME</button>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col gap-4 flex-1">
          <Paymentpending />
          <Pendingtasks />
        </div>
        <PriorityMessage />
        <Quicknavigation />
      </div>
    </>
  );
};

export default MainContent;
