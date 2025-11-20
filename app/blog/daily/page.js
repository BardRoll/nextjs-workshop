import Image from "next/image";
import { headers } from "next/headers";

export default async function Daily() {
  const headersList = headers();
  const host = headersList.get("host");
  const response = await fetch("http://localhost:3000/api/blog");
  const posts = await response.json();
  return (
    <>
      <div>Hello Blog Daily</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
      <img src="/file.svg" alt="file logo" width="150" />
      <Image src="/globe.svg" alt="globe logo" width="150" height="150" />
    </>
  );
}
