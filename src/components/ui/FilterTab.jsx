const FilterTab = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full text-sm font-medium cursor-pointer
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-red-400
        ${
          isActive
            ? "bg-red-500 text-neutral-0"
            : `bg-neutral-0 dark:bg-neutral-700 
             text-neutral-900 dark:text-neutral-0
             border border-neutral-200 dark:border-neutral-600
             hover:bg-neutral-100 dark:hover:bg-neutral-600`
        }
      `}
    >
      {label}
    </button>
  );
};

export default FilterTab;
