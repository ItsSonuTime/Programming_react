import  { useState  } from "react";

const HtmlEditor = () => {
  const [html, setHtml] = useState("<h1>My First Heading</h1>\n<p>My first paragraph.</p>");
  

  // Copy to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(html);
    alert("Copied to Clipboard!");
  };

  // Download as HTML file
  const downloadHtml = () => {
    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      {/* Editor Section */}
      <div style={styles.editorSection}>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          style={styles.textarea}
          placeholder="Write your HTML here..."
        />
        <div style={styles.buttons}>
          <button onClick={copyToClipboard} style={styles.button}>📋 Copy</button>
          <button onClick={downloadHtml} style={styles.button}>⬇ Download</button>
        </div>
      </div>

      {/* Preview Section */}
      <iframe title="output" srcDoc={`<html><body>${html}</body></html>`} style={styles.preview} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    padding: "10px",
  },
  editorSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingRight: "10px",
  },
  textarea: {
    width: "100%",
    height: "250px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  buttons: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "white",
  },
  preview: {
    flex: 1,
    width: "100%",
    height: "50vh",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default HtmlEditor;
