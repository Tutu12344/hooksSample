import React, { useState, useEffect } from "react";
import axios from "axios";
const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setPosts(res.data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [clicked]);

  const handlerClicked = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <br />
      <button type="button" onClick={handlerClicked}>
        Get Post
      </button>
      {posts.title}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ApiFetch;
