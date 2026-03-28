import Header from "./components/layout/Header";
import ExtensionGrid from "./components/ui/ExtensionGrid";
import { useExtensions } from "./hooks/useExtensions";

function App() {
  const { extensions, loading, error, handleToggle, handleRemove } =
    useExtensions();

  return (
    <>
      <Header />

      {loading && (
        <p className="text-center mt-10 text-neutral-600 dark:text-neutral-300">
          Loading extensions...
        </p>
      )}

      {error && (
        <p className="text-center mt-10 text-red-500">Error: {error}</p>
      )}

      {!loading && !error && (
        <ExtensionGrid
          extensions={extensions}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      )}
    </>
  );
}

export default App;
