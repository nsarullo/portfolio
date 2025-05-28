"use client";
import React, { useState } from "react";

const Svg1 = () => (
  <svg
    className="fill-[#2e70ef]"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 373.37 511.43"
  >
    <polygon points="373.37 166.86 373.37 511.43 248.4 511.43 75.91 247.65 75.91 511.43 0 511.43 0 166.06 71.55 102.25 297.46 447.73 297.46 200.89 129.16 50.9 186.25 0 373.37 166.86" />
  </svg>
);

const Svg2 = () => (
  <svg
    className="fill-gray-700 dark:fill-gray-100"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

const Svg3 = () => (
  <svg
    className="fill-[#2e70ef]"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <path d="M10 2v20H2V2h8zm4 4v16h8V6h-8zM4 4v2h4V4H4zm0 4v2h4V8H4zm0 4v2h4v-2H4zm0 4v2h4v-2H4zm12-8v2h4V8h-4zm0 4v2h4v-2h-4zm0 4v2h4v-2h-4z" />
  </svg>
);

const Svg4 = () => (
  <svg
    className="fill-gray-700 dark:fill-gray-100"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const items = [
    {
      title: "Founding Engineer at Nuvos",
      link: "https://www.nuvoscre.com",
      icon: <Svg1 />,
      date: "Jul 2022 - Present",
      location: "Los Angeles, CA",
      description:
        "I lead the front-end development of our cutting-edge, AI-enhanced commercial real estate platform. My role centers on building and advancing our web applications, focusing on bespoke solutions tailored to our specific customer needs.",
    },
    {
      title: "Computer Science & Robotics Teacher at A.C. Stelle Middle School (California Distinguished School)",
      link: "https://www.acstellemiddleschool.net/",
      icon: <Svg2 />,
      date: "Nov 2022 - Jul 2023",
      location: "Calabasas, CA",
      description:
        "Developed comprehensive CS curriculum from scratch for 200+ middle school students after emergency placement and led several technical projects.",
    },
    {
      title: "Solutions Architect at Gaglione, Dolan & Kaplan",
      link: "#0",
      icon: <Svg3 />,
      date: "May 2017 - Jul 2023",
      location: "Los Angeles, CA",
      description:
        "Built custom cloud infrastructure utilizing Netgear ReadyShare, maintaining 99.9% uptime across multiple office branches via HTTPS/FTP connectivity.",
    },
    {
      title: "Lead Instructor at Code Ninjas",
      link: "https://www.codeninjas.com/",
      icon: <Svg4 />,
      date: "Feb 2022 - Nov 2022",
      location: "Northridge, CA",
      description:
        "Taught programming fundamentals including data structures, logic, and conditionals across Java, JavaScript, Python, and Lua using Unity and Roblox Studio for game development projects.",
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Experience
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className={`p-5 rounded-xl relative overflow-hidden ${index === 0
                ? "border-2 border-[#2e70ef] shadow-lg shadow-[#2e70ef]/20 group cursor-pointer"
                : "odd:bg-linear-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-linear-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"
              }`}
            onMouseMove={index === 0 ? handleMouseMove : undefined}
          >
            {index === 0 && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(46,112,239,0.15), transparent 80%)`,
                }}
              />
            )}
            <div className="sm:flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs max-sm:mb-3 sm:mt-5">
                {item.icon}
              </div>
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    <a
                      className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div className="text-[13px] font-medium text-gray-600dark:text-gray-400">
                    {item.location}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
