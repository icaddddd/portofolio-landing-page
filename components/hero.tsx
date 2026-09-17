"use client";

import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import DownloadCV from "./download-cv";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Profile Image */}
          <div
            className="flex justify-center md:col-span-1 animate-slideInLeft"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-glow hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/foto_profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="md:col-span-2 space-y-6 animate-slideInRight"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2 leading-tight">
                {personalInfo.name}
              </h1>
              <p
                className="text-xl sm:text-2xl text-primary font-semibold animate-slideInDown"
                style={{ animationDelay: "0.4s" }}
              >
                {personalInfo.title}
              </p>
            </div>

            <p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg animate-slideInUp"
              style={{ animationDelay: "0.3s" }}
            >
              {personalInfo.bio}
            </p>

            <div
              className="flex flex-wrap gap-3 animate-slideInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <DownloadCV />
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transform"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-primary/30 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transform"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-floatRotate">
          <a
            href="#summary"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowDown size={32} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
