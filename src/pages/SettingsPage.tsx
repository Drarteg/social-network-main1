import Setting1 from "../Settings/Setting1";
import Setting10 from "../Settings/Setting10";
import Setting11 from "../Settings/Setting11";
import Setting12 from "../Settings/Setting12";
import Setting2 from "../Settings/Setting2";
import Setting3 from "../Settings/Setting3";
import Setting4 from "../Settings/Setting4";
import Setting5 from "../Settings/Setting5";
import Setting6 from "../Settings/Setting6";
import Setting7 from "../Settings/Setting7";
import Setting8 from "../Settings/Setting8";
import Setting9 from "../Settings/Setting9";
import Menu from "../components/Menu";
import SearchInput from "../components/SearchInput";
import Setting from "../components/Setting";

const SettingsPage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-gray-50">Settings</h1>
      <SearchInput />
      <div>
        <Setting />
        <Setting1 />
        <Setting2 />
        <Setting3 />
        <Setting4 />
        <Setting5 />
        <Setting6 />
        <Setting7 />
        <Setting8 />
        <Setting9 />
        <Setting10 />
        <Setting11 />
        <Setting12 />
      </div>
      <Menu />
    </div>
  );
};

export default SettingsPage;
