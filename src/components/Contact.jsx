
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
    color: "text-red-400",
    background: "bg-red-400/10",
  },
  {
    title: "WhatsApp",
    detail: "Let's discuss your project",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: MessageCircle,
    color: "text-emerald-400",
    background: "bg-emerald-400/10",
  },
  {
    title: "GitHub",
    detail: "Explore my development work",
    href: GITHUB_URL,
    icon: Code2,
    color: "text-violet-400",
    background: "bg-violet-400/10",
  },
  {
    title: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/samuel-awodeyi-69b2a1445/",
    icon: AtSign,
    color: "text-blue-400",
    background: "bg-blue-400/10",
  },
  {
    title: "X",
    detail: "@SamthecsWeb",
    href: "https://x.com/SamthecsWeb",
    icon: AtSign,
    color: "text-slate-400",
    background: "bg-slate-400/10",
  },
  {
    title: "Telegram",
    detail: "Connect with me on Telegram",
    href: "https://web.telegram.org/a/#8390083527",
    icon: Send,
    color: "text-sky-400",
    background: "bg-sky-400/10",
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.65,
            delay,
            ease: "easeOut",
          },
        };

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
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject || "Project enquiry"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)]/70 px-4 py-3.5 text-sm text-[var(--heading-color)] outline-none transition placeholder:text-[var(--body-color)]/70 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10";

  return (
    <main
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] px-4 pb-20 pt-28 text-[var(--heading-color)] sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="pointer-events-none absolute right-0 top-[45%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <motion.div
          {...reveal()}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={15} />
            <span>Let's build something great</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Let's talk about
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text pb-2 text-transparent">
              your next project.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--body-color)] sm:text-lg">
            Have an idea, a website to build, or a project in mind?
            Send me a message. Let's turn your idea into something
            meaningful.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact information */}
          <motion.aside
            {...reveal(0.1)}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400">
                Contact information
              </span>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Let's connect.
              </h2>

              <p className="mt-3 leading-7 text-[var(--body-color)]">
                The best projects start with a conversation.
                Choose a platform below and let's talk about what
                you want to create.
              </p>

              <div className="mt-7 space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const isEmail = method.title === "Email";

                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-4 rounded-2xl border border-[var(--border-color)] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.04]"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${method.background} ${method.color}`}
                      >
                        <Icon size={22} />
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
                        className="shrink-0 text-[var(--body-color)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability card */}
            <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/15 via-[var(--surface-bg)] to-cyan-500/10 p-6 sm:p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-violet-400/10" />

              <div className="absolute -right-1 -top-1 h-20 w-20 rounded-full border border-violet-400/10" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Open to enquiries
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  Got an idea? Let's hear it.
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--body-color)]">
                  Tell me what you have in mind, your goals, and how
                  I can help.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello SAMTHECS! I have a project idea I would like to discuss."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:text-cyan-400"
                >
                  Start a conversation
                  <ArrowDownRight size={18} />
                </a>
              </div>
            </div>
          </motion.aside>

          {/* Contact form */}
          <motion.section
            {...reveal(0.2)}
            className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-5 shadow-2xl shadow-black/5 sm:p-8 md:p-10"
          >
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                Send a message
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Tell me about your project
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--body-color)]">
                Fill in the details below. Your message will open
                in WhatsApp so you can review and send it.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your name{" "}
                    <span className="text-violet-400">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
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
                    Email address{" "}
                    <span className="text-violet-400">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
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
                  Your message{" "}
                  <span className="text-violet-400">*</span>
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
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 focus:outline-none focus:ring-4 focus:ring-violet-500/30"
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
                  className="font-medium text-violet-400 transition hover:text-cyan-400"
                >
                  {EMAIL}
                </a>
              </p>
            </form>
          </motion.section>
        </div>

        {/* Footer */}
        <motion.div
          {...reveal(0.1)}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-color)] pt-7 text-center sm:flex-row sm:text-left"
        >
          <p className="text-sm text-[var(--body-color)]">
            Designed with purpose. Built with passion.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-violet-400"
          >
            <Code2 size={16} />
            SAMTHECS
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
