import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6 text-blue-600"
        >
          Welcome to MyApp
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center mb-8"
        >
          Explore our blogs or get in touch with us for more information.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Blogs</h2>
            <p className="text-gray-700">
              Discover insightful articles tailored for students, college-goers, and career changers.
            </p>
            <a
              href="/blogs"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Explore Blogs
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h2>
            <p className="text-gray-700">
              Have questions? Reach out to us for coaching, training, or general inquiries.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;