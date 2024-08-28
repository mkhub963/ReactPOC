import React, { useContext } from "react";
import { DataContext } from "./DataContext";


const Quicknavigation = ()=> {
    const { quickNavigationData } = useContext(DataContext);

    return (
        <div className="flex-1 border border-gray-300">
        <div className="bg-blue-800 text-white px-4 py-2">QUICK NAVIGATION</div>
        <div className="bg-white px-4 py-2">
          <ul className="list-none p-0 m-0">
            {quickNavigationData.map((item) => (
              <li key={item.id} className="flex justify-between items-start gap-2 py-2">
                <div>
                  <div className="font-bold">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a9.933 9.933 0 00-7.07 2.93C2.93 7.07 2 9.47 2 12s.93 4.93 2.93 7.07A9.933 9.933 0 0012 22a9.933 9.933 0 007.07-2.93C21.07 16.93 22 14.53 22 12s-.93-4.93-2.93-7.07A9.933 9.933 0 0012 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )

}

export default Quicknavigation;