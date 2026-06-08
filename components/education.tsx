"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
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

    const element = document.getElementById("education")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      id: 1,
      degree: "Bootcamp - Full Stack Developer",
      institution: "Dumbways.id",
      period: "2023",
      description: "Intensive 20-week program covering modern web development technologies.",
      achievements: ["Top Performer", "Published 3 projects"],
    },
    {
      id: 2,
      degree: "Bachelor's Degree in Management",
      institution: "Gunadarma University",
      period: "2018 - 2019",
      description: "Unfinished due to financial issues.",
      achievements: [],
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "1 High School Kendari",
      period: "2015 - 2018",
      description: "Completed with honors.",
      achievements: ["Art Club President", "Futsal Team Captain", "Passed to College Benefit Program"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
        >
          Education
        </h2>

        <div className="space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`group relative border border-border/50 rounded-xl p-6 sm:p-8 bg-background/50 hover:bg-background hover:border-accent/50 transition-all duration-300 ${
                isVisible ? "animate-slideInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

              {edu.achievements.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Achievements:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20 group-hover:border-accent/50 transition-all"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
