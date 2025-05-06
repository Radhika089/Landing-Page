import React from "react";

const ChangeLog = () => {
  const changelogEntries = [
    {
      version: "v1.0.0",
      date: "2025-05-01",
      features: [
        "Initial release with landing page.",
        "Basic layout and structure.",
        "Responsive design support.",
        "Added Hero section with call-to-action.",
      ],
    },
    {
      version: "v1.1.0",
      date: "2025-05-05",
      features: [
        "Updated product images on the homepage.",
        "Improved mobile responsiveness.",
        "Added footer with links to social media.",
        "Fixed minor CSS bugs.",
      ],
    },
    {
      version: "v1.2.0",
      date: "2025-05-10",
      features: [
        "Introduced new Blog section.",
        "Added a contact form with success message.",
        "Enhanced UI/UX for smoother navigation.",
        "Updated developer section with new resources.",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12">
          Change Log
        </h1>
        <p className="text-lg text-white/70 mb-8">
          Keep up with the latest updates, new features, and bug fixes in the
          application.
        </p>

        {/* Changelog Entries */}
        <div className="space-y-8">
          {changelogEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-black/60 p-8 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-semibold text-white">
                {entry.version}
              </h2>
              <p className="text-white/70 mb-4">{entry.date}</p>
              <ul className="space-y-2 text-white/70">
                {entry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangeLog;
