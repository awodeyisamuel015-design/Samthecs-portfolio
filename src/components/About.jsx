
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Palette,
  Lightbulb,
  Rocket,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Layers,
  Target,
  GraduationCap,
  BriefcaseBusiness,
  Heart,
  Zap,
  CheckCircle2,
  MessageCircle,
  Globe,
  Sparkles,
  Terminal,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, functional and modern web experiences that work across different screen sizes.",
  },
  {
    icon: Palette,
    title: "UI & UX Design",
    description:
      "Creating clean, attractive interfaces with attention to usability, accessibility and detail.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning ideas and challenges into practical digital solutions through logical thinking.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Learning new technologies, improving existing skills and growing with every project.",
  },
];

const skills = [
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: Terminal },
  { name: "React", icon: Layers },
  { name: "Tailwind CSS", icon: Zap },
  { name: "Responsive Design", icon: Smartphone },
];

const values = [
  {
    icon: Target,
    title: "Purposeful Work",
    description:
      "I focus on creating digital experiences that solve real problems and serve a clear purpose.",
  },
  {
    icon: Heart,
    title: "Attention to Detail",
    description:
      "From layouts to interactions, I care about making each part of a website feel intentional.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description:
      "Technology keeps evolving, and I am committed to learning, experimenting and improving.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "I learn about your idea, your audience and the problem your website should solve.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "I organize the content and shape the layout, structure and visual direction.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "I turn the plan into a responsive website with thoughtful interactions and clean structure.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "I test the experience, fix issues and polish the details before delivery.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites that help brands present their services and build an online presence.",
  },
  {
    icon: Monitor,
    title: "Portfolio Websites",
    description:
      "Personal portfolios that showcase skills, projects and professional identity.",
  },
  {
    icon: Smartphone,
    title: "Responsive Interfaces",
    description:
      "Layouts designed to adapt to mobile phones, tablets and desktop screens.",
  },
  {
    icon: Sparkles,
    title: "Interactive Experiences",
    description:
      "Useful animations, transitions and interactions that make websites feel alive.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const cardClass =
  "rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] transition-colors duration-300";

const mutedText = "text-[var(--body-color)]";

const whatsappLink =
  "https://wa.me/2349127303047?text=Hello%20SAMTHECS!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project.%20Let%27s%20build%20something%20great!";

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-sm font-medium text-[var(--accent-color)]">
        <Sparkles size={15} />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-[var(--heading-color)] sm:text-4xl lg:text-5xl">
        {title}{" "}
        <span className="text-[var(--accent-color)]">{accent}</span>
      </h2>

      <p className={`mx-auto mt-4 max-w-2xl leading-7 ${mutedText}`}>
        {description}
      </p>
    </motion.div>
  );
}

function IconBox({ icon: Icon }) {
  return (
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--page-bg)] text-[var(--accent-color)]">
      <Icon size={24} />
    </div>
  );
}

