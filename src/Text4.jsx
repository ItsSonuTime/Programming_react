import { useState } from "react";

export default function HtmlEditor4() {
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
<html>
<head>
<title>HTML Elements Showcase</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; margin: 0; }
    section { margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
    h2 { border-bottom: 2px solid #333; padding-bottom: 5px; }
    table, th, td { border: 1px solid black; border-collapse: collapse; padding: 8px; width: 100%; }
    header, footer { background: #333; color: white; text-align: center; padding: 10px 0; }
    input, button, select { padding: 8px; margin-top: 5px; border-radius: 5px; border: 1px solid #ccc; width: 100%; box-sizing: border-box; }
    button { background-color: #007BFF; color: white; border: none; cursor: pointer; }
    button:hover { background-color: #0056b3; }
    img { max-width: 100%; height: auto; }
    audio, video { max-width: 100%; height: auto; }
</style>
</head>
<body>
<header>
    <h1>HTML Elements Showcase</h1>
</header>

<section>
    <h2>Application Registration Form</h2>
    <form>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required>

        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label for="address">Address:</label>
        <textarea id="address" name="address" rows="4" placeholder="Enter your address" required></textarea>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>

        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required>

        <button type="submit">Register</button>
    </form>
</section>

<footer>
    <p>&copy; 2025 HTML Showcase</p>
</footer>
</body>
</html>`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "index.html";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div>
        <iframe
          style={{
            flex: 1,
            width: "100%",
            height: "50vh",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          title="preview"
          className="w-full h-full border rounded-lg"
          srcDoc={htmlCode}
        />
      </div>
    </div>
  );
}

export function HtmlEditor5() {
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
<html>
<head>
<title>Responsive Navbar and Classic Layout</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  .navbar {
    background-color: #333;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

  }
  .navbar a {
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    display: block;
  }
  .navbar a:hover {
    background-color: #575757;
  }
  .navbar .logo {
    font-size: 20px;
    font-weight: bold;
    margin-right: auto;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
  .box {
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    background-color: #3498db;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    height: 150px;
  }
  @media (max-width: 768px) {
    .box {
      flex: 1 1 calc(50% - 20px);
      max-width: calc(50% - 20px);
    }
  }
  @media (max-width: 480px) {
    .box {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
</style>
</head>
<body>
  <div class="navbar">
    <a href="#" class="logo">MyWebsite</a>
    <a href="#home">Home</a>
    <a href="#about">About</a>
 
    <a href="#contact">Contact</a>
  </div>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
    <div class="box">Box 6</div>
  </div>
</body>
</html>`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "index.html";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div>
        <iframe
          style={{
            flex: 1,
            width: "100%",
            height: "50vh",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          title="preview"
          className="w-full h-full border rounded-lg"
          srcDoc={htmlCode}
        />
      </div>
    </div>
  );
}

export function HtmlEditor6() {
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
    <html>
    <head>
    <title>HTML Elements Showcase</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
      }
      header {
      background: linear-gradient(90deg, #444, #333);
      color: white;
      padding: 1rem;
      text-align: center;
      animation: fadeIn 2s ease-in-out;
      }
      nav ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 15px;
      }
      nav ul li {
      display: inline;
      }
      nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;
      }
      nav ul li a:hover {
      color: #FFD700;
      }
      section {
      padding: 20px;
      background: white;
      margin: 20px;
      border-radius: 10px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      animation: slideIn 1s ease-out;
      }
      table {
      width: 100%;
      border-collapse: collapse;
      }
      table, th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
      }
      footer {
      text-align: center;
      padding: 10px;
      background: linear-gradient(90deg, #444, #333);
      color: white;
      margin-top: 20px;
      animation: fadeIn 2s ease-in-out;
      }
      button {
      background-color: #333;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      }
      button:hover {
      background-color:#555;
      transform: scale(1.05);
      }
      @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
      }
      @keyframes slideIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
      }
    </style>
    </head>
    <body>
    <header>
      <h1>Welcome to the HTML Tags Showcase</h1>
      <nav>
      <ul>
        <li><a href="#text">Text Formatting</a></li>
        <li><a href="#media">Media</a></li>
        <li><a href="#table">Tables</a></li>
        <li><a href="#forms">Forms</a></li>
        <li><a href="#interactive">Interactive</a></li>
      </ul>
      </nav>
    </header>
    
    <main>
      <section id="text">
      <h2>Text & Formatting</h2>
      <p>This is a paragraph.</p>
      <strong>Bold text</strong> | <em>Italic text</em> | <u>Underlined text</u>
      <blockquote>“This is a blockquote.”</blockquote>
      <pre>Preformatted   text   example</pre>
      <hr>
      </section>

      <section id="media">
      <h2>Media</h2>
      <img src="https://img.freepik.com/free-photo/3d-render-little-boy-with-laptop-tools_1057-44642.jpg" alt="Example Image" width="200">
      
      
      <iframe src="https://itssonutime.github.io/Sptailors-/" width="280" height="200"></iframe>
      <video controls width="300">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" >
        Your browser does not support the video tag.
      </video>
      </section>

      <section id="table">
      <h2>Table Example</h2>
      <table>
        <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
        </tbody>
      </table>
      </section>

      <section id="forms">
      <h2>Forms & Inputs</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
      </form>
      </section>

      <section id="interactive">
      <h2>Interactive Elements</h2>
      <details>
        <summary>Click to Expand</summary>
        <p>Hidden content revealed.</p>
      </details>
      <progress value="70" max="100"></progress>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 HTML Showcase</p>
    </footer>
    </body>
    </html>`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "index.html";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div>
        <iframe
          style={{
            flex: 1,
            width: "100%",
            height: "50vh",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          title="preview"
          className="w-full h-full border rounded-lg"
          srcDoc={htmlCode}
        />
      </div>
    </div>
  );
}

export function HtmlEditor7() {
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
      <html>
      <head>
      <title>Responsive and Animated Registration Form</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background: linear-gradient(135deg, #333, #555);
        animation: backgroundFade 5s infinite alternate;
        }
        @keyframes backgroundFade {
        0% { background: linear-gradient(135deg, #555,#333); }
        100% { background: linear-gradient(135deg, ##333, #555); }
        }
        .container {
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
        animation: fadeIn 1s ease-in-out;
        width: 90%;
        max-width: 400px;
        }
        @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
        }
        h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
        }
        label {
        display: block;
        margin-top: 10px;
        font-weight: bold;
        color: #555;
        }
        input {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
        }
        input:focus {
        border-color: #2575fc;
        outline: none;
        }
        button {
        margin-top: 20px;
        padding: 12px;
        width: 100%;
        background: #2575fc;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.3s ease, transform 0.2s ease;
        }
        button:hover {
        background: #1a5bb8;
        transform: scale(1.05);
        }
      </style>
      </head>
      <body>
         <div class="container">
        <h2>Registration Form</h2>
        <form>
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>

            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required>

            <button type="submit">Register</button>
        </form>
        </div>
      </body>
      </html>`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "index.html";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div>
        <iframe
          style={{
            flex: 1,
            width: "100%",
            height: "50vh",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          title="preview"
          className="w-full h-full border rounded-lg"
          srcDoc={htmlCode}
        />
      </div>
    </div>
  );
}

export function HtmlEditorCss1() {
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
        <html>
        <head>
        <title>HTML Elements Showcase</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <style>
         body{
         background:#333
         }
         h1{
         text-align:center;
         color:white;
         }
         h2{
         text-align:center;
         color:white;
         }
         </style>
        </head>
        <body>
        <h1> Hello I m web Developer </h1>
        <h2> Gautam ji</h2>
      
        </body>
        </html>`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "index.html";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
            border: "5px solid #555",
            backgroundColor: "#222",
            color: "white",
            borderRadius: "5px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div>
        <iframe
          style={{
            flex: 1,
            width: "100%",
            height: "50vh",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          title="preview"
          className="w-full h-full border rounded-lg"
          srcDoc={htmlCode}
        />
      </div>
    </div>
  );
}

export function HtmlEditorjs() {
  const [htmlCode, setHtmlCode] = useState(
    `var name = "Alice";
console.log(name); // Alice

let age = 25;
age = 26; // Allowed
console.log(age); // 26


const pi = 3.14159;
const pi = 3.14159; // Error: Identifier 'pi' has already been declared
// pi = 3.14159; // Error: Assignment to constant variable
console.log(pi); // 3.14159`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
           
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Preview Panel */}
    </div>
  );
}

export function HtmlEditorjs1() {
  const [htmlCode, setHtmlCode] = useState(
    `let name = "John"; // String
let age = 30; // Number
let isStudent = false; // Boolean
 let bigIntValue = 123456890n; 

let isNull = null; // Null
let isUndefined; // Undefined
let symbol = Symbol("unique"); 
              
          
// Object 
let person = { name: "John", age: 30 }; // Object
// Array
let fruits = ["apple", "banana", "orange"]; // Array`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "250px",
            padding: "10px",
            fontSize: "16px",
       
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs2() {
  const [htmlCode, setHtmlCode] = useState(
    `
let age = 18;
if (age >= 18) {
    document.querySelector("body").textContent = "You are an adult.";
} if(age<18){
      document.querySelector("body").textContent = "You are an minor.";
}
// Example:2
let mode = "dark"
let color;
if(mode === "dark"){
    document.querySelector("body").style.backgroundColor = "black";

  }if(mode === "light"){
    document.querySelector("body").style.backgroundColor = "white";
}
   
   `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",

            backgroundColor: "black",     
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs3() {
  const [htmlCode, setHtmlCode] = useState(
    `
let age = 18;
if (age >= 18) {
    document.querySelector("body").textContent = "You are an adult. and you are eligible for vote.";
}
else{
    document.querySelector("body").textContent = "You are an minor. and you are not eligible for vote.";
}
// Example:2
let mode = "dark"
let color;
if(mode === "dark"){
    document.querySelector("body").style.backgroundColor = "black";

  }
else{
    document.querySelector("body").style.backgroundColor = "white";
  }
`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
  
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
export function HtmlEditorjs4() {
  const [htmlCode, setHtmlCode] = useState(
    `
let age = 18;
if (age >= 18) {
    document.querySelector("body").textContent = "You are an adult. and you are eligible for vote.";
}
else if(age<18){
    document.querySelector("body").textContent = "You are an minor. and you are not eligible for vote.";
} else{
       document.querySelector("body").textContent = "You are Neeba;
 }
// Example:2
let mode = "dark"
let color;
if(mode === "dark"){
    document.querySelector("body").style.backgroundColor = "black";

  }
else if(mode === "light"){
    document.querySelector("body").style.backgroundColor = "white";
  }
else{ 
    document.querySelector("body").style.backgroundColor = "red";
  }            

  `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
    
            backgroundColor: "black",
            color: "white",

            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs5() {
  const [htmlCode, setHtmlCode] = useState(
    `
// ternery operator

let age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
document.querySelector("body").textContent = message;
// Example:2
let mode = "dark"
let color = (mode === "dark") ? "black" : "white";
document.querySelector("body").style.backgroundColor = color;
// Example:3
let mode = "dark"
let color = (mode === "dark") ? "black" : (mode === "light") ? "white" : "red";
document.querySelector("body").style.backgroundColor = color;            

    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
 
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs6() {
  const [htmlCode, setHtmlCode] = useState(
    `// Loops 
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
// while loop
while (i < 5) {
    console.log("Iteration: " + i);
    i++;}
// do while loop
do {
    console.log("Iteration: " + i);
    i++;
} while (i < 5);
`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs7() {
  const [htmlCode, setHtmlCode] = useState(
    ` // String
let str = "Hello, World!";
console.log(str); // Hello, World!
// string length
console.log(str.length); // 13
// toUppercase
console.log(str.toUpperCase()); // HELLO, WORLD!
// toLowercase
console.log(str.toLowerCase()); // hello, world!
// substring
console.log(str.substring(0, 5)); // Hello
// slice
console.log(str.slice(0, 5)); // Hello
// replace
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!
// split
console.log(str.split(", ")); // ["Hello", "World!"]
// trim
console.log(str.trim()); // Hello, World!
// charAt
console.log(str.charAt(0)); // H



  `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs8() {
  const [htmlCode, setHtmlCode] = useState(
    ` const numbers = [1, 2, 3, 4, 5];
 console.log(numbers.length); // Output: 5
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]
numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
numbers.splice(2, 1);
console.log(numbers); // Output: [1, 2, 4, 5]
numbers.slice(1, 3);
 console.log(numbers); // Output: [2, 4]
numbers.indexOf(4);
console.log(numbers); // Output: 2
numbers.join(", ");
 console.log(numbers); // Output: "1, 2, 4, 5"


          `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs9() {
  const [htmlCode, setHtmlCode] = useState(
    ` // looping over an array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
// forEach loop
 fruits.forEach(function(fruit) {
console.log(fruit);
});
 // for...of loop
 for (const fruit of fruits) {
 console.log(fruit);
}
// for...in loop
const person = { name: "John", age: 30 };
for (const key in person) {
console.log(key + ": " + person[key]);
}
                

          `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}





export function HtmlEditorjs10() {
  const [htmlCode, setHtmlCode] = useState(
    ` // Objects
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
console.log(person.name); // John
console.log(person.age); // 30
person.greet(); // Hello, John
// Accessing object properties
console.log(person["name"]); // John
console.log(person["age"]); // 30
// Adding properties to an object
person.city = "New York";
console.log(person.city); // New York
// Deleting properties from an object
delete person.age;
console.log(person.age); // undefined



          `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}




export function HtmlEditorjs11() {
  const [htmlCode, setHtmlCode] = useState(
    ` // Objects Methods
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  },
  getAge: function() {
    return this.age;
  }
};
console.log(person.name); // John
console.log(person.age); // 30
person.greet(); // Hello, John
console.log(person.getAge()); // 30
// Accessing object properties
console.log(person["name"]); // John
console.log(person["age"]); // 30
// Adding properties to an object
person.city = "New York";
console.log(person.city); // New York
// Deleting properties from an object
delete person.age;
console.log(person.age); // undefined
// Object Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
  this.getAge = function() {
    return this.age;
  }
}
  `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs12() {
  const [htmlCode, setHtmlCode] = useState(
    `// DOM Document Object Model
// Selecting elements
const element = document.getElementById("myElement");
const elements = document.getElementsByClassName("myClass");
const elements = document.getElementsByTagName("div");
const elements = document.querySelectorAll(".myClass");
const element = document.querySelector("#myElement");
// Modifying elements
element.textContent = "Hello, World!";
element.style.color = "red";
element.style.backgroundColor = "blue";
element.setAttribute("data-custom", "value");
element.removeAttribute("data-custom");
// Creating elements
const newElement = document.createElement("div");
newElement.textContent = "New Element";
document.body.appendChild(newElement);
document.body.insertBefore(newElement, element);
document.body.removeChild(element);
// Event handling
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
}
);
// Removing event listeners
button.removeEventListener("click", function() {
  alert("Button clicked!");
}
);
// Event delegation 
const parent = document.getElementById("parent");
parent.addEventListener("click", function(event) {
  if (event.target.matches(".child")) {
    alert("Child clicked!");
  }
  }
  
);
// Event propagation
const child = document.getElementById("child");
child.addEventListener("click", function(event) {
  alert("Child clicked!");
  event.stopPropagation(); // Prevents the event from bubbling up to the parent
  }
);
// Event capturing
const parent = document.getElementById("parent");
parent.addEventListener("click", function(event) {
  alert("Parent clicked!");
  }
 
    
    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}




export function HtmlEditorjs13() {
  const [htmlCode, setHtmlCode] = useState(
    ` // Events and Event Listeners
// Adding an event listener to a button
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
}
);
// Removing an event listener from a button
button.removeEventListener("click", function() {
  alert("Button clicked!");
}
);
// Event delegation
const parent = document.getElementById("parent");
parent.addEventListener("click", function(event) {
  if (event.target.matches(".child")) {
    alert("Child clicked!");
  }
  }
);
// Event propagation
const child = document.getElementById("child");
child.addEventListener("click", function(event) {
  alert("Child clicked!");
  event.stopPropagation(); // Prevents the event from bubbling up to the parent
  }
);
// Event capturing
const parent = document.getElementById("parent");
parent.addEventListener("click", function(event) {

  alert("Parent clicked!");
  event.stopPropagation(); // Prevents the event from bubbling down to the child
  }
);
// Event object
const button = document.getElementById("myButton");
button.addEventListener("click", function(event) {
  alert("Button clicked!");
  console.log(event); // Logs the event object
  console.log(event.target); // Logs the target element
  console.log(event.type); // Logs the event type (e.g., "click")
  console.log(event.clientX); // Logs the X coordinate of the mouse click
  console.log(event.clientY); // Logs the Y coordinate of the mouse click
  console.log(event.pageX); // Logs the X coordinate of the mouse click relative to the page
  console.log(event.pageY); // Logs the Y coordinate of the mouse click relative to the page
  console.log(event.key); // Logs the key pressed (for keyboard events)
  console.log(event.keyCode); // Logs the key code (for keyboard events)`
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs14() {
  const [htmlCode, setHtmlCode] = useState(
    `
    // Map and Map Method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(number) {
  return number * 2;
}
);
console.log(doubled); // [2, 4, 6, 8, 10]
// Filter and Filter Method
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
}
);
console.log(evenNumbers); // [2, 4]

    
    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs15() {
  const [htmlCode, setHtmlCode] = useState(
    `
  // ForEach and ForEach Method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
}
);
// Output: 1 2 3 4 5
// Reduce and Reduce Method
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}
, 0
);
console.log(sum); // 15
// Some and Some Method
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
}
);
console.log(hasEvenNumber); // true
// Every and Every Method
const numbers = [1, 2, 3, 4, 5];
const allEvenNumbers = numbers.every(function(number) {
  return number % 2 === 0;
}
);
console.log(allEvenNumbers); // false

    
    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}




export function HtmlEditorjs16() {
  const [htmlCode, setHtmlCode] = useState(
    `
  // Objects and Classes
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
console.log(person.name); // John
console.log(person.age); // 30
person.greet(); // Hello, John

    
    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs17() {
  const [htmlCode, setHtmlCode] = useState(
    `
// Callback Functions
function fetchData(callback) {
  setTimeout(function() {
    const data = "Data fetched!";
    callback(data);
  } 
  , 2000
  );
}
  // promises
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = "Data fetched!";
      resolve(data);
    }
    , 2000
    );
  }
}
  // promise chaining 
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = "Data fetched!";
      resolve(data);
    }
    , 2000
    );
  }
}
function processData(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const processedData = data + " and processed!";
      resolve(processedData);
    }
    , 2000
    );  
  }
}
   // async and await 
