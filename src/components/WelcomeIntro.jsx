
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!visible) return;

    const startTime = Date.now();
    const duration = 20000;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(
        100,
        Math.floor((elapsed / duration) * 100)
      );

      setProgress(nextProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);
        setVisible(false);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-5 text-white"
        >
          {/* Background lighting */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(37,99,235,0.20),transparent_45%),radial-gradient(ellipse_at_85%_85%,rgba(147,51,234,0.16),transparent_40%)]" />

          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[130px]" />

          {/* Decorative rings */}
          <motion.div
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute h-[330px] w-[330px] rounded-full border border-blue-400/10 sm:h-[480px] sm:w-[480px]"
          />

          <motion.div
            animate={reduceMotion ? {} : { rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute h-[260px] w-[260px] rounded-full border border-purple-400/15 sm:h-[390px] sm:w-[390px]"
          />

          {/* Floating particles */}
          {!reduceMotion &&
            Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-300"
                style={{
                  left: `${(i * 37 + 7) % 100}%`,
                  top: `${(i * 23 + 11) % 100}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.15, 0.9, 0.15],
                  scale: [0.7, 1.4, 0.7],
                }}
                transition={{
                  duration: 2 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}

          {/* Welcome content */}
          <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Welcome to my digital world
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[60px]" />

              <h1 className="relative text-5xl font-black tracking-[-0.07em] sm:text-7xl md:text-8xl">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
                  SAMTHECS
                </span>
                <span className="text-cyan-400">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/90 sm:text-base sm:tracking-[0.3em]"
            >
              Welcome to SAMTHECS Portfolio
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base"
            >
              Crafting digital experiences that inspire.
              <br />
              Design. Develop. Innovate.
            </motion.p>

            {/* Loading progress */}
            <div className="mx-auto mt-12 max-w-sm">
              <div className="mb-3 flex items-center justify-between text-xs font-medium">
                <span className="uppercase tracking-[0.2em] text-slate-400">
                  Initializing experience
                </span>
                <span className="font-mono text-cyan-300">
                  {progress}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="relative h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.6)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.08, ease: "linear" }}
                >
                  <div className="absolute inset-0 bg-white/25" />
                </motion.div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                <motion.span
                  animate={reduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                />
                Preparing something exceptional
              </div>
            </div>

            <p className="mt-10 text-[9px] tracking-[0.35em] text-white/25">
              © SAMTHECS · DIGITAL CREATIVE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
