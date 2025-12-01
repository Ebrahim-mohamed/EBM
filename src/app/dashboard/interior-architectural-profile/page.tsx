"use client";

import Link from "next/link";
import { useState } from "react";

export default function CompanyProfilePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function uploadFile(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const res = await fetch("https://api.ebmksa.com/inter-company-profile", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("Company Profile uploaded successfully!");
      form.reset();
    } else {
      setMessage(data.error || "Upload failed");
    }
  }

  return (
    <div className="p-10 flex flex-col gap-8">
      <h1 className="text-3xl font-bold">
        Interior Architectural Company Profile
      </h1>

      {/* Download Button */}
      <div>
        <Link
          href="https://api.ebmksa.com/inter-company-profile.pdf"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          target="_blank"
          download
        >
          Download Current interior architectural Company Profile
        </Link>
      </div>

      {/* Upload Form */}
      <form onSubmit={uploadFile} className="flex flex-col gap-4 w-[600px]">
        <input
          type="file"
          name="interCompanyProfile"
          accept="application/pdf"
          required
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 w-fit rounded-lg disabled:opacity-50"
        >
          {loading
            ? "Uploading..."
            : "Upload New interior architectural Company Profile"}
        </button>

        {message && <p className="text-green-600 font-medium">{message}</p>}
      </form>
    </div>
  );
}
