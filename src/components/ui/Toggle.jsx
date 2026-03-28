const Toggle = ({ isActive, onToggle, extensionName }) => {
  return (
    <button
      role="switch"
      aria-checked={isActive}
      aria-label={`Toggle ${extensionName}`}
      onClick={onToggle}
      className={`
        relative w-12 h-6 rounded-full cursor-pointer
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-red-400
        ${
          isActive
            ? "bg-red-500 hover:bg-red-700"
            : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
        }
      `}
    >
      <span
        className={`
          absolute top-1 w-4 h-4 bg-neutral-0 rounded-full
          transition-all duration-200
          ${isActive ? "left-7" : "left-1"}
        `}
      />
    </button>
  );
};

export default Toggle;
