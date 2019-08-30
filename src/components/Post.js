import React, { useState, useEffect } from "react";
import axios from "axios";
const Post = props => {
  //console.log("props", props);
  console.log("hello");
  const [indiPost, setindiPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      let id = props.match.params.post_id;
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setindiPost(res.data);
      } catch (e) {
        console.log("error", e);
      }
    };

    getPost();
  }, []);
  console.log("indi post", indiPost);
  return (
    <div>
      <h1>Post Page</h1>
      {indiPost.title}
      {indiPost.title}
    </div>
  );
};

export default Post;
