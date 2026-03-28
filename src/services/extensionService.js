const BASE_URL = "http://localhost:3001/extensions";

export const getExtensions = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error("Failed to fetch extensions");

  return res.json();
};

export const toggleExtension = async (id, isActive) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isActive }),
  });

  if (!res.ok) throw new Error("Failed to update extensions");

  return res.json();
};

export const removeExtension = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete extension");
};
