"use client";

import { useEffect, useState } from "react";

const API = "https://api.ebmksa.com";

type StoryImage = {
  filename: string;
  url: string;
};

export default function StorySectionImagesPage() {
  const [images, setImages] = useState<StoryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function loadImages() {
    try {
      const res = await fetch(`${API}/story-images-api`, { cache: "no-store" });
      const data = await res.json();
      setImages(data.images || []);
    } catch (err) {
      setIsError(true);
      setMessage("Failed to load images");
    }
  }

  useEffect(() => {
    loadImages();
  }, []);

  async function uploadFiles(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${API}/story-images-api`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage("Images uploaded successfully!");
        form.reset();
        loadImages();
      } else {
        setIsError(true);
        setMessage(data.error || "Upload failed");
      }
    } catch (err) {
      setLoading(false);
      setIsError(true);
      setMessage("Upload failed");
    }
  }

  async function deleteImage(filename: string) {
    if (!confirm("Delete this image?")) return;

    setMessage("");
    setIsError(false);

    try {
      const res = await fetch(`${API}/story-images-api/${filename}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Image deleted");
        loadImages();
      } else {
        setIsError(true);
        setMessage(data.error || "Delete failed");
      }
    } catch (err) {
      setIsError(true);
      setMessage("Delete failed");
    }
  }

  return (
    <div className="p-10 flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Story Section Images</h1>

      <p className="text-gray-600">
        These images appear as a slider in the Story section on the home page.
        While there are no images here, the default image is shown.
      </p>

      {/* Upload Form */}
      <form onSubmit={uploadFiles} className="flex flex-col gap-4 w-[400px]">
        <input
          type="file"
          name="storyImages"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          required
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Images"}
        </button>

        {message && (
          <p
            className={`font-medium ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      {/* Current Images */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          Current Images ({images.length})
        </h2>

        {images.length === 0 ? (
          <p className="text-gray-500">
            No images uploaded yet. The default image is being used.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.filename}
                className="flex flex-col gap-2 border rounded-lg p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${API}${image.url}`}
                  alt={image.filename}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => deleteImage(image.filename)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}