
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SAMTHECS Portfolio",
    description:
      "My personal developer portfolio showcasing my skills, creativity, and web development projects.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://samthecs-portfolio-4lso.vercel.app/",
    githubUrl: "",
    category: "Personal Portfolio",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    description:
      "A modern hotel website featuring accommodation information, booking functionality, and Paystack integration for online payment processing.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Paystack"],
    liveUrl: "https://my-hotel-mauve-eight.vercel.app/",
    githubUrl: "",
    category: "Hotel Booking",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description:
      "A real estate website designed to showcase properties and help visitors explore property listings through a simple, accessible interface.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://real-estate-puce-beta.vercel.app/",
    githubUrl: "",
    category: "Real Estate",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-20 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        {/* PAGE HEADING */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-color)]">
            <FolderGit2 size={15} />
            My Portfolio
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            Featured{" "}
            <span className="text-[var(--accent-color)]">
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
                reduceMotion ? false : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-color)]"
            >
              {/* PROJECT IMAGE */}
              <a
                href={project.liveUrl || project.githubUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="relative block aspect-[16/10] overflow-hidden bg-[var(--page-bg)]"
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white">
                  {project.category}
                </span>

                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 p-2 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalLink size={17} />
                </span>
              </a>

              {/* PROJECT DETAILS */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold transition-colors duration-200 group-hover:text-[var(--accent-color)]">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={21}
                    className="shrink-0 text-[var(--body-color)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent-color)]"
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

                {/* PROJECT LINKS */}
                <div className="mt-auto flex flex-wrap gap-3 border-t border-[var(--border-color)] pt-5 mt-7">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--accent-color)] px-4 py-3 text-sm font-semibold text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-hover)]"
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
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] px-4 py-3 text-sm font-semibold transition-colors hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
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
        <Reveal className="mt-16">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-8 text-center sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
              Have an idea?
            </p>

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
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[var(--accent-color)] px-6 py-3.5 text-sm font-bold text-[var(--accent-text)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
            >
              Let&apos;s Talk
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
