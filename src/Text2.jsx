import { useState } from "react";

 

 const HtmlEditor2 = () => {
  const [html, setHtml] = useState("<h1>First Heading</h1>\n<h2>Second Heading</h2>\n<h3>Third Heading</h3>\n<h4>Fourth Heading</h4>\n<h5>Fifth Heading</h5>\n<h6>Sixth Heading</h6> ");
  

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

 export default HtmlEditor2


export function Variable() {
  return(
    <div className="Variables"
            style={{
              textAlign: "center",
            
              fontFamily: "Arial, sans-serif",
              lineHeight: "1.6",
              scrollBehavior:"smooth",
              fontSize: "1.2rem",
           
              boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor:"#333",

              color:"white",
            }}
          >
         <h1>Variable</h1>
            <p>
              In JavaScript, variables are used to store and manage data. They act
              as containers that hold values, which can be referenced and
              manipulated throughout your code.
            </p>
            <p>
              Variables can be declared using three keywords: <strong>var</strong>,{" "}
              <strong>let</strong>, and <strong>const</strong>. Each has its own
              scope and usage.
            </p>
            <h2
              style={{
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              Heres a brief overview:
            </h2>
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
                fontSize: "1.2rem",
                color: "#777",
              }}
            >
              <li>
                <strong>var:</strong> Declares Global Scoped It Can be re-declared
                and updated{" "}
              </li>
              <li>
                <strong>let:</strong> Declares a block-scoped variable It Can be
                updated but not redeclared in the same scope.{" "}
              </li>
              <li>
                <strong>const:</strong> Declares a block-scoped variable It Cannot
                be redeclared or updated.
              </li>
            </ul>
     
              <div>
                <h3>Example of Variables</h3>
                <HtmlEditorjs/>
           
              </div>
     
            <div style={{
              fontSize: "1.2rem",
              color: "#777",
            }}>
               <p>
              In this example, we declare three variables: name, age, and pi. We use
              var for name, let for age, and const for pi. We can update age but not
              pi.
            </p>
            <p>
              Understanding how to declare and use variables is fundamental to
              programming in JavaScript. As you progress, you will learn more about
              variable scope, hoisting, and best practices for naming variables.
            </p>
            </div>
          </div>
  
  );
}



export function Datatype() {
  return(

    <div className="Datatype"
            style={{
              textAlign: "center",
            
              fontFamily: "Arial, sans-serif",
              lineHeight: "1.6",
              scrollBehavior:"smooth",
              fontSize: "1.2rem",
           
              boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor:"#333",

              color:"white",
            }}
          >
         <h1>Data Type</h1>
            <p>
              In JavaScript, data types are the classification of data that tells the
              compiler or interpreter how the programmer intends to use it. There are
              two main categories of data types in JavaScript: primitive and
              reference.
            </p>
            <p>
              Primitive data types include:
            </p>
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
                fontSize: "1.2rem",
                color: "#777",
              }}
            >
              <li><strong>String:</strong> Represents a sequence of characters.</li>
              <li><strong>Number:</strong> Represents numeric values.</li>
              <li><strong>Boolean:</strong> Represents true or false values.</li>
              <li><strong>Undefined:</strong> Represents a variable that has been declared but not assigned a value.</li>
              <li><strong>Null:</strong> Represents an intentional absence of any object value.</li>
            </ul>

            <h2
              style={{
                fontSize: "1.2rem",
                color: "white",
              }}
            >
             Reference Data Types:
            </h2>

            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
                fontSize: "1.2rem",
                color: "#777",
              }}
            >
               <li><strong>Object:</strong> A collection of properties and methods.</li>
               <li><strong>Array:</strong> A special type of object used for storing ordered collections of data.</li>
               <li><strong>Date:</strong> Represents date and time.</li>
               <li><strong>Function:</strong> A block of code designed to perform a particular task.</li>
               <li><strong>RegExp:</strong> A regular expression object for matching text patterns.</li>
            </ul>
            <h3>Example of Data Type</h3>
            <HtmlEditorjs/>
            <p>
              In this example, we declare variables of different data types: a string,
              a number, a boolean, an object, and an array. Each variable holds a
              different type of data.
            </p>
            <p>
              Understanding data types is crucial for effective programming in
              JavaScript. It helps you choose the right type for your variables and
              ensures that your code behaves as expected.
            </p>
          </div>
  );
}


