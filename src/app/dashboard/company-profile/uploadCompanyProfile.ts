"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function uploadCompanyProfile(formData: FormData) {
  const file = formData.get("companyProfile") as File | null;

  if (!file) {
    return { success: false, message: "No file uploaded" };
  }

  if (file.type !== "application/pdf") {
    return { success: false, message: "Only PDF files are allowed" };
  }

  // Ensure directory exists
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  // File data
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = "company-profile.pdf"; // static name
  const filepath = path.join(uploadDir, filename);

  await writeFile(filepath, buffer);

  return {
    success: true,
    message: "Company profile uploaded successfully",
    url: `/uploads/${filename}`,
  };
}
