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

type ProjectFormProps = {
  defaultValues?: Partial<projectFormType>;
  onSubmit?: (formData: FormData) => void | Promise<void>;
};

export function ProjectForm({ defaultValues, onSubmit }: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<projectFormType>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  const watchImage = watch("projectImage");

  function internalSubmit(data: projectFormType) {
    const formData = new FormData();
    formData.append("nameEN", data.nameEN);
    formData.append("nameAR", data.nameAR);
    formData.append("desEN", data.desEN);
    formData.append("desAR", data.desAR);

    if (data.projectImage && data.projectImage instanceof File) {
      formData.append("projectImage", data.projectImage);
    }

    if (onSubmit) {
      onSubmit(formData);
    } else {
      // default behavior: add project
      fetch("http://72.61.187.71:3001/projects", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(() => alert("Project added successfully!"))
        .catch(() => alert("Failed to add project"));
    }
  }

  return (
    <form
      className="flex flex-col gap-[1.5rem] justify-center w-full"
      onSubmit={handleSubmit(internalSubmit)}
    >
      {inputs.map((input) => (
        <ProjectInput
          key={input.name}
          label={input.name}
          place={input.name}
          type={input.name === "Project image" ? "file" : "text"}
          errorMessage={errors[input.nameInSchema]?.message}
          {...register(input.nameInSchema)}
        />
      ))}
      {watchImage && watchImage instanceof File && (
        <img
          src={URL.createObjectURL(watchImage)}
          className="w-32 h-32 object-cover rounded-md"
          alt="preview"
        />
      )}
      <button
        type="submit"
        className="cursor-pointer px-[1rem] py-[0.5rem] bg-[#4082BF] text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center"
      >
        Submit
      </button>
    </form>
  );
}
