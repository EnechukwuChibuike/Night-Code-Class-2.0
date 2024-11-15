import Button from "../Button";
import { BiMenu } from "react-icons/bi";

function Header({ toggleMenu, setToggleMenu }) {
  const handleClick = (toggleMenu, setToggleMenu) => {
    toggleMenu === "grid" ? setToggleMenu("hidden") : setToggleMenu("grid");
    console.log(toggleMenu);
  };

  return (
    <header className="h-[10vh] flex items-center justify-between px-10 border-[1px] border-black">
      Header
      <button
        className="text-4xl"
        onClick={() => handleClick(toggleMenu, setToggleMenu)}
      >
        <BiMenu />
      </button>
    </header>
  );
}

export default Header;
