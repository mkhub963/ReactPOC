import React from 'react';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold mb-4">Please Login</h1>
      <p className="text-lg mb-6">The data server is currently not running.</p>
      <p className="text-md">
        Start the server by running the following command:
        <br />
        <code className="bg-gray-200 text-blue-800 px-2 py-1 rounded mt-2 inline-block">
          json-server --watch db.json
        </code>
      </p>
    </div>
  );
};
