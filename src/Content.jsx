import { useState } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import TypedText from "./TypedText";

const Content = () => {
  const [Show, setshow] = useState(true);


  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Section */}
        <div className="hero-text">
          <h1>
            Welcome to <span className="highlight">Happy_Coder</span>
          </h1>
          <h2>
            <TypedText/>
          </h2>
          <p>
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! Happy Coder
            is my attempt to teach basics and those coding techniques to people
            in a short time which took me ages to learn.
          </p>
          <div className="buttons">
            <button className="primary-btn">
              <a href="https://www.youtube.com/@Happy_Coder">
                🚀 Programming classes
              </a>
            </button>
            <button className="secondary-btn">Notes</button>
            {Show ? (
              <div className="first-content">
                <h2>What is web Development</h2>
                <hr />
                <p>
                  Web development refers to the process of creating, building,
                  and maintaining websites or web applications. It involves
                  several aspects, including web design, web content creation,
                  front-end and back-end development, and database management.
                  Web development can be broadly classified into:
                </p>
                <ul>
                  <li>
                    Front-End Development – Deals with the user interface and
                    experience (HTML, CSS, JavaScript).
                  </li>
                  <li>
                    Back-End Development – Handles the server, database, and
                    application logic (Node.js, PHP, Python, etc.).
                  </li>
                  <li>
                    Full-Stack Development – Involves both front-end and
                    back-end development.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="first-content">
                <h2>What is web Development</h2>
                <hr />
                <p>
                  वेब विकास (Web Development) का अर्थ है वेबसाइटों या वेब
                  एप्लिकेशन को बनाना, डिज़ाइन करना और प्रबंधित करना। इसमें कई
                  पहलू शामिल होते हैं, जैसे कि वेब डिज़ाइन, वेब सामग्री निर्माण,
                  फ्रंट-एंड और बैक-एंड विकास, और डेटाबेस प्रबंधन। वेब विकास को
                  तीन मुख्य भागों में बांटा जाता है:
                </p>
                <ul>
                  <li>
                    फ्रंट-एंड विकास – उपयोगकर्ता इंटरफ़ेस और अनुभव को संभालता है
                    (HTML, CSS, JavaScript)।
                  </li>
                  <li>
                    बैक-एंड विकास – सर्वर, डेटाबेस, और एप्लिकेशन लॉजिक को
                    प्रबंधित करता है (Node.js, PHP, Python, आदि)।
                  </li>
                  <li>
                    फुल-स्टैक विकास – इसमें फ्रंट-एंड और बैक-एंड दोनों शामिल
                    होते हैं।
                  </li>
                </ul>
                <p>
                  वेब डेवलपमेंट आज के डिजिटल युग में बहुत महत्वपूर्ण है क्योंकि
                  यह व्यवसायों, सेवाओं और सूचना को ऑनलाइन उपलब्ध कराने में मदद
                  करता है। 🚀
                </p>
              </div>
            )}
            {
              <button
                className="Translate-button"
                onClick={() => setshow(!Show)}
              >
                Translate HI vs En
              </button>
            }
          </div>
        </div>
        {/* Right Section with Image */}
        <div className="Html">
          <h1>HTML ---</h1>
          <hr />
          <p>
            HTML is the standard markup language for creating Web pages. HTML
            stands for Hyper Text Markup Language With its help we prepare the
            structure of the website just like a build a house. we are preparing
            the structure Similarly, to make a website, first of all we prepare
            the structure of the website.
          </p>

          <div className="img">
            <img
            style={{
              marginTop:"10px",
            }}
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220113142534/Capture-300x205.PNG"
              alt=""
            />
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/website_layout-300x268.png"
              alt=""
            />
          </div>
          <Link to="/Html" > <button className="Translate-button">Start Learn</button></Link>
        </div>

        <div className="CSS">
          <h1>CSS ---</h1>
          <hr />
          <p>
            👉 CSS (Cascading Style Sheets) is a style sheet language used to
            design and style HTML web pages. It helps to control the color,
            font, layout, borders, background, and animation of the web page It
            helps in making the website beautiful and attractive. With its help,
            we make our website responsive and animated.
          </p>
          <div
            className="imgBar"
            style={{
              gap: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/3/FW/TS/PN/14579595/website-design-with-html-css-500x500.jpg"
              alt=""
              style={{
                height: "200px",
                width:"320px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />

            <img
              src="https://i.ytimg.com/vi/CQZxeoQeo5c/maxresdefault.jpg"
              alt=""
              style={{
                height: "200px",
                width:"320px",
                marginTop: "10px",
              }}
            />
          </div>
        <Link to="/CSS" > <button className="Translate-button">Start Learn</button></Link>
        </div>

        <div className="JavaScript">
          <h1>JAVA SCRIPT ---</h1>
          <hr />
          <p>
            JavaScript is a scripting language that enables you to create
            dynamically updating content, control multimedia, animate images,
            and much more. It is the most popular programming language in the
            world. JavaScript is a high-level, interpreted programming language
            that conforms to the ECMAScript specification. It allows developers
            to add functionality like animations, form validations, real-time
            updates, and more.
          </p>

          <div
            className="img"
            style={{
              gap: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              src="js.png"
              style={{
                marginTop:"10px",
                height: "200px",
                width: "320px",
              }}
            />

            <img
              src="js2.png"
              alt=""
              style={{
                height: "200px",
                width: "320px",
              }}
            />
          </div>

          <Link to="/JavaScript" > <button className="Translate-button">Start Learn</button></Link>
       
        </div>
        <hr />
        <div className="react">
          <h1>React.Js ---</h1>
          <hr />
          <p>
            React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies. React can be used as a base in the development of
            single-page or mobile applications.
          </p>
          <div
            className="img"
            style={{
              gap: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18"
              style={{
                marginTop:"10px",

                height: "200px",
                width: "320px",
              }}
            />
          </div>
          <Link to="/React" > <button className="Translate-button">Start Learn</button></Link>
        </div>

        <div className="next js" style={{
          marginBottom: "20px",}}>
          <h1>NEXT.JS ---</h1>
          <hr />
          <p>
            Next.js is a React framework used for building fast, scalable, and
            SEO-friendly web applications. It extends React by providing
            features like server-side rendering (SSR), static site generation
            (SSG), API routes, and automatic image optimization.
          </p>
          <div
            className="img"
            style={{
              marginTop:"10px",

              gap: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              src="https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75"
              style={{
                height: "200px",
                width: "320px",
              }}
            />
          </div>
   

          <Link to="/Next" > <button className="Translate-button">Start Learn</button></Link>
          
        </div>
         <div className="mongoDB" style={{
          marginBottom: "20px",
         }}>
          <h1>MongoDB ---</h1>
          <hr />
          <p>
            MongoDB is a cross-platform document-oriented database program. It
            is classified as a NoSQL database program, which uses JSON-like
            documents with optional schemas. MongoDB is developed by MongoDB Inc.
          </p>
          <div
            className="img"
            style={{
              marginTop:"10px",

              gap: "10px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              src="https://www.strongdm.com/hubfs/Imported_Blog_Media/60cbc1205c30f372af2801ce_create-user-mongodb-securely-3.jpeg"
              style={{
                height: "200px",
                width: "320px",
              }}
            />
          </div>
          <Link to="/MongoDB" > <button className="Translate-button">Start Learn</button></Link>
         </div>
        <div>
          <div className="express js" style={{
            marginBottom: "30px",
          }}>
            <h1>Express.Js ---</h1>
            <hr />
            <p>
              Express.js, or simply Express, is a back end web application
              framework for Node.js, released as free and open-source software
              under the MIT License. It is designed for building web applications
              and APIs.
            </p>
            <div
              className="img"
              style={{
                marginTop:"10px",

                gap: "10px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp"
                style={{
                marginTop:"10px",

                  height: "200px",
                  width: "320px",
                }}
              />
            </div>
            <Link to="/ExpressJS" > <button className="Translate-button">Start Learn</button></Link>
          </div>

          
          



          </div>
      
        </div>

        <div>
          
        </div>
    </div>



  );
  
};

export default Content;


