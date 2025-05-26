import  { useState  } from "react";

const HtmlEditor3 = () => {
  const [html, setHtml] = useState(    `<!DOCTYPE html>
    <html>
    <body>
      <h1>The img element</h1>
      <img src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-freelancer-software-developer-programmer-coder-illustrator-png-image_13076689.png" alt="Girl in a jacket" width="200" height="200">\n <br/> =>
      <a href= "https://itssonutime.github.io/Coder/" width="300" height="200" > Anchor tags</a>
      <br/>
      <br/>
     Button => <button>Button</button> 
      <br/>
      <br/>
     InputBox => <input type="text" />
        <br/>
      <br/>
     PasswordBox => <input type="password" />
          <br/>
            Textarea   
      <br/>
    <textarea ></textarea>
    

     
    </body>
    </html>` )

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
    height: "100vh",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default HtmlEditor3;


