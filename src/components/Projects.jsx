
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Plus,
} from "lucide-react";

// LIVE WEBSITE SCREENSHOTS
const projects = [
  {
    id: 1,
    title: "SAMTHECS Portfolio",
    description:
      "My personal developer portfolio showcasing my skills, creativity, and web development projects.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl:
      "https://awodeyisamuel015-design.github.io/samthecs/",
    githubUrl: "",
    category: "Personal Portfolio",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    description:
      "A modern hotel website featuring accommodation information, booking functionality, and Paystack integration for online payment processing.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Paystack"],
    liveUrl: "https://awodeyisamuel015-design.github.io/My-hotel/",
    githubUrl:
      "",
    category: "Hotel Booking",
    accent: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description:
      "A real estate website designed to showcase properties and help visitors explore property listings through a simple, accessible interface.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl:
      "https://awodeyisamuel015-design.github.io/realEstate/",
    githubUrl: "",
    category: "Real Estate",
    accent: "from-emerald-400 to-cyan-500",
  },
];

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-20 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/4 top-40 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* PAGE HEADING */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500">
            <FolderGit2 size={15} />
            My Portfolio
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--body-color)] sm:text-lg">
            A collection of my work, creative ideas, and development
            projects. Explore what I have built and discover what I
            can create.
          </p>
        </motion.header>

        {/* PROJECT COUNT */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              My Work
            </h2>
            <p className="mt-1 text-sm text-[var(--body-color)]">
              Projects I have worked on
            </p>
          </div>

          <span className="rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-sm text-[var(--body-color)]">
            {projects.length} Projects
          </span>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={
                reduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.12,
              }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* TOP ACCENT */}
              <div
                className={`h-1 bg-gradient-to-r ${project.accent}`}
              />

              {/* LIVE SCREENSHOT */}
              <a
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#10162c] to-purple-950"
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                  <FolderGit2
                    size={48}
                    strokeWidth={1}
                    className="text-cyan-300/80"
                  />
                </div>

                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white opacity-0 transition group-hover:opacity-100">
                  <ExternalLink size={18} />
                </span>
              </a>

              {/* PROJECT DETAILS */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={21}
                    className="shrink-0 text-[var(--body-color)] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>

                <p className="mt-3 min-h-[100px] text-sm leading-7 text-[var(--body-color)]">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[var(--border-color)] bg-[var(--page-bg)] px-3 py-1.5 text-xs text-[var(--body-color)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* WORKING PROJECT LINKS */}
                <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--border-color)] pt-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] px-4 py-3 text-sm font-semibold transition hover:border-cyan-400/50 hover:text-cyan-400"
                    >
                      <Code2 size={17} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CLOSING SECTION */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-8 text-center sm:p-12"
        >
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--body-color)] sm:text-base">
            Let&apos;s work together to turn your idea into a
            beautiful digital experience.
          </p>

          <a
            href="https://wa.me/2349127303047?text=Hello%20SAMTHECS!%20I%20have%20a%20project%20in%20mind."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white transition hover:scale-105"
          >
            Let&apos;s Talk
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
