import Link from "next/link";
import { blogs } from "@/data/MockBlog";

export default function BlogList() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-4">
        {blogs.map((blog) => (
          <li key={blog.slug} className="border p-2 my-2">
            <Link href={`/blog/${blog.slug}`}>
              <span className="text-blue-600 cursor-pointer">{blog.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
