import "./App.css";

function Header() {
  return (
    <header className="h-[10vh] bg-white flex justify-between px-48 items-center text-gray-700">
      <strong>CONVERSIONLAB</strong>

      <nav className="flex gap-5 items-center">
        <a href="#">WHY</a>
        <a href="#">HOW</a>
        <a href="#">TESTING</a>
        <a href="#">BLOG</a>

        <button className="px-3 py-1 shadow-lg rounded-md bg-[orangered] text-white">
          GET IN TOUCH
        </button>
      </nav>
    </header>
  );
}

export default Header;
