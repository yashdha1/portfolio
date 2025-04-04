import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className="bg-transparent backdrop-blur-sm text-white rounded-lg mt-32 mx-auto mb-5 max-w-7xl">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Let's Connect</h2>
            <a
              href="mailto:yashdhadod@gmail.com"
              className="text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center justify-center md:justify-start"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              yashdhadod@gmail.com
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/yash-dhadod-ab440b25b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/yashdha1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
              aria-label="GitHub"
            >
              <img src={getImageUrl("contact/github.png")} alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/yashdhadid59479"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
              aria-label="Twitter"
            >
              <img src={getImageUrl("contact/twitter.png")} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
