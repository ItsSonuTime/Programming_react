import { Link } from "react-router-dom";
import HtmlEditor from "./Text";
import HtmlEditor2 from "./Text2";
import HtmlEditor3 from "./Text3";
import HtmlEditor4, { HtmlEditor5, HtmlEditor6, HtmlEditor7, } from "./Text4";

export function Html() {
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
        }}
        title="This is the main heading"
      >
        HTML
      </h1>
      <p 
        style={{ 
          fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
          color: "#34495e",
          textAlign: "center",
          marginBottom: "2rem"
        }} 
        title="HTML full form"
      >
        (Hyper Text Markup Language)
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
          title="HTML Introduction"
        >
          What is HTML and how do we learn it?
        </h2>
        <p
          style={{ 
            maxWidth: "800px", 
            margin: "0 auto", 
            color: "#34495e",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            lineHeight: "1.8"
          }}
          title="HTML description"
        >
          Html is a language that creates its layout and structure, just like to
          build a house, we first create the columns and prepare the blueprint of
          that house, in the same way before building a website, we first create
          its layout and structure.
        </p>
        <p
          style={{ 
            maxWidth: "800px", 
            margin: "1rem auto", 
            color: "#34495e",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            fontStyle: "italic"
          }}
          title="HTML description in Hindi"
        >
          (Html एक ऐसी भाषा है जो उसका लेआउट और स्ट्रक्चर तैयार करती है, जैसे घर
          बनाने के लिए हम सबसे पहले कॉलम बनाते हैं और उस घर का खाका तैयार करते
          हैं, उसी तरह वेबसाइट बनाने से पहले हम सबसे पहले उसका लेआउट और स्ट्रक्चर
          तैयार करते हैं।)
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h3 
          style={{ 
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            color: "#2c3e50",
            marginBottom: "1rem"
          }} 
          title="VS Code Installation"
        >
          First of all, we will install the Visual Studio Code
        </h3>
        <a
          href="https://code.visualstudio.com/download"
          style={{
            display: "inline-block",
            margin: "1rem 0",
            padding: "0.8rem 1.5rem",
            backgroundColor: "#3498db",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            transition: "all 0.3s ease",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
          title="Download Visual Studio Code"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#2980b9";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#3498db";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Visual Studio Install
        </a>
      </section>

      <h2
        style={{
          margin: "20px 0",
          color: "#444",
        }}
        title="Basic HTML Code"
      >
        In HTML, first we will look at the Basic code.
      </h2>
      <h2
        style={{
          color: "red",
          margin: "20px 0",
        }}
        title="HTML Boilerplate Code"
      >
        This is a Boilerplate Code
      </h2>

      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
        title="Boilerplate Code Image"
      >
        <img
          src="boillerplate.png"
          alt="Boilerplate Code"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <div>
        <h2 style={{ color: "#444" }} title="Basic HTML Section">
          Basic HTML
        </h2>
        <p style={{ color: "#666" }} title="Write this code in the Body">
          Write this code in the Body:
        </p>
        <HtmlEditor />
      </div>

      <div>
        <h2 style={{ marginTop: "30px", color: "#444" }} title="HTML Heading Tags">
          First of all, what is a Heading tag in HTML?
        </h2>
        <p style={{ color: "#666" }} title="Heading Tag Types">
          There are six types of Heading Tags:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
          className="headingtag"
          title="HTML Heading Tags Example"
        >
          <h1 title="Heading 1">First Heading (h1)</h1>
          <h2 title="Heading 2">Second Heading (h2)</h2>
          <h3 title="Heading 3">Third Heading (h3)</h3>
          <h4 title="Heading 4">Fourth Heading (h4)</h4>
          <h5 title="Heading 5">Fifth Heading (h5)</h5>
          <h6 title="Heading 6">Sixth Heading (h6)</h6>
          <HtmlEditor2 />
        </div>
        <div>
          <h2
            style={{
              padding: "20px",
              color: "#444",
            }}
            title="HTML Attributes Section"
          >
            Attributes in HTML
          </h2>
          <HtmlEditor3 />
        </div>
        <h2 style={{ marginTop: "20px", color: "#444" }} title="HTML Tags Reminder">
          Now all you have to do is remember these tags:
        </h2>
        <div>
          <HtmlEditor4 />
        </div>
        <div
          style={{
            padding: "30px",
          }}
          title="HTML Navbar Creation"
        >
          <h1>Now Create Navbar using HTML</h1>
          <HtmlEditor5 />
        </div>

        <div style={{
           margin:"50px"
        }}>
          <h1 title="HTML Tags Usage"> All Tags are using this Web Site</h1>
          <HtmlEditor6 />
        </div>

        <div>
          <h2
            style={{
              padding: "20px",
            }}
            title="ChatGPT Learning Section"
          >
            Now We are Learn Chatgpt and Create a projects
          </h2>
          <h1 title="What is ChatGPT">What is Chatgpt</h1>

          <p title="ChatGPT Description">
            🔹 ChatGPT:
            ChatGPT is an AI-powered chatbot developed by OpenAI that uses a
            large language model (LLM) to generate human-like text. It can
            answer questions, assist with writing, generate code, and have
            conversations based on user input.
          </p>
          <h3 title="ChatGPT Form Creation">Lets Now create a form using ChatGpt</h3>
          <p title="ChatGPT Prompt">
            You Go to chat ght and write this prompt --- Create a form using
            HTML
          </p>

          <HtmlEditor7 />
        </div>
        <div>
          <h1
            style={{
              padding: "25px",
            }}
            title="HTML Projects Section"
          >
            Now you Create Five Projects
          </h1>
          <h2
            style={{
              padding: "20px",
            }}
            title="Flipkart Frontend Project"
          >
            Flipkart fronted page
          </h2>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}
            title="Flipkart Clone"
          >
            <h1>Flipkart Clone</h1>
            <img
              src="https://i.ytimg.com/vi/nNDISGz7q_8/maxresdefault.jpg"
              alt="Flipkart Frontend Page"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                marginBottom: "1rem"
              }}
            />
          </div>
        </div>
        <div>
          <h2
            style={{
              padding: "20px",
            }}
            title="Amazon Frontend Project"
          >
            Amazon fronted page
          </h2>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}
            title="Amazon Clone"
          >
            <h1>Amazon Clone</h1>
            <img
              src="https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage-august.jpg"
              alt="Amazon Frontend Page"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                marginBottom: "1rem"
              }}
            />
          </div>
        </div>
        <div>
          <h2
            style={{
              padding: "20px",
            }}
            title="Netflix Frontend Project"
          >
            Netflix Fronted Page
          </h2>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease"
            }}
            title="Netflix Clone"
          >
            <h1>Netflix Clone</h1>
            <img
              src="https://www.codica.com/static/5d76314da50ce4e28495f34fe20f8e9c/37533/netflix_originals_min_80a44a30b2.jpg"
              alt="Netflix Frontend Page"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                marginBottom: "1rem"
              }}
            />
          </div>
          <div>
            <h2
              style={{
                padding: "20px",
              }}
              title="Spotify Frontend Project"
            >
              Spotify Fronted page
            </h2>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
              title="Spotify Clone"
            >
              <h1>Spotify Clone</h1>
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*il-haf0-POpWteV2B_q3Lw.png"
                alt="Spotify Frontend Page"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  marginBottom: "1rem"
                }}
              />
              <div></div>
            </div>
            <div>
              <h2
                style={{
                  padding: "20px",
                }}
                title="Portfolio Frontend Project"
              >
                Personal portfolio page
              </h2>

              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease"
                }}
                title="Portfolio Clone"
              >
                <h1>portfolio clone</h1>
                <img
                  src="https://codehalweb.com/wp-content/uploads/2023/05/thumbnail.png"
                  alt="Portfolio Frontend Page"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px",
                    marginBottom: "1rem"
                  }}
                />
              </div>
            </div>

            <div>
              <h2
                style={{
                  margin: "20px",
                  color: "black",
                }}
                title="HTML Completion Message"
              >
                You will almost complete your HTML and learn it
              </h2>
            </div>
          </div>
        </div>
        <div style={{ 
          textAlign: "center", 
          marginTop: "3rem",
          padding: "2rem 0"
        }}>
          <Link to="/CSS">
            <button 
              style={{
                padding: "1rem 2rem",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
              className="Button"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2980b9";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#3498db";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Go to Next Step
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
