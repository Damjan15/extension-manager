import Toggle from "./Toggle";

const ExtensionCard = ({ extension, onToggle, onRemove }) => {
  const { id, name, description, logo, isActive } = extension;

  return (
    <div
      className="
      flex flex-col justify-between p-5 rounded-2xl
      bg-neutral-0 dark:bg-neutral-800
      border border-neutral-200 dark:border-transparent
      h-full
    "
    >
      {/* Top — Logo + Info */}
      <div className="flex items-start gap-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-14 h-14 rounded-xl object-contain"
        />
        <div className="flex flex-col gap-1 ">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-0">
            {name}
          </h3>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom — Remove + Toggle */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => onRemove(id)}
          className="
            px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer
            border border-neutral-300 dark:border-neutral-600
            text-neutral-900 dark:text-neutral-0
            transition-colors duration-200
            hover:bg-neutral-100 dark:hover:bg-neutral-700
            focus:outline-none focus:ring-2 focus:ring-red-400
          "
        >
          Remove
        </button>

        <Toggle
          isActive={isActive}
          onToggle={() => onToggle(id, isActive)}
          extensionName={name}
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