async function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = "Data fetched!";
      resolve(data);
    }
    , 2000
    );
  }
}
async function processData(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const processedData = data + " and processed!";
      resolve(processedData);
    }
    , 2000
    );
  }
}


    
    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs18() {
  const [htmlCode, setHtmlCode] = useState(
    `
   // API Fetch
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = "Data fetched!";
      resolve(data);
    }
    , 2000
    );
  }
}
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}
// Fetching data from an API
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}
// Handling errors
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
  


    
    `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "500px",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs19() {
  const [htmlCode, setHtmlCode] = useState(
    `Javascript function call 
<!DOCTYPE html>
<html>
<head>
  <title>DOM Function Call</title>
</head>
<body>
  <button onclick="sayHello()">Click Me</button>

  <script>
    function sayHello() {
      alert("Hello from the DOM!");
    }
  </script>
</body>
</html>

React function call 
import React from 'react';

function App() {
  const handleClick = () => {
    alert("Hello from React!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}




export function HtmlEditorjs20() {
  const [htmlCode, setHtmlCode] = useState(
 `
 function app(){
 Let fruit = "Apple",
 return(
 <div> 
 <h1> My Favourite Fruit is {fruit} </h1>
 </div>

 
 ) 
 
 }

  export default  App;

// Now i wish to change the fruit name on click the button 
import {useState} from "react":
function App(){
const [ fruit, setFruit] = useState("Apple")
return(
<>

<h1>{fruit} </h1>
<button onclick = {()=> setfruit("mango)}>Click</button>
 </> 
)


 }


 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs21() {
  const [htmlCode, setHtmlCode] = useState(
 `
 // multiple Condtional rendering
  import { useState } from "react";
  export function User(){
   const [user,setuser] = useState(true)
   const [admin,setadmin] = useState(false)

   return(
     <>
     <h1>Multiple Condition </h1>
     {
       user? <h1>User</h1>:null
 
   }
     {
            admin? <h1>Admin</h1>:null
    }
  <button onClick={()=>setadmin(!admin)}>Click</button>
     <button onClick={()=>setuser(!user)}>Click</button>
     </>
   )
  }

 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs22() {
  const [htmlCode, setHtmlCode] = useState(
 `
 function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />


function UserInfo(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

// Usage
<UserInfo name="John" age={30} location="New York" />

function UserInfo({ name, age, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}



function Button(props) {
  return <button onClick={props.handleClick}>Click me</button>;
}

// Usage
function App() {
  const showMessage = () => {
    alert('Button was clicked!');
  };

  return <Button handleClick={showMessage} />;
}


 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white", 
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}




export function HtmlEditorjs23() {
  const [htmlCode, setHtmlCode] = useState(
 `

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
  

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup (when component unmounts)
    return () => clearInterval(interval);
  }, []);

  return <h1>{seconds} seconds passed</h1>;
}


 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}




export function HtmlEditorjs24() {
  const [htmlCode, setHtmlCode] = useState(
 `

import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // API call
      .then(response => response.json())
      .then(data => setUsers(data)); // Save data to state
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}


export function HtmlEditorjs25() {
  const [htmlCode, setHtmlCode] = useState(
 `

import React from 'react';

        function App() {
          return (
            <div>
              <h1>Hello, React!</h1>
            </div>
          );
        }

        export default App;


 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export function HtmlEditorjs26() {
  const [htmlCode, setHtmlCode] = useState(
 `
cosnt user = {
              name:"Sonu Gautam",
              ImageURL:"http//image.png" 
              imageSize:"200"
               }
export function profile(){
        return(
            <div>
              <img src = {user.imageurl} Classname = "profilePhoto"
               style ={{
                width:"user.ImageSize"
                 height:user."user.ImageSize"
                 display:"user.display"
             }}/>
                <h1>{User.name}</h1>
                </div>
               )}


 `
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Script.js";
    link.click();
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
    >
      {/* Editor Panel */}
      <div style={{}}>
        <textarea
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
          
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          className="w-full h-80 p-2 border rounded-lg outline-none resize-none font-mono"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
            }}
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Copy
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "white",
               

            }}
            onClick={downloadFile}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}