"use client";

import { use, useEffect, useState } from "react";

async function getBlog() {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  return reponse.json();
}

export default function Post() {
  const [blog, setBlog] = useState([]);
  const initBlog = async () => {
    const blogs = await getBlog();
    setBlog(blogs);
  };
  useEffect(() => {
    initBlog();
  }, []);
  console.log(blog);

  return (
    <>
      <div>Hello post</div>
      <ul>
        {blog.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}
