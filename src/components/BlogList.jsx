import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Filters from "./Filters";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6); // Number of blogs per page

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.posts);
        setFilteredBlogs(data.posts);
        setLoading(false);
      });
  }, []);

  // Handle filtering
  const handleFilter = (filters) => {
    let filtered = blogs;
    if (filters.category) {
      filtered = filtered.filter((blog) => blog.tags.includes(filters.category));
    }
    if (filters.search) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <Filters onFilter={handleFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogList;