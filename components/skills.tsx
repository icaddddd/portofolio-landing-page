"use client"

import { useEffect, useState } from "react"
import { Code, Zap } from "lucide-react"

export default function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const hardSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & Next.js", level: 92 },
    { name: "Node.js, Nest.js, Express", level: 95 },
    { name: "Database Design (SQL/NoSQL)", level: 92 },
    { name: "REST APIs & GraphQL", level: 95 },
    { name: "HTML & CSS/Tailwind", level: 94 },
    { name: "Git & Version Control", level: 92 },
    { name: "Golang", level: 85 },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Adaptability",
    "Attention to Detail",
    "Continuous Learning",
    "Time Management",
    "Critical Thinking",
    "Business Analysis",
    "Loyalty"
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Hard Skills</h3>
            </div>

            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-card rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${0.05 + index * 0.08}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Zap className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative p-4 rounded-lg border border-border/50 bg-background/50 hover:bg-background hover:border-accent/50 transition-all duration-300 cursor-default ${
                    isVisible ? "animate-slideInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  <div className="absolute top-0 right-0 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
