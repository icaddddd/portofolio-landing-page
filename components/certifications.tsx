"use client"

import { useEffect, useState } from "react"
import { Award, Calendar } from "lucide-react"

export default function Certifications() {
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

    const element = document.getElementById("certifications")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      id: 1,
      title: "Dumbways Certificate of Completion",
      issuer: "Dumbways.id",
      date: "December 2023",
      credentialUrl: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
        >
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative border border-border/50 rounded-xl p-6 sm:p-8 bg-background/50 hover:bg-background hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? "animate-slideInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                <Award className="text-primary group-hover:scale-110 transition-transform" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground font-medium mb-3">{cert.issuer}</p>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
