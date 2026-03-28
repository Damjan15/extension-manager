import { useState } from "react";
import ExtensionCard from "./ExtensionCard";
import FilterTab from "./FilterTab";

const FILTERS = ["All", "Active", "Inactive"];

const ExtensionGrid = ({ extensions, onToggle, onRemove }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredExtensions = extensions.filter((ext) => {
    if (activeFilter === "Active") return ext.isActive;
    if (activeFilter === "Inactive") return !ext.isActive;

    return true;
  });

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title & Filter Tab */}
      <div className="flex flex-col items-center md:flex-row md:justify-between mb-8 gap-4">
        <h2 className="font-sans font-bold text-neutral-900 dark:text-neutral-0 text-[34px]">
          Extensions List
        </h2>

        <div className="flex items-center gap-2">
          {FILTERS.map((filter) => (
            <FilterTab
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {filteredExtensions.map((extension) => (
          <ExtensionCard
            key={extension.id}
            extension={extension}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
};

export default ExtensionGrid;
