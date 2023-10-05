import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idfromButton, setIdFromButton] = useState(1);

 
 const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idfromButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch post</button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
};

export default DataFetching;
