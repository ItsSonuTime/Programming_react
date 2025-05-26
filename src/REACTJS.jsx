import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import HooksTable from "./HooksTable";
import "./REACTJS.css";
import ProjectList from "./ProjectList";
import {
  HtmlEditorjs19,
  HtmlEditorjs20,
  HtmlEditorjs21,
  HtmlEditorjs22,
  HtmlEditorjs23,
  HtmlEditorjs24,
  HtmlEditorjs25,
  HtmlEditorjs26,
} from "./Text4";

export function REACT() {
  const [showHindi, setShowHindi] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ReactJs-container">
      <div className="react-header">
        <h1 className="highlight-heading">React.js - JavaScript Library</h1>
        <button
          className="language-toggle"
          onClick={() => setShowHindi((v) => !v)}
        >
          {showHindi ? "Show English" : "हिंदी में देखें"}
        </button>
      </div>
      <div className="react-content">
        {/* Section: What is React? */}
        <section className="introduction topic-section">
          <h2 className="highlight-heading">What is React?</h2>
          {!showHindi ? (
            <p>
              React is a JavaScript library for building user interfaces. It is used to create Single Page Applications (SPA) using components. React is declarative, component-based, and uses a virtual DOM for fast UI updates.
            </p>
          ) : (
            <p>
              React एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने के लिए इस्तेमाल होती है। यह सिंगल पेज एप्लिकेशन (SPA) बनाने के लिए कंपोनेंट्स का उपयोग करती है।
            </p>
          )}
        </section>
<section className="introduction topic-section">
        <h2 className="highlight-heading">Understanding React</h2>
          {!showHindi ? (
            <div className="essay-content">
              <p>
                React is a powerful JavaScript library developed by Facebook for building dynamic and interactive user interfaces. At its core, React follows a component-based architecture, where UIs are broken down into reusable, self-contained pieces called components. This modular approach makes it easier to maintain and scale applications.
              </p>
              <p>
                One of React's most significant features is its Virtual DOM (Document Object Model). Instead of directly manipulating the browser's DOM, React creates a virtual representation of the UI in memory. When changes occur, React compares the virtual DOM with the real DOM and updates only the necessary parts, resulting in improved performance.
              </p>
              <p>
                React's declarative nature allows developers to describe what they want the UI to look like, and React handles the underlying DOM manipulations. This makes the code more predictable and easier to debug.
              </p>
            </div>
          ) : (
            <div className="essay-content">
              <p>
                React एक शक्तिशाली जावास्क्रिप्ट लाइब्रेरी है जिसे Facebook द्वारा डायनामिक और इंटरैक्टिव यूजर इंटरफेस बनाने के लिए विकसित किया गया है। React का मुख्य आधार कंपोनेंट-आधारित आर्किटेक्चर है, जहां UI को पुनः प्रयोज्य, स्वतंत्र टुकड़ों में विभाजित किया जाता है।
              </p>
            </div>
          )}
       
      </section>


         <section className="introduction topic-section">
          <h2 className="highlight-heading">React Installation  </h2>
          <span>Method 1: Using Create React App (Recommended for Beginners)
Install Node.js
</span>

                   <pre>
                  <code>{`# Download and install from
https://nodejs.org/`}</code>
                </pre>

                <div style={{
                  padding:"30px 0px"
                }}>
                  <h2>Create a New React Project</h2>
                            <pre>
                  <code>{`npx create-react-app my-app
cd my-app
npm start`}</code>
                </pre>
                </div>

       
        </section>


          <section className="introduction topic-section">
          <h2 className="highlight-heading">Methods NO 2.   </h2>
          <span>Method 2: Using Vite (Faster Alternative)
Create a Vite + React Project
</span>

                   <pre>
                  <code>{`# Download and install from
https://nodejs.org/`}</code>
                </pre>

                <div style={{
                  padding:"30px 0px"
                }}>
                  <h2>Create a New React Project</h2>
                            <pre>
                  <code>{`npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`}</code>
                </pre>
                </div>

       
        </section>
        {/* Section: Core Concepts */}
        <section className="topic-section">
          <h2 className="highlight-heading">Essential React Concepts</h2>
          {!showHindi ? (
            <div className="essay-content">
              <h3>Components and Props</h3>
              <p>
                Components are the fundamental building blocks of React applications. They can be either functional or class-based, with functional components being the preferred approach in modern React development. Props (properties) are used to pass data from parent to child components, enabling component reusability and data flow.
              </p>
              
              <h3>State Management</h3>
              <p>
                State management is crucial in React applications. The useState hook allows functional components to maintain local state, while the Context API and libraries like Redux help manage global state. Understanding state management is essential for building complex applications.
              </p>

              <h3>Lifecycle and Effects</h3>
              <p>
                The useEffect hook is React's way of handling side effects in functional components. It allows you to perform operations like data fetching, subscriptions, or DOM manipulations in response to component lifecycle events.
              </p>
            </div>
          ) : (
            <div className="essay-content">
              <h3>कंपोनेंट्स और प्रॉप्स</h3>
              <p>
                कंपोनेंट्स React एप्लिकेशन के मूलभूत निर्माण खंड हैं। वे फंक्शनल या क्लास-आधारित हो सकते हैं, जिसमें आधुनिक React विकास में फंक्शनल कंपोनेंट्स को प्राथमिकता दी जाती है।
              </p>
            </div>
          )}
        </section>

        {/* Section: Advanced Topics */}
        

        {/* Section: Core Concepts with Examples */}
        <section className="topic-section">
          <h2 className="highlight-heading">Core React Concepts with Examples</h2>
          {!showHindi ? (
            <div className="feature-row">
              <div className="feature-item topic-card">
                <h3 className="highlight-heading">Components & Props Example</h3>
                <p>Components are the building blocks of React applications. They are reusable pieces of code that can contain both logic and UI.</p>
                <pre>
                  <code>{`// Parent Component
function ParentComponent() {
  const message = "Hello from parent!";
  return <ChildComponent message={message} />;
}

// Child Component
function ChildComponent({ message }) {
  return <div>{message}</div>;
}`}</code>
                </pre>
              </div>
              <div className="feature-item topic-card">
                <h3 className="highlight-heading">State & Hooks Example</h3>
                <p>Hooks are functions that let you use state and other React features in functional components. useState and useEffect are the most commonly used hooks.</p>
                <pre>
                  <code>{`function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
                </pre>
              </div>
              <div  className="feature-item topic-card">
                <h3 className="highlight-heading">Routing Example</h3>
                <p>React Router enables client-side routing in React applications, allowing navigation between different views without page reloads.</p>
                <pre>
                  <code>{`// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code>
                </pre>
              </div>
              <div className="feature-item topic-card">
                <h3 className="highlight-heading">API Integration Example</h3>
                <p>React applications often need to fetch data from APIs. This example shows how to handle API calls using useEffect and async/await.</p>
                <pre>
                  <code>{`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}`}</code>
                </pre>
              </div>
            </div>
          ) : (
            <div className="feature-row">
              <div className="feature-item">
                <h3>कंपोनेंट्स और प्रॉप्स उदाहरण</h3>
                <p>कंपोनेंट्स React एप्लिकेशन के बिल्डिंग ब्लॉक्स हैं। वे कोड के पुनः प्रयोज्य टुकड़े हैं जिनमें लॉजिक और UI दोनों हो सकते हैं।</p>
                <pre>
                  <code>{`// पैरेंट कंपोनेंट
function ParentComponent() {
  const message = "पैरेंट से नमस्ते!";
  return <ChildComponent message={message} />;
}

// चाइल्ड कंपोनेंट
function ChildComponent({ message }) {
  return <div>{message}</div>;
}`}</code>
                </pre>
              </div>
              <div className="feature-item">
                <h3>स्टेट और हुक्स उदाहरण</h3>
                <p>हुक्स ऐसे फंक्शन हैं जो आपको फंक्शनल कंपोनेंट्स में स्टेट और अन्य React फीचर्स का उपयोग करने की अनुमति देते हैं। useState और useEffect सबसे अधिक उपयोग किए जाने वाले हुक्स हैं।</p>
                <pre>
                  <code>{`function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`गिनती: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      गिनती: {count}
    </button>
  );
}`}</code>
                </pre>
              </div>
            </div>
          )}
        </section>
<section className="topic-section">
          <h2 className="highlight-heading">Advanced React Concepts</h2>
          {!showHindi ? (
            <div className="essay-content">
              <h3>Performance Optimization</h3>
              <p>
                React provides several tools for optimizing application performance. Memoization techniques like React.memo, useMemo, and useCallback help prevent unnecessary re-renders. Code splitting and lazy loading enable better initial load times.
              </p>

              <h3>State Management Patterns</h3>
              <p>
                For larger applications, managing state becomes more complex. The Context API provides a built-in solution for global state management, while libraries like Redux offer more robust solutions with features like middleware and dev tools.
              </p>

              <h3>Testing and Debugging</h3>
              <p>
                React applications can be tested using tools like Jest and React Testing Library. These tools help ensure component reliability and maintain code quality. React DevTools provide powerful debugging capabilities for development.
              </p>
            </div>
          ) : (
            <div className="essay-content">
              <h3>परफॉरमेंस ऑप्टिमाइजेशन</h3>
              <p>
                React एप्लिकेशन परफॉरमेंस को ऑप्टिमाइज करने के लिए कई टूल्स प्रदान करता है। React.memo, useMemo, और useCallback जैसी मेमोइजेशन तकनीकें अनावश्यक री-रेंडरिंग को रोकने में मदद करती हैं।
              </p>
            </div>
          )}
        </section>
        {/* Section: Advanced Topics with Examples */}
        <section>
          <h2>Advanced React Topics with Examples</h2>
          {!showHindi ? (
            <div className="feature-row">
              <div className="feature-item">
                <h3>Performance Optimization Example</h3>
                <p>React provides several ways to optimize performance, including memoization and avoiding unnecessary re-renders.</p>
                <pre>
                  <code>{`// Memoized Component
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});

// useMemo Example
function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return <div>{sortedItems.map(item => <div key={item}>{item}</div>)}</div>;
}`}</code>
                </pre>
              </div>
              <div className="feature-item">
                <h3>State Management Example</h3>
                <p>Context API provides a way to pass data through the component tree without having to pass props manually at every level.</p>
                <pre>
                  <code>{`// Context Example
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}`}</code>
                </pre>
              </div>
            </div>
          ) : (
            <div className="feature-grid">
              <div className="feature-card">
                <h3>परफॉरमेंस ऑप्टिमाइजेशन उदाहरण</h3>
                <pre>
                  <code>{`// मेमोइज्ड कंपोनेंट
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});

// useMemo उदाहरण
function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return <div>{sortedItems.map(item => <div key={item}>{item}</div>)}</div>;
}`}</code>
                </pre>
              </div>
            </div>
          )}
        </section>

        {/* Section: Projects */}   
        <section>
          <h2>React Project Ideas</h2>
          <ProjectList />
        </section>

        <Link to="/Next">
          <button className="Button">Go-Next-step</button>
        </Link>
      </div>
    </div>
  );
}