export function Operator() {
  return(
    <div style={{ 
      textAlign: "center",
            
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      scrollBehavior:"smooth",
      fontSize: "1.2rem",
   
      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",

      color:"white",
}} >
  <h1>what is Operator</h1>
  <p>In JavaScript, operators are symbols that perform operations on values (operands). Operators can be used to perform mathematical calculations, comparisons, logical operations, and more.</p>
  <p>There are several types of operators in JavaScript, including:</p>
  <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
    <li><strong>Arithmetic Operators:</strong> Used for mathematical calculations (+, -, *, /, %)</li>
    <li><strong>Assignment Operators:</strong> Used to assign values to variables (=, +=, -=)</li>
    <li><strong>Comparison Operators:</strong> Used to compare values (==, ===, !=, !==, {``})</li>
    <li><strong>Logical Operators:</strong> Used for logical operations (&&, ||, !)</li>
    <li><strong>Bitwise Operators:</strong> Used for bit-level operations (&, |, ^)</li>
    <li><strong>Conditional (Ternary) Operator:</strong> A shorthand for if-else statements (condition ? expr1 : expr2)</li>
    </ul>
    <h2>What is Arithmetic Operators and How to use </h2>
    <p>Arithmetic operators are used to perform mathematical calculations. Here are the most common arithmetic operators in JavaScript:</p>
    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
      <li><strong>Addition (+):</strong> Adds two numbers.</li>
      <li><strong>Subtraction (-):</strong> Subtracts one number from another.</li>
      <li><strong>Multiplication (*):</strong> Multiplies two numbers.</li>
      <li><strong>Division (/):</strong> Divides one number by another.</li>
      <li><strong>Modulus (%):</strong> Returns the remainder of a division operation.</li>
      <li><strong>Exponentiation (**):</strong> Raises a number to the power of another number.</li>

    </ul>
     <div style={{
   margin: "20px auto",
    maxWidth: "100%",
     }}>
    <img src="https://www.theknowledgeacademy.com/_files/images/Sample_Code_for_Arithmetic_Operators.png" style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }} />

    
<li><strong>Note:</strong> Now you have to write the code for exponentiation operator by yourself, this is your practice</li>
    </div>
  </div>
  )};

 
export function ArithmeticOperators() {
  return(
    <div style={{
    
      maxWidth: "100%",
      height: "auto",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",

      color:"white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      scrollBehavior:"smooth",
      fontSize: "1.2rem",
    }}> 
    <h2>what is Assignment Operators How to use  </h2>
    <p>Assignment operators are used to assign values to variables. The most common assignment operator is the equals sign (=), but there are several shorthand assignment operators as well:</p>
    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
      <li>Equal:<strong>=:</strong>equating one variable to another</li>
      <li>Plus Equal to:<strong>+=:</strong> Adds a value to a variable and assigns the result.</li>
      <li>Minus Equal to:<strong>-=:</strong> Subtracts a value from a variable and assigns the result.</li>
      <li>Into Equal to:<strong>*=:</strong> Multiplies a variable by a value and assigns the result.</li>
      <li>Divide Equal to:<strong>/=:</strong> Divides a variable by a value and assigns the result.</li>
      <li>Modulus Equal to:<strong>%=:</strong> Calculates the modulus of a variable and assigns the result.</li>
    </ul>
    <div style={{
 margin: "20px auto",
  maxWidth: "100%",
   }}>
  <img src="https://www.theknowledgeacademy.com/_files/images/Sample_Code_for_Arithmetic_Operators.png" style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }} />
   </div>
   </div>
  )
}

