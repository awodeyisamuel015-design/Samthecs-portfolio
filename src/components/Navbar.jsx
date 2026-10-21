import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const whatsappLink =
  "https://wa.me/2349127303047?text=Hello%20SAMTHECS!%20I%20want%20to%20discuss%20a%20project.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const location = useLocation();
  const isDark = theme === "dark";

  useEffect(() => {
    const saved = localStorage.getItem("samthecs-theme");
    const initial = saved === "light" ? "light" : "dark";

    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    document.documentElement.style.colorScheme = initial;
  }, []);

  useEffect(() => {
    setOpen(false);

    if (location.hash && location.pathname === "/") {
      requestAnimationFrame(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      });
    } else if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";

    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("samthecs-theme", next);
  };

  const iconButton =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full " +
    "border border-[var(--border-color)] bg-[var(--surface-bg)] " +
    "text-[var(--heading-color)]";

  const active = (href) => location.pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-2 px-3 sm:h-[72px] sm:px-5 md:px-8 lg:px-10"
      >
        {/* LOGO */}
        <Link to="/" onClick={() => setOpen(false)} className="min-w-0 shrink">
          <img
            src="/images/samthecs-logo.png"
            alt="SAMTHECS"
            className="block h-9 w-25 max-w-[105px] object-contain sm:h-11 sm:max-w-[145px] lg:h-12 lg:max-w-[165px]"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`whitespace-nowrap text-sm transition-colors hover:text-[var(--accent-color)] ${
                active(link.href)
                  ? "font-semibold text-[var(--accent-color)]"
                  : "text-[var(--body-color)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={iconButton}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-[var(--accent-color)] px-4 py-3 text-sm font-semibold text-[var(--accent-text)] xl:inline-flex"
          >
            Let's Talk <ArrowRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`xl:hidden ${iconButton}`}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="max-h-[calc(100dvh-68px)] w-full overflow-y-auto border-t border-[var(--border-color)] bg-[var(--surface-bg)] px-4 pb-5 sm:px-6 xl:hidden">
          <div className="mx-auto w-full max-w-lg">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center justify-between border-b border-[var(--border-color)] py-3 text-sm ${
                  active(link.href)
                    ? "font-semibold text-[var(--accent-color)]"
                    : "text-[var(--body-color)]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent-color)] px-4 py-3 text-sm font-semibold text-[var(--accent-text)]"
            >
              Let's Talk <ArrowRight size={16} />
            </a>

            <p className="mt-4 text-center text-xs text-[var(--body-color)]">
              SAMTHECS · Digital Creator
            </p>
          </div>
        </div>
      )}
    </header>
  );
}