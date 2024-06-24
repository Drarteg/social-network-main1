import Contact1 from "../Contact/Contact1";
import Contact10 from "../Contact/Contact10";
import Contact11 from "../Contact/Contact11";
import Contact2 from "../Contact/Contact2";
import Contact3 from "../Contact/Contact3";
import Contact4 from "../Contact/Contact4";
import Contact5 from "../Contact/Contact5";
import Contact6 from "../Contact/Contact6";
import Contact7 from "../Contact/Contact7";
import Contact8 from "../Contact/Contact8";
import Contact9 from "../Contact/Contact9";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import SearchInput from "../components/SearchInput";

const SearchPage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-gray-50">Friends</h1>
      <SearchInput />
      <div className="friends">
      <Contact />
      <Contact1 />
      <Contact2 />
      <Contact3 />
      <Contact4 />
      <Contact5 />
      <Contact6 />
      <Contact7 />
      <Contact8 />
      <Contact9 />
      <Contact10 />
      <Contact11 />
      </div>
      <Menu />
    </div>
  );
};

export default SearchPage;
