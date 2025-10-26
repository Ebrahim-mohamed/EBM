import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProjectInput } from "./ProjectsInput";
import { projectFormType, projectSchema } from "@/schema/projectSchema";

const inputs = [
  { name: "Project name in english", nameInSchema: "nameEN" },
  { name: "Project name in arabic", nameInSchema: "nameAR" },
  { name: "Project description in english", nameInSchema: "desEN" },
  { name: "Project description in arabic", nameInSchema: "desAR" },
  { name: "Project image", nameInSchema: "projectImage" },
] as const;
export function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<projectFormType>({
    resolver: zodResolver(projectSchema),
  });
  function contactSubmit(data: projectFormType) {
    console.log(data);
  }
  return (
    <form
      className="flex flex-col gap-[1.5rem] justify-center w-full "
      onSubmit={handleSubmit(contactSubmit)}
    >
      {inputs.map((input) => (
        <ProjectInput
          key={input.name}
          label={input.name}
          place={input.name}
          errorMessage={
            errors[input.nameInSchema]
              ? errors[input.nameInSchema]?.message
              : undefined
          }
          type={input.name === "Project image" ? "file" : "text"}
          {...register(input.nameInSchema)}
        />
      ))}
      <button
        type="submit"
        className="cursor-pointer px-[1rem] py-[0.5rem] bg-[#4082BF] text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center"
      >
        Submit
      </button>
    </form>
  );
}
