import avatar11 from "../Img/images1.jpg";

const Contact11 = () => {
    return (
      <div className="mobile w-full flex items-center justify-between border-b py-2">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full cursor-pointer  w-10 h-10 flex justify-center items-center">
            <img src={avatar11} alt="avatar" style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover'  }} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-50">John Diamond</span>
            <span className="text-gray-500">Hello, pre-order of a powerful gaming laptop is available.</span>
          </div>
        </div>
        <div className="button  rounded-full px-5 py-1 cursor-pointer">Follow</div>
      </div>
    );
  };
  
  export default Contact11;
  