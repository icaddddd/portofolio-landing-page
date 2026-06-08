"use client"

import { useEffect, useState } from "react"
import { Calendar, Building } from "lucide-react"

export default function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: 1,
      role: "Fullstack Developer",
      company: "PT. K-Link Nusantara",
      period: "2023 - Present",
      description:
        "Worked on maintaining and improving e-commerce platforms and internal tools by refactoring backend services to enhance performance and reliability. Led the development of a new international application, including an admin dashboard and bonus calculation system. Optimized database queries and built automated data processing using scheduled scripts and ETL workflows. Collaborated closely with data warehouse and business analyst teams to ensure data accuracy, and created technical documentation for data pipelines and processes. Also developed backend messaging services in Golang supporting WhatsApp, Email, Telegram, and other channels.",
      skills: ["React", "Node.js", "Nest.js", "Next.js", "Express.js", "Golang", "PostgreSQL", "MySQL", "Typescript/Javascript", "Git", "Tailwind CSS", "Prisma", "TypeORM", "Sequelize", "PHP"],
    },
    {
      id: 2,
      role: "Freelance Developer",
      company: "Self-employed",
      period: "2023 - Present",
      description:
        "Developed and maintained multiple web applications, implemented new features, and conducted code reviews.",
      skills: ["React", "Node.js", "Next.js", "Nest.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Docker", "Git", "Tailwind CSS", "Typescript/Javascript", "Railway", "Prisma", "TypeORM", "Sequelize", "Docker"],
    },
    {
      id: 2,
      role: "Head of Barista - Supervisor",
      company: "PT. Roemah Kita Boga",
      period: "2019 - 2023",
      description:
        "Maintaining and improving bar product and stock, and ensuring quality control and customer satisfaction, managing 15+ employees., responsible for purchasing and inventory management.",
      skills: ["Highest Revenue", "Latte Art"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible ? "animate-slideInUp" : "opacity-0"}`}
        >
          Work Experience
        </h2>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative border border-border/50 rounded-xl p-6 sm:p-8 bg-background/50 hover:bg-background hover:border-primary/30 transition-all duration-300 ${
                isVisible ? "animate-slideInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-xl font-semibold text-foreground">{exp.role}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="sm:col-span-1 lg:col-span-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
