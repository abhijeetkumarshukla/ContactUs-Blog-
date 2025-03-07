import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-2xl -top-20 -left-20 animate-float"></div>
        <div className="absolute w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-2xl bottom-0 right-0 animate-float-delay"></div>
      </motion.div>

      <div className="container mx-auto p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Welcome to MyApp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-700"
          >
            Explore our blogs or get in touch with us for more information.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blogs
            </h2>
            <p className="text-gray-700 mb-6">
              Discover insightful articles tailored for students, college-goers,
              and career changers.
            </p>
            <a
              href="/blogs"
              className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Explore Blogs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              Have questions? Reach out to us for coaching, training, or general
              inquiries.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
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
