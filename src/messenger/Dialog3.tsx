import avatar3 from "../Img/L6NX3iFBmN.jpg";


const Dialog3 = () => {
    return (
      <div className="mobile w-full flex items-center justify-between border-b py-2">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full cursor-pointer  w-10 h-10 flex justify-center items-center">
          <img src={avatar3} alt="avatar" style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover'  }} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-50">Henry the Younger</span>
            <span className="text-gray-400">When are you coming to college?</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="button1 bg-blue-400 rounded-full w-8 h-8 text-white flex justify-center items-center font-semibold cursor-pointer">
            5
          </div>
          <span className="button1 pm-2 text-blue-400 text-xs">07:23 PM</span>
        </div>
      </div>
    );
  };
  
  export default Dialog3;
  