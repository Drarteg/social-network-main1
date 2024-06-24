import Menu from "../components/Menu";
import PostCard from "../components/PostCard";
import PostCard1 from "../components/PostCard1";
import PostCard2 from "../components/PostCard2";
import PostCard3 from "../components/PostCard3";

const ProfilePage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-50">Profile</h1>
      <div className="forms1 max-w-3xl shadow-lg rounded-lg p-5">
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-semibold text-xl text-gray-100">Alice Maghyn</h4>
          <p className="text-gray-500">@california</p>
          <div className="flex gap-4">
            <div className="rounded-full w-10 h-10 cursor-pointer bg-blue-700 text-white flex justify-center items-center font-bold">
              f
            </div>
            <div className="rounded-full w-10 h-10 cursor-pointer bg-red-700 text-white flex flex-col justify-center items-center font-semibold">
              P
            </div>
            <div className="rounded-full bg-orange-500 text-white py-2 px-4 cursor-pointer uppercase flex justify-center font-semibold">
              follow
            </div>
          </div>
        </div>
      </div>

      <PostCard />
      <PostCard1 />
      <PostCard2 />
      <PostCard3 />
      <Menu />
    </div>
  );
};

export default ProfilePage;
