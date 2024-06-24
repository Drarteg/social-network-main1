import SearchInput from "../components/SearchInput";
import PostCard from "../components/PostCard";
import PostCard1 from "../components/PostCard1";
import PostCard2 from "../components/PostCard2";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <div className="gap-4 flex flex-col justify-center items-center">
      <SearchInput />
      <PostCard />
      <PostCard1 />
      <PostCard2 />
      <Menu />
    </div>
  );
};

export default HomePage;
