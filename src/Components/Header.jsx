
const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <h2 className="text-2xl font-bold">ZUH.</h2>
      
      <nav className="flex items-center gap-8 font-bold font-serif">
        <a href="#" className="text-purple-600 font-medium hover:text-purple-700">Home</a>
        <a href="/projects" className="text-gray-700 font-medium hover:text-purple-600">Projects</a>
        <a href="/about" className="text-gray-700 font-medium hover:text-purple-600">About</a>
      </nav>

      <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;