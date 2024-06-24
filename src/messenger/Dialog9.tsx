
const Dialog9 = () => {
    return (
      <div className="mobile w-full flex items-center justify-between border-b py-2">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full cursor-pointer bg-blue-500  w-10 h-10 flex justify-center items-center">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-50">Michael Smith</span>
            <span className="text-gray-400">Hey buddy, if you want to go to London you need to have about £5000</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="button1 bg-blue-400 rounded-full w-8 h-8 text-white flex justify-center items-center font-semibold cursor-pointer">
            1
          </div>
          <span className="button1 pm-2 text-blue-400 text-xs">14:01 PM</span>
        </div>
      </div>
    );
  };
  
  export default Dialog9;
  