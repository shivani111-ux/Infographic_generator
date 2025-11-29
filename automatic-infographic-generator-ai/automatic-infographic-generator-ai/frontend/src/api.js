const API_URL = import.meta.env.VITE_API_URL;

export async function uploadFile(file, wantAI = false) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("want_ai", wantAI);

  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");
  return await res.json();
}
