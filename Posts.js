import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
  
const Posts = () => {
  const blogPosts = [
    {
      title: "Khan Academy",
      body: `Khan Academy is a website that was established with the mission to provide
       a great world-class education for anyone, anywhere. This is one of the most
       commonly used websites by students worldwide to upskill their academic game.
       You can find numerous lectures, study materials, and other upskilling tools. 
       This platform is highly beneficial to students in schools in particular as well. 
       This platform is most used by students for their SAT exam preparations.`,
      author: "@Khan Academy ",
      imgUrl:
        "https://i0.wp.com/www.researchstash.com/wp-content/uploads/2018/02/Khan-Academy.jpg?resize=1280%2C910&ssl=1",
    },
   {
      title: "edX",
      body: `edX is an online learning platform that was founded by MIT professors with the 
      vision of having a platform that would offer their courses online to anyone and anywhere for free.
     This website has hundreds of free courses which are designed with the reference 
      and help of reputed and renowned universities worldwide
       like Harvard, Berkeley, MIT, Boston University, Australian National University, and more. `,
      author: "@edX",
      imgUrl:
        "https://th.bing.com/th/id/OIP.QcyTs34EJtoguKQbwep4aQHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "YouTube",
      body: `Youtube is probably one of the most used media platforms online. 
      There are thousands of YouTubers and billions of viewers on this app.
      Even though this app is popular for entertainment purposes, you can find courses 
      from professionals for free through video series.
      Any area in your life you want to upskill, you will most often not find videos 
      about it if you press the search button.  `, 
      author: "@Google",
      imgUrl:
        "https://th.bing.com/th/id/OIP._GtGNuF1vwgrzARaUkw-dwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;