export function AssignementOperators() {
  return(
    <div style={{
    
      maxWidth: "100%",
      height: "auto",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",

      color:"white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      scrollBehavior:"smooth",
      fontSize: "1.2rem",
    }}> 
    <h2>what is Assignment Operators How to use  </h2>
    <p>Assignment operators are used to assign values to variables. The most common assignment operator is the equals sign (=), but there are several shorthand assignment operators as well:</p>
    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
      <li>Equal:<strong>=:</strong>equating one variable to another</li>
      <li>Plus Equal to:<strong>+=:</strong> Adds a value to a variable and assigns the result.</li>
      <li>Minus Equal to:<strong>-=:</strong> Subtracts a value from a variable and assigns the result.</li>
      <li>Into Equal to:<strong>*=:</strong> Multiplies a variable by a value and assigns the result.</li>
      <li>Divide Equal to:<strong>/=:</strong> Divides a variable by a value and assigns the result.</li>
      <li>Modulus Equal to:<strong>%=:</strong> Calculates the modulus of a variable and assigns the result.</li>
    </ul>
    <div style={{
 margin: "20px auto",
  maxWidth: "100%",
   }}>
  <img src="https://www.theknowledgeacademy.com/_files/images/Sample_Code_for_Arithmetic_Operators.png" style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }} />
   </div>
   </div>
  )
}
export function ComparisonOperator() {
  return (
    <div style={{
  
      maxWidth: "100%",
      height: "auto",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",

      color:"white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      scrollBehavior:"smooth",
      fontSize: "1.2rem",
    }}>
      <h2>Comparison Operators</h2>
      <p>Comparison operators are used to compare two values and return a boolean result (true or false). Here are the most common comparison operators in JavaScript:</p>
      <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
        <li><strong>Equal to (==):</strong> Checks if two values are equal.</li>
        <li><strong>Strict Equal to (===):</strong> Checks if two values are equal and of the same type.</li>
        <li><strong>Not Equal to (!=):</strong> Checks if two values are not equal.</li>
        <li><strong>Strict Not Equal to (!==):</strong> Checks if two values are not equal or not of the same type.</li>
        <li><strong>Greater than ({`>`}):</strong> Checks if one value is greater than another.</li>
        <li><strong>Less than ({`<`}):</strong> Checks if one value is less than another.</li>
        <li><strong>Greater than or Equal to ({`>=`}):</strong> Checks if one value is greater than or equal to another.</li>
        <li><strong>Less than or Equal to ({`<=`}):</strong> Checks if one value is less than or equal to another.</li>
      </ul>
      <div style={{
        margin: "20px auto",
        maxWidth: "100%",
        height: "auto",
        backgroundColor:"#333",

        color:"white",
      }}
        
        >
        <img style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }} src="https://www.theknowledgeacademy.com/_files/images/Code_Featuring_Comparison_Operators.png" alt="" />
      </div>
     </div>
  );
}

 export  function LogicalOperator(){
   return(
    <div style={{

      maxWidth: "100%",
      height: "auto",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",

      color:"white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      scrollBehavior:"smooth",
      fontSize: "1.2rem",
      
    }}>
      <h2>Logical Operators</h2>
      <p>Logical operators are used to combine or negate boolean values. Here are the most common logical operators in JavaScript:</p>
      <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
        <li><strong>AND (&&):</strong> Returns true if both operands are true.</li>
        <li><strong>OR (||):</strong> Returns true if at least one operand is true.</li>
        <li><strong>NOT (!):</strong> Negates the boolean value of the operand.</li>
      </ul>
      <div style={{
        margin: "20px auto",
        maxWidth: "100%",
        height: "auto",
      }}>
        <img style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }} src="https://www.theknowledgeacademy.com/_files/images/Code_Featuring_Logical_Operators.png" alt="" />
        </div>
    </div>
   )
 }
 export function BitwiseOperator(){
   return(
    <div style={{
      
      maxWidth: "100%",
      height: "auto",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px", 
      backgroundColor:"#333",

      color:"white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      scrollBehavior:"smooth",
      fontSize: "1.2rem",


    }}>
      <h2>Bitwise Operators</h2>
      <p>Bitwise operators are used to perform operations on binary representations of numbers. Here are the most common bitwise operators in JavaScript:</p>
      <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
        <li><strong>AND (&):</strong> Performs a bitwise AND operation.</li>
        <li><strong>OR (|):</strong> Performs a bitwise OR operation.</li>
        <li><strong>XOR (^):</strong> Performs a bitwise XOR operation.</li>
        <li><strong>NOT (~):</strong> Performs a bitwise NOT operation.</li>
        <li><strong>Left Shift ({`<<`}):</strong> Shifts bits to the left.</li>
        <li><strong>Right Shift ({`>>`}):</strong> Shifts bits to the right.</li>
      </ul>
      <div style={{
        margin: "20px auto",
        maxWidth: "100%",
        height: "auto",
      }}>
        <img style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }} src="https://www.theknowledgeacademy.com/_files/images/Code_Featuring_Bitwise_Operators.png" alt="" />
      </div>
    </div>
   )
 }
  export function TernaryOperator(){
    return(
      <div style={{
     
               maxWidth: "100%",
               height: "auto",
    
               boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
               padding: "20px",  
               backgroundColor:"#333",

               color:"white",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                scrollBehavior:"smooth",
                fontSize: "1.2rem",


}}>
 <h2>Conditional (Ternary) Operator</h2>
 <p>The conditional (ternary) operator is a shorthand way to write if-else statements. It takes three operands: a condition, a value if true, and a value if false.</p>
 <p>Syntax:</p>
 <p>condition ? valueIfTrue : valueIfFalse;</p>
 <p>Example:</p>
 <p>const age = 18;</p>
 <p>const canVote = age >= 18 ? "Yes" : "No";</p>
 <p>console.log(canVote); // Output: "Yes"</p>
 <p>In this example, the canVote variable is assigned "Yes" if age is greater than or equal to 18, otherwise it is assigned "No".</p>
 <div style={{
   margin: "20px auto",
   maxWidth: "100%",
   height: "auto",
 }}>
   <img style={{
     maxWidth: "100%",
     height: "auto",
     borderRadius: "10px",
     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
   }} src="https://www.theknowledgeacademy.com/_files/images/Code_Featuring_Conditional_Operator.png" alt="" />

   </div>
</div>
    )
  }

  export function ConditionalStatement(){
    return(
                  <div style={{
             
                    maxWidth: "100%",
                    height: "auto",
              
                    boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    backgroundColor:"#333",

                    color:"white",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                    scrollBehavior:"smooth",
                    fontSize: "1.2rem",
                  }}>
                    <h2> Conditional Statement</h2>
                    <p>Conditional statements are used to perform different actions based on different conditions. The most common conditional statements in JavaScript are if, else if, and else.</p>
                       <h1>if Statement</h1>
                        <HtmlEditorjs2/>
                        <h1>if-else Statement</h1>
                        <HtmlEditorjs3/>
                        <h1>else-if Statement</h1>
                        <HtmlEditorjs4/>
                         <h1>Ternary Statement</h1>
                        <HtmlEditorjs5/>
      
      
                  </div>
    )
  }

   export function Loops(){
    return(
                   <div style={{
           
                    maxWidth: "100%",
                    height: "auto",
               
                    boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    backgroundColor:"#333",

                    color:"white",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                    scrollBehavior:"smooth",
                    fontSize: "1.2rem",

                   }}>
                    <h1>Loops</h1>
                    <p>Loops are used to execute a block of code repeatedly until a specified condition is met. JavaScript supports several types of loops:</p>
                    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                      <li><strong>for loop:</strong> Executes a block of code a specified number of times.</li>
                      <li><strong>while loop:</strong> Executes a block of code as long as a specified condition is true.</li>
                      <li><strong>do while loop:</strong> Executes a block of code once, and then repeats the loop as long as a specified condition is true.</li>
                    </ul>
                    <h1>Example</h1>
                <HtmlEditorjs6/>
                   </div>
    )
   }

   export function String(){
     return(
       <div style={{
                 
                    maxWidth: "100%",
                    height: "auto",
              
                    boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    backgroundColor:"#333",

                    color:"white",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                    scrollBehavior:"smooth",
                    fontSize: "1.2rem",

                   }}>
                    <h1>Strings</h1>
                    <p>Strings are used to represent text in JavaScript. They can be created using single quotes (' '), double quotes (" "), or backticks (` `).</p>
                    <p>Example:</p>
                    <p>const greeting = "Hello, world!";</p>
                    <p>console.log(greeting); // Output: Hello, world!</p>
                    <p>Strings have several built-in methods for manipulation, such as:</p>
                    <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                      <li><strong>length:</strong> Returns the length of the string.</li>
                      <li><strong>toUpperCase():</strong> Converts the string to uppercase.</li>
                      <li><strong>toLowerCase():</strong> Converts the string to lowercase.</li>
                      <li><strong>substring(start, end):</strong> Returns a substring from the string.</li>
                      <li><strong>indexOf(substring):</strong> Returns the index of the first occurrence of a substring.</li>
                      <li><strong>replace(old, new):</strong> Replaces a substring with a new value.</li>
                      <li><strong>trim():</strong> Removes whitespace from both ends of the string.</li>
                      <li><strong>split(separator):</strong> Splits the string into an array of substrings.</li>
                      <li><strong>charAt(index):</strong> Returns the character at a specified index.</li>
                    </ul>
                     <h1>Example</h1>
                     <HtmlEditorjs7/>
                   </div>
     )


   }
    
   export function TemplateLeteral(){
    return(
      <div style={{
     
        maxWidth: "100%",
        height: "auto",
        scrollBehavior:"smooth",
        fontSize: "1.2rem",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        textAlign: "center",
        boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        backgroundColor:"#333",

        color:"white",
      }}>
        <h1>Template Literals</h1>
        <p>Template literals are a way to create multi-line strings and embed expressions within strings. They are enclosed by backticks (` `).</p>
        <p>Example:</p>
        <p>const name = "John";</p>
        <p>const greeting = `Hello, ${name}!`; // Output: Hello, John!</p>
        <p>console.log(greeting);</p>
        <p>Template literals can also be used for multi-line strings:</p>
        <p>const message = `This is a multi-line string.</p>
        <p>It can span multiple lines.`;</p>
        <p>console.log(message);</p>


      </div>
    )
   }
   export function Arrays(){
    return(
       <div style={{
                
                      maxWidth: "100%",
                      height: "auto",
                   
                      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                      padding: "20px",
                      backgroundColor:"#333",

                      textAlign: "center",
                      fontFamily: "Arial, sans-serif",
                      lineHeight: "1.6",
                      scrollBehavior:"smooth",
                      fontSize: "1.2rem",
                      color:"white",
                     }}>
                      <h1>Arrays</h1>
                      <p>Arrays are used to store multiple values in a single variable. They can hold values of different data types and can be created using square brackets ([ ]).</p>
                      <p>Example:</p>
                      <p>const fruits = ["apple", "banana", "orange"];</p>
                      <p>console.log(fruits); // Output: ["apple", "banana", "orange"]</p>
                      <p>Arrays have several built-in methods for manipulation, such as:</p>
                      <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                        <li><strong>length:</strong> Returns the length of the array.</li>
                        <li><strong>push(value):</strong> Adds a value to the end of the array.</li>
                        <li><strong>pop():</strong> Removes the last value from the array.</li>
                        <li><strong>shift():</strong> Removes the first value from the array.</li>
                        <li><strong>unshift(value):</strong> Adds a value to the beginning of the array.</li>
                        <li><strong>splice(start, deleteCount, item1, item2, ...):</strong> Adds or removes items from an array.</li>
                        <li><strong>slice(start, end):</strong> Returns a shallow copy of a portion of an array.</li>
                        <li><strong>indexOf(value):</strong> Returns the index of the first occurrence of a value.</li>
                        <li><strong>join(separator):</strong> Joins all elements of an array into a string.</li>
                      </ul>
                      <h1>Example</h1>
                      <HtmlEditorjs8/>
               
                      <p>In this example, we create an array of fruits and demonstrate various array methods.</p>   
                                
      
      
                     </div>
      
    )
   }

    export function Loopoverarray(){
      return(
        
                        <div style={{
                       
                          maxWidth: "100%",
                          height: "auto",
                          scrollBehavior:"smooth",
                          fontSize: "1.2rem",
                          fontFamily: "Arial, sans-serif",
                          lineHeight: "1.6",
                          textAlign: "center",
                          boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                          padding: "20px",
                          backgroundColor:"#333",

                          color:"white",
                        }}>
                          <h1>Looping over an Array</h1>
                          <p>There are several ways to loop over an array in JavaScript:</p>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li><strong>for loop:</strong> A traditional for loop.</li>
                            <li><strong>forEach():</strong> A method that executes a provided function once for each array element.</li>
                            <li><strong>for...of:</strong> A modern way to iterate over iterable objects.</li>
                            <li><strong>for...in:</strong> Used to iterate over the properties of an object.</li>
                          </ul>
                          <h1>Example</h1>
                          <HtmlEditorjs9/>
                          <p>In this example, we demonstrate how to loop over an array using different methods.</p>
        
                        </div>
      )
    }

     export function Object(){
       return(
        <div style={{
                 
                          maxWidth: "100%",
                          height: "auto",
                          scrollBehavior:"smooth",
                            textAlign:"center",
                          fontSize: "1.2rem",
                          fontFamily: "Arial, sans-serif",
                          lineHeight: "1.6",

                          boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                          padding: "20px",
                          backgroundColor:"#333",

                          color:"white",
                         }}>
                          <h1>Objects</h1>
                          <p>Objects are used to store collections of data and more complex entities. They are created using curly braces ({`{}`}) and consist of key-value pairs.</p>
        
                          <h2>Example</h2>
                           <HtmlEditorjs10/>
                          <p>In this example, we create an object representing a person with properties like name, age, and city. We also demonstrate how to access and modify object properties.</p>
                          <p>Objects can also have methods, which are functions associated with the object:</p>
                                    
                         </div>
       )
     }

     export function ObjectMethod(){
      return(


        <div style={{
                 
                          maxWidth: "100%",
                          height: "auto",
                          scrollBehavior:"smooth",
                            textAlign:"center",
                          fontSize: "1.2rem",
                          fontFamily: "Arial, sans-serif",
                          lineHeight: "1.6",

                          boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                          padding: "20px",
                          backgroundColor:"#333",

                          color:"white",
                         }}>
                          <h1>Object Methods</h1>
                          <p>Objects can have methods, which are functions associated with the object. Methods can be used to perform actions on the object's properties.</p>
        
                          <h2>Example</h2>
                           <HtmlEditorjs11/>
                          <p>In this example, we create an object representing a person with a method that returns a greeting message.</p>
                                    
                         </div>
      )
    }

    export function DOM(){
      return(
         <div style={{
                      
                            maxWidth: "100%",
                            height: "auto",
                            scrollBehavior:"smooth",
                              textAlign:"center",
                            fontSize: "1.2rem",
                            fontFamily: "Arial, sans-serif",
                            lineHeight: "1.6",
                            boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                            backgroundColor:"#333",

                            color:"white",
                          }}> 
                            <h1>DOM(Document Objects Model)</h1>
                            <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content and structure of a webpage.</p>
                            <p>JavaScript can be used to interact with the DOM, enabling dynamic updates to the content, structure, and style of a webpage.</p>
                            <h2>Example</h2>
                            <HtmlEditorjs12/>
                            <p>In this example, we demonstrate how to select elements from the DOM and modify their content and style using JavaScript.</p>
                            <p>We can also create new elements and append them to the DOM:</p>
                        
        
                          </div>
      )
    }

     export function Events(){
       return(
          <div style={{
                          
                                   maxWidth: "100%",
                                   height: "auto",
                                    scrollBehavior:"smooth",
                                      textAlign:"center",
                                    fontSize: "1.2rem",
                                    fontFamily: "Arial, sans-serif",
                                    lineHeight: "1.6",

                                   boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                                   padding: "20px",
                                   backgroundColor:"#333",

                                   color:"white",
                          }} >
                            <h1>Events And Event Listener</h1>
                            <p>Events are actions or occurrences that happen in the browser, such as clicks, key presses, and page loads. JavaScript can be used to respond to these events by attaching event listeners to elements.</p>
                            <p>Event listeners are functions that are executed when a specific event occurs on a specified element.</p>
                            <h2>Example</h2>
                            <HtmlEditorjs13/>
                            <p>In this example, we demonstrate how to attach an event listener to a button and respond to the click event by changing the content of a paragraph.</p>
                            <p>We can also remove event listeners:</p>
                          </div>
       )
     }

     export function Map(){
        return(
          <div style={{
                            
                                    maxWidth: "100%",
                                    height: "auto",
                                      scrollBehavior:"smooth",
                                        textAlign:"center",
                                      fontSize: "1.2rem",
                                      fontFamily: "Arial, sans-serif",
                                      lineHeight: "1.6",
  
                                    boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                                    padding: "20px",
                                    backgroundColor:"#333",
                                    color:"white",
                            }} >
                              <h1>Map</h1>
                              <p>The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.</p>
                              <p>Example:</p>
                              <HtmlEditorjs14/>
                              <p>In this example, we create a Map object and demonstrate how to add, retrieve, and delete key-value pairs.</p>
                            </div>
        )
     }

    export function ForEachmethod(){
      return(
          <div style={{
                 
                          maxWidth: "100%",
                          height: "auto",
                          scrollBehavior:"smooth",
                            textAlign:"center",
                          fontSize: "1.2rem",
                          fontFamily: "Arial, sans-serif",
                          lineHeight: "1.6",

                          boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                          padding: "20px",
                          backgroundColor:"#333",
                          color:"white",
                        }}>
                         <h1>ForEach Method</h1>
                          <p>The forEach() method executes a provided function once for each array element. It is commonly used to iterate over arrays and perform actions on each element.</p>
                          <p>Unlike the map() method, forEach() does not return a new array; it simply executes the provided function for each element.</p>
                          <h2>Example</h2>
                          <HtmlEditorjs15/>
                          <p>In this example, we demonstrate how to use the forEach() method to log each element of the array to the console.</p>
                         </div> 
      )
    } 
  export function ObjectsandClasses(){
  return(
    <div style={{
      
      maxWidth: "100%",
      height: "auto",
      scrollBehavior:"smooth",
        textAlign:"center",
      fontSize: "1.2rem",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",
      color:"white",
      }}> 
      <h1>Objects and Classes</h1>
      <p>In JavaScript, objects are collections of key-value pairs, while classes are blueprints for creating objects with shared properties and methods.</p>
      <p>Classes provide a way to create multiple instances of objects with similar structure and behavior.</p>
      <h2>Example</h2>
      <HtmlEditorjs16/>
      <p>In this example, we define a class called Person with properties and methods. We create instances of the class and demonstrate how to access their properties and methods.</p>
      <p>Classes can also inherit properties and methods from other classes using the extends keyword:</p>
      </div> 
  )
  }


   export function CallbacksPromises(){
     return(
      <div style={{
                               
      maxWidth: "100%",
      height: "auto",
      scrollBehavior:"smooth",
        textAlign:"center",
      fontSize: "1.2rem",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#222",
      color:"#F8F8F2",
                           
                           }}>
                           <h1>Callbacks and Promises</h1>
                           <h2>what this Chapter is About </h2>
                           <div style={{
                              margin: "20px auto",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "10px",
                              boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                              padding: "20px",
                              color:"white",
                              backgroundColor:"#333",
                           }}>
                            <ul style={{
                              listStyle:"none",
                              color:"white",
                              fontSize:"1.2rem",
                              padding:"0",
                
                              margin:"0",
                            }}>
                              <li>Callbacks</li>
                              <li>Promises</li>
                              <li>Promise chaining</li>
                              <li>Async/Await</li>
      
                            </ul>
                           </div>
                             <div style={{
                              margin: "20px auto",
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "10px",
                              boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
                              padding: "20px",
                               color:"white",
                              backgroundColor:"#333",
      
                             }} >
                              <h1>Callbacks</h1>
                              <p>A callback is a function that is passed as an argument to another function and is executed after the completion of that function.</p>
                              <p>Callbacks are commonly used for handling asynchronous operations, such as API calls or event handling.</p>
                               <h1>Promises</h1>
                              <p>A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>
                              <p>Promises can be in one of three states: pending, fulfilled, or rejected.</p>
                              <h1>promise chaining</h1>
                              <p>Promise chaining allows you to execute multiple asynchronous operations in sequence, where each operation depends on the result of the previous one.</p>
                              <p>You can chain multiple .then() methods to handle the results of each promise in the sequence.</p>
                              <h1>Async/Await</h1>
                              <p>Async/await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous manner.</p>
                              <p>By using the async keyword before a function, you can use the await keyword inside that function to pause execution until the promise is resolved.</p>
                              <h1>Example</h1>
                              <p>In this example, we demonstrate how to use callbacks, promises, and async/await to handle asynchronous operations.</p>
                              <p>We create a function that simulates an asynchronous operation using setTimeout and returns a promise.</p>
                              <p>We then use callbacks, promise chaining, and async/await to handle the result of the asynchronous operation.</p>
                              <HtmlEditorjs17/>
                              </div>     
                        </div>
     )
   }

   export function  API(){
    return(
      
                         <div style={{
                                                         
      maxWidth: "100%",
      height: "auto",
      scrollBehavior:"smooth",
        textAlign:"center",
      fontSize: "1.2rem",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",

      boxShadow: "0 0px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor:"#333",
      color:"#F8F8F2",
                          
                 
                         }}>
                          <h1>API Fetch</h1>
                          <p>APIs (Application Programming Interfaces) allow different software applications to communicate with each other. In JavaScript, you can use the Fetch API to make network requests to retrieve data from APIs.</p>
                          <p>The Fetch API provides a modern way to make HTTP requests and handle responses using promises.</p>
                          <h2>Example</h2>
                          <HtmlEditorjs18/>
                          <p>In this example, we demonstrate how to use the Fetch API to make a GET request to an API endpoint and handle the response.</p>
                          <p>We also show how to handle errors that may occur during the fetch operation.</p>
                         </div>
    )
   } 