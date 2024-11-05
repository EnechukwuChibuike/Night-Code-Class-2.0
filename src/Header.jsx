import "./App.css";
import Button from "./Button";

function Header() {
  const ButtonText = "GET IN TOUCH";
  return (
    <header className="h-[10vh] bg-white flex justify-between px-48 items-center text-gray-700">
      <strong>CONVERSIONLAB</strong>

      <nav className="flex gap-5 items-center">
        <a href="#">WHY</a>
        <a href="#">HOW</a>
        <a href="#">TESTING</a>
        <a href="#">BLOG</a>
      </nav>

      <Button ButtonText={ButtonText} />
    </header>
  );
}

export default Header;
