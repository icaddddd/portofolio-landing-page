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

  const projects = [
    {
      id: 1,
      title: "DNM Mobile Backend Microservice",
      company: "K-Link Indonesia",
      description: "Maintained and optimized backend microservices for the DNM mobile application using Node.js and Express.js to improve system reliability.",
      tags: ["Node.js", "Express.js"],
      link: "#",
      github: "https://github.com/K-Link-Indonesia/dnm-backend-order-service",
    },
    {
      id: 2,
      title: "Warehouse Management System",
      company: "K-Link Indonesia",
      description: "Maintained and improved existing management applications using PHP CodeIgniter 3, JQuery, and Microsoft SQL Server. Implemented new features and optimized database queries.",
      tags: ["PHP CodeIgniter 3", "JQuery", "Microsoft SQL Server"],
      link: "https://wms.k-linkindo.co",
      github: "https://github.com/K-Link-Indonesia/wms-2026",
    },
    {
      id: 3,
      title: "Shipment Service Backend (V1 & V2)",
      company: "K-Link Indonesia",
      description: "Refactored the original Node.js/Sequelize monolithic backend into modular NestJS/Prisma architecture with role-based access, multi-status tracking, and automated scheduling for airwaybill statuses.",
      tags: ["NestJS", "Prisma", "Node.js", "Sequelize"],
      link: "#",
      github: "https://github.com/K-Link-Indonesia/shipping_service",
    },
    {
      id: 4,
      title: "Dashboard Shipment Service",
      company: "K-Link Indonesia",
      description: "Built an admin dashboard using Next.js, TailwindCSS, and shadcn to monitor shipment logistics, integrating real-time data updates and chart analytics.",
      tags: ["Next.js", "TailwindCSS", "shadcn"],
      link: "https://dashboard-shipping-service.k-linkindo.co",
      github: "https://github.com/K-Link-Indonesia/shipping_service_dashboard",
    },
    {
      id: 5,
      title: "Sales Management System",
      company: "K-Link Indonesia",
      description: "Developed an e-commerce management platform utilizing React.js, TypeScript, Golang, and Chakra UI for distributors to manage sales data, ranks, commission statuses, and downlines.",
      tags: ["React.js", "TypeScript", "Golang", "Chakra UI"],
      link: "https://dcmy-v2-dev.k-link.us",
      github: "https://github.com/K-Link-Indonesia/data-center-malaysia-fe_v2",
    },
    {
      id: 6,
      title: "Backend Message Service",
      company: "K-Link Indonesia",
      description: "Developed a REST API application using Golang and PostgreSQL to handle multi-channel messaging via WhatsApp, Email, and Telegram.",
      tags: ["Golang", "PostgreSQL", "REST API"],
      link: "#",
      github: "https://github.com/K-Link-Indonesia/service-message",
    },
    {
      id: 7,
      title: "EMS Application",
      company: "Freelance",
      description: "Engineered a fleet monitoring application for gas trucks utilizing NestJS, Next.js, and PostgreSQL to track vehicle movement, attendance data, and admin management.",
      tags: ["NestJS", "Next.js", "PostgreSQL"],
      link: "https://ineko.up.railway.app",
      github: "https://github.com/icaddddd/backend_ems",
      github2: "https://github.com/icaddddd/web_ems",
    },
    {
      id: 8,
      title: "E-Commerce Lakoe",
      company: "Dumbways.id",
      description: "Collaborated in a team using Remix to deliver a high-performance e-commerce platform combining captivating design with advanced functionality to meet customer needs.",
      tags: ["Remix"],
      link: "#",
      github: "https://github.com/icaddddd/lakoe-deploy-icad",
    },
    {
      id: 9,
      title: "Geospatial LLM Integration Application",
      company: "Personal Project",
      description: "Built a fullstack JavaScript application integrating a local LLM with Google Maps APIs to process user queries and visualize structured geographic data.",
      tags: ["JavaScript", "LLM Integration", "Google Maps API"],
      link: "#",
      github: "https://github.com/icaddddd/LLM_Local_Google_maps_backend",
      github2: "https://github.com/icaddddd/LLM_Local_Google_maps_frontend",
    },
    {
      id: 10,
      title: "Learning Management System (LMS) Backend",
      company: "Freelance",
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
      github: "https://github.com/icaddddd/Circle",
    },
    {
      id: 12,
      title: "Backend Ticketing Project Service",
      company: "Freelance",
      description: "Developed a scalable microservice for a ticketing platform using NestJS, PostgreSQL, and Prisma, handling event creation, ticket purchasing, and QR-code validation logic.",
      tags: ["NestJS", "PostgreSQL", "Prisma"],
      link: "#",
      github: "#",
    },
    {
      id: 13,
      title: "POS (Point of Sales) Website",
      company: "Freelance",
      description: "Developed a frontend POS web application using React.js, TypeScript, and Chakra UI, featuring product listings, a cart system, and an order summary to simulate cashier functionality.",
      tags: ["React.js", "TypeScript", "Chakra UI"],
      link: "#",
      github: "#",
    },
    {
      id: 14,
      title: "Event Organizer Landing Page",
      company: "Freelance",
      description: "Developed a responsive, SEO-friendly landing page with dynamic routing using React.js, TypeScript, and Chakra UI.",
      tags: ["React.js", "TypeScript", "Chakra UI"],
      link: "https://samakami.net",
      github: "https://github.com/icaddddd/samakami_new",
    },
    {
      id: 15,
      title: "Personal Portfolio Page",
      company: "Freelance",
      description: "Designed a responsive static page using semantic HTML and CSS to showcase personal information, experience, and project links.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
      link: "https://rhisjad-djavatri.site",
      github: "https://github.com/icaddddd/portofolio-landing-page",
    },
    {
      id: 16,
      title: "Data Center Malaysia Frontend (V2)",
      company: "K-Link Indonesia",
      description: "Developed and maintained the frontend architecture for the Malaysia data center project, focusing on user details and nexus member management using Vue.js.",
      tags: ["React.js", "Typescript", "Chakra UI"],
      link: "https://dcmy-v2-dev.k-link.us",
      github: "https://github.com/icaddddd/data-center-malaysia-fe_v2",
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
    {
      id: 18,
      title: "Cake Stock Management (Warung Sehati)",
      company: "Freelance",
      description: "A Stock Management Web Application designed for cake bakery business to monitor stock. Integrated with Telegram Bot for easy access.",
      tags: ["Next.js", "Prisma", "Tailwind CSS", "Telegram Bot"],
      link: "https://warung-sehati-testing.up.railway.app",
      github: "https://github.com/icaddddd/cake-stock",
    },
    {
      id: 19,
      title: "Cash Flow Management (Bakery)",
      company: "Freelance",
      description: "A Cash Flow Management Web Application designed for bakery business to monitor cash flow.",
      tags: ["Next.js", "Prisma", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/icaddddd/bakery-cash-flow",
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