import { Link } from "react-router";
import "./Navbar3.css";

export function Navbar2() {
  return (
    <div className="header">
      <div>
        <Link>
          <h1> Router </h1>
        </Link>
      </div>
      <div 
      
    >
        <ul style={{
               display:'flex',
               marginTop:"15px",
              justifyContent:"space-around",
              width:"350px", 
              textDecoration:"none",
              listStyle:"none",
        }}>
          <li>
           
            <Link to="/">Home</Link>
          </li>
        
        
          <li>
            <Link to="/Course">Course</Link>
          </li>
        
        
          <li>
            <Link to="/Services">Serivices</Link>
          </li>
        

        
        <li>
        <Link to="/Contact"> Contact</Link>
        </li>
        <li>
        <Link to="/Collage">Collage</Link>
        </li>
        </ul>
      </div>
    </div>
  );
}
