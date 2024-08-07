import {React,useState} from 'react';
import './App.css'; // Ensure Tailwind is imported here
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';


function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div className=" min-h-screen flex flex-col">
       <nav className='flex px-5 h-14 bg-blue-700 text-white items-center justify-between'>
      <div className="flex space-x-4">
      <div className=''>
          <a className="text-4xl text-white md:ml-[1px]" href="#">&#8801;</a>
        </div>
        <div className='mx-4'>Menu</div>
        
        <div>Straight2Bank</div>
        <div>Welcome SITUSR01</div>
        <div>Group ID: KRSITEE1</div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="relative">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"></span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405a2.032 2.032 0 01-.47-1.408l.775-6.197a8.058 8.058 0 00-7.62-7.62l-6.197.775a2.032 2.032 0 01-1.408.47L7 3H2m0 0h5m-5 0v5"></path></svg>
        </div>
        <div>Logout</div>
      </div>
    </nav>
      <main className="flex-grow p-10">
      <button className="bg-blue-800 px-4 py-1 text-white hover:bg-gray-400">HOME</button>
      <div className="flex gap-4 mt-4">
        {/* <!-- First Column with Two Divs --> */}
      <div className="flex flex-col gap-4 flex-1">
            <div className="border border-gray-300">
                <div className="bg-blue-800 text-white px-4 py-2">PAYMENT-PENDING APPROVAL</div>
                <div className="bg-white px-4 py-2">QO022706 | Cut - off time 2 hrs from now KRW 701</div>
            </div>
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
      </div>
        {/* <!-- Second Column with One Div --> */}
        <div className="flex flex-col gap-4 flex-1">
            <div className="border border-gray-300">
                <div className="bg-blue-800 text-white px-4 py-2">PRIORITY MESSAGE</div>
                <div className="flex justify-between bg-white px-4 py-2">
                  <h6>Bill Payments Report - Korea_Bill</h6>
                  <li className='list-none'><a href="" className="text-blue-800 underline hover:text-blue-500">All message</a></li>
                </div>
            </div>
            <div className="border border-gray-300">
                <div className="bg-blue-800 text-white px-4 py-2">PAYMENTS IN LAST 7 DAYS (MY VIEW)</div>
                <div className="bg-white px-1 py-2 flex justify-center flex-col items-center">
                <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="CLIENT WORKFLOW">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="BANK WORKFLOW">
        
        <div className="flex justify-around items-center w-full mt-4">
        {/* Processed by Bank */}
        <div className="flex flex-col items-center">
                <div className="relative w-10 h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-green-500" style={{ height: '62.5%' }}></div>
                </div>
                <span className="mt-2 text-lg font-semibold">25</span>
                <span className="text-sm text-gray-600">Processed by Bank</span>
              </div>
        {/* Rejected by Bank */}
        <div className="flex flex-col items-center">
                <div className="relative w-10 h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-blue-500" style={{ height: '35%' }}></div>
                </div>
                <span className="mt-2 text-lg font-semibold">14</span>
                <span className="text-sm text-gray-600">Rejected by Bank</span>
              </div>
        </div>
      </Tab>
    
    </Tabs>
                </div>
            </div>
        </div>
        {/* <!-- Third Column with One Div --> */}
        <div className="flex-1 border border-gray-300">
            <div className="bg-blue-800 text-white px-4 py-2">QUICK NAVIGATION</div>
            <div className="bg-white px-4 py-2">
            <ul className="list-none p-0 m-0">
                    <li className="flex justify-between items-start gap-2 py-2">
                    <div>
                            <div className="font-bold">Create Payments</div>
                            <div className="text-gray-600">Item Content 1</div>
                        </div>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a9.933 9.933 0 00-7.07 2.93C2.93 7.07 2 9.47 2 12s.93 4.93 2.93 7.07A9.933 9.933 0 0012 22a9.933 9.933 0 007.07-2.93C21.07 16.93 22 14.53 22 12s-.93-4.93-2.93-7.07A9.933 9.933 0 0012 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/></svg>
                        
                    </li>
                    <div className="border-t border-gray-300 my-2"></div>
                    <li className="flex justify-between  items-start gap-2 py-2">
                    <div>
                            <div className="font-bold">Create Payee</div>
                            <div className="text-gray-600">Item Content 2</div>
                        </div>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a9.933 9.933 0 00-7.07 2.93C2.93 7.07 2 9.47 2 12s.93 4.93 2.93 7.07A9.933 9.933 0 0012 22a9.933 9.933 0 007.07-2.93C21.07 16.93 22 14.53 22 12s-.93-4.93-2.93-7.07A9.933 9.933 0 0012 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/></svg>
                        
                    </li>
                    <div className="border-t border-gray-300 my-2"></div>
                    <li className="flex justify-between  items-start gap-2 py-2">
                    <div>
                            <div className="font-bold">Create Payee</div>
                            <div className="text-gray-600">Item Content 2</div>
                        </div>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a9.933 9.933 0 00-7.07 2.93C2.93 7.07 2 9.47 2 12s.93 4.93 2.93 7.07A9.933 9.933 0 0012 22a9.933 9.933 0 007.07-2.93C21.07 16.93 22 14.53 22 12s-.93-4.93-2.93-7.07A9.933 9.933 0 0012 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/></svg>
                        
                    </li>
                    <div className="border-t border-gray-300 my-2"></div>
                    <li className="flex justify-between  items-start gap-2 py-2">
                    <div>
                            <div className="font-bold">View Account Balance</div>
                            <div className="text-gray-600">Item Content 2</div>
                        </div>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a9.933 9.933 0 00-7.07 2.93C2.93 7.07 2 9.47 2 12s.93 4.93 2.93 7.07A9.933 9.933 0 0012 22a9.933 9.933 0 007.07-2.93C21.07 16.93 22 14.53 22 12s-.93-4.93-2.93-7.07A9.933 9.933 0 0012 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/></svg>
                        
                    </li>
                    <div className="border-t border-gray-300 my-2"></div>
                    <li className="flex justify-between  items-start gap-2 py-2">
                    <div>
                            <div className="font-bold">Manage Reports</div>
                            <div className="text-gray-600">Item Content 2</div>
                        </div>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a9.933 9.933 0 00-7.07 2.93C2.93 7.07 2 9.47 2 12s.93 4.93 2.93 7.07A9.933 9.933 0 0012 22a9.933 9.933 0 007.07-2.93C21.07 16.93 22 14.53 22 12s-.93-4.93-2.93-7.07A9.933 9.933 0 0012 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/></svg>
                        
                    </li>
                    <div className="border-t border-gray-300 my-2"></div>
                    {/* <!-- Add more items as needed --> */}
                </ul>
            </div>
        </div>
    </div>
      </main>


    </div>
  );
}

export default App;
