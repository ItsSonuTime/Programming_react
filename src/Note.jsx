import  { useState } from "react";
import "./Note.css"; // Import CSS

const Note = () => {
  const [text, setText] = useState("transition: all 0.3s ease-in-out;");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>1️⃣ transition (Smooth Animation)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};

export default Note;




  export const Note1 = () => {
  const [text, setText] = useState("box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>2️⃣ box-shadow (Glowing Effect)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};



export const Note2 = () => {
  const [text, setText] = useState("max-width: 250px;");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>3️⃣ max-width (Responsive Expansion)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};




export const Note3 = () => {
  const [text, setText] = useState("flex-grow: 1;");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>4️⃣ flex-grow (Dynamic Width)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};




export const Note4 = () => {
  const [text, setText] = useState("outline: none;");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>5️⃣ outline: none (Clean Input Focus)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};



export const Note5 = () => {
  const [text, setText] = useState("cursor: pointer;");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>6️⃣ cursor: pointer (Clickable Icon)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};



export const Note6 = () => {
  const [text, setText] = useState("transform: rotate(15deg);");
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>7️⃣ transform: rotate() (Rotating Search Icon)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};



export const Note7 = () => {
  const [text, setText] = useState(`@media (max-width: 768px) {
  .search-container {
    max-width: 180px;
  }
}`);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>8️⃣ @media (Mobile & Tablet Responsiveness)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};



export const Note8 = () => {
  const [text, setText] = useState(`@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    display: none;
  }
  .nav-links.open {
    display: flex;
  }
}`);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>Example (Mobile Responsive)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};


export const Note9 = () => {
  const [text, setText] = useState(`.search-input {
  width: 150px;
  transition: width 0.3s ease-in-out;
}

.search-input:focus {
  width: 250px;
}`);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>Example (Search Bar Animation)</h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};


export const Note10 = () => {
  const [text, setText] = useState(`<script src ="script.js"</script>
   <script> this Type </script>`);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>HTML + JAVASCRIPT </h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};


export const Note11 = () => {
  const [text, setText] = useState(`
   
var name = "Alice";
console.log(name); // Alice

let age = 25;
age = 26; // Allowed
console.log(age); // 26


const pi = 3.14159;
const pi = 3.14159; // Error: Identifier 'pi' has already been declared
// pi = 3.14159; // Error: Assignment to constant variable
console.log(pi); // 3.14159





`)
   

  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="note-container">
     <h3>Example: Data Type </h3>
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p style={{
          color:"white"
        }}>{text}</p>
      )}

      <div className="note-buttons">
        <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? "💾 Save" : "✏️ Edit"}
        </button>
      </div>
    </div>
  );
};

