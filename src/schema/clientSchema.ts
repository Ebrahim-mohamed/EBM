import * as z from "zod";
export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "nameEmptyError" })
    .min(3, { message: "nameError" }),
  phone: z
    .string()
    .nonempty({ message: "phoneEmptyError" })
    .min(10, { message: "phoneError" }),
  message: z
    .string()
    .nonempty({ message: "messageEmptyError" })
    .min(50, { message: "messageError" }),
  email: z
    .email({ message: "emailError" })
    .nonempty({ message: "emailEmptyError" }),
});
export type contactFormType = z.infer<typeof contactFormSchema>;
