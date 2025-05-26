// src/components/ProjectList.jsx

import { motion } from "framer-motion";
import "./ProjectList.css"; // Import the CSS file

const projects = [
    {
        level: "Beginner",
        items: [
            "Counter App",
            "To-Do List",
            "Digital Clock / Timer App",
            "Quote Generator",
            "Weather App",
            "Simple Calculator",
            "Color Picker",
        ],
    },
    {
        level: "Intermediate",
        items: [
            "Movie Search App",
            "Recipe App",
            "Image Search App",
            "Form Validation App",
            "Dark/Light Mode Toggle",
            "Markdown Previewer",
            "Music Player",
            "Blog App (CRUD)",
        ],
    },
    {
        level: "Advanced",
        items: [
            "E-commerce Store",
            "Chat Application",
            "Portfolio Website (CMS)",
            "Social Media App",
            "Admin Dashboard",
            "Project Management Tool",
            "Job Board App",
            "Video Calling App",
            "Online Code Editor",
            "AI Chatbot App",
        ],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
};

export default function ProjectList() {
    return (
        <div className="container">
            <h1 className="main-title">React Project Ideas</h1>

            {projects.map((section, index) => (
                <div key={index} className="section">
                    <h2 className="section-title">{section.level} Projects</h2>
                    <div className="card-grid">
                        {section.items.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                className="card"
                            >
                                <a
                                    href="https://github.com/ItsSonuTime?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-link"

                                    style={{
                                         textDecoration:"none"
                                    }}
                                >
                                    <p>{item}</p>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
