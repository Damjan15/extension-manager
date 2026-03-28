import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full px-4 pt-6 pb-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl bg-neutral-0 dark:bg-neutral-800 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-8">
          {theme === "dark" ? (
            <img src="/images/logo-dark.svg" alt="Extensions Logo" />
          ) : (
            <img src="/images/logo.svg" alt="Extensions Logo" />
          )}
        </div>

        {/* Theme Toggle Button */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 cursor-pointer dark:bg-neutral-700"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <img src="/images/icon-sun.svg" className="w-5 h-5" />
          ) : (
            <img src="/images/icon-moon.svg" className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
