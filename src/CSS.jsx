import { Link } from "react-router-dom";
import Note, { Note1, Note2, Note3, Note4, Note5, Note6, Note7, Note8, Note9 } from "./Note";
import { HtmlEditorCss1 } from "./Text4";
import CSSTagsTable, { CSSTagsTable2 } from "./User";

export function CSS() {
  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Georgia', serif",
        lineHeight: "1.8",
        color: "#2c3e50",
        backgroundColor: "#f8f9fa",
      }}
      className="html-container"
    >
      <h1
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: "1rem",
          borderBottom: "3px solid #3498db",
          paddingBottom: "1rem",
          transition: "all 0.3s ease",
        }}
        title="This is the main heading"
      >
        CSS
      </h1>
      <p 
        style={{ 
          fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
          color: "#34495e",
          textAlign: "center",
          marginBottom: "2rem"
        }} 
        title="CSS full form"
      >
        (Cascading Style Sheets)
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 
          style={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            borderLeft: "4px solid #3498db",
            paddingLeft: "1rem"
          }} 
          title="CSS Introduction"
        >
          What is CSS and how do we learn it?
        </h2>
        <p
          style={{ 
            maxWidth: "800px", 
            margin: "0 auto", 
            color: "#34495e",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            lineHeight: "1.8"
          }}
          title="CSS description"
        >
          CSS (Cascading Style Sheets) is a stylesheet language used to describe
          the presentation of a webpage, including colors, layout, fonts, and
          responsiveness. It works alongside HTML to design and style web pages,
          making them visually appealing and user-friendly.
        </p>
        <p
          style={{ 
            maxWidth: "800px", 
            margin: "1rem auto", 
            color: "#34495e",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            fontStyle: "italic"
          }}
          title="CSS description in Hindi"
        >
          CSS (कैस्केडिंग स्टाइल शीट्स) एक स्टाइलशीट भाषा है जिसका उपयोग वेबपेज की
          प्रस्तुति को नियंत्रित करने के लिए किया जाता है, जैसे कि रंग, लेआउट,
          फॉन्ट और उत्तरदायी डिज़ाइन। यह HTML के साथ मिलकर वेब पेज को आकर्षक और
          उपयोगकर्ता के अनुकूल बनाती है।
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 
          style={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          Where and How to write CSS and Why
        </h2>
        <div style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease"
        }}>
          <HtmlEditorCss1/>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 
          style={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          What is Syntax in CSS
        </h2>
        <div style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease"
        }}>
          <img
            src="CssSyntax.png"
            alt="CSS Syntax"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "1rem"
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 
          style={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          What is Selectors in CSS
        </h2>
        <div style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease"
        }}>
          <h2 style={{ 
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            color: "#2c3e50",
            marginBottom: "1rem"
          }}>
            CSS Selectors
          </h2>
          <p style={{ 
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            color: "#34495e",
            marginBottom: "1rem"
          }}>
            CSS selectors are used to find (or select) the HTML elements you want to style.
          </p>

          <h3 style={{ 
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            color: "#2c3e50",
            marginBottom: "1rem"
          }}>
            We can divide CSS selectors into five categories:
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0
          }}>
            {[
              { text: "1.Simple selectors (select elements based on name, id, class)", img: "Selector.png" },
              { text: "2.Combinator selectors (select elements based on a specific relationship between them)", img: "Selector1.png" },
              { text: "3.Pseudo-class selectors (select elements based on a certain state)", img: "Selector2.png" },
              { text: "4.Attribute selectors (select elements based on an attribute or attribute value)", img: "Selector3.png" },
              { text: "5.Pseudo-elements selectors (select and style a part of an element)", img: "Selector4.png" }
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "2rem" }}>
                <p style={{ 
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  color: "#34495e",
                  marginBottom: "1rem"
                }}>{item.text}</p>
                <img
                  src={item.img}
                  alt={item.text}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 
          style={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          CSS Comments
        </h2>
        <div style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease"
        }}>
          <p style={{ 
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            color: "#34495e",
            marginBottom: "1rem"
          }}>
            In short comments mean that we write those things in comments which
            we do not want to see on the browser screen.
          </p>
          <img
            src="Comments.png"
            alt="CSS Comments"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "1rem"
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h1 
          style={{ 
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          CSS Colors
        </h1>
        <div style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease"
        }}>
          <img
            src="Colors.png"
            alt="CSS Colors"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              marginBottom: "1rem"
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 
          style={{ 
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2c3e50",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          Key CSS Properties Explained
        </h2>
        <div style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease"
        }}>
          <Note/>
          <Note1/>
          <Note2/>
          <Note3/>
          <Note4/>
          <Note5/>
          <Note6/>
          <Note7/>
          <Note8/>
          <Note9/>
        </div>
       
      </section>
      <div style={{
        height:"100%",
        maxWidth:"100%",
       textAlign:"center"
      }}>  
         < CSSTagsTable/>
         <CSSTagsTable2/>
         </div>

      <div style={{ 
        textAlign: "center", 
        marginTop: "3rem",
        padding: "2rem 0"
      }}>
        <Link to="/JAVASCRIPT">
          <button 
            style={{
              padding: "1rem 2rem",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              backgroundColor: "black",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
    
          >
            Go to Next Step
          </button>
        </Link>
      </div>

    </div>
  );
}
