"use client"

import { Github, Linkedin, Mail, MapPin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/icaddddd", label: "GitHub", color: "hover:text-foreground" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sjaaf-djavatri/", label: "LinkedIn", color: "hover:text-primary" },
    { icon: Instagram, href: "https://www.instagram.com/sjaafrhisjad_/", label: "Instagram", color: "hover:text-pink-500" },
    // { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-accent" },
    { icon: Mail, href: "mailto:rhisjaddjvtr@gmail.com", label: "Email", color: "hover:text-secondary" },
  ]

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2 animate-slideInUp" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-bold text-foreground">Portfolio</h3>
            <p className="text-muted-foreground text-sm">Fullstack developer crafting modern web solutions.</p>
          </div>

          {/* Location */}
          <div className="space-y-2 animate-slideInUp" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-primary animate-bounce" />
              <h3 className="text-lg font-semibold text-foreground">Location</h3>
            </div>
            <p className="text-muted-foreground text-sm">West Java, Indonesia</p>
            <p className="text-muted-foreground text-sm">Available for remote work worldwide</p>
          </div>

          {/* Social Links */}
          <div className="space-y-2 animate-slideInUp" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold text-foreground">Follow</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-card border border-border/50 text-muted-foreground ${social.color} transition-all duration-300 hover:bg-background hover:border-foreground/20 hover:scale-110 animate-scaleIn`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground animate-fadeIn">
            <p>© {currentYear} All rights reserved.</p>
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 duration-200">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
