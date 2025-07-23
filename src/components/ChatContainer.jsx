import React, { useEffect, useRef } from 'react';
import assets, { messagesDummyData } from '../assets/assets';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  
  const scrollEnd = useRef(

   useEffect(()=>{
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoview({behavior:smoth})
    }
   },[]))
  
  return selectedUser ? (
    <div className="w-full overflow-scroll relative backdrop-blur-lg">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="User profile" className="w-8 rounded-full" />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Martin Johnson
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </p>
        <button onClick={() => setSelectedUser(null)} className="md:hidden">
          <img src={assets.arrow_icon} alt="Back" className="w-6" />
        </button>
        <img src={assets.help_icon} alt="Help" className="hidden md:block w-5" />
      </div>
      {/*  ------ chat area*/}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((msg,index)=>(
          <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e410f3cd28382ecf9' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt='' className='max-w-[230] border border-gray-700 rounded-lg overflow-hidden mb-8'/>
            ):(
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg md-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e410f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
            )

            }
            <div className='text-center text-xs'>
              <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt=""  className='w-7 rounded-full' />
              <p className='text-gray-500'>{ formatMessageTime (msg.createdAt)  }</p>

            </div>

          </div>
        ))}

        <div ref={scrollEnd} ></div>

      </div>

{/*  ----- botton area ------- */}
<div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-black/30 backdrop-blur-md">
  <div className="flex-1 flex items-center bg-gray-800/50 px-3 py-2 rounded-full">
    <input
      type="text"
      placeholder="Send a message"
      className="flex-1 text-sm bg-transparent p-2 text-white placeholder-gray-400 outline-none border-none"
    />
    <input type="file" id="image" accept="image/png, image/jpeg" hidden />
    <label htmlFor="image" className="cursor-pointer">
      <img src={assets.gallery_icon} alt="Upload" className="w-5 mr-2" />
    </label>
  </div>
  <img
    src={assets.send_button}
    alt="Send"
    className="w-7 cursor-pointer hover:scale-105 transition"
  />
</div>


    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden h-full">
      <img src={assets.logo_icon} alt="Chat Logo" className="w-12" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;
