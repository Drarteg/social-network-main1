import "../CSS/PostCard.css"
import rest from "../Img/65ddc6b0330f1797039781.jpg";
import avatar from "../Img/af62d76a2d92797df0711e6a94d319490936f3a1_2_1000x1000.jpg";

const PostCard1 = () => {
  return (
    
      <div className="form">
      <div className="options">
        <div className="flex h-16 gap-4 items-center ">
          <div className= "rounded-full w-10 h-10 flex justify-center items-center" >
            <img src={avatar} alt="img" style={{ borderRadius: '50%' }}/>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl ">Robert Tich</span>
            <span className="text-gray-500">8 hours ago</span>
          </div>
        </div>
        <img
          className="dots "
          src="/three-dots-vertical.svg"
          alt="ellipsis_menu"
        />
      </div>
      <p className="text">
        It's very nice to relax in the Maldives</p>
      <img
      
        className="rounded-md w-full"
        src={rest}
        alt="image"
      />
      <div className="flex justify-between">
        <div className="flex gap-4 items-center h-10">
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="heart" src="/suit-heart-fill.svg" alt="like" />
            <span className="text-gray-50">258</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="chat" src="/chat-fill.svg" alt="comment" />
            <span className="text-gray-50">21</span>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="share" src="/share-fill.svg" alt="share" />
          <span className="text-gray-50">47</span>
        </div>
      </div>
    </div>

   
   
  );
};

export default PostCard1;
