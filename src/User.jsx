


    import "./CSSTagsTable.css";  // Importing the CSS file
    
    const CSSTagsTable = () => {
      const cssProperties = [
        { property: "transition", importance: "Smooth animations" },
        { property: "box-shadow", importance: "Adds a glowing effect" },
        { property: "max-width", importance: "Prevents excessive expansion" },
        { property: "flex-grow", importance: "Dynamic resizing of the input" },
        { property: "outline: none", importance: "Cleaner design without default browser styling" },
        { property: "cursor: pointer", importance: "Makes the button interactive" },
        { property: "transform: rotate()", importance: "Rotates the search icon for animation" },
        { property: "@media", importance: "Ensures responsiveness on all devices" }
      ];
    const cssProperties1 = [
      { property: "width, height", importance: "Sets the size of elements" },
      { property: "max-width, min-width", importance: "Controls element's maximum & minimum width" },
      { property: "max-height, min-height", importance: "Controls element's maximum & minimum height" },
      { property: "margin", importance: "Sets space outside an element" },
      { property: "padding", importance: "Sets space inside an element" },
      { property: "border", importance: "Defines the border of an element" },
      { property: "box-sizing", importance: "Controls how width & height include padding and borders" },
      { property: "display", importance: "Controls how an element is displayed (block, inline, flex, grid, etc.)" },
      { property: "overflow", importance: "Defines how content should behave if it overflows the container" },
      { property: "position", importance: "Specifies positioning (absolute, relative, fixed, sticky)" }
    ];
    
    const cssProperties2 = [
        { property: "color", importance: "Sets text color" },
        { property: "background-color", importance: "Defines the background color of an element" },
        { property: "background-image", importance: "Adds a background image" },
        { property: "background-size", importance: "Specifies how background images are scaled (cover, contain)" },
        { property: "opacity", importance: "Adjusts transparency (0 = fully transparent, 1 = fully visible)" }
    ];

    const cssProperties3 = [
        { property: "font-family", importance: "Sets the font type (e.g., Arial, sans-serif)" },
        { property: "font-size", importance: "Defines text size" },
        { property: "font-weight", importance: "Controls thickness (bold, normal, light)" },
        { property: "line-height", importance: "Controls the space between lines of text" },
        { property: "letter-spacing", importance: "Adjusts space between letters" },
        { property: "text-align", importance: "Aligns text (left, right, center, justify)" },
        { property: "text-decoration", importance: "Adds underlines, strikethrough, etc." },
        { property: "text-transform", importance: "Converts text to uppercase, lowercase, capitalize" }
    ];

    const cssProperties4 = [
        { property: "display: flex", importance: "Enables flexbox layout" },
        { property: "flex-direction", importance: "Defines the main axis (row, column)" },
        { property: "justify-content", importance: "Aligns items horizontally (flex-start, center, space-between)" },
        { property: "align-items", importance: "Aligns items vertically (flex-start, center, stretch)" },
        { property: "flex-wrap", importance: "Allows items to wrap to the next line (wrap, nowrap)" },
        { property: "gap", importance: "Adds spacing between flex items" }
    ];

    const cssProperties5 = [
        { property: "display: grid", importance: "Enables CSS Grid" },
        { property: "grid-template-columns", importance: "Defines column sizes (e.g., repeat(3, 1fr))" },
        { property: "grid-template-rows", importance: "Defines row sizes" },
        { property: "grid-gap", importance: "Adds spacing between grid items" },
        { property: "align-items, justify-items", importance: "Aligns grid items within their cells" }
    ];

    const cssProperties6 = [
        { property: "@media", importance: "Applies styles based on screen size" },
        { property: "max-width, min-width", importance: "Adjusts layout based on device width" },
        { property: "vh (Viewport Height)", importance: "Sets height relative to screen size" },
        { property: "vw (Viewport Width)", importance: "Sets width relative to screen size" }
    ];

    
      return (

        <>
        <div className="table-container">
          <h2 className="Haedering">🔥 Summary: Why These Tags Matter?</h2>
          <table>
            <thead>
              <tr>
                <th>CSS Property</th>
                <th>Why Its Important?</th>
              </tr>
            </thead>
            <tbody>
              {cssProperties.map((item, index) => (
                <tr key={index}>
                  <td className="css-tag">{item.property}</td>
                  <td>{item.importance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

   <br />
   <br />
<div className="table-container">
<h2 className="Haedering">🔥 1. Layout & Box Model</h2>
<table>
  <thead>
    <tr>
      <th>CSS Property</th>
      <th>Why Its Important?</th>
    </tr>
  </thead>
  <tbody>
    {cssProperties1.map((item, index) => (
      <tr key={index}>
        <td className="css-tag">{item.property}</td>
        <td>{item.importance}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
<br />
<br />

<div className="table-container">
<h2 className="Haedering">🎨 2. Colors & Backgrounds</h2>
<table>
  <thead>
    <tr>
      <th>CSS Property</th>
      <th>Why Its Important?</th>
    </tr>
  </thead>
  <tbody>
    {cssProperties2.map((item, index) => (
      <tr key={index}>
        <td className="css-tag">{item.property}</td>
        <td>{item.importance}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>

 <br />
 <br />
 

<div className="table-container">
<h2 className="Haedering">🖋 3. Typography & Text Styling</h2>
<table>
  <thead>
    <tr>
      <th>CSS Property</th>
      <th>Why Its Important?</th>
    </tr>
  </thead>
  <tbody>
    {cssProperties3.map((item, index) => (
      <tr key={index}>
        <td className="css-tag">{item.property}</td>
        <td>{item.importance}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>


<br />
 <br />

 <div className="table-container">
 <h2 className="Haedering">📐 4. Flexbox (For Easy Layouts)</h2>
 <table>
   <thead>
     <tr>
       <th>CSS Property</th>
       <th>Why Its Important?</th>
     </tr>
   </thead>
   <tbody>
     {cssProperties4.map((item, index) => (
       <tr key={index}>
         <td className="css-tag">{item.property}</td>
         <td>{item.importance}</td>
       </tr>
     ))}
   </tbody>
 </table>
 </div>

 <br />
 <br />

 <div className="table-container">
 <h2 className="Haedering">🔲 5. CSS Grid (For Advanced Layouts)</h2>
 <table>
   <thead>
     <tr>
       <th>CSS Property</th>
       <th>Why Its Important?</th>
     </tr>
   </thead>
   <tbody>
     {cssProperties5.map((item, index) => (
       <tr key={index}>
         <td className="css-tag">{item.property}</td>
         <td>{item.importance}</td>
       </tr>
     ))}
   </tbody>
 </table>
 </div>

 <br />
 <br />

 <div className="table-container">
 <h2 className="Haedering">🖥 6. Responsive Design</h2>
 <table>
   <thead>
     <tr>
       <th>CSS Property</th>
       <th>Why Its Important?</th>
     </tr>
   </thead>
   <tbody>
     {cssProperties6.map((item, index) => (
       <tr key={index}>
         <td className="css-tag">{item.property}</td>
         <td>{item.importance}</td>
       </tr>
     ))}
   </tbody>
 </table>
 </div>
</>
      );
    };
    
    export default CSSTagsTable;



  import "./CSSTagsTable.css";  // Importing the CSS file

 export const CSSTagsTable2 = () => {
const cssProperties = [
    { property: "transition", importance: "Creates smooth animations" },
    { property: "transform", importance: "Rotates, scales, moves elements" },
    { property: "box-shadow", importance: "Adds shadow effects" },
    { property: "text-shadow", importance: "Adds shadow effects to text" },
    { property: "animation", importance: "Defines keyframe animations" },
    { property: "cursor", importance: "Changes mouse pointer style" },
    { property: "hover", importance: "Applies styles when hovered" }
];

  return (
    <div className="table-container">
      <h2 className="Haedering">🎬 7. Animation & Effects</h2>
      <table>
        <thead>
          <tr>
            <th>CSS Property</th>
            <th>Why Its Important?</th>
          </tr>
        </thead>
        <tbody>
          {cssProperties.map((item, index) => (
            <tr key={index}>
              <td className="css-tag">{item.property}</td>
              <td>{item.importance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// import { useState } from "react";
// import { useEffect } from "react";
// function User(){
//   const [userData,setuserData] = useState([])
//   useEffect(()=>{
//     ProductData()

//   },[])
// async function ProductData(){
//   const url = "https://dummyjson.com/products";
//    let response = await fetch(url)
//    response = await response.json()
//     setuserData(response.products)
// }

// console.log(userData)
//    return(
//      <h1 style={{
//        textAlign:"center",
//        color:"darkblue",
//      }}>Learn API</h1>
//    )

   
// }
//  export default User;
