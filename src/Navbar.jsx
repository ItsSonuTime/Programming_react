import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";

 const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect,logout ,isAuthenticated , user } = useAuth0();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    if (term === "html" || term === "html and html") {
      navigate("/Html");
    } else if (term === "css" || term === "css and css") {
      navigate("/Css");
    } else if (term === "javascript" || term === "javascript and javascript") {
      navigate("/JAVASCRIPT");
    } else if (term === "react" || term === "react and react") {
      navigate("/React");
    } else if (term === "next" || term === "next and next") {
      navigate("/NEXT");
    } else if (term === "mongodb" || term === "mongodb and mongodb") {
      navigate("/MongoDB");
    } else if (term === "express" || term === "express and express") {
      navigate("/ExpressJS");
    } else if (term === "projects" || term === "projects and projects") {
      navigate("/project");
    } else if (term === "contact" || term === "contact and contact") {
      navigate("/Contact");
    } else if (term === "home" || term === "home and home") {
      navigate("/");
      
    }else if (term === "variable" || term === "variable and variable") {
      navigate("/Variable");
    }else if (term === "datatype" || term === "datatype and datatype") {  
      navigate("/Datatype");
    } else if(term === "operator"|| term === "operator and operator"){
       navigate("/Operator")
    }else if(term === "arithmeticoperator" || term === "arithmeticoperator and arithmeticoperator"){
      navigate("/ArithmeticOperator")
    }else if(term === "assignmentoperator" || term === "assignementoperator and assignmentoperator"){
      navigate("/AssignmentOperator")  
    }else if(term === "comparisonoperator" || term === "comparisonoperator and comparisonoperator"){
      navigate("/ComparisonOperator")
    }else if(term === "logicaloperator" || term === "logicaloperator and logicaloperator"){
      navigate("/LogicalOperator")
    }else if(term === "bitwiseoperator" || term === "bitwiseoperator and bitwiseoperator"){
      navigate("/BitwiseOperator")
    }else if(term === "ternaryoperator" || term === "ternaryoperator and ternaryoperator"){
      navigate("/TernaryOperator")
    }else if(term === "conditionalstatement" || term === "conditionalstatement and conditionalstatement"){
      navigate("/ConditionalStatement")
 
    }else if(term === "loops" || term === "loops and loops"){
      navigate("/Loops")
    }else if(term === "string" || term === "string and string"){
      navigate("/String")
    }else if(term === "templateleteral" || term === "templateleterals and templateleterals"){
      navigate("/Templateleteral") 
    }else if(term === "arrays" || term === "arrays and arrays"){
      navigate("/Arrays")
    }else if(term === "loopingoverarrays" || term === "loopingoverarrays and loopingoverarrays"){
      navigate("/Loopoverarray")
    }else if(term === "objects"|| term === "objects and objects"){
      navigate("/Object")
    }else if(term === "objectmethods" || term === "objectmethods and objectmethods"){
      navigate("/ObjectMethod")  
      
    }else if(term === "dom" || term === "dom  and dom"){  
      navigate("/DOM")
    }else if(term === "eventlistner" || term === "eventlistner and eventlistner"){
      navigate("/Events")

    }else if(term === "mapmethods" || term === "mapmethods and mapmethods"){
      navigate("/Map")

    }else if(term === "foreachmethod" || term === "foreachmethod and foreachmethod"){
      navigate("/ForEachmethod")  
    }else if(term === "objectsclasses"|| term === "objectsclasses and objectsclasses"){
      navigate("/ObjectsandClasses")
    } else if (term === "callbackspromises" || term === "callbackspromises and callbackspromises"){
       navigate("/CallbacksPromises")
       
    }else if(term === "api"|| term ==="api and api "){
       navigate("/API")
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/">
        <h1 className="logo">
          <img
            src="logo1.png"
            alt=""
         
          />
        </h1>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/project">Projects</Link>
          <Link to="/Course">Courses</Link>

          <Link to="/Contact">Contact</Link>
     
        </div>

        <div className={`search-container ${isFocused ? "active" : ""}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button className="search-button" onClick={handleSearch}>
            <img
              src="Searchicons.png"
              alt="Search"
              className="search-icon"
            />
          </button>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
         <div className='Loginandsingnbutton' style={{
           
         }}>
          <div>
          {
            isAuthenticated && <p style={{
               color:"white"
            }}>{user.name}</p>
          }
          </div>
          {
            isAuthenticated ?    <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>:
          <button  onClick={() => loginWithRedirect()}>Log In</button>
          }
         </div>
      </div>
    </nav>
  );
};



 export default Nav;