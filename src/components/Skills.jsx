
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

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-20 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        {/* INTRODUCTION AND DEVELOPER IMAGE */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-color)]" />
              My expertise
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Skills &{" "}
              <span className="text-[var(--accent-color)]">
                Technologies.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--body-color)] sm:text-lg lg:mx-0">
              Explore the technologies, tools, and development skills I use
              as I continue building modern digital experiences and growing
              as a developer.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                "Frontend Development",
                "Backend Learning",
                "Creative Coding",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-3 py-2 text-xs text-[var(--body-color)] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)] text-[var(--accent-color)]">
                <Code2 size={23} />
              </span>

              <div className="text-left">
                <p className="font-bold tracking-wide">SAMTHECS</p>
                <p className="text-sm text-[var(--body-color)]">
                  Always learning. Always building.
                </p>
              </div>
            </div>
          </motion.header>

          {/* DEVELOPER IMAGE */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 24, scale: 0.98 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative order-1 mx-auto w-full max-w-2xl lg:order-2"
          >
            <div className="overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)]">
              <div className="relative">
                <img
                  src="/images/ani1.jpeg"
                  alt="Cartoon developer working with futuristic coding interfaces"
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3 py-2 text-xs font-semibold text-white sm:left-5 sm:top-5">
                  <Sparkles size={14} className="text-[var(--accent-color)]" />
                  DEVELOPER MODE
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-black/55 p-5 sm:p-7">
                  <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                    Code. Create. Innovate.
                  </h2>
                  <p className="mt-2 text-sm text-white/80 sm:text-base">
                    Turning creative ideas into digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WORKSTATION BANNER */}
        <Reveal className="mt-20 sm:mt-24">
          <div className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)]">
            <img
              src="/images/ani2.jpeg"
              alt="Developer workstation showing a futuristic coding setup"
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-80 lg:h-[390px]"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center p-5 sm:p-10 lg:p-14">
              <span className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-color)] sm:text-sm">
                Inside my digital world
              </span>

              <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Where Creativity
                <span className="mt-1 block text-[var(--accent-color)]">
                  Meets Technology.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Exploring modern technologies, improving my coding skills,
                and creating interfaces with purpose.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Code", "Design", "Innovation"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* SKILLS SECTION HEADING */}
        <Reveal className="mb-10 mt-20 text-center sm:mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-color)]">
            What I work with
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            My Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--body-color)] sm:text-base">
            Technologies I use and skills I am developing as I continue my
            journey in web development.
          </p>
        </Reveal>

        {/* SKILL CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.1}>
              <article className="group h-full rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-color)] sm:p-8">
                <div className="mb-8 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)] text-lg font-black text-[var(--accent-color)]">
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

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-3 transition duration-200 hover:border-[var(--border-color)] hover:bg-[var(--page-bg)]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-color)]" />

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

                <div className="mt-7 h-1 overflow-hidden rounded-full bg-[var(--border-color)]">
                  <motion.div
                    initial={{ width: reduceMotion ? "100%" : "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: reduceMotion ? 0 : 0.2 + index * 0.1,
                    }}
                    className="h-full rounded-full bg-[var(--accent-color)]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <Reveal className="mt-12">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-7 text-center sm:p-10">
            <p className="text-xl font-bold sm:text-2xl">
              Always learning.{" "}
              <span className="text-[var(--accent-color)]">
                Always building.
              </span>
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--body-color)]">
              Every project is an opportunity to learn something new,
              improve my craft, and turn creative ideas into useful digital
              products.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
