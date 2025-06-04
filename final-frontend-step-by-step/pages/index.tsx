
import { useEffect, useState } from "react";
import { fetchPosts } from "../utils/api";
import { Post } from "../types/post";
import PostTable from "../components/PostTable";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700">Post Dashboard</h1>
      <PostTable posts={posts} />
    </div>
  );
}
