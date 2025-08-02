import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs';

const categories = Array.from(new Set(blogs.map((b) => b.category)));
const trending = blogs.filter((b) => b.trending);

const BlogSidebar = () => (
  <aside className="space-y-8">
    <div>
      <h3 className="text-lg font-bold text-blue-700 mb-2">Categories</h3>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li key={cat}>
            <span className="text-gray-700">{cat}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold text-blue-700 mb-2">Trending Posts</h3>
      <ul className="space-y-2">
        {trending.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`} className="text-blue-700 hover:underline">
              {blog.title}
            </Link>
            <div className="text-xs text-gray-500">{blog.date}</div>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default BlogSidebar;
