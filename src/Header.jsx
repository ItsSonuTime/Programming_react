

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("HTML");

  const tabs = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT","MongoDB", "ExpressJS",
   
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -200 : 200;
    }
  };

  return (
    <nav className="navbar-container">
      <button className="scroll-button left" onClick={() => scroll("left")}>
        <ChevronLeft size={24} />
      </button>
      <div className="nav-tabs" ref={scrollRef}>
        {tabs.map((tab) => (
          <Link
            key={tab}
            to={`/${tab.toLowerCase()}`}
            onClick={() => setActiveTab(tab)}
            className={`nav-item ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </Link>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll("right")}>
        <ChevronRight size={24} />
      </button>
    </nav>
  );
};

export default Navbar2;
