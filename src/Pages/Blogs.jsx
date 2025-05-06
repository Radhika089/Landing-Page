import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      description:
        "Artificial Intelligence is changing the landscape of web development. Learn how it's being integrated into websites and apps.",
      id: 1,
    },
    {
      title: "Top Front-End Frameworks for 2025",
      description:
        "The front-end development world is constantly evolving. Find out which frameworks are dominating and why you should use them.",
      id: 2,
    },
    {
      title: "How to Build Responsive Websites",
      description:
        "Responsive design is crucial for a great user experience. Here's a guide on how to create websites that work on any device.",
      id: 3,
    },
    {
      title: "The Importance of UX/UI in Web Design",
      description:
        "Great UX/UI design isn't just pretty; it makes your website functional and user-friendly. Here's why it matters.",
      id: 4,
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 border border-white/20 rounded-xl p-6 hover:bg-black/20 transition-all duration-300 group"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {post.title}
              </h2>
              <p className="text-white/70 mb-4">{post.description}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-[#8c44ff] hover:text-[#a369ff] transition duration-300 font-medium group-hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
