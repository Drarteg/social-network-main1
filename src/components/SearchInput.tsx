
const SearchInput = () => {
  return (
    <div className="labels relative max-w-3xl mt-4 w-full px-5">
    <div className="input-box">
         <input type="text" required
         placeholder="Search..."
         className="py-2 px-2 rounded focus:outline-none"
         >
         </input>
       </div>
   <img
     src="/search.svg"
     className=" search absolute w-6 top-2 right-7 flex items-center text-gray-500"
   ></img>
 </div>
  );
}

export default SearchInput