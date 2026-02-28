import React, { useState, useEffect, useRef } from "react";
import "./index.css"; // اتأكدي إن ملف الـ CSS موجود

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // منطق إغلاق السايد بار عند الضغط بالخارج أو السكرول
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsOpen(false);

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      {/* زرار لفتح السايد بار (بيظهر في الموبايل غالباً) */}
      <button
        ref={toggleBtnRef}
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <h1 className="logo">Amira Yehia</h1>

        <nav className="nav-menu">
          {/* الربط باستخدام الـ IDs الصحيحة */}
          <a
            href="#intro"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <i className="bx bx-home"></i> Intro
          </a>
          <a
            href="#about"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <i className="bx bx-user"></i> About Me
          </a>
          <a
            href="#skills"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <i className="bx bx-code-alt"></i> Skills
          </a>
          <a
            href="#projects"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <i className="bx bx-briefcase"></i> Projects
          </a>
          <a
            href="#contact"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <i className="bx bx-envelope"></i> Contact Me
          </a>

          {/* <a
            href="#footer"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            <i className="bx bx-briefcase"></i> Footer
          </a> */}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
