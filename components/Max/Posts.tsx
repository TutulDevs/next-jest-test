import { useEffect, useState } from "react";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        setPosts(data);

        setIsLoading(false);
      } catch (err) {
        // console.log("invalid response!");
        setPosts([]);
        setIsLoading(false);
      }
    };

    fetchPosts();
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
