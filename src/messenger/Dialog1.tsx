import avatar1 from "../Img/98339294c78f2696230c0b51921d2ebb0b6a3af9r1-640-640v2_uhq.jpg";


const Dialog1 = () => {
    return (
      <div className="mobile w-full flex items-center justify-between border-b py-2">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full cursor-pointer  w-10 h-10 flex justify-center items-center">
          <img src={avatar1} alt="avatar" style={{ borderRadius: '50%' }} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-50">Darren Moul</span>
            <span className="text-gray-400">Hello. What are you doing?</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="button1 bg-blue-400 rounded-full w-8 h-8 text-white flex justify-center items-center font-semibold cursor-pointer">
            2
          </div>
          <span className="button1 pm-2 text-blue-400 text-xs">09:46 PM</span>
        </div>
      </div>
    );
  };
  
  export default Dialog1;
  