import React from "react";
import "./App.css";
  
import Posts from "./components/Posts/Posts";
  
const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Blog Webpage App using React Js, CSS, HTML 
      </h1>
      <h4>Platforms to upskill online with free certifications</h4>
      <Posts />
    </div>
  );
};
  
export default App;