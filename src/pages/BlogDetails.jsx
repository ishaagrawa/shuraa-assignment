import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
          <Link to="/blog" className="text-blue-700 hover:underline">Back to Blogs</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{blog.title}</h1>
        <div className="text-sm text-gray-500 mb-6">By {blog.author} &middot; {blog.date}</div>
        <div className="text-gray-800 mb-8 whitespace-pre-line">{blog.content}</div>
        <Link to="/blog" className="text-blue-700 hover:underline">&larr; Back to Blogs</Link>
      </div>
    </main>
  );
};

export default BlogDetails;
