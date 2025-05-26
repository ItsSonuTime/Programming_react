import  { useState } from "react";
import "./Navbar3.css";

const projects = [





    // HTML Projects
    { title: "Personal Portfolio", category: "HTML", description: "A personal website to showcase your work and skills." },
    { title: "Tribute Page", category: "HTML", description: "A simple tribute to a famous person using only HTML." },
    { title: "Survey Form", category: "HTML", description: "A responsive form collecting user feedback or info." },
    { title: "Landing Page", category: "HTML", description: "A responsive landing page design." },
    { title: "Product Page", category: "HTML", description: "Display features and price of a single product." },
    { title: "Blog Layout", category: "HTML", description: "Simple blog layout using HTML only." },
    { title: "Restaurant Menu", category: "HTML", description: "A digital food menu with different sections." },
    { title: "Resume Page", category: "HTML", description: "Web-based resume layout with sections like education and experience." },
    { title: "Event Invitation", category: "HTML", description: "An online invitation for weddings or parties." },
    { title: "Music Band Website", category: "HTML", description: "Static band site with albums and tour dates." },
    { title: "Book Preview Page", category: "HTML", description: "Promote a book with description and links." },
    { title: "Startup Landing", category: "HTML", description: "A startup's home page with hero and CTA sections." },
  
    // Existing Mixed Projects
    { title: "CSS Animations", category: "CSS", description: "Creative animations using pure CSS." },
 
    { title: "Dark Mode Toggle", category: "CSS", description: "Toggle dark/light theme using CSS." },


    { title: "Parallax Website", category: "CSS", description: "Scrolling parallax effect." },
// javascript project

{
  title: "Todo App",
  category: "JavaScript",
  description: "A basic todo app to add, delete, and mark tasks as complete."
},
{
  title: "Quiz App",
  category: "JavaScript",
  description: "A multiple-choice quiz with a score counter."
},
{
  title: "Weather App",
  category: "JavaScript",
  description: "Fetch weather data from an API and display it."
},
{
  title: "Calculator",
  category: "JavaScript",
  description: "A simple calculator with add, subtract, multiply, divide."
},
{
  title: "Image Slider",
  category: "JavaScript",
  description: "Automatic and manual image slideshow using DOM manipulation."
},
{
  title: "Clock App",
  category: "JavaScript",
  description: "A live digital clock with real-time updating time."
},
{
  title: "Form Validator",
  category: "JavaScript",
  description: "Validate user input fields (email, password, etc.) on form submit."
},
{
  title: "Typing Speed Test",
  category: "JavaScript",
  description: "Measure how fast the user types a given sentence."
},
{
  title: "Password Generator",
  category: "JavaScript",
  description: "Generate strong random passwords with different options."
},
{
  title: "Stopwatch",
  category: "JavaScript",
  description: "Start, stop, and reset stopwatch with time tracking."
},
{
  title: "Currency Converter",
  category: "JavaScript",
  description: "Convert currency values using real-time exchange rates."
},

 // react project


  {
    title: "Weather App",
    category: "React",
    description: "Weather forecast app using OpenWeatherMap API and React hooks."
  },
  {
    title: "Todo List App",
    category: "React",
    description: "Add, edit, delete tasks using functional components and state."
  },
  {
    title: "Expense Tracker",
    category: "React",
    description: "Track your expenses and income with charts and filters."
  },
  {
    title: "Recipe Finder",
    category: "React",
    description: "Search for recipes using an API and display them with images."
  },
  {
    title: "Movie Search App",
    category: "React",
    description: "Search and view movie details using OMDB or TMDB API."
  }

  
];

const INITIAL_COUNT = 9;

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <div className="project-container">
      <h1 className="project-heading">🚀 100+ Projects in Web Development</h1>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p className="category">{project.category}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="see-more-wrapper">
          <button className="see-more-button" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
