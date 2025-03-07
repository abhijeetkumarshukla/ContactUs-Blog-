import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600">{blog.body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogCard;
