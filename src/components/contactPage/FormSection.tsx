import { contactFormSchema, contactFormType } from "@/schema/clientSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { useState } from "react";

const inputs = ["name", "email", "phone", "message"] as const;

export function FormSection({ isInter }: { isInter?: boolean }) {
  const formT = useTranslations("contactPage.formSection");
  const [isSubmitting, setIsSubmitting] = useState(false); // <--- track submission

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  async function contactSubmit(data: contactFormType) {
    setIsSubmitting(true); // disable button
    try {
      const res = await fetch(
        `https://api.ebmksa.com/${isInter ? "contact-for-inter" : "contact"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        reset(); // clear inputs
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false); // enable button again
    }
  }

  return (
    <form
      className="flex flex-col gap-[1rem] justify-center w-[50%] max-[950px]:w-[70%] max-[550px]:w-[80%]"
      onSubmit={handleSubmit(contactSubmit)}
    >
      {inputs.map((input) => (
        <Input
          key={input}
          label={formT(`${input}Label`)}
          place={formT(`${input}Placeholder`)}
          errorMessage={errors[input] && formT(`${errors[input].message}`)}
          type={
            input === "message"
              ? "textarea"
              : input === "email"
              ? "email"
              : "text"
          }
          {...register(input)}
        />
      ))}
      <button
        type="submit"
        disabled={isSubmitting} // <--- disable while submitting
        className={`cursor-pointer px-[1rem] py-[0.5rem] text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center ${
          isInter ? " mb-[1rem] " : ""
        } ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#4082BF]"}`}
      >
        {isSubmitting ? "Sending..." : formT("button")}
      </button>
    </form>
  );
}