function RevealCard({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className={`${cardClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-20 pt-12 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-24 sm:space-y-28">

        {/* HERO */}
        <section className="pt-8 sm:pt-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-bg)] px-4 py-2 text-sm font-medium text-[var(--accent-color)]">
              <Code2 size={16} />
              THE PERSON BEHIND THE CODE
            </span>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I'm{" "}
              <span className="text-[var(--accent-color)]">
                SAMTHECS
              </span>
              <br />
              <span className="text-2xl font-bold sm:text-4xl">
                Developer. Creator. Problem Solver.
              </span>
            </h1>

            <p className={`mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg ${mutedText}`}>
              I build modern digital experiences by combining creativity,
              technology and thoughtful design. My goal is to turn ideas into
              websites that look great, work smoothly and make a difference.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent-color)] bg-[var(--accent-color)] px-6 py-3.5 font-semibold text-[var(--accent-text)] transition duration-200 hover:-translate-y-1 hover:opacity-90"
              >
                <MessageCircle size={18} />
                Let's Work Together
                <ArrowUpRight size={18} />
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-color)] px-6 py-3.5 font-semibold text-[var(--heading-color)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
              >
                Explore My Projects
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ABOUT ME */}
        <section>
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="More Than"
            accent="Just Code"
            description="A little about my mindset, what motivates me and the kind of developer I am working to become."
          />

          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <RevealCard className="rounded-3xl p-7 sm:p-10">
              <IconBox icon={Terminal} />

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-color)]">
                Who I Am
              </p>

              <h3 className="mb-5 text-2xl font-bold sm:text-3xl">
                Hello, I'm SAMTHECS.
              </h3>

              <div className={`space-y-4 leading-7 ${mutedText}`}>
                <p>
                  I'm a developer passionate about technology, creative
                  thinking and building useful things for the web.
                </p>

                <p>
                  I enjoy bringing designs to life, creating responsive
                  websites and exploring better ways to deliver smooth user
                  experiences across different devices.
                </p>

                <p>
                  I approach every new project as an opportunity to learn,
                  experiment and turn an idea into something people can
                  actually use.
                </p>

                <p>
                  My goal is to continue growing as a developer while helping
                  individuals, creators and businesses establish a stronger
                  digital presence.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--accent-text)] transition hover:-translate-y-1 hover:opacity-90"
              >
                Let's Work Together
                <ArrowUpRight size={18} />
              </a>
            </RevealCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <RevealCard
                    key={item.title}
                    delay={index * 0.07}
                    className="p-6"
                  >
                    <IconBox icon={Icon} />

                    <h4 className="mb-2 text-lg font-bold">
                      {item.title}
                    </h4>

                    <p className={`text-sm leading-6 ${mutedText}`}>
                      {item.description}
                    </p>
                  </RevealCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Technologies I"
            accent="Work With"
            description="The tools and technologies I use while learning, designing and building for the web."
          />

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.06 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className={`${cardClass} flex min-h-32 flex-col items-center justify-center gap-4 p-5 text-center`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--page-bg)] text-[var(--accent-color)]">
                    <Icon size={25} />
                  </div>

                  <span className="text-sm font-semibold">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          <p className={`mx-auto mt-5 max-w-2xl text-center text-sm leading-6 ${mutedText}`}>
            My toolkit continues to grow as I learn new concepts and work on
            more projects.
          </p>
        </section>

        {/* SERVICES */}
        <section>
          <SectionHeading
            eyebrow="WHAT I CAN BUILD"
            title="Turning Ideas"
            accent="Into Reality"
            description="I enjoy creating useful web experiences with a balance of design, performance and functionality."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <RevealCard
                  key={service.title}
                  delay={index * 0.06}
                  className="group p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--page-bg)] text-[var(--accent-color)] transition-colors duration-200 group-hover:bg-[var(--accent-color)] group-hover:text-[var(--accent-text)]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-7 ${mutedText}`}>
                    {service.description}
                  </p>
                </RevealCard>
              );
            })}
          </div>
        </section>

        {/* PROCESS */}
        <section>
          <SectionHeading
            eyebrow="HOW I WORK"
            title="From Idea"
            accent="To Launch"
            description="A simple, thoughtful approach to turning a project idea into a polished digital experience."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <RevealCard
                key={step.number}
                delay={index * 0.07}
                className="p-6"
              >
                <span className="mb-5 block text-4xl font-black text-[var(--accent-color)]">
                  {step.number}
                </span>

                <h3 className="mb-3 text-xl font-bold">
                  {step.title}
                </h3>

                <p className={`text-sm leading-7 ${mutedText}`}>
                  {step.description}
                </p>
              </RevealCard>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section>
          <SectionHeading
            eyebrow="WHAT DRIVES ME"
            title="My Principles"
            accent="And Values"
            description="The principles that guide how I learn, build and approach every new challenge."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <RevealCard
                  key={value.title}
                  delay={index * 0.07}
                  className="p-7"
                >
                  <IconBox icon={Icon} />

                  <h3 className="mb-3 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className={`leading-7 ${mutedText}`}>
                    {value.description}
                  </p>
                </RevealCard>
              );
            })}
          </div>
        </section>

        {/* MINDSET */}
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className={`${cardClass} rounded-3xl p-8 text-center sm:p-12`}
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--page-bg)] text-[var(--accent-color)]">
            <Zap size={28} />
          </div>

          <h2 className="text-3xl font-black sm:text-4xl">
            Learn. Build.{" "}
            <span className="text-[var(--accent-color)]">
              Improve. Repeat.
            </span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl leading-8 ${mutedText}`}>
            I believe every great digital experience starts with curiosity,
            creativity and the willingness to keep getting better. Every
            challenge is a chance to learn something new and build something
            meaningful.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Creativity", "Consistency", "Growth", "Innovation"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium"
                >
                  <CheckCircle2
                    size={15}
                    className="text-[var(--accent-color)]"
                  />
                  {item}
                </span>
              )
            )}
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-8 text-center sm:p-12"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--page-bg)] text-[var(--accent-color)]">
            <BriefcaseBusiness size={28} />
          </div>

          <h2 className="text-3xl font-black sm:text-4xl">
            Have an Idea in Mind?
          </h2>

          <p className={`mx-auto mt-4 max-w-2xl leading-7 ${mutedText}`}>
            Whether you need a portfolio, a business website or a fresh
            digital idea brought to life, let's talk about what you want
            to build.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[var(--accent-color)] bg-[var(--accent-color)] px-7 py-3.5 font-bold text-[var(--accent-text)] transition duration-200 hover:-translate-y-1 hover:opacity-90"
          >
            <MessageCircle size={19} />
            Start a Conversation
            <ArrowUpRight size={18} />
          </a>

          <p className={`mt-5 text-sm ${mutedText}`}>
            SAMTHECS · Building ideas for the web.
          </p>
        </motion.section>

      </div>
    </main>
  );
}
