
import Link from "next/link";
import { Post } from "../types/post";

export default function PostTable({ posts }: { posts: Post[] }) {
  return (
    <table className="min-w-full border mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">ID</th>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="border-t">
            <td className="p-2">{post.id}</td>
            <td className="p-2">{post.title}</td>
            <td className="p-2">
              <Link href={`/post/${post.id}`} className="text-blue-600 underline">View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
