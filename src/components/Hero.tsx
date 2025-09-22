export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 transition-opacity duration-700 opacity-100"
      >
        Duke MEM ’27 | Aspiring Product Manager & Project Leader
      </h1>

      <p
        className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 transition-opacity duration-700 delay-150 opacity-100"
      >
        3x AWS Certified | Driving Cloud Transformation & AI Innovation | Published Researcher passionate about bridging technology, strategy, and product impact.
      </p>

      <div
        className="flex flex-wrap gap-4 justify-center transition-opacity duration-700 delay-300 opacity-100"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white rounded-2xl px-6 py-3 shadow-md hover:shadow-lg transition"
        >
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/abinavnarayanan"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-2xl px-6 py-3 text-gray-700 hover:bg-gray-100 transition flex items-center"
        >
          Connect on LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
