import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPost(res.data);
      } catch (e) {
        console.log("error", e);
      }
    };
    console.log(getPost);
    getPost();
  }, []);
  let postList = posts.map(post => {
    return (
      <ul key={post.id}>
        <Link to={`/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      </ul>
    );
  });
  return (
    <div>
      <h1>Home</h1>
      {postList}
    </div>
  );
};
export default Home;
