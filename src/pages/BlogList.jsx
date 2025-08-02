import React from 'react';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';
import BlogSidebar from '../components/BlogSidebar';

const BlogList = () => {
  return (
    <main className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Blogs</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 grid gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="hidden md:block">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogList;
