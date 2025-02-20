import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-bold">My Task App</h2>
            <p className="mt-2 text-sm">© 2025 My Task App. All rights reserved.</p>
          </div>
          
          {/* Right Side */}
          <div className="mt-4 lg:mt-0">
            <ul className="flex justify-center gap-6">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-cyan-400 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-cyan-400 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm hover:text-cyan-400 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-4 lg:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-cyan-400 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-cyan-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-cyan-400 transition-all duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
