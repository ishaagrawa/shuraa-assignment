import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => (
  <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
    <h2 className="text-xl font-bold text-blue-800 mb-2">
      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
    </h2>
    <p className="text-gray-700 mb-4 flex-1">{blog.excerpt}</p>
    <div className="text-sm text-gray-500 mb-2">By {blog.author} &middot; {blog.date}</div>
    <Link to={`/blog/${blog.id}`} className="text-blue-700 font-semibold hover:underline mt-auto">Read More &rarr;</Link>
  </div>
);

export default BlogCard;
