import  { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";  // Import component
import { Footer } from "./footer";
import Content from "./Content";
import { Course} from "./Course"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom";  // Fixed import
import NEXT from "./NEXT";
import Navbar2 from "./Header";
import { CSS } from "./CSS";
import { Html } from "./Html";
import Nav from "./Navbar";
import MongoDB from "./MongoDB";
import ExpressJS from "./ExpressJS";
import { JAVASCRIPT } from "./JS";
import { REACT } from "./REACTJS";
import {ArithmeticOperators,Loopoverarray, Map, Arrays, AssignementOperators, BitwiseOperator, ComparisonOperator, ConditionalStatement, Datatype, LogicalOperator, Loops, Operator, String, TemplateLeteral, TernaryOperator, Variable, Object, ObjectMethod, DOM, Events, ForEachmethod, ObjectsandClasses, CallbacksPromises, API } from "./Text2";
import Project from "./projects";

function App(){
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return(
    <div className="App">
      {loading ? (
        <LoadingScreen/>
      ) : (
        <Nav/>
      )}
      
      <>  
        <Navbar2/>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/Course" element={<Course/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/CSS" element={<CSS/>} />
          <Route path="/Html" element={<Html/>} />
          <Route path="/JAVASCRIPT" element={<JAVASCRIPT/>} />
          <Route path="/REACT" element={<REACT/>} />
          <Route path="/NEXT" element={<NEXT/>} />
          <Route path="/MongoDB" element={<MongoDB/>} />
          <Route path="/ExpressJS" element={<ExpressJS/>} />
          <Route path="/Variable" element={<Variable/>} />
          <Route path="/Datatype" element={<Datatype/>} />
          <Route path="/Operator" element={<Operator/>} />
          <Route path="/ArithmeticOperator" element={<ArithmeticOperators/>} />
          <Route path="/AssignmentOperator" element={<AssignementOperators/>} />
          <Route path="/ComparisonOperator" element={<ComparisonOperator/>} />
          <Route path="/LogicalOperator" element={<LogicalOperator/>} />
          <Route path="/BitwiseOperator" element={<BitwiseOperator/>} />
          <Route path="/TernaryOperator" element={<TernaryOperator/>} />
          <Route path="/ConditionalStatement" element={<ConditionalStatement/>} />
          <Route path="/Loops" element={<Loops/>} />      
          <Route path="/String" element={<String/>} />         
          <Route path="/TemplateLeteral" element={<TemplateLeteral/>} /> 
          <Route path="/Arrays" element={<Arrays/>} />   
          <Route path="/Loopoverarray" element={<Loopoverarray/>} />
          <Route path="/Object" element={<Object/>} />
          <Route path="/ObjectMethod" element={<ObjectMethod/>} />
          <Route path="/DOM" element={<DOM/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Map" element={<Map/>} />
          <Route path="/ForEachmethod" element={<ForEachmethod/>} />
          <Route path="/ObjectsandClasses" element={<ObjectsandClasses/>}/>
          <Route path="/CallbacksPromises" element={<CallbacksPromises/>}/>
          <Route path="/API" element={<API/>}/>
          <Route path="/Contact" element={<Contact/>} />  {/* Fixed path */}
        </Routes>
        <Footer/>
      </>
    </div> 
  )
}
export default App
