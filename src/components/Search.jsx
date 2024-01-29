import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form className="bg-gray-900 px-3 py-2 rounded-xl mx-8 flex items-center w-[250px] justify-between">
      <input
        type="text"
        placeholder="ค้นหา"
        className="bg-gray-900 text-white"
      />
      <FaSearch className="text-gray-400" />
    </form>
  );
}
