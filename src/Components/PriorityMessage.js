import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const PriorityMessage = ()=>{
    return (
        <div className="flex flex-col gap-4 flex-1">
        <div className="border border-gray-300">
            <div className="bg-blue-800 text-white px-4 py-2">PRIORITY MESSAGE</div>
            <div className="flex justify-between bg-white px-4 py-2">
              <h6>Bill Payments Report - Korea_Bill</h6>
              <li className="list-none text-blue-800 underline hover:text-blue-500">All message</li>
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
    )
}

export default PriorityMessage;