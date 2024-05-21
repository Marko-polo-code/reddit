import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const post = useSelector((state) => state.post.post);

  return (
    <div className="result">
      {post.map((item) => (
        <div key={item.id} className="post">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;
