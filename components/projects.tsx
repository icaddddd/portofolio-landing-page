"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, FolderGit2 } from "lucide-react"

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

  // All 17 projects mapped directly from CV
  const projects = [
    {
      id: 1,
      title: "DNM Mobile Backend Microservice",
      company: "K-Link Indonesia",
      description: "Maintained and optimized backend microservices for the DNM mobile application using Node.js and Express.js to improve system reliability.",
      tags: ["Node.js", "Express.js"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Warehouse Management System",
      company: "K-Link Indonesia",
      description: "Maintained and improved existing management applications using PHP CodeIgniter 3, JQuery, and Microsoft SQL Server. Implemented new features and optimized database queries.",
      tags: ["PHP CodeIgniter 3", "JQuery", "Microsoft SQL Server"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Shipment Service Backend (V1 & V2)",
      company: "K-Link Indonesia",
      description: "Refactored the original Node.js/Sequelize monolithic backend into modular NestJS/Prisma architecture with role-based access, multi-status tracking, and automated scheduling for airwaybill statuses.",
      tags: ["NestJS", "Prisma", "Node.js", "Sequelize"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Dashboard Shipment Service",
      company: "K-Link Indonesia",
      description: "Built an admin dashboard using Next.js, TailwindCSS, and shadcn to monitor shipment logistics, integrating real-time data updates and chart analytics.",
      tags: ["Next.js", "TailwindCSS", "shadcn"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Sales Management System",
      company: "K-Link Indonesia",
      description: "Developed an e-commerce management platform utilizing React.js, TypeScript, Golang, and Chakra UI for distributors to manage sales data, ranks, commission statuses, and downlines.",
      tags: ["React.js", "TypeScript", "Golang", "Chakra UI"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Backend Message Service",
      company: "K-Link Indonesia",
      description: "Developed a REST API application using Golang and PostgreSQL to handle multi-channel messaging via WhatsApp, Email, and Telegram.",
      tags: ["Golang", "PostgreSQL", "REST API"],
      link: "#",
      github: "#",
    },
    {
      id: 7,
      title: "EMS Application",
      company: "Ineko",
      description: "Engineered a fleet monitoring application for gas trucks utilizing NestJS, Next.js, and PostgreSQL to track vehicle movement, attendance data, and admin management.",
      tags: ["NestJS", "Next.js", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 8,
      title: "E-Commerce Lakoe",
      company: "Dumbways.id",
      description: "Collaborated in a team using Remix to deliver a high-performance e-commerce platform combining captivating design with advanced functionality to meet customer needs.",
      tags: ["Remix"],
      link: "#",
      github: "#",
    },
    {
      id: 9,
      title: "Geospatial LLM Integration Application",
      company: "Personal Project",
      description: "Built a fullstack JavaScript application integrating a local LLM with Google Maps APIs to process user queries and visualize structured geographic data.",
      tags: ["JavaScript", "LLM Integration", "Google Maps API"],
      link: "#",
      github: "#",
    },
    {
      id: 10,
      title: "Learning Management System (LMS) Backend",
      company: "Personal Project",
      description: "Maintained and debugged a Learning Management System backend (dev-innovate.scalastaging.online) built with Express.js and PostgreSQL.",
      tags: ["Express.js", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 11,
      title: "Twitter/X Clone (Circle)",
      company: "Dumbways.id",
      description: "Created a simplified social media clone focused on circle-based posting using React.js, TypeScript, Chakra UI, and PostgreSQL, complete with timeline feeds and local storage persistence.",
      tags: ["React.js", "TypeScript", "Chakra UI", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 12,
      title: "Backend Ticketing Project Service",
      company: "Personal Project",
      description: "Developed a scalable microservice for a ticketing platform using NestJS, PostgreSQL, and Prisma, handling event creation, ticket purchasing, and QR-code validation logic.",
      tags: ["NestJS", "PostgreSQL", "Prisma"],
      link: "#",
      github: "#",
    },
    {
      id: 13,
      title: "POS (Point of Sales) Website",
      company: "Personal Project",
      description: "Developed a frontend POS web application using React.js, TypeScript, and Chakra UI, featuring product listings, a cart system, and an order summary to simulate cashier functionality.",
      tags: ["React.js", "TypeScript", "Chakra UI"],
      link: "#",
      github: "#",
    },
    {
      id: 14,
      title: "Event Organizer Landing Page",
      company: "Samakami",
      description: "Developed a responsive, SEO-friendly landing page with dynamic routing using React.js, TypeScript, and Chakra UI.",
      tags: ["React.js", "TypeScript", "Chakra UI"],
      link: "#",
      github: "#",
    },
    {
      id: 15,
      title: "Personal Portfolio Page",
      company: "Personal Project",
      description: "Designed a responsive static page using semantic HTML and CSS to showcase personal information, experience, and project links.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
      link: "#",
      github: "#",
    },
    {
      id: 16,
      title: "Data Center Malaysia Frontend (V2)",
      company: "K-Link Indonesia",
      description: "Developed and maintained the frontend architecture for the Malaysia data center project, focusing on user details and nexus member management using Vue.js.",
      tags: ["React.js", "Typescript", "Chakra UI"],
      link: "#",
      github: "#",
    },
    {
      id: 17,
      title: "Automated Log Management System",
      company: "K-Link Indonesia",
      description: "Developed a specialized cron schedule within a Next.js and Prisma environment to automate the deletion of activity logs older than three months.",
      tags: ["Next.js", "Prisma", "Cron"],
      link: "#",
      github: "#",
    },
  ]

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
              key={project.id}
              className={`group relative rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 bg-background/50 hover:bg-card hover:shadow-lg hover:-translate-y-1 flex flex-col h-full ${
                isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${Math.min(0.1 + index * 0.05, 0.5)}s` }}
            >
              {/* Header section with icons and links */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                    title="View project"
                  >
                    <ExternalLink size={20} />
                  </a>
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
  )
}