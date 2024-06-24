import "../CSS/PostCard.css"
import kremlin from "../Img/09a8aa1e24083e7_500x300.jpg";
import d from "../Img/download.jpg";


const PostCard3 = () => {
  return (
      <div className="form">
      <div className="options">
        <div className="flex h-16 gap-4 items-center ">
          <div className="rounded-full w-10 h-10 flex justify-center items-center">
          <img src={d} alt="img" style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover'  }}/>
         
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl ">David Scott</span>
            <span className="text-gray-500">14 minutes ago</span>
          </div>
        </div>
        <img
          className="dots "
          src="/three-dots-vertical.svg"
          alt="ellipsis_menu"
        />
      </div>
      <p className="text">
      For the first time I visited Moscow, the Kremlin immediately caught my eye.</p>
      <img
      
        className="rounded-md w-full" src={kremlin} alt="image" />
      <div className="flex justify-between">
        <div className="flex gap-4 items-center h-10">
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="heart" src="/suit-heart-fill.svg" alt="like" />
            <span className="text-gray-50">3947</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="chat" src="/chat-fill.svg" alt="comment" />
            <span className="text-gray-50">132</span>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="share" src="/share-fill.svg" alt="share" />
          <span className="text-gray-50">50</span>
        </div>
      </div>
    </div>

   
   
  );
};

export default PostCard3;
