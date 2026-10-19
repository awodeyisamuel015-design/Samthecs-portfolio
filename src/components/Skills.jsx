
import { motion, useReducedMotion } from "motion/react";
import { Code2, Sparkles } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building beautiful, responsive, and interactive user interfaces.",
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "JavaScript", level: "Learning" },
      { name: "React", level: "Learning" },
      { name: "Tailwind CSS", level: "Learning" },
    ],
    accent: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Learning how applications process data and communicate with servers.",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
      { name: "CRUD Operations", level: "Learning" },
      { name: "Databases", level: "Learning" },
    ],
    accent: "from-purple-400 to-pink-500",
    glow: "group-hover:shadow-purple-500/10",
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Using modern development tools to write, manage, and ship code.",
    skills: [
      { name: "VS Code", level: "Tool" },
      { name: "Git", level: "Learning" },
      { name: "GitHub", level: "Learning" },
      { name: "npm", level: "Tool" },
      { name: "Responsive Design", level: "Core" },
    ],
    accent: "from-emerald-400 to-cyan-500",
    glow: "group-hover:shadow-emerald-500/10",
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-20 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute left-1/4 top-48 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* SKILLS INTRO + DEVELOPER IMAGE */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* INTRODUCTION */}
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              My expertise
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Technologies.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--body-color)] sm:text-lg lg:mx-0">
              Explore the technologies, tools, and development
              skills I use as I continue building modern digital
              experiences and growing as a developer.
            </p>

            {/* TECHNOLOGY TAGS */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Frontend Development", "Backend Learning", "Creative Coding"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-3 py-2 text-xs text-[var(--body-color)] sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                <Code2 size={22} />
              </span>
              <div className="text-left">
                <p className="font-bold">SAMTHECS</p>
                <p className="text-sm text-[var(--body-color)]">
                  Always learning. Always building.
                </p>
              </div>
            </div>
          </motion.header>

          {/* IMAGE 1: CARTOON DEVELOPER */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative order-1 mx-auto w-full max-w-2xl lg:order-2"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-600/30 opacity-70 blur-2xl transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-[1.7rem] border border-cyan-400/30 bg-[var(--surface-bg)] shadow-2xl shadow-blue-950/30">
              <img
                src="/images/ani1.jpeg"
                alt="Cartoon developer working with futuristic coding interfaces"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-300/30 bg-black/40 px-3 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-lg sm:left-5 sm:top-5">
                <Sparkles size={14} />
                DEVELOPER MODE
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                  Code. Create. Innovate.
                </h2>
                <p className="mt-2 text-sm text-slate-300 sm:text-base">
                  Turning creative ideas into digital experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* IMAGE 2: FUTURISTIC WORKSTATION BANNER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative mt-20 overflow-hidden rounded-3xl border border-purple-400/25 bg-[var(--surface-bg)] shadow-2xl shadow-purple-950/20 sm:mt-24"
        >
          <img
            src="/images/ani2.jpeg"
            alt="Neon developer workstation showing a futuristic portfolio interface"
            loading="lazy"
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-80 lg:h-[390px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/75 to-[#050816]/10" />

          <div className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center p-5 sm:p-10 lg:p-14">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 sm:text-sm">
              Inside my digital world
            </span>

            <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Where Creativity
              <span className="mt-1 block bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Meets Technology.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Exploring modern technologies, improving my coding
              skills, and creating interfaces with purpose.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Code", "Design", "Innovation"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SKILL CARDS HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 mt-20 text-center sm:mt-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
            What I work with
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            My Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--body-color)] sm:text-base">
            Technologies I use and skills I am developing as I
            continue my journey in web development.
          </p>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.12,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl sm:p-8 ${group.glow}`}
            >
              {/* GRADIENT ACCENT */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`}
              />

              {/* CARD HEADER */}
              <div className="mb-8 flex items-start justify-between gap-3">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-lg font-black text-white shadow-lg`}
                >
                  {group.number}
                </div>

                <span className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--body-color)]">
                  {group.skills.length} technologies
                </span>
              </div>

              <h3 className="text-xl font-bold sm:text-2xl">
                {group.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[var(--body-color)]">
                {group.description}
              </p>

              <div className="my-6 h-px bg-[var(--border-color)]" />

              {/* INDIVIDUAL SKILLS */}
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-3 transition duration-300 hover:border-[var(--border-color)] hover:bg-[var(--page-bg)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${group.accent}`}
                      />
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>

                    <span className="shrink-0 text-xs text-[var(--body-color)]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

              {/* DECORATIVE ACCENT */}
              <div className="mt-7 h-1 overflow-hidden rounded-full bg-[var(--border-color)]">
                <motion.div
                  initial={{ width: reduceMotion ? "100%" : "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: reduceMotion ? 0 : 0.3 + index * 0.15,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-7 text-center sm:p-10"
        >
          <p className="text-xl font-bold sm:text-2xl">
            Always learning.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Always building.
            </span>
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--body-color)]">
            Every project is an opportunity to learn something new,
            improve my craft, and turn creative ideas into useful
            digital products.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
