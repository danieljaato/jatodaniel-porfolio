const articles = [
  {
    title: "Why I Choose React for Modern Web Development",
    description:
      "What I've learned while building modern web applications with React, reusable components, and responsive design.",
    date: "September 2026",
    readTime: "5 min read",
    category: "React",
    url: "https://medium.com/@danieljato505",
  },
  {
    title: "My Journey Into Web Development",
    description:
      "Lessons, challenges, and experiences from my journey as I continue growing as a web developer.",
    date: "September 2026",
    readTime: "4 min read",
    category: "Web Development",
    url: "https://medium.com/@danieljato505",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="px-6 py-20 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
         

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Thoughts & Articles
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            I write about React, frontend development, web technologies,
            and lessons I learn while building projects.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group rounded-2xl border border-green-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl dark:border-green-800 dark:bg-green-950"
            >
              {/* Category */}
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-400">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900 transition group-hover:text-green-600 dark:text-white">
                {article.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                {article.description}
              </p>

              {/* Meta */}
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              {/* Read link */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:gap-3 hover:text-green-700"
              >
                Read on Medium
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Medium profile button */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@danieljato505"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-green-800 dark:bg-white dark:text-black dark:hover:bg-green-200"
          >
            View all articles on Medium →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Blog;