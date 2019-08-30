import React, { useState, useEffect } from "react";

const Post = props => {
  //console.log("props", props);
  console.log("hello");
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(props.match.params.post_id);
  }, [id]);

  return (
    <div>
      <h1>Post Page</h1>
      {id}
    </div>
  );
};

export default Post;
