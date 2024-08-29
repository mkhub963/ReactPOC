import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const NavBar = () => {
  const { navBarData } = useContext(DataContext);

  const user = navBarData[0];

  return (
    <nav className='flex px-5 h-14 bg-blue-700 text-white items-center justify-between'>
      <div className="flex space-x-4">
        <div>
          <a className="text-4xl text-white md:ml-[1px]" href="./home">&#8801;</a>
        </div>
        <div className='mx-4'>Menu</div>
        {user?.isLoggedIn === "true" ? (
          <>
            <div>{user?.name}</div>
            <div>{user?.message} {user?.empId}</div>
            <div>Group ID: {user?.groupId}</div>
          </>
        ) : (
          <div>Please log in</div>
        )}
      </div>
      {user?.isLoggedIn === "true" && (
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"></span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405a2.032 2.032 0 01-.47-1.408l.775-6.197a8.058 8.058 0 00-7.62-7.62l-6.197.775a2.032 2.032 0 01-1.408.47L7 3H2m0 0h5m-5 0v5"></path></svg>
          </div>
          <div>Logout</div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
