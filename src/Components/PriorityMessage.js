import { useContext } from 'react';
import { DataContext } from './DataContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const PriorityMessage = () => {
  const { priorityMessageData } = useContext(DataContext);
  
  // Access the first priority message
  const priorityMessage = priorityMessageData[0];
  
  // Access the second priority message (with tabs)
  const paymentsMessage = priorityMessageData[1];

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="border border-gray-300">
        <div className="bg-blue-800 text-white px-4 py-2">PRIORITY MESSAGE</div>
        <div className="flex justify-between bg-white px-4 py-2">
          <h6>{priorityMessage?.title}</h6>
          <li className="list-none text-blue-800 underline hover:text-blue-500">{priorityMessage?.linkText}</li>
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
            {paymentsMessage?.tabs.map((tab) => (
              <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
                {tab.eventKey === 'profile' ? (
                  <div className="flex justify-around items-center w-full mt-4">
                    {/* Processed by Bank */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-10 h-40 bg-gray-200 rounded-lg overflow-hidden">
                        <div
                          className="absolute bottom-0 w-full bg-green-500"
                          style={{
                            height: `${tab.content.processedByBank.heightPercentage}%`,
                            backgroundColor: tab.content.processedByBank.color,
                          }}
                        ></div>
                      </div>
                      <span className="mt-2 text-lg font-semibold ">{tab.content.processedByBank.count}</span>
                      <span className="text-sm text-gray-600">{tab.content.processedByBank.description}</span>
                    </div>
                    {/* Rejected by Bank */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-10 h-40 bg-gray-200 rounded-lg overflow-hidden">
                        <div
                          className="absolute bottom-0 w-full bg-blue-500"
                          style={{
                            height: `${tab.content.rejectedByBank.heightPercentage}%`,
                            backgroundColor: tab.content.rejectedByBank.color,
                          }}
                        ></div>
                      </div>
                      <span className="mt-2 text-lg font-semibold">{tab.content.rejectedByBank.count}</span>
                      <span className="text-sm text-gray-600">{tab.content.rejectedByBank.description}</span>
                    </div>
                  </div>
                ) : (
                  <div>{tab.content}</div>
                )}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};


export default PriorityMessage;