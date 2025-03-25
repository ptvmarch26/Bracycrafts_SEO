import { blogs } from "@/data/MockBlog";

interface BlogDetailProps {
  params: { slug: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <p className="text-center text-red-500">Bài viết không tồn tại</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-2">{blog.content}</p>
    </div>
  );
}
