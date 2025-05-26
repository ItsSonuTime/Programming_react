import { useState } from 'react';
import './ExpressJS.css';

const ExpressJS = () => {
  const [showHindi, setShowHindi] = useState(false);

  return (
    <div className="express-container">
      <div className="express-header">
        <h1>Express.js - Node.js Web Framework</h1>
        <button className="language-toggle" onClick={() => setShowHindi(!showHindi)}>
          {showHindi ? 'Show English' : 'हिंदी में देखें'}
        </button>
      </div>

      <div className="express-content">
        <section className="introduction">
          <h2>What is Express.js?</h2>
          {!showHindi ? (
            <p>
              Express.js is a fast, unopinionated, and minimalist web framework for Node.js. 
              It provides a robust set of features for building single-page, multi-page, and 
              hybrid web applications. It's the de facto standard server framework for Node.js.
            </p>
          ) : (
            <p>
              Express.js Node.js के लिए एक तेज, अनोपिनियनेटेड और मिनिमलिस्ट वेब फ्रेमवर्क है।
              यह सिंगल-पेज, मल्टी-पेज और हाइब्रिड वेब एप्लिकेशन बनाने के लिए फीचर्स का एक मजबूत सेट प्रदान करता है।
              यह Node.js के लिए डी फैक्टो स्टैंडर्ड सर्वर फ्रेमवर्क है।
            </p>
          )}
        </section>

        <section className="key-features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            {!showHindi ? (
              <>
                <div className="feature-card">
                  <h3>Routing</h3>
                  <p>Robust routing system for HTTP requests</p>
                </div>
                <div className="feature-card">
                  <h3>Middleware</h3>
                  <p>Flexible middleware system for request processing</p>
                </div>
                <div className="feature-card">
                  <h3>Static Files</h3>
                  <p>Easy serving of static files and assets</p>
                </div>
                <div className="feature-card">
                  <h3>Template Engines</h3>
                  <p>Support for multiple template engines</p>
                </div>
              </>
            ) : (
              <>
                <div className="feature-card">
                  <h3>राउटिंग</h3>
                  <p>HTTP रिक्वेस्ट के लिए मजबूत राउटिंग सिस्टम</p>
                </div>
                <div className="feature-card">
                  <h3>मिडलवेयर</h3>
                  <p>रिक्वेस्ट प्रोसेसिंग के लिए फ्लेक्सिबल मिडलवेयर सिस्टम</p>
                </div>
                <div className="feature-card">
                  <h3>स्टैटिक फाइल्स</h3>
                  <p>स्टैटिक फाइल्स और एसेट्स को आसानी से सर्व करना</p>
                </div>
                <div className="feature-card">
                  <h3>टेम्पलेट इंजन</h3>
                  <p>कई टेम्पलेट इंजन के लिए सपोर्ट</p>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="basic-operations">
          <h2>Basic Operations</h2>
          <div className="code-examples">
            <div className="code-block">
              <h3>Basic Server Setup</h3>
              <pre>
                <code>{`
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Routing Examples</h3>
              <pre>
                <code>{`
// Basic routing
app.get('/users', (req, res) => {
  res.json(users);
});

// Route with parameters
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  res.json(user);
});

// POST request handling
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Middleware Usage</h3>
              <pre>
                <code>{`
// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
                `}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="advanced-topics">
          <h2>Advanced Topics</h2>
          <div className="topic-grid">
            <div className="topic-card">
              <h3>Route Controllers</h3>
              <pre>
                <code>{`
// users.controller.js
const getAllUsers = (req, res) => {
  // Get users logic
};

const createUser = (req, res) => {
  // Create user logic
};

module.exports = {
  getAllUsers,
  createUser
};
                `}</code>
              </pre>
            </div>

            <div className="topic-card">
              <h3>Express Router</h3>
              <pre>
                <code>{`
// users.routes.js
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);

module.exports = router;

// app.js
app.use('/api/users', userRoutes);
                `}</code>
              </pre>
            </div>

            <div className="topic-card">
              <h3>Template Engine (EJS)</h3>
              <pre>
                <code>{`
app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
  res.render('profile', {
    user: {
      name: 'John',
      email: 'john@example.com'
    }
  });
});
                `}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="best-practices">
          <h2>Best Practices</h2>
          {!showHindi ? (
            <ul>
              <li>Use appropriate HTTP methods for operations (GET, POST, PUT, DELETE)</li>
              <li>Implement proper error handling middleware</li>
              <li>Structure your application using the MVC pattern</li>
              <li>Use environment variables for configuration</li>
              <li>Implement input validation and sanitization</li>
              <li>Use async/await for asynchronous operations</li>
            </ul>
          ) : (
            <ul>
              <li>ऑपरेशंस के लिए उचित HTTP मेथड्स का उपयोग करें (GET, POST, PUT, DELETE)</li>
              <li>उचित एरर हैंडलिंग मिडलवेयर लागू करें</li>
              <li>MVC पैटर्न का उपयोग करके अपने एप्लिकेशन को स्ट्रक्चर करें</li>
              <li>कॉन्फ़िगरेशन के लिए एनवायरनमेंट वेरिएबल्स का उपयोग करें</li>
              <li>इनपुट वैलिडेशन और सैनिटाइजेशन लागू करें</li>
              <li>एसिंक्रोनस ऑपरेशंस के लिए async/await का उपयोग करें</li>
            </ul>
          )}
        </section>

        <section className="express-ecosystem">
          <h2>Express.js Ecosystem</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h3>Body Parser</h3>
              <p>Parse incoming request bodies</p>
            </div>
            <div className="tool-card">
              <h3>Morgan</h3>
              <p>HTTP request logger middleware</p>
            </div>
            <div className="tool-card">
              <h3>Passport</h3>
              <p>Authentication middleware</p>
            </div>
            <div className="tool-card">
              <h3>Cors</h3>
              <p>Cross-origin resource sharing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpressJS;

