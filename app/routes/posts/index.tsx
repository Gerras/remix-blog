import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({
    posts: await getPosts(),
  });
};

const Posts = () => {
  const { posts } = useLoaderData<typeof loader>();
  console.log(posts);
  return (
    <main>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <ul>
        {posts.map((posts) => (
          <li key={posts.slug}>
            <Link to={posts.slug} className="text-blue-600 underline">
              {posts.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;
