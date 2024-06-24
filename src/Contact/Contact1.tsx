import avatar1 from "../Img/98339294c78f2696230c0b51921d2ebb0b6a3af9r1-640-640v2_uhq.jpg";

const Contact1 = () => {
    return (
      <div className="mobile w-full flex items-center justify-between border-b py-2">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full cursor-pointer  w-10 h-10 flex justify-center items-center">
            <img src={avatar1} alt="avatar" style={{ borderRadius: '50%' }} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-50">Darren Moul</span>
            <span className="text-gray-500">Hello. What are you doing?</span>
          </div>
        </div>
        <div className="button  rounded-full px-5 py-1 cursor-pointer">Follow</div>
      </div>
    );
  };
  
  export default Contact1;
  