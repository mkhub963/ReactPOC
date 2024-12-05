import { useContext } from 'react';
import { DataContext } from './DataContext';

const Paymentpending = () => {
  const { paymentPendingData } = useContext(DataContext);
  // console.log(paymentPendingData);

  return (
    <div className="border border-gray-300">
      {paymentPendingData.map((item) => (
        <div key={item.id}>
          <div className="bg-blue-800 text-white px-4 py-2">{item.title}</div>
          <div className="bg-white px-4 py-2">{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Paymentpending;
