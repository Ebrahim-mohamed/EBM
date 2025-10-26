import * as z from "zod";
export const projectSchema = z.object({
  nameEN: z
    .string()
    .nonempty({ message: "please enter the project name in english" })
    .min(8, { message: "project name must be at least 8 characters" }),
  nameAR: z
    .string()
    .nonempty({ message: "please enter the project name in arabic" })
    .min(8, { message: "project name must be at least 8 characters" }),
  desEN: z
    .string()
    .nonempty({ message: "please enter the project description in english" })
    .min(3, { message: "project description must be at least 8 characters" }),
  desAR: z
    .string()
    .nonempty({ message: "please enter the project description in arabic" })
    .min(3, { message: "project description must be at least 8 characters" }),
  projectImage: z.file(),
});
export type projectFormType = z.infer<typeof projectSchema>;
