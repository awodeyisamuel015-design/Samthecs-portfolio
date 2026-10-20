import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.75,
            delay,
            ease: "easeOut",
          },
        };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-12 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 lg:px-12"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_42%,rgba(30,64,175,0.16),transparent_42%),radial-gradient(ellipse_at_95%_70%,rgba(147,51,234,0.10),transparent_35%)]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-[1440px] items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-0">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          {...enter(0.05)}
          className="relative z-20 py-8 lg:py-12"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/[0.06] px-4 py-2.5 text-sm backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span>Full-stack Developer</span>
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-purple-500 sm:text-sm">
            Welcome to my portfolio
          </p>

          <h2 className="max-w-3xl text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-6xl xl:text-[4.4rem]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Samthecs.
            </span>
            <br />
            I build beautiful
            <br className="hidden xl:block" /> web experiences.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--body-color)] sm:text-lg">
            I'm a full-stack developer passionate about creating
            modern, responsive, interactive, and user-friendly web
            applications using React, Next.js, JavaScript, Tailwind
            CSS, and backend technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects"
  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:px-7"
>
  View My Projects
  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

            <a
              href={`https://wa.me/2349127303047?text=${encodeURIComponent(
                "Hello SAMTHECS! 👋 I visited your portfolio and I'm interested in working with you. Let's discuss my project!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-6 py-3.5 font-medium transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 sm:px-7"
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
              className="transition duration-300 hover:-translate-y-1 hover:text-cyan-500"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-awodeyi-69b2a1445/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-base transition duration-300 hover:-translate-y-1 hover:text-cyan-500"
            >
              in
            </a>

            <a
              href="https://x.com/SamthecsWeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="transition duration-300 hover:-translate-y-1 hover:text-cyan-500"
            >
              X
            </a>

            <a
              href="mailto:samthecs4@gmail.com"
              aria-label="Email"
              className="text-xl transition duration-300 hover:-translate-y-1 hover:text-purple-500"
            >
              ✉
            </a>
          </div>

          {/* Brand signature */}
          <div className="mt-10 flex items-center gap-4 text-[10px] font-medium tracking-[0.2em] text-[var(--body-color)] sm:text-xs">
            <span className="h-[3px] w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
            DESIGN · DEVELOP · INNOVATE
          </div>
        </motion.div>

        {/* RIGHT: ANIME WORKSPACE */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.9, delay: 0.15 }
          }
          className="relative mx-auto flex min-h-[340px] w-full max-w-[760px] items-center justify-center sm:min-h-[480px] lg:min-h-[650px]"
        >
          <div className="pointer-events-none absolute left-[42%] top-[45%] h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]" />

          <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-48 w-48 rounded-full bg-purple-600/10 blur-[90px]" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [12, -28, 12] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-[400px] w-full items-center justify-center sm:h-[520px] lg:h-[650px]"
          >
            <img
              src="/samthecs-anime-hero.png"
              alt="Anime developer working at a neon-lit coding desk"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 block h-full w-full rounded-3xl object-contain [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_100%)]"
            />
          </motion.div>

          <div className="pointer-events-none absolute bottom-[4%] left-[15%] right-[5%] h-8 rounded-full bg-blue-500/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
