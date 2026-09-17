"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, FolderGit2 } from "lucide-react"
import { projects } from "@/lib/data"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Helper function to strip citations from the UI render
  const cleanText = (text: string) => text.replace(/ \+\]/g, '')

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible ? "animate-slideInUp opacity-100" : "opacity-0"}`}
        >
          Project Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 bg-background/50 hover:bg-card hover:shadow-lg hover:-translate-y-1 flex flex-col h-full ${
                isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
              }`}
              style={{
                animationDelay: `${Math.min(0.1 + index * 0.05, 0.5)}s`,
              }}
            >
              {/* Header section with icons and links */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex gap-2">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.github2 && (
                    <a
                      href={project.github2}
                      target="_blank"
                      className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                      title="View project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cleanText(project.title)}
                </h3>
                <span className="text-xs font-medium text-primary/80 mb-3 block">
                  {cleanText(project.company)}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cleanText(project.description)}
                </p>
              </div>

              {/* Tags pushed to the bottom */}
              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md transition-colors group-hover:bg-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}