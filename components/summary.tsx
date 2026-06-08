"use client";

import { useEffect, useState } from "react";

export default function Summary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("summary");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="summary" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
        >
          About Me
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Passionate, fast-learning, and results-driven Fullstack Developer
              with strong experience in backend and frontend development using
              Node.js, Express.js, Golang, Next.js, React.js, Vue.js, and
              NestJS. Highly ambitious with excellent adaptability, known for
              taking ownership of complex projects and consistently delivering
              high-quality software solutions. A strong communicator and
              collaborative team player with a proven track record in building
              scalable systems, supporting production APIs, and modernizing
              deployment workflows using GitHub Actions and AWS.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">What I Do</h3>
            <ul className="space-y-3">
              {[
                "Build responsive web applications",
                "Design and implement RESTful APIs",
                "Develop database solutions",
                "Optimize application performance",
                "Implement secure authentication systems",
                "Collaborate with teams on complex projects",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="text-primary font-bold mt-1 group-hover:text-accent transition-colors">
                    ✓
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
