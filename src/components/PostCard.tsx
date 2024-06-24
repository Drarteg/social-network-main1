import "../CSS/PostCard.css"

const PostCard = () => {
  return (
    
      <div className="form">
      <div className="options">
        <div className="flex h-16 gap-4 items-center ">
          <div className="rounded-full bg-red-700 w-10 h-10 flex justify-center items-center">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl ">Edward Kelly</span>
            <span className="text-gray-500">2 hours ago</span>
          </div>
        </div>
        <img
          className="dots "
          src="/three-dots-vertical.svg"
          alt="ellipsis_menu"
        />
      </div>
      <p className="text">
        Implementaion of technologies to store unchangeable data based specific.
      </p>
      <img
      
        className="rounded-md w-full"
        src="https://uitheme.net/cube/images/post-4.jpg"
        alt="image"
      />
      <div className="flex justify-between">
        <div className="flex gap-4 items-center h-10">
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="heart" src="/suit-heart-fill.svg" alt="like" />
            <span className="text-gray-50">1294</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="chat" src="/chat-fill.svg" alt="comment" />
            <span className="text-gray-50">42</span>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="share" src="/share-fill.svg" alt="share" />
          <span className="text-gray-50">15</span>
        </div>
      </div>
    </div>

   
   
  );
};

export default PostCard;
