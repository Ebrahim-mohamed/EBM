import * as z from "zod";

export const projectSchema = z.object({
  nameEN: z
    .string()
    .nonempty({ message: "Please enter the project name in English" })
    .min(8, { message: "Project name must be at least 8 characters" }),
  nameAR: z
    .string()
    .nonempty({ message: "Please enter the project name in Arabic" })
    .min(8, { message: "Project name must be at least 8 characters" }),
  desEN: z
    .string()
    .nonempty({ message: "Please enter the project description in English" })
    .min(3, { message: "Project description must be at least 3 characters" }),
  desAR: z
    .string()
    .nonempty({ message: "Please enter the project description in Arabic" })
    .min(3, { message: "Project description must be at least 3 characters" }),
  projectImage: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length === 1,
      {
        message: "Please select an image file",
      }
    )
    .refine(
      (files) => {
        const file = files?.[0];
        return file && file.size <= 5 * 1024 * 1024; // 5MB
      },
      { message: "File size must be less than 5MB" }
    )
    .refine(
      (files) => {
        const file = files?.[0];
        return (
          file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        );
      },
      { message: "Only JPEG, PNG, and WebP images are allowed" }
    ),
});

export type projectFormType = z.infer<typeof projectSchema>;
