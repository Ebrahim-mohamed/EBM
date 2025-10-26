import { contactFormSchema, contactFormType } from "@/schema/clientSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Input } from "./Input";

const inputs = ["name", "email", "phone", "message"] as const;
export function FormSection() {
  const formT = useTranslations("contactPage.formSection");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormType>({
    resolver: zodResolver(contactFormSchema),
  });
  function contactSubmit(data: contactFormType) {
    console.log(data);
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
        className="cursor-pointer px-[1rem] py-[0.5rem] bg-[#4082BF] text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center"
      >
        {formT("button")}
      </button>
    </form>
  );
}
