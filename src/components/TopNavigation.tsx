import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/experience", label: "EXPERIENCE" },
  { path: "/education", label: "EDUCATION & CERTIFICATIONS" },
  { path: "/misc", label: "MISC" },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `font-medium transition-colors duration-200 ${
    isActive
      ? "text-brand-light-text dark:text-amber-400"
      : "text-brand-light-body hover:text-brand-light-text dark:text-slate-500 dark:hover:text-slate-300"
  }`;

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const desktopMenuRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const updateHamburgerVisibility = () => {
      const nav = navRef.current;
      const desktopMenu = desktopMenuRef.current;

      if (!nav || !desktopMenu) {
        return;
      }

      const navStyles = window.getComputedStyle(nav);
      const navWidth = nav.clientWidth;
      const paddingLeft = Number.parseFloat(navStyles.paddingLeft) || 0;
      const paddingRight = Number.parseFloat(navStyles.paddingRight) || 0;
      const availableWidth = navWidth - paddingLeft - paddingRight;
      const themeToggleWidth = 64;
      const spacingBetweenSections = 16;
      const requiredWidth =
        desktopMenu.scrollWidth + themeToggleWidth + spacingBetweenSections;

      setShowHamburger(requiredWidth > availableWidth);
    };

    updateHamburgerVisibility();

    window.addEventListener("resize", updateHamburgerVisibility);
    return () => window.removeEventListener("resize", updateHamburgerVisibility);
  }, []);

  useEffect(() => {
    if (!showHamburger) {
      setIsMenuOpen(false);
    }
  }, [showHamburger]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-brand-light-page/95 shadow-sm shadow-black/10 backdrop-blur dark:bg-black">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-[1100px] items-center justify-between"
        style={{ padding: "1.9rem 2.5rem" }}
      >
        <ul
          ref={desktopMenuRef}
          className="flex items-center"
          style={{ gap: "3rem", visibility: showHamburger ? "hidden" : "visible" }}
          aria-hidden={showHamburger}
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={linkClasses}
                style={{ fontSize: "1.5rem", letterSpacing: "0.12em" }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          {showHamburger && (
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-light-border bg-brand-light-surface text-brand-light-text transition-all duration-300 hover:bg-brand-light-muted dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="h-8 w-8" strokeWidth={2} />
              ) : (
                <Menu aria-hidden="true" className="h-8 w-8" strokeWidth={2} />
              )}
            </button>
          )}
        </div>
      </nav>

      <div className="h-px w-full bg-brand-light-border dark:bg-slate-700" />

      {showHamburger && isMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="border-b border-brand-light-border bg-brand-light-page dark:border-slate-800 dark:bg-black"
        >
          <div className="mx-auto max-w-[1100px] px-10 py-8">
            <ul className="grid gap-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`${linkClasses} block rounded-xl px-5 py-4 hover:bg-brand-light-surface dark:hover:bg-slate-950`}
                    style={{ fontSize: "1.35rem", letterSpacing: "0.1em" }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavigation;
