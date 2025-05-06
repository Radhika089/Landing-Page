import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Simulate fetching blog data by ID
    const posts = [
      {
        id: 1,
        title: "The Future of AI in Web Development",
        content:
          "Artificial Intelligence (AI) is becoming a game-changer in the web development space. Developers are leveraging AI tools to optimize workflows, automate testing, and enhance the overall user experience. This article explores how AI is being integrated into the web development process and its potential impact on the industry.",
      },
      {
        id: 2,
        title: "Top Front-End Frameworks for 2025",
        content:
          "As technology continues to evolve, front-end frameworks are also rapidly changing. 2025 is set to be a year where some of the most powerful frameworks will dominate, with new tools and technologies aimed at improving performance, user experience, and developer productivity.",
      },
      {
        id: 3,
        title: "How to Build Responsive Websites",
        content:
          "Responsive design is more than just making websites look good on mobile devices. It's about creating a seamless experience across all screen sizes. In this post, we'll cover key techniques and tools for building responsive websites that perform well on all devices.",
      },
      {
        id: 4,
        title: "The Importance of UX/UI in Web Design",
        content:
          "User Experience (UX) and User Interface (UI) design are often the make-or-break factors in determining the success of a website or application. In this blog, we’ll dive into why UX/UI design matters, how it impacts your users, and tips for optimizing your designs for better engagement.",
      },
    ];

    // Find the post by ID
    const post = posts.find((post) => post.id === parseInt(id));
    setBlogPost(post);
  }, [id]);

  if (!blogPost) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/20 rounded-xl p-8 backdrop-blur-md">
          <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
          <p className="text-white/70 mb-6">{blogPost.content}</p>

          <Link
            to="/blogs"
            className="text-[#8c44ff] hover:text-[#a369ff] transition duration-300 font-medium"
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
