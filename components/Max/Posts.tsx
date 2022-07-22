import { useEffect, useState } from "react";
import { getPostsApi } from "__test__/api";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsApi().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.length > 0 ? (
          posts.map((post: PostType) => <li key={post.id}> {post.title}</li>)
        ) : (
          <p>No Items to show!</p>
        )}
      </ul>
    </div>
  );
};
