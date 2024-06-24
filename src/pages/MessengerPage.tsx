import Dialog from '../components/Dialog';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput';
import Dialog1 from '../messenger/Dialog1';
import Dialog10 from '../messenger/Dialog10';
import Dialog11 from '../messenger/Dialog11';
import Dialog2 from '../messenger/Dialog2';
import Dialog3 from '../messenger/Dialog3';
import Dialog4 from '../messenger/Dialog4';
import Dialog5 from '../messenger/Dialog5';
import Dialog6 from '../messenger/Dialog6';
import Dialog7 from '../messenger/Dialog7';
import Dialog8 from '../messenger/Dialog8';
import Dialog9 from '../messenger/Dialog9';

const MessengerPage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-gray-50 ">Friends</h1>
      <SearchInput />
      <div className="messenger">
        <Dialog />
        <Dialog1 />
        <Dialog2 />
        <Dialog3 />
        <Dialog4 />
        <Dialog5 />
        <Dialog6 />
        <Dialog7 />
        <Dialog8 />
        <Dialog9 />
        <Dialog10 />
        <Dialog11 />
      </div>
      <Menu />
    </div>
  );
}

export default MessengerPage