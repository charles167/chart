import React from 'react';
import assets, { imagesDummyData } from '../assets/assets';

const RightSidebar = ({ selectedUser }) => {
  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? 'max-md:hidden' : ''}`}>
      
      {/* Profile section */}
      <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
        <img
          src={selectedUser?.profilePic || assets.avatar_icon}
          alt="User"
          className="w-20 aspect-square rounded-full"
        />
        <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          {selectedUser.fullName}
        </h1>
        <p className="px-10 text-center text-sm">{selectedUser.bio}</p>
      </div>

      <hr className="border-[#ffffff50] my-4" />

      {/* Media section */}
      <div className="px-5 text-xs">
        <p className="mb-2 font-semibold text-sm">Media</p>
        <div className="max-h-[200px] overflow-y-auto grid grid-cols-2 gap-3 opacity-80 pr-1">
          {imagesDummyData.map((url, index) => (
            <div
              key={index}
              onClick={() => window.open(url, '_blank')}
              className="cursor-pointer rounded overflow-hidden"
            >
              <img src={url} alt={`media-${index}`} className="h-full w-full object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout button */}
      <button
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer hover:scale-105 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default RightSidebar;
