import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';


const Pendingtasks = ()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="border border-gray-300">
                <div className="bg-blue-800 text-white px-4 py-2">1555 PENDING TASKS </div>
                <div className="bg-white px-4 py-2">
                <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
      <Tab eventKey="home" title="CASH">
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item className="border-black">
          <div className="flex justify-between p-[12px] mb-[80px] bg-white  rounded-lg border-blue-800">
          <div className="text-left max-h-1">
            <div className="text-2xl font-bold">687</div>
            <div className="text-sm text-gray-400 whitespace-nowrap">Pending Send to Bank</div>
            <div className="text-blue-500 mt-2">687 Payments</div>
            
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold">687</div>
            <div className="text-sm text-gray-400 whitespace-nowrap">Pending Repair</div>
            <div className="text-blue-500 mt-2">5 Payments</div>
            <div className="text-blue-500">3 Payees</div>
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold">830</div>
            <div className="text-sm text-gray-400 whitespace-nowrap">Pending Authorization</div>
            <div className="text-blue-500 mt-2">556 Payments</div>
            <div className="text-blue-500">11 Payment Batches</div>
            <div className="text-blue-500">263 Payees</div>
          </div>
        </div>
        <Carousel.Caption className='ml'>
          <div className="text-gray-500 space-x-0">Last Updated 17/07/2024 04:09:44 PM</div>
        </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.png?text=Second+slide" // Replace with your image URL
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.png?text=Third+slide" // Replace with your image URL
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </Tab>
      
    </Tabs>
                </div>
            </div>
    )
    
}

export default Pendingtasks;