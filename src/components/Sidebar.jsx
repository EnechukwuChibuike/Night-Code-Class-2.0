import React from "react";

function Sidebar({ toggleMenu }) {
  return (
    <aside
      className={`h-screen sm:w-[20%] md:flex ${toggleMenu} absolute sm:static w-1/2 bg-white shadow-xl border-[1px] border-black`}
    >
      Sidebar
    </aside>
  );
}

export default Sidebar;
