
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  AtSign,
} from "lucide-react";

const WHATSAPP_NUMBER = "2349127303047";
const GITHUB_URL = "https://github.com/awodeyisamuel015-design";
const EMAIL = "samthecs4@gmail.com";

const contactMethods = [
  {
    title: "Email",
    detail: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    detail: "Let's discuss your project",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: MessageCircle,
  },
  {
    title: "GitHub",
    detail: "Explore my development work",
    href: GITHUB_URL,
    icon: Code2,
  },
  {
    title: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/samuel-awodeyi-69b2a1445/",
    icon: AtSign,
  },
  {
    title: "X",
    detail: "@SamthecsWeb",
    href: "https://x.com/SamthecsWeb",
    icon: AtSign,
  },
  {
    title: "Telegram",
    detail: "Connect with me on Telegram",
    href: "https://web.telegram.org/a/#8390083527",
    icon: Send,
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const message = [
      "Hello SAMTHECS! I would like to discuss a project.",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Subject: ${form.subject.trim() || "Project enquiry"}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)] px-4 py-3.5 text-sm text-[var(--heading-color)] outline-none transition placeholder:text-[var(--body-color)]/70 focus:border-[var(--accent-color)] focus:ring-4 focus:ring-[var(--accent-color)]/10";

  return (
    <main
      id="contact"
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] px-4 pb-20 pt-28 text-[var(--heading-color)] transition-colors duration-300 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* PAGE INTRODUCTION */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
            <Sparkles size={15} />
            Let's build something great
          </span>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Let's talk about
            <span className="mt-1 block text-[var(--accent-color)]">
              your next project.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[var(--body-color)] sm:text-lg">
            Have an idea, a website to build, or a project in mind?
            Send me a message. Let's turn your idea into something
            meaningful.
          </p>
        </motion.header>

        {/* MAIN CONTENT */}
        <div className="grid items-start gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* CONTACT INFORMATION */}
          <Reveal className="space-y-6" delay={0.1}>
            <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-color)]">
                Contact information
              </span>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Let's connect.
              </h2>

              <p className="mt-3 leading-7 text-[var(--body-color)]">
                The best projects start with a conversation. Choose a
                platform below and let's talk about what you want to create.
              </p>

              <div className="mt-7 space-y-3">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const isEmail = method.title === "Email";

                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-4 rounded-xl border border-[var(--border-color)] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-color)] hover:bg-[var(--page-bg)]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)] text-[var(--accent-color)]">
                        <Icon size={21} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">
                          {method.title}
                        </span>

                        <span className="mt-1 block break-words text-sm text-[var(--body-color)]">
                          {method.detail}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={19}
                        className="shrink-0 text-[var(--body-color)] transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-color)]"
                      />
                    </a>
                  );
                })}
              </div>
            </section>

            {/* AVAILABILITY CARD */}
            <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-3 py-1.5 text-xs font-medium text-[var(--accent-color)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-color)]" />
                Open to enquiries
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Got an idea? Let's hear it.
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--body-color)]">
                Tell me what you have in mind, your goals, and how I can help.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello SAMTHECS! I have a project idea I would like to discuss."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--accent-color)] transition hover:gap-3"
              >
                Start a conversation
                <ArrowDownRight size={18} />
              </a>
            </section>
          </Reveal>

          {/* CONTACT FORM */}
          <Reveal delay={0.2}>
            <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-5 sm:p-8 md:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-color)]">
                  Send a message
                </span>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Tell me about your project
                </h2>

                <p className="mt-3 text-sm leading-7 text-[var(--body-color)]">
                  Fill in the details below. Your message will open in
                  WhatsApp so you can review and send it.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your name <span className="text-[var(--accent-color)]">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email address <span className="text-[var(--accent-color)]">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    What is this about?
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Business website, portfolio..."
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your message <span className="text-[var(--accent-color)]">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your idea, what you need, and your goals..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} min-h-36 resize-y`}
                    required
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-red-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--accent-color)] px-6 py-4 font-semibold text-[var(--accent-text)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--accent-color)]/20"
                >
                  Send via WhatsApp

                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-[var(--body-color)]">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-medium text-[var(--accent-color)] underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </p>
              </form>
            </section>
          </Reveal>
        </div>

        {/* FOOTER */}
        <Reveal delay={0.1}>
          <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-color)] pt-7 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-[var(--body-color)]">
              Designed with purpose. Built with passion.
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[var(--accent-color)]"
            >
              <Code2 size={16} />
              SAMTHECS
              <ArrowUpRight size={15} />
            </a>
          </footer>
        </Reveal>
      </div>
    </main>
  );
}
