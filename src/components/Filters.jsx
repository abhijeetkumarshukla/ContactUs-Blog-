import { useState } from "react";

const Filters = ({ onFilter }) => {
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ tags, search });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col md:flex-row gap-4 items-end">
        {/* Search Input */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tags Dropdown */}
        <div className="w-full md:w-48">
          <select
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Tags</option>
            <option value="history">History</option>
            <option value="american">American</option>
            <option value="crime">Crime</option>
            <option value="french">French</option>
            <option value="fiction">Fiction</option>
            <option value="english">English</option>
            <option value="love">Love</option>
            <option value="mystery">Mystery</option>
            <option value="classic">Classic</option>
            <option value="magical">Magical</option>
          </select>
        </div>

        {/* Filter Button */}
        <button
          type="submit"
          className="w-full md:w-auto p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Filter
        </button>
      </div>
    </form>
  );
};

export default Filters;
