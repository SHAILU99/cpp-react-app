
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchPost } from "../../utils/api";
import { Post } from "../../types/post";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      fetchPost(Number(id)).then(setPost);
    }
  }, [id]);

  if (!post) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Post #{post.id}</h1>
      <input
        className="w-full text-xl font-semibold mb-4 p-2 border"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <p className="mb-6 whitespace-pre-line">{post.body}</p>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="font-semibold text-lg">Basic Analysis</h2>
        <ul className="list-disc list-inside">
          <li>Word count: {post.body.split(/\s+/).length}</li>
          <li>Sentiment: Coming soon</li>
        </ul>
      </div>
    </div>
  );
}
