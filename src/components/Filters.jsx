import { useState } from "react";

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ category, search });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="education">Education</option>
        <option value="career">Career</option>
        <option value="technology">Technology</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Filter
      </button>
    </form>
  );
};

export default Filters;