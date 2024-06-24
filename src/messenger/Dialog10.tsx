import avatar10 from "../Img/1676295972191096669.png";

const Dialog10 = () => {
    return (
      <div className="mobile w-full flex items-center justify-between border-b py-2">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full cursor-pointer  w-10 h-10 flex justify-center items-center">
          <img src={avatar10} alt="avatar" style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover'  }} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-50">Young Bucks</span>
            <span className="text-gray-400">Listen, I found a job for you here, I need you to give an answer before 8 pm.</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="button1 bg-blue-400 rounded-full w-8 h-8 text-white flex justify-center items-center font-semibold cursor-pointer">
            1
          </div>
          <span className="button1 pm-2 text-blue-400 text-xs">8:37 PM</span>
        </div>
      </div>
    );
  };
  
  export default Dialog10;
  