
import "./Navbar3.css";
 
 export function Course(){

    const courses = [

        {
            
            title: "Web Development",
            description: "Web development is the process of creating and maintaining websites or web applications that run in a web browser. It involves everything from building a simple static web page to complex, dynamic applications and services.",
            youtubeLink: "https://www.youtube.com/watch?v=HTML_TUTORIAL_LINK",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiBSrY3rPB6EYrh3FaDqXejdrHY_MZKMmPIJ0IKPsuyaIWBZdqJkJItFZ9ndL3i6HTBI&usqp=CAU",
          },
        {
            
          title: "HTML",
          description: "Learn the structure of webpages with HTML. Understand tags, attributes, and document structure.",
          youtubeLink: "https://www.youtube.com/watch?v=HTML_TUTORIAL_LINK",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqiBcr6N9_3NlI52jDBVxeD5lRxIlxg7fNV4ZiCqV3TA-1F5g4Tj0LnfiaPTn_vkjjt8&usqp=CAU",
        },
        {
          title: "CSS",
          description: "Style your webpages with CSS. Master layouts, typography, colors, and animations.",
          youtubeLink: "https://www.youtube.com/watch?v=CSS_TUTORIAL_LINK",
          image:"https://developers.moralis.com/wp-content/uploads/2021/07/21_07_CSS.jpg",
        },
        {
          title: "JavaScript",
          description: "Dive into JavaScript and learn how to add interactivity and logic to your webpages.",
          youtubeLink: "https://www.youtube.com/watch?v=JAVASCRIPT_TUTORIAL_LINK",
          image:"https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/09/What-is-JavaScript-1.png",
        },
        {
          title: "React",
          description: "Learn how to build dynamic and responsive web applications with React.",
          youtubeLink: "https://www.youtube.com/watch?v=REACT_TUTORIAL_LINK",
          image:"https://i.ytimg.com/vi/JPT3bFIwJYA/maxresdefault.jpg",
        },
        {
          title: "Next.js",
          description: "Understand server-side rendering, routing, and other advanced React features with Next.js.",
          youtubeLink: "https://www.youtube.com/watch?v=NEXTJS_TUTORIAL_LINK",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrVtJBLnzseD8GGbipvL3dM15SiIyncgqfueFbAIGwbPWmjKZ0xsXTzzondVOe5_IUqo&usqp=CAU",
        },
        {
          title: "MongoDB",
          description: "Learn the NoSQL database, MongoDB, and how to store and query data effectively.",
          youtubeLink: "https://www.youtube.com/watch?v=MONGODB_TUTORIAL_LINK",
          image:"https://dotnettrickscloud.blob.core.windows.net/article/3720240725105456.png",
        },
        {

          title: "Express.js",
          description: "Build scalable web applications with Node.js and Express.js. Learn how to create APIs.",
          youtubeLink: "https://www.youtube.com/watch?v=EXPRESSJS_TUTORIAL_LINK",
          image:"https://codingtorque.com/wp-content/uploads/2023/03/BLOG-What-is-Express-JS.png",
        },
      ];
     return(
        <div className="course-container">
        <h2 className="course-title">Our Courses</h2>
        <div className="course-cards">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
            <img style={{
                     maxWidth: "100%",
                     height: "auto",
                     borderRadius: "10px",
                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }} src={course.image} alt={course.title} className="course-card-image" />
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-description">{course.description}</p>
              <a
                href={course.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="course-link"
              >
                Watch on YouTube
              </a>
            </div>
          ))}
        </div>
      </div>
     )
 }