import { Suspense } from "react";

export default async function Blog() {
  return (
    <>
      <div>Hello Blog</div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicContent />
      </Suspense>
    </>
  );
}

async function DynamicContent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}
