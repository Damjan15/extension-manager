import { useCallback, useEffect, useState } from "react";
import {
  getExtensions,
  removeExtension,
  toggleExtension,
} from "../services/extensionService";

export const useExtensions = () => {
  const [extensions, setExtensions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExtensions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getExtensions();
      setExtensions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExtensions();
  }, [fetchExtensions]);

  const handleToggle = async (id, currentState) => {
    try {
      await toggleExtension(id, !currentState);
      setExtensions((prev) =>
        prev.map((ext) =>
          ext.id === id ? { ...ext, isActive: !currentState } : ext,
        ),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeExtension(id);
      setExtensions((prev) => prev.filter((ext) => ext.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { extensions, loading, error, handleToggle, handleRemove };
};
