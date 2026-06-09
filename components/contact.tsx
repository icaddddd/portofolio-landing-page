"use client"

import { Mail, ExternalLink, MessageCircle, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-8 animate-slideInUp"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-card/50 backdrop-blur border border-primary/10 hover:border-primary/30 rounded-xl p-8 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Send me an email anytime
              </p>
              <a
                // href="mailto:rhisjaddjvtr@gmail.com"
                // target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium group/link"
              >
                rhisjaddjvtr@gmail.com
                {/* <ExternalLink
                  size={16}
                  className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                /> */}
              </a>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-card/50 backdrop-blur border border-primary/10 hover:border-green-500/30 rounded-xl p-8 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="text-green-500" size={28} />
                </div>
                <h3 className="text-2xl font-semibold">WhatsApp</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Chat with me instantly
              </p>
              <a
                href="https://wa.me/6282292555447"
                target="_blank"
                className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors font-medium group/link"
              >
                +62 822 9253 5447
                <ExternalLink
                  size={16}
                  className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 animate-slideInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Follow Me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sjaaf-djavatri/",
                color: "hover:text-blue-400",
              },
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/icaddddd",
                color: "hover:text-gray-400",
              },
              // { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-300" },
              {
                icon: Instagram,
                label: "Instagram",
                href: "https://www.instagram.com/sjaafrhisjad_/",
                color: "hover:text-pink-400",
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  target="_blank"
                  href={social.href}
                  className={`group relative p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 ${social.color}`}
                  title={social.label}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon
                    size={24}
                    className="relative transition-transform group-hover:scale-125 group-hover:-translate-y-1"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="mt-12 text-center animate-slideInUp"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transform"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
