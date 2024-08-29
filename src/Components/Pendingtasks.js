import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import { useContext, useState } from 'react';
import { DataContext } from './DataContext';


const Pendingtasks = ()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const { pendingTasksData } = useContext(DataContext);
    // const {  lastUpdated } = pendingTasksData;
    return (
      <div className="border border-gray-300">
        <div className="bg-blue-800 text-white px-4 py-2">1555 PENDING TASKS</div>
        <div className="bg-white px-4 py-2">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="CASH">
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className="flex justify-between p-[12px] mb-[80px] bg-white  rounded-lg border-blue-800">
      {pendingTasksData[0]?.tasks?.map((task, idx) => (
        <div key={idx} className="text-left">
          <div className="text-2xl font-bold">{task.count}</div>
          <div className="text-sm text-gray-400 whitespace-nowrap">{task.type}</div>
          <div className="text-blue-500 mt-2">{task.details}</div>
        </div>
      ))}
    </div>
    <Carousel.Caption className="text-gray-500">
      Last Updated {pendingTasksData[0]?.lastUpdated}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </Tab>
          </Tabs>
        </div>
      </div>
    );
    
}

export default Pendingtasks;