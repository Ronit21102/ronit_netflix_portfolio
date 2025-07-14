import React from "react";
import "./Blogs.css";
import { FaMedium, FaDev } from "react-icons/fa";

const blogs: any[] = [];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">
        A collection of my thoughts and tutorials on software development.
      </p>
      <div
        className="blogs-placeholder"
        style={{
          textAlign: "center",
          margin: "2rem 0",
          fontSize: "1.25rem",
          color: "#e50914",
          fontWeight: "bold",
          background: "rgba(0,0,0,0.05)",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <p>Soon, my blogs will appear here!</p>
      </div>
      {blogs.length > 0 && (
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="blog-icon animated-icon">{blog.icon}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
