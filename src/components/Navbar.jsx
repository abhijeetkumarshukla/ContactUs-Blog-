import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 p-4 text-white shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-blue-200">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-blue-200">
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;