
import { motion } from "motion/react";
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
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const cardClass =
  "rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] transition-colors duration-300";

const mutedText = "text-[var(--body-color)]";

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500">
        <Sparkles size={15} />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-[var(--heading-color)] sm:text-4xl lg:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {accent}
        </span>
      </h2>

      <p className={`mx-auto mt-4 max-w-2xl leading-7 ${mutedText}`}>
        {description}
      </p>
    </motion.div>
  );
}

function IconBox({ icon: Icon, purple = false }) {
  return (
    <div
      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
        purple
          ? "bg-purple-500/10 text-purple-500"
          : "bg-blue-500/10 text-blue-500"
      }`}
    >
      <Icon size={24} />
    </div>
  );
}

export default function About() {
  const whatsappLink =
    "https://wa.me/2349127303047?text=Hello%20SAMTHECS!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project.%20Let%27s%20build%20something%20great!";

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] px-5 pb-20 pt-12 text-[var(--heading-color)] transition-colors duration-300 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-24 sm:space-y-28">

        {/* HERO */}
        <section className="relative pt-8 sm:pt-14">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500">
              <Code2 size={16} />
              THE PERSON BEHIND THE CODE
            </span>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[var(--heading-color)] sm:text-6xl lg:text-7xl">
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <MessageCircle size={18} />
                Let's Work Together
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-3.5 font-semibold text-[var(--heading-color)] transition hover:border-blue-500 hover:text-blue-500"
              >
                Explore My Projects
                <ArrowUpRight size={18} />
              </a>
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
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-7 transition-colors duration-300 sm:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <Terminal size={28} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Who I Am
              </p>

              <h3 className="mb-5 text-2xl font-bold text-[var(--heading-color)] sm:text-3xl">
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
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1"
              >
                Let's Work Together
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -6 }}
                    className={`${cardClass} p-6`}
                  >
                    <IconBox icon={Icon} />

                    <h4 className="mb-2 text-lg font-bold text-[var(--heading-color)]">
                      {item.title}
                    </h4>

                    <p className={`text-sm leading-6 ${mutedText}`}>
                      {item.description}
                    </p>
                  </motion.div>
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`${cardClass} flex min-h-32 flex-col items-center justify-center gap-4 p-5 text-center`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon size={25} />
                  </div>

                  <span className="text-sm font-semibold text-[var(--heading-color)]">
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
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`${cardClass} group p-6 hover:border-blue-500/50`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-[var(--heading-color)]">
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-7 ${mutedText}`}>
                    {service.description}
                  </p>
                </motion.div>
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
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${cardClass} p-6`}
              >
                <span className="mb-5 block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-black text-transparent">
                  {step.number}
                </span>

                <h3 className="mb-3 text-xl font-bold text-[var(--heading-color)]">
                  {step.title}
                </h3>

                <p className={`text-sm leading-7 ${mutedText}`}>
                  {step.description}
                </p>
              </motion.div>
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
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${cardClass} p-7`}
                >
                  <IconBox icon={Icon} purple />

                  <h3 className="mb-3 text-xl font-bold text-[var(--heading-color)]">
                    {value.title}
                  </h3>

                  <p className={`leading-7 ${mutedText}`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* MINDSET */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-[var(--surface-bg)] to-purple-500/10 p-8 text-center transition-colors duration-300 sm:p-12"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
            <Zap size={28} />
          </div>

          <h2 className="text-3xl font-black text-[var(--heading-color)] sm:text-4xl">
            Learn. Build.{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
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
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--heading-color)]"
                >
                  <CheckCircle2 size={15} className="text-blue-500" />
                  {item}
                </span>
              )
            )}
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white sm:p-12"
        >
          <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-10 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <BriefcaseBusiness size={28} />
            </div>

            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Have an Idea in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
              Whether you need a portfolio, a business website or a fresh
              digital idea brought to life, let's talk about what you want
              to build.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 px-7 py-3.5 font-bold text-blue-700 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={19} />
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>

            <p className="mt-5 text-sm text-white/80">
              SAMTHECS · Building ideas for the web.
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
