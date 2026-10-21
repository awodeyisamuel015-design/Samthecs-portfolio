
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: "easeOut",
          },
        };

  const whatsappMessage = encodeURIComponent(
    "Hello SAMTHECS! 👋 I visited your portfolio and I'm interested in working with you. Let's discuss my project!"
  );

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-12 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 lg:px-12"
    >
      {/* Clean, solid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--page-bg)]" />

      <div className="mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-[1440px] items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-0">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          {...enter(0.05)}
          className="relative z-20 py-8 lg:py-12"
        >
          {/* Developer status */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2.5 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent-color)] opacity-30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--accent-color)]" />
            </span>

            <span>Full-stack Developer</span>
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-color)] sm:text-sm">
            Welcome to my portfolio
          </p>

          {/* Main heading */}
          <h1 className="max-w-3xl text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-6xl xl:text-[4.4rem]">
            Hi, I'm{" "}
            <span className="text-[var(--accent-color)]">
              Samthecs.
            </span>
            <br />
            I build beautiful
            <br className="hidden xl:block" /> web experiences.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--body-color)] sm:text-lg">
            I'm a full-stack developer passionate about creating
            modern, responsive, interactive, and user-friendly web
            applications using React, Next.js, JavaScript, Tailwind
            CSS, and backend technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-lg border border-[var(--accent-color)] bg-[var(--accent-color)] px-6 py-3.5 font-semibold text-[var(--accent-text)] transition duration-300 hover:-translate-y-1 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] sm:px-7"
            >
              View My Projects

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href={`https://wa.me/2349127303047?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)] px-6 py-3.5 font-medium transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] sm:px-7"
            >
              Let's Talk

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-7 text-sm font-bold text-[var(--body-color)]">
            <a
              href="https://github.com/awodeyisamuel015-design"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition duration-200 hover:-translate-y-1 hover:text-[var(--accent-color)]"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-awodeyi-69b2a1445/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-base transition duration-200 hover:-translate-y-1 hover:text-[var(--accent-color)]"
            >
              in
            </a>

            <a
              href="https://x.com/SamthecsWeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="transition duration-200 hover:-translate-y-1 hover:text-[var(--accent-color)]"
            >
              X
            </a>

            <a
              href="mailto:samthecs4@gmail.com"
              aria-label="Email"
              className="text-xl transition duration-200 hover:-translate-y-1 hover:text-[var(--accent-color)]"
            >
              ✉
            </a>
          </div>

          {/* Brand signature */}
          <div className="mt-10 flex items-center gap-4 text-[10px] font-medium tracking-[0.2em] text-[var(--body-color)] sm:text-xs">
            <span className="h-[2px] w-16 rounded-full bg-[var(--accent-color)]" />
            DESIGN · DEVELOP · INNOVATE
          </div>
        </motion.div>

        {/* RIGHT: ANIME WORKSPACE */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.15 }
          }
          className="relative mx-auto flex min-h-[340px] w-full max-w-[760px] items-center justify-center sm:min-h-[480px] lg:min-h-[650px]"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [6, -12, 6] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-[400px] w-full items-center justify-center sm:h-[520px] lg:h-[650px]"
          >
            <img
              src="/samthecs-anime-hero.png"
              alt="Anime developer working at a coding desk"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 block h-full w-full rounded-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
