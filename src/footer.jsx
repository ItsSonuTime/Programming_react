
import { Link } from "react-router-dom";
import "./footer.css"


export function Footer() {
  return (
    <div className="footers">
      <hr />
      <p>
        Web development is very important in today digital age because it helps
        businesses, services, and information to be available online.
      </p>
      <div className="logos">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7t5CBb0APjKUdQ9UYa6rrVRaivy7SPi8oA&s"
          alt=""
          style={{
            marginTop: "10px",
            cursor: "pointer",
            width: "50px",
            height: "50px",
            padding: "5px",
            borderRadius:"50%",
            marginRight: "10px",
            filter: "invert(1)",
          }}
          onClick={() => window.location.href = "https://www.youtube.com/@Happy_Coder"}
        />
   
        <img
          src="https://images.icon-icons.com/2428/PNG/512/linkedin_black_logo_icon_147114.png"
          alt=""
          style={{
            marginTop: "10px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            padding: "5px",
            marginRight: "10px",
            filter: "invert(1)",
          }}
          onClick={() => window.location.href = "https://www.linkedin.com/in/sonu-tech-ba0738348/"}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
          alt=""
          style={{
            marginTop: "20px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            
            padding: "5px",
            marginRight: "10px",
            filter: "invert(1)",
          }}
          onClick={() => window.location.href = "https://github.com/ItsSonuTime"}
        />



<img
          src="https://cdn-icons-png.flaticon.com/512/726/726056.png"
          alt=""
          style={{
            marginTop: "20px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            padding: "5px",
            borderRadius:"50%",
            marginRight: "10px",
            filter: "invert(1)",
          }}
          onClick={() => window.location.href = "https://github.com/ItsSonuTime"}
        />
      </div>
      <footer>
        <div className="footer-container">
          <p>&copy; 2025 Your Website Name. All Rights Reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
           <Link to='Contact'>Contact</Link>
          </ul>
        </div>
      </footer>
    </div>
  );
}
