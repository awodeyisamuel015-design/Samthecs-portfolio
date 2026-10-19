
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Code2,
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const whatsappLink =
  "https://wa.me/2349127303047?text=Hello%20SAMTHECS!%20%F0%9F%91%8B%20I%20visited%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you.%20Let%E2%80%99s%20discuss%20my%20project!";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const location = useLocation();
  const navigate = useNavigate();

  // RESTORE SAVED THEME
  useEffect(() => {
    const savedTheme = localStorage.getItem("samthecs-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  // CLOSE MENU AND HANDLE PAGE SCROLLING
  useEffect(() => {
    setOpen(false);

    if (location.pathname === "/" && location.hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    } else if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  // DARK / LIGHT THEME
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("samthecs-theme", nextTheme);
  };

  const closeMenu = () => setOpen(false);
  const isDark = theme === "dark";

  const navBg = isDark
    ? "border-white/[0.08] bg-[#070914]/85"
    : "border-slate-200 bg-white/90";

  const linkColor = isDark
    ? "text-slate-300 hover:text-cyan-300"
    : "text-slate-600 hover:text-blue-600";

  const iconButton = isDark
    ? "border-white/10 bg-white/[0.04] text-slate-200 hover:border-purple-400/50 hover:bg-purple-500/10"
    : "border-slate-200 bg-slate-100 text-slate-700 hover:border-blue-400 hover:bg-blue-50";

  const mobileBg = isDark
    ? "border-white/10 bg-[#090d1c]"
    : "border-slate-200 bg-white";

  const navLinkClass = `relative py-2 text-sm font-medium transition-colors duration-200 ${linkColor} after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full`;

  // NAVIGATION HANDLER
  const handleNavigation = (href) => {
    closeMenu();

    if (href.includes("#")) {
      navigate(href);
      return;
    }

    if (href === location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ACTIVE NAVIGATION LINK
  const isActive = (href) => {
    if (href.includes("#")) {
      const [pathname, hash] = href.split("#");

      return (
        location.pathname === pathname &&
        location.hash === `#${hash}`
      );
    }

    return location.pathname === href && !location.hash;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-colors duration-300 ${navBg}`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* BRAND */}
        <Link
          to="/"
          onClick={() => {
            closeMenu();

            if (location.pathname === "/" && !location.hash) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="SAMTHECS home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <Code2 size={23} className="text-white" />
          </span>

          <span
            className={`text-base font-black tracking-[0.18em] sm:text-lg ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            SAMTHECS<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavigation(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`${navLinkClass} ${
                isActive(link.href)
                  ? "!text-cyan-400 after:!w-full"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:rotate-6 hover:scale-105 ${iconButton}`}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* DESKTOP WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30 sm:inline-flex"
          >
            Let's Talk
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${iconButton}`}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`border-t px-5 pb-5 pt-3 sm:px-8 ${mobileBg}`}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => handleNavigation(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block border-b py-3.5 text-sm font-medium transition-colors last:border-b-0 ${
                  isDark
                    ? "border-white/[0.06]"
                    : "border-slate-100"
                } ${
                  isActive(link.href)
                    ? "text-cyan-400"
                    : linkColor
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              className="group mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Let's Talk
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
